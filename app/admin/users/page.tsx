"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { toast } from "sonner"

interface User {
  id: string
  email: string
  name: string | null
  createdAt: string
  role: string
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  async function deleteUser(id: string) {
    if (!confirm('Are you sure you want to delete this user?')) return

    const res = await fetch(`/api/users/${id}`, {
      method: 'DELETE',
    })

    if (res.ok) {
      setUsers(users.filter(user => user.id !== id))
    }
  }

  async function makeAdmin(id: string, email: string) {
    if (!confirm(`Make ${email} an admin?`)) return

    const res = await fetch(`/api/users/${id}/make-admin`, {
      method: 'PATCH',
    })

    if (res.ok) {
      setUsers(users.map(user => 
        user.id === id ? { ...user, role: "ADMIN" } : user
      ))
      toast.success("User updated to admin")
    } else {
      toast.error("Failed to update user")
    }
  }

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
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
                {user.role !== "ADMIN" && (
                  <Button 
                    variant="outline"
                    onClick={() => makeAdmin(user.id, user.email)}
                  >
                    Make Admin
                  </Button>
                )}
                <Button 
                  variant="destructive" 
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