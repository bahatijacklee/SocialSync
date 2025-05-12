"use client"

import { motion } from "framer-motion"
import { BarChart3, LineChart, Calendar, MessageSquare, Zap, Shield, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FeatureHighlights() {
  const features = [
    {
      icon: BarChart3,
      title: "Unified Analytics",
      description: "Track performance metrics across all your social platforms in one dashboard.",
      color: "bg-blue-500/20 text-blue-500",
    },
    {
      icon: LineChart,
      title: "Sentiment Analysis",
      description: "Understand how your audience feels about your content with AI-powered sentiment tracking.",
      color: "bg-purple-500/20 text-purple-500",
    },
    {
      icon: Calendar,
      title: "Content Calendar",
      description: "Schedule and manage your posts across multiple platforms with an intuitive calendar.",
      color: "bg-green-500/20 text-green-500",
    },
    {
      icon: MessageSquare,
      title: "Unified Messaging",
      description: "Respond to comments and messages from all platforms in one inbox.",
      color: "bg-orange-500/20 text-orange-500",
    },
    {
      icon: Shield,
      title: "Security Focused",
      description: "Keep your social media accounts secure with advanced monitoring and alerts.",
      color: "bg-red-500/20 text-red-500",
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description: "Connect all your social accounts including Twitter, Instagram, LinkedIn, and more.",
      color: "bg-indigo-500/20 text-indigo-500",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="gradient-text">SocialSync</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit designed to make social media management accessible and intuitive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className={`mb-4 w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">Powerful automation tools save up to 15 hours per week</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

