import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import PlatformSection from './components/PlatformSection'
import IntelligenceEngines from './components/IntelligenceEngines'
import EngineeringDomains from './components/EngineeringDomains'
import TelemetrySection from './components/TelemetrySection'
import EnterpriseSection from './components/EnterpriseSection'
import WhyTMC from './components/WhyTMC'
import AboutSection from './components/AboutSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-[#0a0d14]">
            <Navbar />
            <main>
                <Hero />
                <ProblemSection />
                <PlatformSection />
                <IntelligenceEngines />
                <EngineeringDomains />
                <TelemetrySection />
                <EnterpriseSection />
                <WhyTMC />
                <AboutSection />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    )
}

export default App
