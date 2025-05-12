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
  X,
} from "lucide-react"
import { SheetClose } from "./ui/sheet"

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

export default function MobileSidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname()

  const handleLogout = () => {
    // Redirect to landing page
    window.location.href = "/landing"
  }

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <Link href="/dashboard" onClick={onClose}>
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <h1 className="text-xl font-bold text-primary">SocialSync</h1>
          </div>
        </Link>
        <SheetClose asChild>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </SheetClose>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          {routes.map((route) => (
            <SheetClose key={route.href} asChild>
              <Link
                href={route.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-all hover:bg-[#1E293B]",
                  pathname === route.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <route.icon className="h-5 w-5" />
                {route.label}
              </Link>
            </SheetClose>
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
        <SheetClose asChild>
          <Button className="w-full justify-start gap-2" variant="ghost" onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </SheetClose>
      </div>
    </div>
  )
}

