"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SentimentOverview() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Sentiment Analysis</CardTitle>
        <CardDescription>How people feel about your content</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overall">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overall">Overall</TabsTrigger>
            <TabsTrigger value="twitter">Twitter</TabsTrigger>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
          </TabsList>
          <TabsContent value="overall" className="pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground">Positive</div>
                <div className="text-2xl font-bold text-green-500">68%</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground">Neutral</div>
                <div className="text-2xl font-bold text-gray-500">24%</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground">Negative</div>
                <div className="text-2xl font-bold text-red-500">8%</div>
              </div>
            </div>
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
              <div className="flex h-full">
                <div className="bg-green-500 h-full" style={{ width: "68%" }}></div>
                <div className="bg-gray-300 h-full" style={{ width: "24%" }}></div>
                <div className="bg-red-500 h-full" style={{ width: "8%" }}></div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Sentiment has improved by 12% compared to last month.</p>
            </div>
          </TabsContent>
          <TabsContent value="twitter" className="pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground">Positive</div>
                <div className="text-2xl font-bold text-green-500">72%</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground">Neutral</div>
                <div className="text-2xl font-bold text-gray-500">20%</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground">Negative</div>
                <div className="text-2xl font-bold text-red-500">8%</div>
              </div>
            </div>
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
              <div className="flex h-full">
                <div className="bg-green-500 h-full" style={{ width: "72%" }}></div>
                <div className="bg-gray-300 h-full" style={{ width: "20%" }}></div>
                <div className="bg-red-500 h-full" style={{ width: "8%" }}></div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="instagram" className="pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground">Positive</div>
                <div className="text-2xl font-bold text-green-500">65%</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground">Neutral</div>
                <div className="text-2xl font-bold text-gray-500">28%</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-muted-foreground">Negative</div>
                <div className="text-2xl font-bold text-red-500">7%</div>
              </div>
            </div>
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
              <div className="flex h-full">
                <div className="bg-green-500 h-full" style={{ width: "65%" }}></div>
                <div className="bg-gray-300 h-full" style={{ width: "28%" }}></div>
                <div className="bg-red-500 h-full" style={{ width: "7%" }}></div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

