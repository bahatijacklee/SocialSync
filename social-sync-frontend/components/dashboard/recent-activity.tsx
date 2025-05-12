import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    platform: "Twitter",
    type: "mention",
    user: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "@sarahjohnson",
    },
    content: "Just discovered @yourbrand's amazing service! Totally recommend it to everyone! #CustomerExperience",
    time: "2 hours ago",
    sentiment: "positive",
  },
  {
    id: 2,
    platform: "Instagram",
    type: "comment",
    user: {
      name: "Mike Peters",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "@mikepeters",
    },
    content: "Love the new product launch! When will it be available in Europe?",
    time: "5 hours ago",
    sentiment: "positive",
  },
  {
    id: 3,
    platform: "LinkedIn",
    type: "share",
    user: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "Emily Rodriguez",
    },
    content: "Shared your post about industry trends",
    time: "Yesterday",
    sentiment: "neutral",
  },
  {
    id: 4,
    platform: "Twitter",
    type: "reply",
    user: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      handle: "@davidkim",
    },
    content: "Having issues with your customer service. Been waiting for a response for days now. #disappointed",
    time: "Yesterday",
    sentiment: "negative",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest interactions across your platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-4 pb-4 border-b last:border-0 last:pb-0">
              <Avatar>
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{activity.user.name}</span>
                  <span className="text-sm text-muted-foreground">{activity.user.handle}</span>
                  <Badge variant="outline" className="ml-auto">
                    {activity.platform}
                  </Badge>
                </div>
                <p className="text-sm">{activity.content}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{activity.time}</span>
                  <span>•</span>
                  <span
                    className={
                      activity.sentiment === "positive"
                        ? "text-green-500"
                        : activity.sentiment === "negative"
                          ? "text-red-500"
                          : "text-gray-500"
                    }
                  >
                    {activity.sentiment.charAt(0).toUpperCase() + activity.sentiment.slice(1)} sentiment
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

