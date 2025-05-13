"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sparkles, Send, RefreshCw, Download, Copy } from "lucide-react"

export default function AiAssistantPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI assistant for social media management. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user", content: input }
    setMessages([...messages, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = {
        "generate report":
          "I've analyzed your social media performance for the past 30 days. Your engagement rate has increased by 15% on Twitter, while Instagram shows a 7% growth in followers. Would you like me to generate a detailed PDF report?",
        "best time to post":
          "Based on your audience activity patterns, the optimal posting times are:\n\n- Twitter: Weekdays between 8-10 AM and 6-8 PM\n- Instagram: 11 AM-1 PM and 7-9 PM\n- LinkedIn: Tuesday-Thursday between 9-11 AM\n\nWould you like me to help schedule your next posts at these times?",
        "content ideas":
          "Here are some content ideas based on your audience interests and trending topics:\n\n1. Industry insights: Share your expertise on recent developments\n2. Behind-the-scenes: Show your team at work\n3. Customer testimonials: Highlight positive feedback\n4. How-to guides: Create educational content\n5. Polls and questions: Boost engagement with interactive content",
        "competitor analysis":
          "I've analyzed your top 3 competitors. Your engagement rate (3.2%) is higher than the industry average (2.7%), but Competitor A has a stronger presence on Instagram with 15% more followers. Would you like a detailed competitive analysis report?",
      }

      // Find a matching response or use default
      let aiResponse =
        "I'll help you with that. What specific information are you looking for about your social media performance?"

      for (const [key, response] of Object.entries(aiResponses)) {
        if (input.toLowerCase().includes(key)) {
          aiResponse = response
          break
        }
      }

      setMessages([...messages, userMessage, { role: "assistant", content: aiResponse }])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">AI Assistant</h1>

        <Card className="border-none shadow-md">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <CardTitle>Social Media AI Assistant</CardTitle>
            </div>
            <CardDescription className="text-primary-foreground/80">
              Ask me anything about your social media performance and strategy
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[500px] overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                    <Avatar className={message.role === "assistant" ? "bg-primary" : "bg-muted"}>
                      {message.role === "assistant" ? (
                        <>
                          <AvatarFallback>AI</AvatarFallback>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        </>
                      ) : (
                        <AvatarFallback>You</AvatarFallback>
                      )}
                    </Avatar>
                    <div
                      className={`rounded-lg p-3 ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[80%]">
                    <Avatar className="bg-primary">
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg p-4 bg-muted flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce"></div>
                      <div
                        className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-4 border-t">
            <div className="flex w-full items-center gap-2">
              <Button variant="outline" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Ask about your social media performance..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend} disabled={!input.trim() || isLoading}>
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks you can ask the AI assistant</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-2"
                onClick={() => {
                  setInput("Generate a performance report for the last month")
                }}
              >
                Generate a performance report
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-2"
                onClick={() => {
                  setInput("What's the best time to post on each platform?")
                }}
              >
                Best time to post on each platform
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-2"
                onClick={() => {
                  setInput("Suggest content ideas for next week")
                }}
              >
                Suggest content ideas
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-left h-auto py-2"
                onClick={() => {
                  setInput("Analyze my competitors' performance")
                }}
              >
                Competitor analysis
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Insights</CardTitle>
              <CardDescription>AI-generated insights from your data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="text-sm">
                  Your Twitter engagement has increased by 15% this week. Continue posting industry news to maintain
                  this trend.
                </p>
                <div className="flex justify-end gap-2 mt-2">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Copy className="h-3.5 w-3.5 mr-1" />
                    Copy
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Download className="h-3.5 w-3.5 mr-1" />
                    Save
                  </Button>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="text-sm">
                  Instagram followers are most active between 6-8 PM. Consider scheduling your posts during this time
                  for maximum reach.
                </p>
                <div className="flex justify-end gap-2 mt-2">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Copy className="h-3.5 w-3.5 mr-1" />
                    Copy
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Download className="h-3.5 w-3.5 mr-1" />
                    Save
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

