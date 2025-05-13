import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, RefreshCw } from "lucide-react"

const insights = [
  {
    id: 1,
    content:
      "Your engagement rate has increased by 15% on Twitter. Continue posting content about industry news to maintain this trend.",
    type: "trend",
  },
  {
    id: 2,
    content:
      "Instagram followers are most active between 6-8 PM. Consider scheduling your posts during this time for maximum reach.",
    type: "recommendation",
  },
  {
    id: 3,
    content:
      "Negative sentiment detected in recent comments about your customer service. Consider addressing these concerns publicly.",
    type: "alert",
  },
]

export function AiInsights() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI Insights
          </CardTitle>
          <CardDescription>AI-powered recommendations and alerts</CardDescription>
        </div>
        <Button size="icon" variant="ghost">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight) => (
            <div key={insight.id} className="p-3 rounded-lg bg-muted/50">
              <p className="text-sm">{insight.content}</p>
              <div className="mt-2">
                <Badge
                  variant="outline"
                  className={
                    insight.type === "trend"
                      ? "bg-blue-50 text-blue-700 border-blue-200"
                      : insight.type === "recommendation"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : "bg-red-50 text-red-700 border-red-200"
                  }
                >
                  {insight.type.charAt(0).toUpperCase() + insight.type.slice(1)}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Badge component for AI Insights
function Badge({
  children,
  className,
  variant,
}: {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline"
}) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  )
}

