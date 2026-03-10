import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import HowItWorksSection from './components/HowItWorksSection'
import FinalCTASection from './components/FinalCTASection'

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FinalCTASection />
    </div>
  )
}
