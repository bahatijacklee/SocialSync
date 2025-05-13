import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, Share2, Calendar, BarChart, LineChart } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Reports</h1>
        <Button className="gap-2">
          <FileText className="h-4 w-4" />
          Generate New Report
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Reports</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReportCard
              title="Monthly Performance"
              description="Overall social media performance"
              date="March 2025"
              icon={BarChart}
              type="performance"
            />
            <ReportCard
              title="Audience Growth"
              description="Follower growth and demographics"
              date="March 2025"
              icon={LineChart}
              type="audience"
            />
            <ReportCard
              title="Sentiment Analysis"
              description="Brand sentiment across platforms"
              date="March 2025"
              icon={LineChart}
              type="sentiment"
            />
            <ReportCard
              title="Content Performance"
              description="Top performing content"
              date="February 2025"
              icon={BarChart}
              type="performance"
            />
            <ReportCard
              title="Competitor Analysis"
              description="Comparison with competitors"
              date="February 2025"
              icon={BarChart}
              type="performance"
            />
            <ReportCard
              title="Quarterly Review"
              description="Q1 2025 performance summary"
              date="Q1 2025"
              icon={FileText}
              type="performance"
            />
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReportCard
              title="Monthly Performance"
              description="Overall social media performance"
              date="March 2025"
              icon={BarChart}
              type="performance"
            />
            <ReportCard
              title="Content Performance"
              description="Top performing content"
              date="February 2025"
              icon={BarChart}
              type="performance"
            />
            <ReportCard
              title="Quarterly Review"
              description="Q1 2025 performance summary"
              date="Q1 2025"
              icon={FileText}
              type="performance"
            />
          </div>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReportCard
              title="Audience Growth"
              description="Follower growth and demographics"
              date="March 2025"
              icon={LineChart}
              type="audience"
            />
          </div>
        </TabsContent>

        <TabsContent value="sentiment" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ReportCard
              title="Sentiment Analysis"
              description="Brand sentiment across platforms"
              date="March 2025"
              icon={LineChart}
              type="sentiment"
            />
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Scheduled Reports</CardTitle>
          <CardDescription>Automatically generated reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-muted rounded-lg">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Weekly Performance Summary</h3>
                  <p className="text-sm text-muted-foreground">Sent every Monday at 9:00 AM</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-muted rounded-lg">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Monthly Comprehensive Report</h3>
                  <p className="text-sm text-muted-foreground">Sent on the 1st of each month</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ReportCard({
  title,
  description,
  date,
  icon: Icon,
  type,
}: {
  title: string
  description: string
  date: string
  icon: React.ElementType
  type: "performance" | "audience" | "sentiment"
}) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "performance":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "audience":
        return "bg-purple-50 text-purple-700 border-purple-200"
      case "sentiment":
        return "bg-green-50 text-green-700 border-green-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="p-2 bg-muted rounded-lg">
              <Icon className="h-5 w-5" />
            </div>
            <div className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(type)}`}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mb-4">
              <Calendar className="h-3.5 w-3.5" />
              {date}
            </p>
          </div>
          <div className="flex gap-2 mt-2">
            <Button variant="outline" size="sm" className="flex-1 gap-1">
              <Download className="h-3.5 w-3.5" />
              Download
            </Button>
            <Button variant="outline" size="sm" className="flex-1 gap-1">
              <Share2 className="h-3.5 w-3.5" />
              Share
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

