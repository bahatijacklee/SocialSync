"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Bell, Lock, User, Palette, ChevronLeft } from "lucide-react"
import { useTheme } from "next-themes"
import { ThemeIndicator } from "@/components/theme-indicator"
import { useMobile } from "@/hooks/use-mobile"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")
  const { theme, setTheme } = useTheme()
  const isMobile = useMobile()
  const [showMobileContent, setShowMobileContent] = useState(false)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    if (isMobile) {
      setShowMobileContent(true)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Settings navigation - hide on mobile when content is shown */}
        <Card className={`md:col-span-1 ${isMobile && showMobileContent ? "hidden" : "block"}`}>
          <CardContent className="p-0">
            <nav className="flex flex-col p-2">
              <Button
                variant={activeTab === "account" ? "default" : "ghost"}
                className={`justify-start gap-2 mb-1 ${activeTab === "account" ? "gradient-bg-1" : ""}`}
                onClick={() => handleTabChange("account")}
              >
                <User className="h-4 w-4" />
                Account
              </Button>
              <Button
                variant={activeTab === "appearance" ? "default" : "ghost"}
                className={`justify-start gap-2 mb-1 ${activeTab === "appearance" ? "gradient-bg-1" : ""}`}
                onClick={() => handleTabChange("appearance")}
              >
                <Palette className="h-4 w-4" />
                Appearance
              </Button>
              <Button
                variant={activeTab === "notifications" ? "default" : "ghost"}
                className={`justify-start gap-2 mb-1 ${activeTab === "notifications" ? "gradient-bg-1" : ""}`}
                onClick={() => handleTabChange("notifications")}
              >
                <Bell className="h-4 w-4" />
                Notifications
              </Button>
              <Button
                variant={activeTab === "security" ? "default" : "ghost"}
                className={`justify-start gap-2 mb-1 ${activeTab === "security" ? "gradient-bg-1" : ""}`}
                onClick={() => handleTabChange("security")}
              >
                <Lock className="h-4 w-4" />
                Security
              </Button>
            </nav>
          </CardContent>
        </Card>

        {/* Settings content - show/hide based on mobile state */}
        <div className={`md:col-span-3 space-y-6 ${isMobile && !showMobileContent ? "hidden" : "block"}`}>
          {/* Mobile back button */}
          {isMobile && showMobileContent && (
            <Button
              variant="outline"
              className="mb-4 flex items-center gap-2"
              onClick={() => setShowMobileContent(false)}
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Settings
            </Button>
          )}

          {activeTab === "account" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>Update your account details and profile</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-24 w-24">
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm">
                        Change Avatar
                      </Button>
                    </div>
                    <div className="grid gap-4 flex-1 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 flex-wrap">
                  <Button variant="outline">Cancel</Button>
                  <Button className="gradient-bg-1">Save Changes</Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {activeTab === "appearance" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>Customize how SocialSync looks on your device</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <Label htmlFor="theme">Theme</Label>
                      <Select value={theme} onValueChange={(value) => setTheme(value)}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <p className="text-sm text-muted-foreground">Select the theme for the dashboard</p>
                  </div>

                  <div className="mt-4">
                    <ThemeIndicator />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

