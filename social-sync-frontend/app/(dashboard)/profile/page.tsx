"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Camera, Edit, Twitter, Instagram, Linkedin, Facebook, Youtube, LinkIcon } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <motion.div className="space-y-6" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div className="flex items-center justify-between" variants={itemVariants}>
        <h1 className="text-3xl font-bold">Profile</h1>
        <Button className="gradient-bg-1" onClick={() => setIsEditing(!isEditing)}>
          <Edit className="h-4 w-4 mr-2" />
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <Avatar className="h-32 w-32 border-4 border-background">
                    <AvatarFallback className="text-2xl">JD</AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button size="icon" className="absolute bottom-0 right-0 rounded-full gradient-bg-1">
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold">John Doe</h2>
                  <p className="text-muted-foreground">Social Media Manager</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    Pro Plan
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Verified
                  </Badge>
                </div>
              </div>

              <Separator className="md:hidden" />

              <div className="flex-1 space-y-6">
                <Tabs defaultValue="info">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="info">Personal Info</TabsTrigger>
                    <TabsTrigger value="accounts">Connected Accounts</TabsTrigger>
                    <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                  </TabsList>

                  <TabsContent value="info" className="space-y-4 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        {isEditing ? (
                          <Input id="fullName" defaultValue="John Doe" />
                        ) : (
                          <p className="text-sm py-2">John Doe</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        {isEditing ? (
                          <Input id="email" type="email" defaultValue="john.doe@example.com" />
                        ) : (
                          <p className="text-sm py-2">john.doe@example.com</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        {isEditing ? (
                          <Input id="phone" defaultValue="+1 (555) 123-4567" />
                        ) : (
                          <p className="text-sm py-2">+1 (555) 123-4567</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        {isEditing ? (
                          <Input id="location" defaultValue="San Francisco, CA" />
                        ) : (
                          <p className="text-sm py-2">San Francisco, CA</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      {isEditing ? (
                        <textarea
                          id="bio"
                          className="w-full min-h-[100px] p-2 rounded-md border border-input bg-background"
                          defaultValue="Social media manager with 5+ years of experience managing accounts across multiple platforms. Specializing in growth strategies and engagement optimization."
                        />
                      ) : (
                        <p className="text-sm py-2">
                          Social media manager with 5+ years of experience managing accounts across multiple platforms.
                          Specializing in growth strategies and engagement optimization.
                        </p>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="accounts" className="space-y-4 pt-4">
                    <div className="space-y-4">
                      <ConnectedAccount
                        platform="Twitter"
                        username="@johndoe"
                        icon={Twitter}
                        color="#1DA1F2"
                        isConnected={true}
                        isEditing={isEditing}
                      />
                      <ConnectedAccount
                        platform="Instagram"
                        username="@johndoe"
                        icon={Instagram}
                        color="#E1306C"
                        isConnected={true}
                        isEditing={isEditing}
                      />
                      <ConnectedAccount
                        platform="LinkedIn"
                        username="John Doe"
                        icon={Linkedin}
                        color="#0077B5"
                        isConnected={true}
                        isEditing={isEditing}
                      />
                      <ConnectedAccount
                        platform="Facebook"
                        username="John Doe"
                        icon={Facebook}
                        color="#1877F2"
                        isConnected={false}
                        isEditing={isEditing}
                      />
                      <ConnectedAccount
                        platform="YouTube"
                        username=""
                        icon={Youtube}
                        color="#FF0000"
                        isConnected={false}
                        isEditing={isEditing}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="activity" className="space-y-4 pt-4">
                    <div className="space-y-4">
                      <ActivityItem
                        title="Updated Twitter profile"
                        description="Changed profile picture and updated bio"
                        time="2 hours ago"
                        icon={Twitter}
                        color="#1DA1F2"
                      />
                      <ActivityItem
                        title="Posted on Instagram"
                        description="Shared a new product announcement"
                        time="Yesterday"
                        icon={Instagram}
                        color="#E1306C"
                      />
                      <ActivityItem
                        title="Connected LinkedIn account"
                        description="Added LinkedIn to your connected accounts"
                        time="3 days ago"
                        icon={Linkedin}
                        color="#0077B5"
                      />
                      <ActivityItem
                        title="Generated monthly report"
                        description="Created and downloaded the March 2025 performance report"
                        time="1 week ago"
                        icon={LinkIcon}
                        color="#6366F1"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Account Statistics</CardTitle>
            <CardDescription>Overview of your account performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard title="Total Followers" value="24,532" change="+12%" isPositive={true} />
              <StatCard title="Engagement Rate" value="3.2%" change="-0.5%" isPositive={false} />
              <StatCard title="Posts Created" value="156" change="+8%" isPositive={true} />
              <StatCard title="Avg. Response Time" value="45 min" change="-15%" isPositive={true} />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

function ConnectedAccount({
  platform,
  username,
  icon: Icon,
  color,
  isConnected,
  isEditing,
}: {
  platform: string
  username: string
  icon: any
  color: string
  isConnected: boolean
  isEditing: boolean
}) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full" style={{ backgroundColor: `${color}20` }}>
          <Icon className="h-5 w-5" style={{ color }} />
        </div>
        <div>
          <h3 className="font-medium">{platform}</h3>
          {isConnected ? (
            <p className="text-sm text-muted-foreground">{username}</p>
          ) : (
            <p className="text-sm text-muted-foreground">Not connected</p>
          )}
        </div>
      </div>
      {isEditing && (
        <Button variant={isConnected ? "outline" : "default"} className={!isConnected ? "gradient-bg-1" : ""}>
          {isConnected ? "Disconnect" : "Connect"}
        </Button>
      )}
    </div>
  )
}

function ActivityItem({
  title,
  description,
  time,
  icon: Icon,
  color,
}: {
  title: string
  description: string
  time: string
  icon: any
  color: string
}) {
  return (
    <div className="flex items-start gap-3 p-3 border rounded-lg">
      <div className="p-2 rounded-full" style={{ backgroundColor: `${color}20` }}>
        <Icon className="h-5 w-5" style={{ color }} />
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground mt-1">{time}</p>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  change,
  isPositive,
}: {
  title: string
  value: string
  change: string
  isPositive: boolean
}) {
  return (
    <div className="p-4 border rounded-lg">
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <div className="flex items-center gap-2 mt-1">
        <p className="text-2xl font-bold">{value}</p>
        <span className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>{change}</span>
      </div>
    </div>
  )
}

