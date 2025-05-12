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

            {view === "week" && (
              <div className="border rounded-md overflow-hidden p-4">
                <div className="grid grid-cols-7 gap-4">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="text-center font-medium">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="h-32 border rounded-md p-2 overflow-y-auto">
                      <div className="text-xs text-muted-foreground mb-2">
                        {new Date(
                          date ? date.getFullYear() : 2025,
                          date ? date.getMonth() : 0,
                          (date ? date.getDate() : 1) - date!.getDay() + i + 1,
                        ).getDate()}
                      </div>
                      {i === 1 && (
                        <div className="mb-1 p-1 text-xs rounded bg-blue-100 text-blue-800">
                          10:00 AM - Twitter Post
                        </div>
                      )}
                      {i === 3 && (
                        <div className="mb-1 p-1 text-xs rounded bg-pink-100 text-pink-800">
                          2:00 PM - Instagram Post
                        </div>
                      )}
                      {i === 4 && (
                        <div className="mb-1 p-1 text-xs rounded bg-blue-100 text-blue-800">
                          11:00 AM - LinkedIn Post
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {view === "day" && (
              <div className="border rounded-md overflow-hidden p-4">
                <div className="space-y-2">
                  <h3 className="font-medium">
                    {date?.toLocaleDateString("default", { weekday: "long", month: "long", day: "numeric" })}
                  </h3>
                  <div className="space-y-2">
                    {[
                      { time: "9:00 AM", platform: "Twitter", content: "Industry news update" },
                      { time: "12:00 PM", platform: "Instagram", content: "Behind-the-scenes photo" },
                      { time: "3:00 PM", platform: "LinkedIn", content: "Company milestone announcement" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start p-3 border rounded-md">
                        <div className="w-24 text-sm font-medium">{item.time}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{item.content}</span>
                            <Badge platform={item.platform} />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.platform === "Twitter"
                              ? "Short update on industry trends with relevant hashtags"
                              : item.platform === "Instagram"
                                ? "Photo of team working with casual caption"
                                : "Formal announcement with company achievements"}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Posts</CardTitle>
            <CardDescription>Posts scheduled for the next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  date: "Tomorrow, 10:00 AM",
                  platform: "Twitter",
                  content: "Industry news update with relevant hashtags",
                },
                {
                  date: "Mar 31, 2:00 PM",
                  platform: "Instagram",
                  content: "Product showcase with customer testimonial",
                },
                {
                  date: "Apr 1, 11:00 AM",
                  platform: "LinkedIn",
                  content: "Thought leadership article on industry trends",
                },
                {
                  date: "Apr 2, 3:00 PM",
                  platform: "Twitter",
                  content: "Poll about user preferences for new features",
                },
              ].map((post, i) => (
                <div key={i} className="flex items-start justify-between p-3 border rounded-md">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{post.date}</span>
                      <Badge platform={post.platform} />
                    </div>
                    <p className="text-sm">{post.content}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Ideas</CardTitle>
            <CardDescription>AI-suggested content for your audience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  type: "Behind the scenes",
                  description: "Share photos of your team working on the new product launch",
                },
                {
                  type: "Industry insights",
                  description: "Share your perspective on the latest industry report",
                },
                {
                  type: "User-generated content",
                  description: "Highlight customer success stories and testimonials",
                },
                {
                  type: "How-to guide",
                  description: "Create a step-by-step tutorial for using your product",
                },
              ].map((idea, i) => (
                <div key={i} className="p-3 border rounded-md">
                  <h3 className="font-medium">{idea.type}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{idea.description}</p>
                  <div className="flex justify-end mt-2">
                    <Button variant="outline" size="sm">
                      Create Post
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function Badge({ platform }: { platform: string }) {
  const getColor = () => {
    switch (platform) {
      case "Twitter":
        return "bg-blue-100 text-blue-800"
      case "Instagram":
        return "bg-pink-100 text-pink-800"
      case "LinkedIn":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getColor()}`}>
      {platform}
    </span>
  )
}

