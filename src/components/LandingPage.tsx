import { Hero } from "@/components/Hero"
import { PainSection } from "@/components/PainSection"
import { ClaimSection } from "@/components/ClaimSection"
import { Features } from "@/components/Features"
import { WhyStrollUP } from "@/components/WhyStrollUP"
import { HowItWorks } from "@/components/HowItWorks"
import { Pricing } from "@/components/Pricing"
import { LeadForm } from "@/components/LeadForm"
import { CallToAction } from "@/components/CallToAction"
import { SocialProof } from "@/components/SocialProof"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <PainSection />
      <Features />
      <WhyStrollUP />
-      <SocialProof />
      <Pricing />
      <LeadForm />
      <CallToAction />
    </div>
  )
}

