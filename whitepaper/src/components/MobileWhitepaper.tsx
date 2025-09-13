'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaRocket, 
  FaCoins, 
  FaRoad,
  FaLightbulb,
  FaShieldAlt,
  FaUser,
  FaPlay,
  FaHeart,
  FaInstagram,
  FaMusic,
  FaWallet,
  FaCrown,
  FaArrowUp,
  FaTrophy,
  FaChartLine,
  FaLock,
  FaFireAlt,
  FaDollarSign,
  FaPercent,
  FaCalendarAlt,
  FaLayerGroup,
  FaCode,
  FaCheck,
  FaSpinner,
  FaExclamationTriangle,
  FaGift,
  FaBolt,
  FaStore
} from 'react-icons/fa'
import Image from 'next/image'

// Import mobile components
import MobileHeroSection from './mobile/MobileHeroSection'
import MobileTeamSection from './mobile/MobileTeamSection'
import MobileTokenomicsChart from './mobile/MobileTokenomicsChart'
import MobileTechSection from './mobile/MobileTechSection'

const MobileWhitepaper = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [tokenPrices, setTokenPrices] = useState({
    dfaith: 0,
    dinvest: 5.00
  })
  const [activeUsers, setActiveUsers] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch live data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pricesResponse, leaderboardResponse] = await Promise.allSettled([
          fetch('/api/token-prices'),
          fetch('/api/leaderboard').catch(() => fetch('https://leaderboard-pi-liard.vercel.app/api/leaderboard'))
        ])
        
        if (pricesResponse.status === 'fulfilled' && pricesResponse.value.ok) {
          const pricesData = await pricesResponse.value.json()
          if (pricesData.tokens?.dfaith) {
            setTokenPrices({
              dfaith: pricesData.tokens.dfaith.price_eur,
              dinvest: 5.00
            })
          }
        }
        
        if (leaderboardResponse.status === 'fulfilled' && leaderboardResponse.value.ok) {
          const leaderData = await leaderboardResponse.value.json()
          const usersCount = leaderData.stats?.activeUsers || leaderData.entries?.length || 8
          setActiveUsers(usersCount)
        }
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const sections = [
    {
      id: 'hero',
      title: 'Projekt-Übersicht',
      icon: <FaRocket className="text-amber-400" />,
      component: <MobileHeroSection tokenPrices={tokenPrices} activeUsers={activeUsers} isLoading={isLoading} />
    },
    {
      id: 'problem',
      title: 'Das Problem',
      icon: <FaExclamationTriangle className="text-red-400" />,
      component: (
        <div className="space-y-6">
          {/* Dawid Faith Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-2xl p-6 border border-red-500/30">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/dawid-faith-photo.jpg"
                  alt="Dawid Faith"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-red-500/50"
                />
                <div>
                  <h4 className="font-bold text-red-400 text-lg">Dawid Faith</h4>
                  <p className="text-gray-400 text-sm">Gründer & Künstler</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="text-6xl text-red-400/30 absolute -top-4 -left-2">"</div>
                <p className="text-gray-300 text-sm leading-relaxed pl-6">
                  Als unabhängiger Künstler stehe ich vor den gleichen Problemen wie viele andere: 
                  Mein Content bekommt nicht die Reichweite, die er verdient. Bezahlte Werbung ist 
                  teuer und zeitintensiv - und das Geld habe ich nicht. Außerdem fehlt mir das 
                  Kapital für Musikproduktion. Deshalb entwickelte ich D.FAITH: um Fans direkt 
                  für ihr Engagement zu belohnen und gleichzeitig Kapital für meine Musik zu generieren.
                </p>
                <div className="text-6xl text-red-400/30 absolute -bottom-6 -right-2 rotate-180">"</div>
              </div>
            </div>
          </motion.div>

          {/* Problem Breakdown */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Die vier Hauptprobleme:</h4>
            
            {[
              {
                title: "Geringe Reichweite",
                severity: "HOCH",
                color: "red",
                icon: FaChartLine,
                description: "Qualitätsvoller Content erreicht nicht genug Menschen organisch",
                impact: "Wenige neue Follower trotz gutem Content"
              },
              {
                title: "Teure Werbung",
                severity: "HOCH", 
                color: "red",
                icon: FaDollarSign,
                description: "Paid Ads kosten viel, bringen aber nicht nachhaltige Fans",
                impact: "Hohe Kosten ohne garantierte ROI"
              },
              {
                title: "Fehlendes Kapital",
                severity: "MITTEL",
                color: "orange",
                icon: FaWallet,
                description: "Keine Mittel für Musikproduktion und professionelle Videos",
                impact: "Limitierte Produktionsqualität"
              },
              {
                title: "Schwaches Engagement",
                severity: "NIEDRIG",
                color: "yellow",
                icon: FaHeart,
                description: "Fan-Interaktionen bringen keinen direkten Mehrwert",
                impact: "Oberflächliche Fan-Beziehungen"
              }
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-r from-${problem.color}-900/30 to-${problem.color}-800/20 rounded-2xl p-4 border border-${problem.color}-500/30`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <problem.icon className={`text-${problem.color}-400 text-lg`} />
                    <span className="font-bold text-white">{problem.title}</span>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full bg-${problem.color}-500/20 text-${problem.color}-400 font-bold`}>
                    🔴 {problem.severity}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-2">{problem.description}</p>
                <p className="text-gray-500 text-xs">
                  <strong>Impact:</strong> {problem.impact}
                </p>
              </motion.div>
            ))}
          </div>

          {/* The Vicious Circle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-2xl p-6 border border-red-500/30"
          >
            <h4 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
              <FaBolt className="text-red-400" />
              Der Teufelskreis
            </h4>
            <div className="space-y-3">
              {[
                "Ohne Reichweite kein Engagement",
                "Ohne Engagement keine neuen Fans", 
                "Ohne Fans kein Einkommen",
                "Ohne Einkommen keine Investition in besseren Content",
                "Ohne besseren Content keine Reichweite"
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-300 text-sm">{step}</span>
                  {index < 4 && <FaArrowUp className="text-red-400/50 text-xs rotate-90" />}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 'solution',
      title: 'Die Lösung',
      icon: <FaLightbulb className="text-green-400" />,
      component: (
        <div className="space-y-6">
          {/* Solution Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-6 border border-green-500/30 text-center"
          >
            <h4 className="text-2xl font-bold text-green-400 mb-3">Die D.FAITH Revolution</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Intelligentes Dual-Token-System, das den Teufelskreis durchbricht und eine 
              Win-Win-Situation für Künstler, Fans und Investoren schafft.
            </p>
          </motion.div>

          {/* Token Explanation */}
          <div className="space-y-4">
            {/* D.FAITH Token */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-amber-900/30 to-yellow-900/30 rounded-2xl p-5 border border-amber-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image src="/d-faith-logo.png" alt="D.FAITH" width={40} height={40} className="rounded-lg" />
                <div>
                  <h5 className="font-bold text-amber-400 text-lg">D.FAITH Token</h5>
                  <p className="text-amber-300/70 text-sm">Fan-Belohnungstoken</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { action: "Like", exp: "10 EXP", icon: FaHeart },
                  { action: "Kommentar", exp: "10 EXP", icon: FaMusic },
                  { action: "Share", exp: "10 EXP", icon: FaRocket },
                  { action: "Live-Konzert", exp: "150 EXP", icon: FaCrown }
                ].map((reward, index) => (
                  <div key={reward.action} className="bg-amber-800/30 rounded-lg p-3 text-center">
                    <reward.icon className="text-amber-400 mx-auto mb-1" />
                    <div className="text-xs text-amber-300 font-medium">{reward.action}</div>
                    <div className="text-xs text-amber-200">{reward.exp}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-amber-800/20 rounded-lg p-3">
                <h6 className="font-bold text-amber-400 text-sm mb-1">Verwendung:</h6>
                <p className="text-amber-200 text-xs">
                  • ETH-Tausch auf DEX<br />
                  • Exklusive Shop-Artikel<br />
                  • Früher Zugang zu neuen Songs
                </p>
              </div>
            </motion.div>

            {/* D.INVEST Token */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-5 border border-blue-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image src="/d-invest-logo.png" alt="D.INVEST" width={40} height={40} className="rounded-lg" />
                <div>
                  <h5 className="font-bold text-blue-400 text-lg">D.INVEST Token</h5>
                  <p className="text-blue-300/70 text-sm">Investment Token (5€)</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-3 mb-4">
                <div className="bg-blue-800/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-300 text-sm">Entsperrt gesperrte D.FAITH:</span>
                    <span className="text-blue-400 font-bold">80.000 Token</span>
                  </div>
                </div>
                <div className="bg-blue-800/30 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-300 text-sm">Staking-Rewards:</span>
                    <span className="text-blue-400 font-bold">0,1 D.FAITH/Woche</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-800/20 rounded-lg p-3">
                <h6 className="font-bold text-blue-400 text-sm mb-1">Zweck:</h6>
                <p className="text-blue-200 text-xs">
                  Kapitalbeschaffung für professionelle Musikproduktion und bessere Content-Qualität
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Concept */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/30"
          >
            <h4 className="font-bold text-purple-400 text-lg mb-3 flex items-center gap-2">
              <FaGift className="text-purple-400" />
              Die Kernidee
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              <strong className="text-white">Statt Geld für Werbung auszugeben</strong>, investiert Dawid Faith 
              direkt in <strong className="text-purple-400">Fan-Belohnungen</strong>. Fans werden für ihr 
              Engagement bezahlt, wodurch sie <strong className="text-green-400">motivierter</strong> sind 
              zu interagieren.
            </p>
            <div className="bg-purple-800/20 rounded-lg p-3">
              <div className="text-center text-sm text-purple-300">
                Mehr Engagement = Bessere Reichweite = Mehr neue Fans = 
                <span className="text-green-400 font-bold"> Selbstverstärkender Kreislauf</span>
              </div>
            </div>
          </motion.div>

          {/* Ecosystem Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4"
          >
            <h4 className="font-bold text-white text-lg">Ökosystem Features:</h4>
            
            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  title: "Social Media Integration",
                  description: "Instagram, TikTok, Facebook - Automatisches Tracking",
                  icon: FaInstagram,
                  color: "pink"
                },
                {
                  title: "D.FAITH Exklusiv Shop",
                  description: "Neue Songs, Merchandise, Konzert-Tickets",
                  icon: FaStore,
                  color: "amber"
                },
                {
                  title: "Live Konzerte",
                  description: "150 EXP pro Konzert-Code, höchste Belohnung",
                  icon: FaMusic,
                  color: "purple"
                },
                {
                  title: "Wallet & Trading",
                  description: "D.FAITH kaufen/verkaufen, D.INVEST Staking",
                  icon: FaWallet,
                  color: "blue"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                  className={`bg-gradient-to-r from-${feature.color}-900/30 to-${feature.color}-800/20 rounded-xl p-4 border border-${feature.color}-500/30`}
                >
                  <div className="flex items-center gap-3">
                    <feature.icon className={`text-${feature.color}-400 text-xl`} />
                    <div>
                      <h6 className={`font-bold text-${feature.color}-400`}>{feature.title}</h6>
                      <p className="text-gray-400 text-xs">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Win-Win-Win */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl p-6 border border-green-500/30"
          >
            <h4 className="font-bold text-green-400 text-lg mb-4 text-center">Win-Win-Win Situation</h4>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  group: "Fans",
                  emoji: "❤️",
                  benefits: ["Verdienen durch natürliches Engagement", "Exklusive Vorteile", "Frühe Zugänge"],
                  color: "red"
                },
                {
                  group: "Dawid Faith", 
                  emoji: "🎤",
                  benefits: ["Nachhaltige Finanzierung", "Organisches Wachstum", "Stärkere Fan-Bindung"],
                  color: "amber"
                },
                {
                  group: "Investoren",
                  emoji: "💎", 
                  benefits: ["Hohe Renditen möglich", "Partizipation am Erfolg", "Transparente Investments"],
                  color: "blue"
                }
              ].map((group, index) => (
                <div key={group.group} className={`bg-${group.color}-900/20 rounded-xl p-4 border border-${group.color}-500/30`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{group.emoji}</span>
                    <h6 className={`font-bold text-${group.color}-400`}>{group.group}</h6>
                  </div>
                  <div className="space-y-1">
                    {group.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <FaCheck className="text-green-400 text-xs" />
                        <span className="text-gray-300 text-xs">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 'tokenomics',
      title: 'Tokenomics',
      icon: <FaCoins className="text-purple-400" />,
      component: <MobileTokenomicsChart tokenPrices={tokenPrices} />
    },
    {
      id: 'tech',
      title: 'Technische Architektur',
      icon: <FaShieldAlt className="text-blue-400" />,
      component: <MobileTechSection />
    },
    {
      id: 'team',
      title: 'Team',
      icon: <FaUser className="text-cyan-400" />,
      component: <MobileTeamSection />
    },
    {
      id: 'roadmap',
      title: 'Roadmap',
      icon: <FaRoad className="text-cyan-400" />,
      component: (
        <div className="space-y-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Roadmap</h3>
            <p className="text-gray-400 text-sm">Strategische Entwicklung mit klaren Meilensteinen</p>
          </motion.div>

          {/* Roadmap Phases */}
          <div className="space-y-4">
            {[
              {
                phase: "Phase 1: Foundation",
                period: "Q4 2025",
                status: "completed",
                progress: 100,
                color: "green",
                milestones: [
                  "Smart Contracts entwickelt & deployed",
                  "D.FAITH & D.INVEST Token live",
                  "Staking System mit 6 Stufen",
                  "Social Media Integration",
                  "Vollständige Wallet Implementation"
                ]
              },
              {
                phase: "Phase 2: Community Building",
                period: "Q1 2026",
                status: "in-progress",
                progress: 70,
                color: "blue",
                milestones: [
                  "✅ Live Webapp mit allen Features",
                  "✅ Instagram/TikTok Integration",
                  "✅ Live-Event Integration", 
                  "🔄 Marketing-Kampagne",
                  "🔄 774 → 5K Follower Ziel"
                ]
              },
              {
                phase: "Phase 3: Expansion",
                period: "Q2-Q3 2026",
                status: "planned",
                progress: 0,
                color: "purple",
                milestones: [
                  "Spotify API Integration",
                  "Partnerships mit anderen Künstlern",
                  "NFT-Integration (Pilot)",
                  "Advanced Analytics Dashboard"
                ]
              },
              {
                phase: "Phase 4: Ecosystem",
                period: "Q4 2026 - Q1 2027",
                status: "future",
                progress: 0,
                color: "amber",
                milestones: [
                  "Multi-Artist Platform",
                  "Eigene Streaming-Platform (Beta)",
                  "Advanced Governance Features",
                  "Internationale Expansion"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-r from-${phase.color}-900/30 to-${phase.color}-800/20 rounded-2xl border border-${phase.color}-500/30 overflow-hidden`}
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className={`font-bold text-${phase.color}-400 text-lg`}>{phase.phase}</h4>
                      <p className="text-gray-400 text-sm">{phase.period}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold text-${phase.color}-400`}>{phase.progress}%</div>
                      <div className="text-xs text-gray-400">
                        {phase.status === 'completed' && '✅ Abgeschlossen'}
                        {phase.status === 'in-progress' && '🔄 Aktiv'}
                        {phase.status === 'planned' && '📋 Geplant'}
                        {phase.status === 'future' && '🔮 Zukunft'}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-zinc-700 rounded-full h-2 mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${phase.progress}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                      className={`bg-gradient-to-r from-${phase.color}-500 to-${phase.color}-600 h-2 rounded-full`}
                    ></motion.div>
                  </div>

                  {/* Milestones */}
                  <div className="space-y-2">
                    {phase.milestones.map((milestone, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        {milestone.startsWith('✅') ? (
                          <FaCheck className="text-green-400 text-xs" />
                        ) : milestone.startsWith('🔄') ? (
                          <FaSpinner className="text-blue-400 text-xs animate-spin" />
                        ) : (
                          <div className={`w-2 h-2 bg-${phase.color}-400 rounded-full`}></div>
                        )}
                        <span className="text-gray-300 text-sm">{milestone.replace(/^(✅|🔄)\s/, '')}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 border border-cyan-500/30"
          >
            <h4 className="font-bold text-cyan-400 text-lg mb-4 flex items-center gap-2">
              <FaRocket className="text-cyan-400" />
              Aktueller Fokus
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: "774 → 5K", subtitle: "Instagram Follower", icon: FaInstagram, color: "pink" },
                { title: "Live Events", subtitle: "Konzert Integration", icon: FaMusic, color: "purple" },
                { title: "Marketing", subtitle: "Große Kampagne", icon: FaRocket, color: "amber" }
              ].map((focus, index) => (
                <motion.div
                  key={focus.title}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-${focus.color}-900/30 rounded-xl p-4 border border-${focus.color}-500/30 text-center`}
                >
                  <focus.icon className={`text-${focus.color}-400 text-xl mx-auto mb-2`} />
                  <div className={`font-bold text-${focus.color}-400 text-sm`}>{focus.title}</div>
                  <div className="text-gray-400 text-xs">{focus.subtitle}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-6 border border-purple-500/30 text-center"
          >
            <h4 className="font-bold text-purple-400 text-lg mb-3">Langfristige Vision</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Eine revolutionäre Creator Economy Platform schaffen, die das Verhältnis zwischen 
              Künstlern, Fans und Investoren fundamental verändert und nachhaltiges Wachstum 
              für alle Beteiligten ermöglicht.
            </p>
          </motion.div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Sticky Header */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="sticky top-0 z-50 bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-800/50"
      >
        <div className="p-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <Image
                  src="/d-faith-logo.png"
                  alt="D.FAITH Logo"
                  width={40}
                  height={40}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-purple-500 to-blue-500 rounded-xl blur-sm opacity-30"></div>
              </div>
              <div>
                <h1 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-400 to-blue-400">
                  D.FAITH
                </h1>
                <p className="text-xs text-gray-400">Mobile Whitepaper</p>
              </div>
            </motion.div>

            {/* Live Indicator */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs border border-green-500/30"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Live
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section - Always Visible */}
        <div className="p-4">
          <MobileHeroSection tokenPrices={tokenPrices} activeUsers={activeUsers} isLoading={isLoading} />
        </div>

        {/* Accordion Sections */}
        <div className="p-4 space-y-4">
          {sections.slice(1).map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-zinc-800/40 backdrop-blur-xl rounded-2xl border border-zinc-700/50 overflow-hidden shadow-2xl">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-5 flex items-center justify-between text-left relative"
                >
                  {/* Button Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <motion.div
                      animate={expandedSection === section.id ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-xl"
                    >
                      {section.icon}
                    </motion.div>
                    <div>
                      <span className="font-bold text-white text-lg">{section.title}</span>
                      <div className="text-gray-400 text-xs mt-1">
                        {section.id === 'problem' && 'Herausforderungen für Künstler'}
                        {section.id === 'solution' && 'Revolutionäres Dual-Token-System'}
                        {section.id === 'tokenomics' && 'Token-Ökonomie & ROI-Analyse'}
                        {section.id === 'tech' && 'Live Smart Contracts auf Base Chain'}
                        {section.id === 'team' && 'Dawid Faith & Vision'}
                        {section.id === 'roadmap' && 'Strategische Entwicklungsphasen'}
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    animate={expandedSection === section.id ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <FaChevronDown className="text-gray-400 text-lg" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-zinc-700/30">
                        {section.component}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="p-4 mt-8"
        >
          <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl p-6 border border-blue-500/30 backdrop-blur-xl">
            <div className="text-center">
              <motion.h3 
                className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Bereit für die Revolution?
              </motion.h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Werde Teil des ersten Blockchain-basierten Fan-Engagement-Systems
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black font-bold py-4 px-6 rounded-2xl text-sm shadow-lg"
                >
                  <div className="flex items-center justify-center gap-2">
                    <FaHeart />
                    Fan werden
                  </div>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white font-bold py-4 px-6 rounded-2xl text-sm shadow-lg"
                >
                  <div className="flex items-center justify-center gap-2">
                    <FaTrophy />
                    Investieren
                  </div>
                </motion.button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mb-6">
                {[
                  { icon: FaInstagram, color: 'pink', name: 'Instagram' },
                  { icon: FaMusic, color: 'purple', name: 'TikTok' },
                  { icon: FaWallet, color: 'blue', name: 'Webapp' }
                ].map((social, index) => (
                  <motion.button
                    key={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-${social.color}-500/20 text-${social.color}-400 rounded-xl border border-${social.color}-500/30`}
                  >
                    <social.icon />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center text-gray-500 text-xs pb-8 px-4"
        >
          <div className="space-y-2">
            <p className="flex items-center justify-center gap-2">
              <FaRocket className="text-green-400" />
              D.FAITH Ökosystem - Live auf Base Chain
            </p>
            <p className="text-gray-600">© 2025 Dawid Faith. Alle Rechte vorbehalten.</p>
            <div className="flex items-center justify-center gap-4 mt-4 text-xs">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Smart Contracts Live
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                APIs Operational
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                Community Active
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MobileWhitepaper