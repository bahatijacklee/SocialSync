"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, LinkIcon, PenSquare } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Create Your Account",
      description: "Sign up in seconds and set up your SocialSync profile to get started.",
      icon: UserPlus,
      color: "bg-purple-500/20 text-purple-500",
    },
    {
      number: "2",
      title: "Connect Social Accounts",
      description: "Link your Twitter, Instagram, LinkedIn, and other social media accounts.",
      icon: LinkIcon,
      color: "bg-blue-500/20 text-blue-500",
    },
    {
      number: "3",
      title: "Create Content",
      description: "Craft your posts with our editor or schedule content for multiple platforms.",
      icon: PenSquare,
      color: "bg-green-500/20 text-green-500",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-purple-100 dark:bg-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How SocialSync Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From account creation to performance analysis - explore our seamless end-to-end workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-purple-500/20 bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className={`mb-4 w-12 h-12 rounded-full ${step.color} flex items-center justify-center`}>
                    <span className="font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <step.icon className="h-5 w-5" />
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

