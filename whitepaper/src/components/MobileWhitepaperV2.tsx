'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useSpring, animated, config } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import Confetti from 'react-confetti'
import { 
  FaRocket, 
  FaCoins, 
  FaLightbulb,
  FaUsers,
  FaCog,
  FaChartLine,
  FaMusic,
  FaHeart,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaEthereum,
  FaTrophy,
  FaGift,
  FaBolt,
  FaArrowRight,
  FaPlay,
  FaPause,
  FaExpand,
  FaStar,
  FaFire
} from 'react-icons/fa'
import Image from 'next/image'

// Enhanced Mobile Components (to be created)
import EnhancedHeroSection from './mobile-v2/EnhancedHeroSection'
import InteractiveTimeline from './mobile-v2/InteractiveTimeline'
import GlassmorphismTokenomics from './mobile-v2/GlassmorphismTokenomics'
import BottomNavigation from './mobile-v2/BottomNavigation'
import FloatingActionButton from './mobile-v2/FloatingActionButton'

interface MobileWhitepaperV2Props {
  tokenPrices: {
    dfaith: number
    dinvest: number
  }
  activeUsers: number
  isLoading: boolean
}

const MobileWhitepaperV2: React.FC<MobileWhitepaperV2Props> = ({ 
  tokenPrices, 
  activeUsers, 
  isLoading 
}) => {
  const [currentSection, setCurrentSection] = useState('hero')
  const [showConfetti, setShowConfetti] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Glasmorphismus Background Animation
  const backgroundSpring = useSpring({
    background: currentSection === 'hero' 
      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))' 
      : currentSection === 'solution'
      ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))'
      : currentSection === 'tokenomics'
      ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))'
      : 'linear-gradient(135deg, rgba(251, 146, 60, 0.1), rgba(239, 68, 68, 0.1))',
    config: config.gentle
  })

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])

  const sections = [
    {
      id: 'hero',
      title: 'D.FAITH Ökosystem',
      icon: <FaRocket className="text-blue-400" />,
      gradient: 'from-blue-500 to-purple-600',
      component: <EnhancedHeroSection tokenPrices={tokenPrices} activeUsers={activeUsers} isLoading={isLoading} />
    },
    {
      id: 'problem',
      title: 'Das Problem',
      icon: <FaBolt className="text-red-400" />,
      gradient: 'from-red-500 to-orange-500',
      component: <ProblemSectionV2 />
    },
    {
      id: 'solution',
      title: 'Die Lösung',
      icon: <FaLightbulb className="text-green-400" />,
      gradient: 'from-green-500 to-emerald-500',
      component: <SolutionSectionV2 />
    },
    {
      id: 'process',
      title: 'Prozess',
      icon: <FaCog className="text-blue-400" />,
      gradient: 'from-blue-500 to-cyan-500',
      component: <InteractiveTimeline />
    },
    {
      id: 'tokenomics',
      title: 'Tokenomics',
      icon: <FaCoins className="text-purple-400" />,
      gradient: 'from-purple-500 to-pink-500',
      component: <GlassmorphismTokenomics tokenPrices={tokenPrices} />
    },
    {
      id: 'team',
      title: 'Team',
      icon: <FaUsers className="text-amber-400" />,
      gradient: 'from-amber-500 to-orange-500',
      component: <TeamSectionV2 />
    }
  ]

  // Intersection Observer für Section Detection
  const [heroRef, heroInView] = useInView({ threshold: 0.5 })
  const [problemRef, problemInView] = useInView({ threshold: 0.5 })
  const [solutionRef, solutionInView] = useInView({ threshold: 0.5 })
  const [processRef, processInView] = useInView({ threshold: 0.5 })
  const [tokenomicsRef, tokenomicsInView] = useInView({ threshold: 0.5 })
  const [teamRef, teamInView] = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (heroInView) setCurrentSection('hero')
    else if (problemInView) setCurrentSection('problem')
    else if (solutionInView) setCurrentSection('solution')
    else if (processInView) setCurrentSection('process')
    else if (tokenomicsInView) setCurrentSection('tokenomics')
    else if (teamInView) setCurrentSection('team')
  }, [heroInView, problemInView, solutionInView, processInView, tokenomicsInView, teamInView])

  // Confetti Trigger
  useEffect(() => {
    if (currentSection === 'tokenomics') {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }, [currentSection])

  return (
    <animated.div 
      ref={containerRef}
      style={backgroundSpring}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.1}
        />
      )}

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/2 -left-40 w-60 h-60 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Main Content */}
      <div className="relative z-10 pb-20">
        {/* Hero Section */}
        <section ref={heroRef} data-section="hero" className="min-h-screen">
          {sections[0].component}
        </section>

        {/* Problem Section */}
        <section ref={problemRef} data-section="problem" className="min-h-screen">
          {sections[1].component}
        </section>

        {/* Solution Section */}
        <section ref={solutionRef} data-section="solution" className="min-h-screen">
          {sections[2].component}
        </section>

        {/* Process Section */}
        <section ref={processRef} data-section="process" className="min-h-screen">
          {sections[3].component}
        </section>

        {/* Tokenomics Section */}
        <section ref={tokenomicsRef} data-section="tokenomics" className="min-h-screen">
          {sections[4].component}
        </section>

        {/* Team Section */}
        <section ref={teamRef} data-section="team" className="min-h-screen">
          {sections[5].component}
        </section>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        sections={sections}
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />

      {/* Floating Action Button */}
      <FloatingActionButton 
        onToggleInvestment={() => setShowConfetti(true)}
      />
    </animated.div>
  )
}

// Enhanced Problem Section Component
const ProblemSectionV2: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  
  const problems = [
    {
      title: "Geringe Reichweite",
      level: "HOCH",
      color: "red",
      icon: <FaBolt className="text-red-500" />,
      description: "Qualitätsvoller Content erreicht nicht genug Menschen organisch",
      impact: "Wenige neue Follower trotz gutem Content"
    },
    {
      title: "Teure Werbung",
      level: "HOCH", 
      color: "red",
      icon: <FaCoins className="text-red-500" />,
      description: "Paid Ads kosten viel, bringen aber nicht nachhaltige Fans",
      impact: "Hohe Kosten ohne garantierte ROI"
    },
    {
      title: "Fehlendes Kapital",
      level: "MITTEL",
      color: "orange",
      icon: <FaChartLine className="text-orange-500" />,
      description: "Keine Mittel für Musikproduktion und professionelle Videos",
      impact: "Limitierte Produktionsqualität"
    },
    {
      title: "Schwaches Engagement",
      level: "NIEDRIG",
      color: "yellow",
      icon: <FaHeart className="text-yellow-500" />,
      description: "Fan-Interaktionen bringen keinen direkten Mehrwert",
      impact: "Oberflächliche Fan-Beziehungen"
    }
  ]

  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
          Das Problem
        </h2>
        <p className="text-gray-300 text-lg">
          Zentrale Herausforderungen für unabhängige Künstler
        </p>
      </motion.div>

      {/* Dawid Faith Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 mb-8 border border-white/20"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <Image
              src="/dawid-faith-photo.jpg"
              alt="Dawid Faith"
              width={60}
              height={60}
              className="rounded-full border-2 border-red-500/50"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <FaMusic className="text-white text-xs" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-red-400 text-lg">Dawid Faith</h4>
            <p className="text-gray-400 text-sm">Gründer & Künstler</p>
          </div>
        </div>
        <p className="text-white leading-relaxed italic">
          &quot;Als unabhängiger Künstler stehe ich vor den gleichen Problemen wie viele andere: 
          Mein Content bekommt nicht die Reichweite, die er verdient. Bezahlte Werbung ist teuer 
          und zeitintensiv - und das Geld habe ich nicht. Außerdem fehlt mir das Kapital für 
          Musikproduktion. Deshalb entwickelte ich D.FAITH: um Fans direkt für ihr Engagement 
          zu belohnen und gleichzeitig Kapital für meine Musik zu generieren.&quot;
        </p>
      </motion.div>

      {/* Problems Grid */}
      <div className="space-y-4">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className="backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {problem.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h5 className="font-bold text-white">{problem.title}</h5>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    problem.color === 'red' ? 'bg-red-500/20 text-red-300' :
                    problem.color === 'orange' ? 'bg-orange-500/20 text-orange-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {problem.level}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-2">{problem.description}</p>
                <p className="text-gray-400 text-xs">Impact: {problem.impact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Teufelskreis */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-8 backdrop-blur-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-6 border border-red-500/20"
      >
        <h4 className="text-lg font-bold text-red-400 mb-3 text-center">Der Teufelskreis</h4>
        <div className="text-center text-sm text-gray-300 leading-relaxed">
          <span className="text-red-300">Ohne Reichweite kein Engagement</span>
          <FaArrowRight className="inline mx-2 text-red-400" />
          <span className="text-orange-300">Ohne Engagement keine neuen Fans</span>
          <FaArrowRight className="inline mx-2 text-orange-400" />
          <span className="text-yellow-300">Ohne Fans kein Einkommen</span>
          <FaArrowRight className="inline mx-2 text-yellow-400" />
          <span className="text-green-300">Ohne Einkommen keine Investition</span>
          <FaArrowRight className="inline mx-2 text-green-400" />
          <span className="text-blue-300">Ohne besseren Content keine Reichweite</span>
        </div>
      </motion.div>
    </div>
  )
}

// Enhanced Solution Section Component
const SolutionSectionV2: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  
  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
          Die D.FAITH Revolution
        </h2>
        <p className="text-gray-300 text-lg">
          Intelligentes Dual-Token-System durchbricht den Teufelskreis
        </p>
      </motion.div>

      {/* Token Cards */}
      <div className="space-y-6">
        {/* D.FAITH Token */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-3xl p-6 border border-amber-500/30"
        >
          <div className="flex items-center gap-4 mb-4">
            <Image src="/d-faith-logo.png" alt="D.FAITH" width={50} height={50} className="rounded-xl" />
            <div>
              <h3 className="text-xl font-bold text-amber-400">D.FAITH Token</h3>
              <p className="text-amber-300/70">Fan-Belohnungstoken</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[
              { action: "Like", exp: "10 EXP", icon: <FaHeart className="text-red-400" /> },
              { action: "Kommentar", exp: "10 EXP", icon: <FaMusic className="text-blue-400" /> },
              { action: "Share", exp: "10 EXP", icon: <FaRocket className="text-green-400" /> },
              { action: "Live-Konzert", exp: "150 EXP", icon: <FaStar className="text-purple-400" /> }
            ].map((reward, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="backdrop-blur-sm bg-white/5 rounded-xl p-3 text-center border border-white/10"
              >
                <div className="flex justify-center mb-2">{reward.icon}</div>
                <p className="text-white font-semibold text-sm">{reward.action}</p>
                <p className="text-amber-300 text-xs">{reward.exp}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* D.INVEST Token */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-6 border border-purple-500/30"
        >
          <div className="flex items-center gap-4 mb-4">
            <Image src="/d-invest-logo.png" alt="D.INVEST" width={50} height={50} className="rounded-xl" />
            <div>
              <h3 className="text-xl font-bold text-purple-400">D.INVEST Token</h3>
              <p className="text-purple-300/70">Investment-Token</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Preis:</span>
              <span className="font-bold text-purple-400">5,00€</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Supply:</span>
              <span className="font-bold text-purple-400">10.000 Token</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Staking Rate:</span>
              <span className="font-bold text-purple-400">0,1 D.FAITH/Woche</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Core Idea */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 backdrop-blur-xl bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-500/20"
      >
        <h4 className="text-lg font-bold text-green-400 mb-3 text-center flex items-center justify-center gap-2">
          <FaStar /> Die Kernidee <FaStar />
        </h4>
        <p className="text-center text-gray-300 leading-relaxed">
          <span className="text-red-300 font-semibold">Statt Geld für Werbung auszugeben</span>, 
          investiert Dawid Faith direkt in <span className="text-green-300 font-semibold">Fan-Belohnungen</span>. 
          Fans werden für ihr Engagement bezahlt, wodurch sie <span className="text-blue-300 font-semibold">motivierter</span> sind zu interagieren. 
          Mehr Engagement = bessere Reichweite = mehr neue Fans = <span className="text-purple-300 font-semibold">selbstverstärkender Kreislauf</span>.
        </p>
      </motion.div>
    </div>
  )
}

// Enhanced Team Section Component
const TeamSectionV2: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  
  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
          Team
        </h2>
        <p className="text-gray-300 text-lg">
          Die Visionäre hinter D.FAITH
        </p>
      </motion.div>

      {/* Dawid Faith Profile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="backdrop-blur-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl p-8 border border-amber-500/30"
      >
        <div className="text-center mb-6">
          <div className="relative inline-block">
            <Image
              src="/dawid-faith-photo.jpg"
              alt="Dawid Faith"
              width={120}
              height={120}
              className="rounded-full border-4 border-amber-500/50 mx-auto"
            />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
              <FaMusic className="text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-amber-400 mt-4">Dawid Faith</h3>
          <p className="text-amber-300/70 mb-4">Gründer, Entwickler & Künstler</p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { skill: "Blockchain", level: 95, icon: <FaEthereum /> },
            { skill: "Musik", level: 90, icon: <FaMusic /> },
            { skill: "Business", level: 85, icon: <FaChartLine /> },
            { skill: "Marketing", level: 80, icon: <FaRocket /> }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-3 border border-white/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-400">{item.icon}</span>
                <span className="text-white font-semibold text-sm">{item.skill}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${item.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  className="h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                />
              </div>
              <p className="text-amber-300 text-xs mt-1 text-right">{item.level}%</p>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {[
            { icon: <FaInstagram />, label: "Instagram", color: "text-pink-400" },
            { icon: <FaTiktok />, label: "TikTok", color: "text-gray-300" },
            { icon: <FaFacebook />, label: "Facebook", color: "text-blue-400" }
          ].map((social, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 ${social.color} hover:bg-white/10 transition-all duration-300`}
            >
              {social.icon}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default MobileWhitepaperV2