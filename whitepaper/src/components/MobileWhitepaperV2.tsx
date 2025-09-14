'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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
  FaBolt,
  FaArrowRight,
  FaMobileAlt
} from 'react-icons/fa'
import Image from 'next/image'

// Enhanced Mobile Components (to be created)
import EnhancedHeroSection from './mobile-v2/EnhancedHeroSection'
import InteractiveTimeline from './mobile-v2/InteractiveTimeline'
import GlassmorphismTokenomics from './mobile-v2/GlassmorphismTokenomics'
import WebappShowcase from './mobile-v2/WebappShowcase'
import BottomNavigation from './mobile-v2/BottomNavigation'
import TeamSectionV3 from './mobile-v2/TeamSectionV3'
import RoadmapTimelineV2 from './mobile-v2/RoadmapTimelineV2'

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
      component: <EnhancedHeroSection />
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
      id: 'webapp',
      title: 'Webapp',
      icon: <FaMobileAlt className="text-cyan-400" />,
      gradient: 'from-cyan-500 to-blue-500',
      component: <WebappShowcase />
    },
    {
      id: 'team',
      title: 'Team',
      icon: <FaUsers className="text-amber-400" />,
      gradient: 'from-amber-500 to-orange-500',
      component: <TeamSectionV3 />
    },
    {
      id: 'roadmap',
      title: 'Roadmap',
      icon: <FaChartLine className="text-cyan-400" />,
      gradient: 'from-cyan-500 to-purple-500',
      component: <RoadmapTimelineV2 />
    }
  ]

  // Intersection Observer für Section Detection
  const [heroRef, heroInView] = useInView({ threshold: 0.5 })
  const [problemRef, problemInView] = useInView({ threshold: 0.5 })
  const [solutionRef, solutionInView] = useInView({ threshold: 0.5 })
  const [processRef, processInView] = useInView({ threshold: 0.5 })
  const [tokenomicsRef, tokenomicsInView] = useInView({ threshold: 0.5 })
  const [webappRef, webappInView] = useInView({ threshold: 0.5 })
  const [teamRef, teamInView] = useInView({ threshold: 0.5 })
  const [roadmapRef, roadmapInView] = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (heroInView) setCurrentSection('hero')
    else if (problemInView) setCurrentSection('problem')
    else if (solutionInView) setCurrentSection('solution')
    else if (processInView) setCurrentSection('process')
    else if (tokenomicsInView) setCurrentSection('tokenomics')
    else if (webappInView) setCurrentSection('webapp')
    else if (teamInView) setCurrentSection('team')
    else if (roadmapInView) setCurrentSection('roadmap')
  }, [heroInView, problemInView, solutionInView, processInView, tokenomicsInView, webappInView, teamInView, roadmapInView])

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

        {/* Webapp Section */}
        <section ref={webappRef} data-section="webapp" className="min-h-screen">
          {sections[5].component}
        </section>

        {/* Team Section */}
        <section ref={teamRef} data-section="team" className="min-h-screen">
          {sections[6].component}
        </section>

        {/* Roadmap Section */}
        <section ref={roadmapRef} data-section="roadmap" className="min-h-screen">
          {sections[7].component}
        </section>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        sections={sections}
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
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
        <h4 className="text-lg font-bold text-red-400 mb-6 text-center">Der Teufelskreis</h4>
        
        {/* Circular Visualization */}
        <div className="relative w-80 h-80 mx-auto mb-4">
          <svg viewBox="0 0 320 320" className="w-full h-full">
            {/* Background Circle */}
            <circle
              cx="160"
              cy="160"
              r="120"
              fill="none"
              stroke="rgba(239, 68, 68, 0.2)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            
            {/* Animated Circle Path */}
            <motion.circle
              cx="160"
              cy="160"
              r="120"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 3, delay: 1.2 }}
            />
            
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="25%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="75%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            
            {/* Problem Nodes */}
            {[
              { x: 160, y: 40, text: 'Geringe\nReichweite', color: '#ef4444', angle: 0 },
              { x: 264, y: 104, text: 'Schwaches\nEngagement', color: '#f97316', angle: 72 },
              { x: 264, y: 216, text: 'Keine\nneuen Fans', color: '#eab308', angle: 144 },
              { x: 160, y: 280, text: 'Kein\nEinkommen', color: '#22c55e', angle: 216 },
              { x: 56, y: 216, text: 'Keine\nInvestition', color: '#3b82f6', angle: 288 },
              { x: 56, y: 104, text: 'Schlechter\nContent', color: '#8b5cf6', angle: 360 }
            ].map((node, index) => (
              <g key={index}>
                <motion.rect
                  x={node.x - 35}
                  y={node.y - 18}
                  width="70"
                  height="36"
                  rx="8"
                  fill={node.color}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 0.9 } : {}}
                  transition={{ duration: 0.6, delay: 1.5 + index * 0.2 }}
                />
                <motion.text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-white text-xs font-bold"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                >
                  {node.text.split('\n').map((line, lineIndex) => (
                    <tspan key={lineIndex} x={node.x} dy={lineIndex === 0 ? -4 : 10}>
                      {line}
                    </tspan>
                  ))}
                </motion.text>
              </g>
            ))}
            
          </svg>
          
          {/* Center Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center bg-black/40 backdrop-blur-sm rounded-full p-4 border border-red-500/30">
              <div className="text-red-400 font-bold text-sm">TEUFELSKREIS</div>
              <div className="text-gray-300 text-xs">Endlose Schleife</div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom explanation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="text-center text-sm text-gray-400 leading-relaxed"
        >
          Jeder Punkt verstärkt den nächsten in einem endlosen Kreislauf der Stagnation.
          <br />
          <span className="text-red-300 font-semibold">D.FAITH durchbricht diesen Kreislauf!</span>
        </motion.p>
      </motion.div>
    </div>
  )
}

// Enhanced Solution Section Component
const SolutionSectionV2: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  
  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
            <FaLightbulb className="text-2xl text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-4">
          Die D.FAITH Revolution
        </h2>
        <p className="text-gray-300 text-lg">
          Ein intelligentes Dual-Token-System, das den Teufelskreis durchbricht und eine Win-Win-Situation für Künstler und Fans schafft
        </p>
      </motion.div>

      {/* Token Cards */}
      <div className="space-y-6 mb-8">
        {/* D.FAITH Token */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl p-6 border border-amber-500/30"
        >
          <div className="flex items-center gap-4 mb-6">
            <Image src="/d-faith-logo.png" alt="D.FAITH Logo" width={60} height={60} className="rounded-xl" />
            <div>
              <h3 className="text-2xl font-bold text-amber-400">D.FAITH</h3>
              <p className="text-amber-300">Fan-Belohnungstoken</p>
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <FaUsers className="text-amber-400" />
              <span className="text-gray-300 text-sm">Belohnt treue Fans für ihr Engagement</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCoins className="text-amber-400" />
              <span className="text-gray-300 text-sm">Kann in ETH getauscht oder im Shop verwendet werden</span>
            </div>
            <div className="flex items-center gap-3">
              <FaChartLine className="text-amber-400" />
              <span className="text-gray-300 text-sm">Wertsteigerung durch Verknappung</span>
            </div>
          </div>
        </motion.div>

        {/* D.INVEST Token */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-6 border border-blue-500/30"
        >
          <div className="flex items-center gap-4 mb-6">
            <Image src="/d-invest-logo.png" alt="D.INVEST Logo" width={60} height={60} className="rounded-xl" />
            <div>
              <h3 className="text-2xl font-bold text-blue-400">D.INVEST</h3>
              <p className="text-blue-300">Investitions-Token</p>
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <FaCoins className="text-blue-400" />
              <span className="text-gray-300 text-sm">Ermöglicht Kapitalbeschaffung für Musikproduktion</span>
            </div>
            <div className="flex items-center gap-3">
              <FaChartLine className="text-blue-400" />
              <span className="text-gray-300 text-sm">Entsperrt gesperrte D.FAITH Token durch Staking</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUsers className="text-blue-400" />
              <span className="text-gray-300 text-sm">Investoren profitieren von steigenden D.FAITH Preisen</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Kernidee */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="backdrop-blur-xl bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-6 border border-green-500/30"
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            💡 Die Kernidee
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <span className="font-bold text-red-300">Statt Geld für Werbung auszugeben</span>, investiert Dawid Faith direkt in 
            <span className="font-bold text-green-300"> Fan-Belohnungen</span>. Das motiviert Fans zu mehr Engagement, 
            was zu besserer Reichweite und einem <span className="font-bold text-purple-300">selbstverstärkenden Kreislauf</span> führt.
          </p>
          
          <div className="flex justify-center items-center space-x-3">
            <div className="text-center">
              <div className="bg-red-500/20 rounded-lg p-2 mb-1">
                <span className="text-xs font-bold text-red-400">VORHER</span>
              </div>
              <p className="text-xs text-gray-400">Geld für Werbung ohne Garantie</p>
            </div>
            <FaArrowRight className="text-green-400 text-lg" />
            <div className="text-center">
              <div className="bg-green-500/20 rounded-lg p-2 mb-1">
                <span className="text-xs font-bold text-green-400">NACHHER</span>
              </div>
              <p className="text-xs text-gray-400">Direkter Fan-Nutzen + Kapital</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MobileWhitepaperV2