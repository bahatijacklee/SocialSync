"use client"

import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Bell, Lock, User, Palette, Globe, Key, CreditCard, HelpCircle, LogOut, ChevronLeft } from "lucide-react"
import { useTheme } from "next-themes"
import { ThemeIndicator } from "@/components/theme-indicator"
import { useMobile } from "@/hooks/use-mobile"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")
  const { theme, setTheme } = useTheme()
  const isMobile = useMobile()
  const [showMobileContent, setShowMobileContent] = useState(false)

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

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    if (isMobile) {
      setShowMobileContent(true)
    }
  }

  return (
    <motion.div className="space-y-6" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.h1 className="text-3xl font-bold" variants={itemVariants}>
        Settings
      </motion.h1>

      <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6" variants={itemVariants}>
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
              <Button
                variant={activeTab === "connections" ? "default" : "ghost"}
                className={`justify-start gap-2 mb-1 ${activeTab === "connections" ? "gradient-bg-1" : ""}`}
                onClick={() => handleTabChange("connections")}
              >
                <Globe className="h-4 w-4" />
                Social Connections
              </Button>
              <Button
                variant={activeTab === "api" ? "default" : "ghost"}
                className={`justify-start gap-2 mb-1 ${activeTab === "api" ? "gradient-bg-1" : ""}`}
                onClick={() => handleTabChange("api")}
              >
                <Key className="h-4 w-4" />
                API Keys
              </Button>
              <Button
                variant={activeTab === "billing" ? "default" : "ghost"}
                className={`justify-start gap-2 mb-1 ${activeTab === "billing" ? "gradient-bg-1" : ""}`}
                onClick={() => handleTabChange("billing")}
              >
                <CreditCard className="h-4 w-4" />
                Billing
              </Button>
              <Separator className="my-2" />
              <Button variant="ghost" className="justify-start gap-2 mb-1 text-muted-foreground">
                <HelpCircle className="h-4 w-4" />
                Help & Support
              </Button>
              <Button
                variant="ghost"
                className="justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
              >
                <LogOut className="h-4 w-4" />
                Logout
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
                        <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
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
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" defaultValue="Acme Inc." />
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
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="animations">Animations</Label>
                        <p className="text-sm text-muted-foreground">Enable animations throughout the interface</p>
                      </div>
                      <Switch id="animations" defaultChecked />
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="compact">Compact Mode</Label>
                        <p className="text-sm text-muted-foreground">
                          Use a more compact layout to fit more content on screen
                        </p>
                      </div>
                      <Switch id="compact" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 flex-wrap">
                  <Button variant="outline">Reset to Defaults</Button>
                  <Button className="gradient-bg-1">Save Changes</Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {activeTab === "notifications" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Daily Digest</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive a daily summary of your social media activity
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Mentions</Label>
                          <p className="text-sm text-muted-foreground">Get notified when someone mentions your brand</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Performance Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive alerts for significant changes in performance
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Push Notifications</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Real-time Mentions</Label>
                          <p className="text-sm text-muted-foreground">Get instant notifications for mentions</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Direct Messages</Label>
                          <p className="text-sm text-muted-foreground">Get notified for new direct messages</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 flex-wrap">
                  <Button variant="outline">Reset to Defaults</Button>
                  <Button className="gradient-bg-1">Save Changes</Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {activeTab === "connections" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Social Media Connections</CardTitle>
                  <CardDescription>Manage your connected social media accounts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      { name: "Twitter", connected: true, handle: "@yourbrand" },
                      { name: "Instagram", connected: true, handle: "@yourbrand" },
                      { name: "LinkedIn", connected: true, handle: "Your Brand" },
                      { name: "Facebook", connected: false, handle: "" },
                      { name: "TikTok", connected: false, handle: "" },
                    ].map((platform, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-muted rounded-lg">
                            <div className="h-6 w-6 bg-primary/20 rounded-full" />
                          </div>
                          <div>
                            <h3 className="font-medium">{platform.name}</h3>
                            {platform.connected ? (
                              <p className="text-sm text-muted-foreground">{platform.handle}</p>
                            ) : (
                              <p className="text-sm text-muted-foreground">Not connected</p>
                            )}
                          </div>
                        </div>
                        <Button
                          variant={platform.connected ? "outline" : "default"}
                          className={!platform.connected ? "gradient-bg-1" : ""}
                        >
                          {platform.connected ? "Disconnect" : "Connect"}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "security" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Change Password</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </div>
                    <Button className="gradient-bg-1">Update Password</Button>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Session Management</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">You're currently logged in on 2 devices</p>
                      <Button variant="outline">Manage Sessions</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "api" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Card>
                <CardHeader>
                  <CardTitle>API Keys</CardTitle>
                  <CardDescription>Manage your API keys for integrations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Your API Keys</h3>
                        <p className="text-sm text-muted-foreground">Use these keys to authenticate API requests</p>
                      </div>
                      <Button className="gradient-bg-1">Generate New Key</Button>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">Production Key</h4>
                          <Badge>Active</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Input value="sk_live_••••••••••••••••••••••••••" readOnly />
                          <Button variant="outline" size="sm">
                            Copy
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Created on March 12, 2025 • Last used 2 days ago
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">Development Key</h4>
                          <Badge variant="outline">Test</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Input value="sk_test_••••••••••••••••••••••••••" readOnly />
                          <Button variant="outline" size="sm">
                            Copy
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Created on March 15, 2025 • Last used 5 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "billing" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Billing & Subscription</CardTitle>
                  <CardDescription>Manage your subscription and payment methods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 border rounded-lg bg-muted/50">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Current Plan</h3>
                      <Badge className="gradient-bg-1">Pro</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">$49/month • Renews on April 15, 2025</p>
                    <div className="flex gap-2">
                      <Button variant="outline">Change Plan</Button>
                      <Button variant="outline" className="text-destructive hover:text-destructive">
                        Cancel Subscription
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Payment Methods</h3>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-2 bg-muted rounded-lg">
                            <CreditCard className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium">Visa ending in 4242</h4>
                            <p className="text-sm text-muted-foreground">Expires 12/25</p>
                          </div>
                        </div>
                        <Badge>Default</Badge>
                      </div>
                    </div>
                    <Button variant="outline">Add Payment Method</Button>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Billing History</h3>
                    <div className="space-y-2">
                      {[
                        { date: "March 15, 2025", amount: "$49.00", status: "Paid" },
                        { date: "February 15, 2025", amount: "$49.00", status: "Paid" },
                        { date: "January 15, 2025", amount: "$49.00", status: "Paid" },
                      ].map((invoice, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                          <div>
                            <p className="font-medium">{invoice.date}</p>
                            <p className="text-sm text-muted-foreground">Invoice #{2025030 + index}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <p>{invoice.amount}</p>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              {invoice.status}
                            </Badge>
                            <Button variant="ghost" size="sm">
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

