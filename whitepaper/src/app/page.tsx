'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaChevronDown, 
  FaRocket, 
  FaUsers, 
  FaCoins, 
  FaChartLine, 
  FaGlobe, 
  FaInstagram,
  FaSpotify,
  FaMusic,
  FaArrowRight,
  FaPlay,
  FaPause,
  FaCalculator,
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

const WhitepaperPage = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'problem', 'solution', 'tokenomics', 'tech', 'roadmap', 'team']
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
        <HeroSection onScrollToNext={() => scrollToSection('problem')} />
      </section>

      {/* Fixed Live Stats - rechts oben */}
      <div className="fixed top-20 right-4 z-40 hidden lg:block">
        <LiveStatsFixed />
      </div>

      {/* Problem Section */}
      <section id="problem" className="py-20 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent mb-6">
              Das Problem
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dawid Faith identifizierte diese Kernprobleme in der Musikindustrie
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <FaInstagram className="text-3xl text-purple-500" />,
                title: "Geringe Reichweite",
                description: "Trotz qualitativem Content ist es schwer, organisch neue Follower zu gewinnen"
              },
              {
                icon: <FaChartLine className="text-3xl text-red-500" />,
                title: "Teure Werbung",
                description: "Paid Ads für Reichweite sind kostspielig und nicht immer nachhaltig"
              },
              {
                icon: <FaMusic className="text-3xl text-blue-500" />,
                title: "Fehlendes Kapital",
                description: "Keine Mittel für Musikproduktion, Videos und professionelle Vermarktung"
              },
              {
                icon: <FaUsers className="text-3xl text-green-500" />,
                title: "Schwaches Engagement",
                description: "Fan-Interaktionen bringen keinen direkten Mehrwert für beide Seiten"
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-slate-700/50 rounded-full">
                    {problem.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {problem.title}
                  </h4>
                  <p className="text-gray-400">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
