"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

export function DashboardOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
        <CardDescription>Your social media performance at a glance</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Platforms</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Total Followers</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">24,532</p>
                  <div className="flex items-center text-sm text-green-500">
                    <ArrowUpRight className="h-4 w-4" />
                    <span>12%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Engagement Rate</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">3.2%</p>
                  <div className="flex items-center text-sm text-red-500">
                    <ArrowDownRight className="h-4 w-4" />
                    <span>0.5%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Total Posts</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Total Interactions</p>
                <p className="text-2xl font-bold">8,942</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="week" className="pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">New Followers</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">342</p>
                  <div className="flex items-center text-sm text-green-500">
                    <ArrowUpRight className="h-4 w-4" />
                    <span>8%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Weekly Engagement</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">4.1%</p>
                  <div className="flex items-center text-sm text-green-500">
                    <ArrowUpRight className="h-4 w-4" />
                    <span>1.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="month" className="pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Monthly Growth</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">1,245</p>
                  <div className="flex items-center text-sm text-green-500">
                    <ArrowUpRight className="h-4 w-4" />
                    <span>15%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Monthly Engagement</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">3.8%</p>
                  <div className="flex items-center text-sm text-green-500">
                    <ArrowUpRight className="h-4 w-4" />
                    <span>0.7%</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

