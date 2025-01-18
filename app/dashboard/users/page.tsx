"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from "sonner"
import { ConfirmationModal } from '@/components/confirmation-modal'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface User {
  id: string
  email: string
  name: string | null
  createdAt: string
  role: string
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'delete' | 'admin' | null;
    user: User | null;
  }>({
    isOpen: false,
    type: null,
    user: null,
  })

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/users')
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setUsers(Array.isArray(data) ? data : [])
    } catch (error) {
      toast.error("Failed to load users")
    } finally {
      setLoading(false)
    }
  }

  const handleToggleAdmin = async (user: User) => {
    const isAdmin = user.role === "ADMIN"
    try {
      const res = await fetch(`/api/users/toggle-admin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, setAdmin: !isAdmin })
      })
      
      if (!res.ok) throw new Error()
      
      setUsers(users.map(u => 
        u.id === user.id ? { ...u, role: isAdmin ? "USER" : "ADMIN" } : u
      ))
      toast.success(isAdmin ? "Admin access removed" : "Admin access granted")
    } catch {
      toast.error("Failed to update user role")
    }
    setModalState({ isOpen: false, type: null, user: null })
  }

  const handleDeleteUser = async (user: User) => {
    try {
      const res = await fetch(`/api/users/${user.id}`, {
        method: 'DELETE',
      })
      
      if (!res.ok) throw new Error()
      
      setUsers(users.filter(u => u.id !== user.id))
      toast.success("User deleted successfully")
    } catch {
      toast.error("Failed to delete user")
    }
    setModalState({ isOpen: false, type: null, user: null })
  }

  if (loading) return <div>Loading...</div>

  return (
    <>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Users</h3>
          <p className="text-sm text-muted-foreground">
            Manage user roles and access
          </p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                <TableCell className="space-x-2">
                  <Button 
                    variant={user.role === "ADMIN" ? "destructive" : "outline"}
                    size="sm"
                    onClick={() => setModalState({ 
                      isOpen: true, 
                      type: 'admin', 
                      user 
                    })}
                  >
                    {user.role === "ADMIN" ? "Remove Admin" : "Make Admin"}
                  </Button>
                  <Button 
                    variant="destructive"
                    size="sm"
                    onClick={() => setModalState({ 
                      isOpen: true, 
                      type: 'delete', 
                      user 
                    })}
                    disabled={user.role === "ADMIN"}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <ConfirmationModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false, type: null, user: null })}
        onConfirm={() => {
          if (!modalState.user) return
          if (modalState.type === 'admin') {
            handleToggleAdmin(modalState.user)
          } else if (modalState.type === 'delete') {
            handleDeleteUser(modalState.user)
          }
        }}
        title={modalState.type === 'admin' 
          ? modalState.user?.role === "ADMIN" 
            ? "Remove admin access?" 
            : "Grant admin access?"
          : "Delete user?"
        }
        description={modalState.type === 'admin'
          ? modalState.user?.role === "ADMIN"
            ? `Remove admin privileges from ${modalState.user?.email}?`
            : `Make ${modalState.user?.email} an admin?`
          : "This action cannot be undone."
        }
        confirmText={modalState.type === 'admin'
          ? modalState.user?.role === "ADMIN" 
            ? "Remove Admin" 
            : "Make Admin"
          : "Delete"
        }
        confirmVariant={modalState.type === 'delete' || modalState.user?.role === "ADMIN" ? "destructive" : "default"}
      />
    </>
  )
} 