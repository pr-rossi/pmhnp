"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from "sonner"
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

  const toggleAdmin = async (id: string, email: string, currentRole: string) => {
    const isAdmin = currentRole === "ADMIN"
    const action = isAdmin ? "remove admin from" : "make admin"

    toast.custom((t) => (
      <div className="p-4 bg-background border rounded-lg">
        <p className="mb-4">{`${action} ${email}?`}</p>
        <div className="flex justify-end gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => toast.dismiss(t)}
          >
            Cancel
          </Button>
          <Button 
            size="sm" 
            variant={isAdmin ? "destructive" : "default"} 
            onClick={async () => {
              toast.dismiss(t)
              
              try {
                const res = await fetch(`/api/users/toggle-admin`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ userId: id, setAdmin: !isAdmin })
                })
                
                if (!res.ok) throw new Error()
                
                setUsers(users.map(user => 
                  user.id === id ? { ...user, role: isAdmin ? "USER" : "ADMIN" } : user
                ))
                toast.success(`User ${isAdmin ? 'removed from' : 'updated to'} admin successfully`)
              } catch {
                toast.error('Failed to update user')
              }
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    ), { duration: Infinity })
  }

  const deleteUser = async (id: string) => {
    toast.custom((t) => (
      <div className="p-4 bg-background border rounded-lg">
        <p className="mb-4">Are you sure you want to delete this user?</p>
        <div className="flex justify-end gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => toast.dismiss(t)}
          >
            Cancel
          </Button>
          <Button 
            size="sm" 
            variant="destructive" 
            onClick={async () => {
              toast.dismiss(t)
              
              try {
                const res = await fetch(`/api/users/${id}`, {
                  method: 'DELETE',
                })
                
                if (!res.ok) throw new Error()
                
                setUsers(users.filter(user => user.id !== id))
                toast.success('User deleted successfully')
              } catch {
                toast.error('Failed to delete user')
              }
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    ), { duration: Infinity })
  }

  if (loading) return <div>Loading...</div>

  return (
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
                  onClick={() => toggleAdmin(user.id, user.email, user.role)}
                >
                  {user.role === "ADMIN" ? "Remove Admin" : "Make Admin"}
                </Button>
                <Button 
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteUser(user.id)}
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
  )
} 