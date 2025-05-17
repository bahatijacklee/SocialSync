"use client"

import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { api } from "@/lib/api"

export default function ProfilePage() {
  const { user, profile, refreshProfile } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    firstName: profile?.firstName || "",
    lastName: profile?.lastName || "",
    email: profile?.email || "",
    // Add more fields as needed
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  if (!profile) {
    return <div className="flex justify-center items-center h-64 text-muted-foreground">No profile data found.</div>
  }

  const initials = `${profile.firstName[0]}${profile.lastName[0]}`
  // Use profile.profilePicture if it exists, otherwise undefined
  const profilePicture = (profile as any).profilePicture

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleEdit = () => setIsEditing(true)
  const handleCancel = () => {
    setIsEditing(false)
    setFormData({
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
    })
    setError("")
    setSuccess("")
  }

  const handleSave = async () => {
    setIsSaving(true)
    setError("")
    setSuccess("")
    try {
      if (!user?.token) throw new Error("Not authenticated")
      await api.updateProfile(user.token, formData)
      setIsEditing(false)
      setSuccess("Profile updated successfully!")
      await refreshProfile()
    } catch (err: any) {
      setError(err.message || "Failed to update profile")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto py-10">
      <Card>
        <CardHeader className="flex flex-col items-center gap-2">
          {profilePicture ? (
            <img
              src={profilePicture}
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover border"
            />
          ) : (
            <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-3xl font-bold text-primary-foreground border">
              {initials}
            </div>
          )}
          <CardTitle className="mt-2 text-center">
            {profile.firstName} {profile.lastName}
          </CardTitle>
          <div className="text-muted-foreground text-sm">{profile.email}</div>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={e => { e.preventDefault(); handleSave(); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1">First Name</label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={!isEditing || isSaving}
                />
              </div>
              <div>
                <label className="block text-xs mb-1">Last Name</label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={!isEditing || isSaving}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs mb-1">Email</label>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {success && <div className="text-green-600 text-sm">{success}</div>}
            <div className="flex gap-2 justify-end pt-2">
              {isEditing ? (
                <>
                  <Button variant="outline" type="button" onClick={handleCancel} disabled={isSaving}>Cancel</Button>
                  <Button type="submit" disabled={isSaving}>{isSaving ? "Saving..." : "Save"}</Button>
                </>
              ) : (
                <Button type="button" onClick={handleEdit}>Edit Profile</Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 