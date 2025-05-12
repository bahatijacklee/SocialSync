"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  LayoutDashboard,
  BarChart3,
  LineChart,
  Calendar,
  FileText,
  Sparkles,
  MessageSquare,
  Settings,
  PlusCircle,
  LogOut,
} from "lucide-react"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
  {
    label: "Sentiment Analysis",
    icon: LineChart,
    href: "/dashboard/sentiment",
  },
  {
    label: "Content Calendar",
    icon: Calendar,
    href: "/dashboard/calendar",
  },
  {
    label: "Reports",
    icon: FileText,
    href: "/dashboard/reports",
  },
  {
    label: "AI Assistant",
    icon: Sparkles,
    href: "/dashboard/ai-assistant",
  },
  {
    label: "Messages",
    icon: MessageSquare,
    href: "/dashboard/messages",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  const handleLogout = () => {
    // Redirect to landing page
    window.location.href = "/landing"
  }

  return (
    <div className="hidden md:flex h-full w-64 flex-col bg-background border-r border-border">
      <div className="p-6">
        <Link href="/dashboard">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <h1 className="text-xl font-bold text-primary">SocialSync</h1>
          </div>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1 py-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-[#1E293B]",
                pathname === route.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <route.icon className="h-5 w-5" />
              {route.label}
            </Link>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4">
        <Button className="w-full justify-start gap-2">
          <PlusCircle className="h-4 w-4" />
          Connect Account
        </Button>
      </div>
      <div className="p-4 border-t border-border">
        <Button className="w-full justify-start gap-2" variant="ghost" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}

