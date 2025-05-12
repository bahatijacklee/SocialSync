"use client"
import LandingHeader from "@/components/landing/header"
import HeroSection from "@/components/landing/hero"
import FeatureHighlights from "@/components/landing/features"
import AuthBox from "@/components/landing/auth-box"
import LandingFooter from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/95 flex flex-col">
      <LandingHeader />
      <main className="flex-1">
        <HeroSection />
        <FeatureHighlights />
        <AuthBox />
      </main>
      <LandingFooter />
    </div>
  )
}

