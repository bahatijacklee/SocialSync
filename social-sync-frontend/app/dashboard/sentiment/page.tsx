import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SentimentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Sentiment Analysis</h1>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SentimentCard title="Positive" percentage={68} color="green" />
        <SentimentCard title="Neutral" percentage={24} color="gray" />
        <SentimentCard title="Negative" percentage={8} color="red" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sentiment Trends</CardTitle>
          <CardDescription>Track sentiment changes over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
            <div className="text-center">
              <p className="text-muted-foreground">Sentiment Trend Chart</p>
              <p className="text-xs text-muted-foreground mt-1">(Chart visualization would be implemented here)</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function SentimentCard({ title, percentage, color }: { title: string; percentage: number; color: string }) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-500 text-green-500"
      case "red":
        return "bg-red-500 text-red-500"
      default:
        return "bg-gray-500 text-gray-500"
    }
  }

  const colorClasses = getColorClasses(color)
  const bgColorClass = colorClasses.split(" ")[0]
  const textColorClass = colorClasses.split(" ")[1]

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">{title} Sentiment</h3>
            <span className={`text-2xl font-bold ${textColorClass}`}>{percentage}%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div className={`h-full ${bgColorClass}`} style={{ width: `${percentage}%` }}></div>
          </div>
          <p className="text-sm text-muted-foreground">
            {title === "Positive"
              ? `${percentage}% of mentions about your brand are positive.`
              : title === "Negative"
                ? `${percentage}% of mentions about your brand are negative.`
                : `${percentage}% of mentions about your brand are neutral.`}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

