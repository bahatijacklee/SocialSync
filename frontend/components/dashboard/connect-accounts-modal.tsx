"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Instagram } from "lucide-react"
import { useState } from "react"

interface ExtraPlatform {
  name: string
  icon: React.ElementType
  color: string
}

export default function ConnectAccountsModal({ extraPlatforms = [] }: { extraPlatforms?: ExtraPlatform[] }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full justify-start gap-2">
          Connect Account
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Connect a Social Media Account</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          <a href="/api/accounts/linkedin" className="w-full">
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Linkedin className="h-5 w-5 text-blue-700" />
              Connect LinkedIn
            </Button>
          </a>
          <a href="/api/accounts/twitter" className="w-full">
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Twitter className="h-5 w-5 text-sky-500" />
              Connect Twitter
            </Button>
          </a>
          <a href="/api/accounts/instagram" className="w-full">
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Instagram className="h-5 w-5 text-pink-500" />
              Connect Instagram
            </Button>
          </a>
          {extraPlatforms.map((platform) => (
            <Button key={platform.name} variant="outline" className="w-full flex items-center gap-2" disabled>
              <platform.icon className={`h-5 w-5 ${platform.color}`} />
              Connect {platform.name} (Coming Soon)
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
} 