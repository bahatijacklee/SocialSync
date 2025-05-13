"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

const accounts = [
  {
    platform: "Twitter",
    handle: "@yourbrand",
    followers: 12450,
    growth: 5.2,
    color: "#1DA1F2",
  },
  {
    platform: "Instagram",
    handle: "@yourbrand",
    followers: 8320,
    growth: 3.8,
    color: "#E1306C",
  },
  {
    platform: "LinkedIn",
    handle: "Your Brand",
    followers: 3762,
    growth: 7.1,
    color: "#0077B5",
  },
]

export function AccountsOverview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Connected Accounts</CardTitle>
          <CardDescription>Manage your social media accounts</CardDescription>
        </div>
        <Button size="sm" variant="outline" className="gap-1">
          <PlusCircle className="h-4 w-4" />
          Add
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {accounts.map((account) => (
            <div key={account.platform} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full" style={{ backgroundColor: account.color }} />
                  <span className="font-medium">{account.platform}</span>
                  <span className="text-sm text-muted-foreground">{account.handle}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{account.followers.toLocaleString()}</span>
                  <span className="text-xs text-green-500">+{account.growth}%</span>
                </div>
              </div>
              <Progress value={account.followers / 200} className="h-1.5" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

