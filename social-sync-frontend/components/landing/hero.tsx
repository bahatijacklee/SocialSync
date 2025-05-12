"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Twitter, Instagram, Linkedin, Facebook, Youtube, TwitterIcon as TikTok } from "lucide-react"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const socialIcons = [
    { icon: Twitter, color: "#1DA1F2", delay: 0 },
    { icon: Instagram, color: "#E1306C", delay: 0.1 },
    { icon: Linkedin, color: "#0077B5", delay: 0.2 },
    { icon: Facebook, color: "#1877F2", delay: 0.3 },
    { icon: Youtube, color: "#FF0000", delay: 0.4 },
    { icon: TikTok, color: "#000000", delay: 0.5 },
  ]

  return (
    <section className="py-20 md:py-32 overflow-hidden relative">
      {/* Background gradient elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" variants={itemVariants}>
              Monitor & Analyze Your <span className="gradient-text">Social Media</span> Presence
            </motion.h1>

            <motion.p className="text-xl text-muted-foreground max-w-2xl mx-auto" variants={itemVariants}>
              A comprehensive platform for tracking, analyzing, and optimizing your social media accounts across all
              platforms in one dashboard.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-4" variants={itemVariants}>
              <Button size="lg" className="gradient-bg-1 px-8" asChild>
                <Link href="/login">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Media Icons Animation */}
        <div className="mt-20 relative h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-md"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </div>

          <div className="relative z-10">
            {socialIcons.map((social, index) => {
              // Calculate position on a circle
              const angle = index * ((2 * Math.PI) / socialIcons.length)
              const radius = 120 // Distance from center

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    marginLeft: "-24px", // Half of icon width
                    marginTop: "-24px", // Half of icon height
                  }}
                  // Initial animation - pop from center
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0,
                  }}
                  // Animation after loading
                  animate={{
                    x: Math.cos(angle) * radius,
                    y: Math.sin(angle) * radius,
                    opacity: 1,
                    scale: 1,
                    rotate: [0, 360],
                  }}
                  // Transition for initial animation
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 0.5 + social.delay,
                    duration: 0.8,
                    rotate: {
                      duration: 20 + index * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    },
                  }}
                >
                  <motion.div
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-background shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2 + index,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <social.icon size={24} color={social.color} />
                  </motion.div>
                </motion.div>
              )
            })}

            <motion.div
              className="w-20 h-20 rounded-full gradient-bg-1 flex items-center justify-center shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-white text-2xl font-bold">S</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

