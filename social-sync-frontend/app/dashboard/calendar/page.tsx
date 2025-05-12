"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { PlusCircle, Filter, ChevronLeft, ChevronRight } from "lucide-react"

export default function ContentCalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState("month")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Content Calendar</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="gap-1">
            <PlusCircle className="h-4 w-4" />
            New Post
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>Content Schedule</CardTitle>
            <CardDescription>Plan and schedule your social media content</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Tabs defaultValue="month" onValueChange={setView}>
              <TabsList>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="day">Day</TabsTrigger>
              </TabsList>
            </Tabs>
            <Select defaultValue="all">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="All platforms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All platforms</SelectItem>
                <SelectItem value="twitter">Twitter</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    if (date) {
                      const newDate = new Date(date)
                      newDate.setMonth(newDate.getMonth() - 1)
                      setDate(newDate)
                    }
                  }}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h2 className="text-xl font-semibold">
                  {date?.toLocaleString("default", { month: "long", year: "numeric" })}
                </h2>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    if (date) {
                      const newDate = new Date(date)
                      newDate.setMonth(newDate.getMonth() + 1)
                      setDate(newDate)
                    }
                  }}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" onClick={() => setDate(new Date())}>
                Today
              </Button>
            </div>

            {view === "month" && (
              <div className="border rounded-md overflow-hidden">
                <Calendar mode="single" selected={date} onSelect={setDate} className="w-full" />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

