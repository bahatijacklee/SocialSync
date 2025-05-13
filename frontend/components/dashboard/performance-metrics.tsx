"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PerformanceMetrics() {
  const [timeRange, setTimeRange] = useState("30days")

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Track your social media growth</CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="followers">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="followers">Followers</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="reach">Reach</TabsTrigger>
            <TabsTrigger value="mentions">Mentions</TabsTrigger>
          </TabsList>
          <TabsContent value="followers" className="pt-4">
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <div className="text-center">
                <p className="text-muted-foreground">Follower Growth Chart</p>
                <p className="text-xs text-muted-foreground mt-1">(Chart visualization would be implemented here)</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Total Growth</p>
                <p className="text-xl font-bold">+1,245</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Growth Rate</p>
                <p className="text-xl font-bold">+5.2%</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Avg. Daily</p>
                <p className="text-xl font-bold">+41.5</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="engagement" className="pt-4">
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <div className="text-center">
                <p className="text-muted-foreground">Engagement Rate Chart</p>
                <p className="text-xs text-muted-foreground mt-1">(Chart visualization would be implemented here)</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Avg. Engagement</p>
                <p className="text-xl font-bold">3.8%</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Total Likes</p>
                <p className="text-xl font-bold">5,872</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Total Comments</p>
                <p className="text-xl font-bold">1,243</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reach" className="pt-4">
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <div className="text-center">
                <p className="text-muted-foreground">Reach Metrics Chart</p>
                <p className="text-xs text-muted-foreground mt-1">(Chart visualization would be implemented here)</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="mentions" className="pt-4">
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <div className="text-center">
                <p className="text-muted-foreground">Mentions Chart</p>
                <p className="text-xs text-muted-foreground mt-1">(Chart visualization would be implemented here)</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

