import HeroSection from './components/HeroSection'
import FinalCTASection from './components/FinalCTASection'
import ProblemSection from './components/ProblemSection'
import HowItWorksSection from './components/HowItWorksSection'
import FeaturesSection from './components/FeaturesSection'

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <FinalCTASection />
    </div>
  )
}