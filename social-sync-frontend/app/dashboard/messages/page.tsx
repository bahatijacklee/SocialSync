"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Filter, PlusCircle, MoreHorizontal, Paperclip, Smile, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const contacts = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thanks for the update! Looking forward to seeing the results.",
    time: "10:30 AM",
    unread: 2,
    online: true,
    platform: "Twitter",
  },
  {
    id: 2,
    name: "Mike Peters",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "When will the new product be available in Europe?",
    time: "Yesterday",
    unread: 0,
    online: false,
    platform: "Instagram",
  },
]

const messages = [
  {
    id: 1,
    sender: "Sarah Johnson",
    content: "Hi there! I saw your latest post about social media analytics. Very insightful!",
    time: "10:15 AM",
    isUser: false,
  },
  {
    id: 2,
    sender: "You",
    content: "Thanks Sarah! Glad you found it helpful. We're working on more content like that.",
    time: "10:20 AM",
    isUser: true,
  },
]

export default function MessagesPage() {
  const [selectedContact, setSelectedContact] = useState(contacts[0])
  const [messageInput, setMessageInput] = useState("")
  const [currentMessages, setCurrentMessages] = useState(messages)
  const [showConversation, setShowConversation] = useState(false)
  const isMobile = useMobile()

  const handleSendMessage = () => {
    if (!messageInput.trim()) return

    const newMessage = {
      id: currentMessages.length + 1,
      sender: "You",
      content: messageInput,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isUser: true,
    }

    setCurrentMessages([...currentMessages, newMessage])
    setMessageInput("")
  }

  // Handle selecting a contact on mobile
  const handleSelectContact = (contact) => {
    setSelectedContact(contact)
    if (isMobile) {
      setShowConversation(true)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Messages</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1 hidden sm:flex">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="gap-1 gradient-bg-1">
            <PlusCircle className="h-4 w-4" />
            <span className="hidden sm:inline">New Message</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contacts list - hide on mobile when conversation is shown */}
        <Card className={`lg:col-span-1 ${isMobile && showConversation ? "hidden" : "block"}`}>
          <CardHeader className="px-4 py-3">
            <div className="flex items-center justify-between">
              <CardTitle>Conversations</CardTitle>
              <Badge className="gradient-bg-1">{contacts.filter((c) => c.unread > 0).length}</Badge>
            </div>
            <div className="relative mt-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search messages..." className="pl-8" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="flagged">Flagged</TabsTrigger>
              </TabsList>
              <div className="mt-2 max-h-[500px] overflow-y-auto">
                {contacts.map((contact) => (
                  <motion.div
                    key={contact.id}
                    className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-muted/50 ${
                      selectedContact.id === contact.id ? "bg-muted" : ""
                    }`}
                    onClick={() => handleSelectContact(contact)}
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={contact.avatar} alt={contact.name} />
                        <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {contact.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium truncate">{contact.name}</p>
                        <span className="text-xs text-muted-foreground">{contact.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                        {contact.unread > 0 && <Badge className="gradient-bg-1">{contact.unread}</Badge>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Tabs>
          </CardContent>
        </Card>

        {/* Conversation - hide on mobile when contacts are shown */}
        <Card className={`lg:col-span-2 ${isMobile && !showConversation ? "hidden" : "block"}`}>
          <CardHeader className="px-4 py-3 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {isMobile && (
                  <Button variant="ghost" size="icon" onClick={() => setShowConversation(false)} className="mr-1">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                )}
                <Avatar>
                  <AvatarImage src={selectedContact.avatar} alt={selectedContact.name} />
                  <AvatarFallback>{selectedContact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{selectedContact.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <span
                      className={`h-2 w-2 rounded-full ${selectedContact.online ? "bg-green-500" : "bg-gray-300"}`}
                    ></span>
                    {selectedContact.online ? "Online" : "Offline"}
                    <span className="mx-1">•</span>
                    {selectedContact.platform}
                  </CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-[500px]">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {currentMessages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex gap-3 max-w-[80%] ${message.isUser ? "flex-row-reverse" : ""}`}>
                    {!message.isUser && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={selectedContact.avatar} alt={selectedContact.name} />
                        <AvatarFallback>{selectedContact.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <div className={`rounded-lg p-3 ${message.isUser ? "gradient-bg-1 text-white" : "bg-muted"}`}>
                        <p>{message.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 text-right">{message.time}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="hidden sm:flex">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input
                  placeholder="Type your message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button variant="outline" size="icon" className="hidden sm:flex">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button onClick={handleSendMessage} disabled={!messageInput.trim()} className="gradient-bg-1">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

