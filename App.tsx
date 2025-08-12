import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import HowItWorksSection from './components/HowItWorksSection'
import FeaturesSection from './components/FeaturesSection'
import PricingSection from './components/PricingSection'
import SocialProofSection from './components/SocialProofSection'
import FinalCTASection from './components/FinalCTASection'

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <SocialProofSection />
      <PricingSection />
      <FinalCTASection />
    </div>
  )
}