import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import React from 'react'

const About = () => {
  return (
    <div className="flex">
      {/* Sidebar (Navbar) */}
      <div className="w-64">
        <Navbar />
      </div>
      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl mx-auto pt-20 px-6 space-y-12">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}

export default About