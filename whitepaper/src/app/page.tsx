'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  FaRocket, 
  FaInstagram,
  FaExternalLinkAlt
} from 'react-icons/fa'

// Komponenten
import NavigationMenu from '../components/NavigationMenu'
import HeroSection from '../components/HeroSection'
import SolutionSection from '../components/SolutionSection'
import TokenomicsChart from '../components/TokenomicsChart'
import TeamSection from '../components/TeamSection'
import TechnicalArchitecture from '../components/TechnicalArchitecture'
import RoadmapTimeline from '../components/RoadmapTimeline'
import LiveStatsFixed from '../components/LiveStatsFixed'
import MobileWhitepaper from '../components/MobileWhitepaper'
import useDeviceDetection from '../hooks/useDeviceDetection'

const WhitepaperPage = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isMobile, isTablet } = useDeviceDetection()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'solution', 'tokenomics', 'tech', 'roadmap', 'team']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // Show loading state until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-zinc-400">Loading D.FAITH Whitepaper...</p>
        </div>
      </div>
    )
  }

  // Render mobile version for mobile devices
  if (isMobile) {
    return <MobileWhitepaper />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      {/* Navigation */}
      <NavigationMenu 
        activeSection={activeSection}
        onSectionChange={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <HeroSection onScrollToNext={() => scrollToSection('solution')} />
      </section>

      {/* Fixed Live Stats - rechts oben */}
      <div className="fixed top-20 right-4 z-40 hidden lg:block">
        <LiveStatsFixed />
      </div>

      {/* Solution Section */}
      <SolutionSection />

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Token-Ökosystem
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Dual-Token-System mit D.FAITH für Fans und D.INVEST für Kapitalbildung
            </p>
          </motion.div>

          <TokenomicsChart />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl p-8 border border-amber-500/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image 
                  src="/d-faith-logo.png" 
                  alt="D.FAITH Logo" 
                  width={60} 
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold text-amber-400">D.FAITH Token</h3>
                  <p className="text-zinc-400">Fan-Belohnungstoken</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Total Supply:</span>
                  <span className="font-bold">100.000 Token</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Gesperrt im Contract:</span>
                  <span className="font-bold">80.000 Token</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Initiale Liquidität:</span>
                  <span className="font-bold">20.000 Token</span>
                </div>
                <div className="border-t border-amber-500/30 pt-3 mt-4">
                  <p className="text-amber-300 font-semibold">Verwendung:</p>
                  <ul className="text-zinc-300 text-xs space-y-1 mt-2">
                    <li>• Belohnung für Social Media Engagement</li>
                    <li>• Umtausch in ETH</li>
                    <li>• Exklusive Shop-Käufe</li>
                    <li>• Staking-Rewards</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image 
                  src="/d-invest-logo.png" 
                  alt="D.INVEST Logo" 
                  width={60} 
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">D.INVEST Token</h3>
                  <p className="text-zinc-400">Investitions-Token</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Total Supply:</span>
                  <span className="font-bold">10.000 Token</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Preis:</span>
                  <span className="font-bold text-green-400">5€ pro Token</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Marktkapitalisierung:</span>
                  <span className="font-bold">50.000€</span>
                </div>
                <div className="border-t border-blue-500/30 pt-3 mt-4">
                  <p className="text-blue-300 font-semibold">Funktionen:</p>
                  <ul className="text-zinc-300 text-xs space-y-1 mt-2">
                    <li>• Freischaltung gesperrter D.FAITH Token</li>
                    <li>• Kapitalbeschaffung für Entwicklung</li>
                    <li>• Staking für kontinuierliche Rewards</li>
                    <li>• Governance-Rechte (zukünftig)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section id="tech" className="py-20 px-4 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <TechnicalArchitecture />
      </section>



      {/* Roadmap */}
      <section id="roadmap" className="py-20 px-4">
        <RoadmapTimeline />
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <TeamSection />
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Werden Sie Teil der Revolution
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Investieren Sie in die Zukunft des Fan-Engagements und profitieren Sie von innovativer Blockchain-Technologie
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
              >
                <FaRocket className="text-xl" />
                D.INVEST Token kaufen
                <FaExternalLinkAlt className="text-sm" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-amber-400 text-amber-400 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 hover:bg-amber-400/10 transition-colors"
              >
                <FaInstagram className="text-xl" />
                @dawidfaith folgen
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Image 
                src="/d-faith-logo.png" 
                alt="D.FAITH Logo" 
                width={40} 
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">D.FAITH Ökosystem</h3>
                <p className="text-zinc-400 text-sm">Revolutionäres Fan-Engagement</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://www.dawidfaith.com" className="text-zinc-400 hover:text-white transition-colors">
                Website
              </a>
              <a href="mailto:dawid.faith@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                Kontakt
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500 text-sm">
            <p>&copy; 2025 D.FAITH Ökosystem. Alle Rechte vorbehalten.</p>
            <p className="mt-2">Dieses Whitepaper dient als lebendiges Dokument und wird regelmäßig aktualisiert.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WhitepaperPage
