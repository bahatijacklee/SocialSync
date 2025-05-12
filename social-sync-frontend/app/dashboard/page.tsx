import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { AccountsOverview } from "@/components/dashboard/accounts-overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { SentimentOverview } from "@/components/dashboard/sentiment-overview"
import { PerformanceMetrics } from "@/components/dashboard/performance-metrics"
import { AiInsights } from "@/components/dashboard/ai-insights"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardOverview />
        <AccountsOverview />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PerformanceMetrics />
        </div>
        <div>
          <SentimentOverview />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentActivity />
        <AiInsights />
      </div>
    </div>
  )
}

