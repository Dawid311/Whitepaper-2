'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSpring, animated, config } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import { 
  FaMusic,
  FaHeart,
  FaCoins,
  FaLock,
  FaArrowUp,
  FaRedo,
  FaDollarSign,
  FaUsers,
  FaCog,
  FaChartLine,
  FaCheck,
  FaArrowRight,
  FaPlay,
  FaPause,
  FaFire,
  FaBolt
} from 'react-icons/fa'

const InteractiveTimeline: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentCycle, setCurrentCycle] = useState<'main' | 'market'>('main')

  // Auto-play timeline
  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isPlaying && inView) {
      interval = setInterval(() => {
        setActiveStep(prev => {
          const maxSteps = currentCycle === 'main' ? 6 : 4
          const nextStep = prev + 1
          if (nextStep >= maxSteps) {
            // Switch to market cycle after main cycle
            if (currentCycle === 'main') {
              setCurrentCycle('market')
              return 0
            } else {
              // Reset to beginning
              setCurrentCycle('main')
              return 0
            }
          }
          return nextStep
        })
      }, 3000)
    }

    return () => clearInterval(interval)
  }, [isPlaying, inView, currentCycle])

  const mainCycleSteps = [
    {
      id: 1,
      title: "Dawid postet neuen Content",
      description: "Song, Video oder Update auf Instagram, TikTok & Facebook",
      details: [
        "1.000€ für 20.000 D.FAITH Token bereitgestellt",
        "1.500€ für spezifische Kampagne reserviert", 
        "80.000 D.FAITH bleiben im Smart Contract gesperrt"
      ],
      icon: <FaMusic className="text-blue-500" />,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Fan Interaktion wird erkannt",
      description: "Automatisches Tracking von Likes, Kommentaren, Shares",
      details: [
        "Kommentar mit 'D.FAITH' → Automatischer Link zur Webapp",
        "Profilerstellung und Cross-Platform Tracking"
      ],
      icon: <FaHeart className="text-red-500" />,
      color: "red",
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: 3,
      title: "Automatische Token-Käufe",
      description: "Marketing Budget wird für Token-Käufe verwendet",
      details: [
        "Level-System bestimmt Token-Anzahl pro Fan",
        "50% der gekauften Token gehen direkt an Fans",
        "50% werden im Smart Contract für Staking gesperrt"
      ],
      icon: <FaCoins className="text-yellow-500" />,
      color: "yellow",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      id: 4,
      title: "Smart Contract sammelt Token",
      description: "6 Reward-Stufen mit Halving-Effekt implementiert",
      details: [
        "Startrate: 0,1 D.FAITH pro D.INVEST pro Woche (Initial)",
        "Jede Stufe halbiert die Ausgaberate automatisch",
        "Token nur durch D.INVEST Staking entsperrbar"
      ],
      icon: <FaLock className="text-purple-500" />,
      color: "purple",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      id: 5,
      title: "Preissteigerung durch Verknappung",
      description: "Kontinuierliche Käufe reduzieren verfügbare Token",
      details: [
        "D.INVEST Staking wird profitabler",
        "Attraktive ROI lockt neue Investoren an"
      ],
      icon: <FaArrowUp className="text-green-500" />,
      color: "green",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 6,
      title: "Kreislauf wiederholt sich",
      description: "System verstärkt sich automatisch bei jedem neuen Post",
      details: [
        "Fans erwarten bereits Belohnungen → Mehr Engagement",
        "D.FAITH kann bei jedem Zyklus wertvoller werden"
      ],
      icon: <FaRedo className="text-indigo-500" />,
      color: "indigo",
      gradient: "from-indigo-500 to-purple-500"
    }
  ]

  const marketCycleSteps = [
    {
      id: 1,
      title: "D.INVEST wird rentabel",
      description: "Bei höheren D.FAITH Preisen entstehen attraktive ROI-Möglichkeiten",
      details: ["104% ROI möglich bei optimalen Bedingungen"],
      icon: <FaDollarSign className="text-green-600" />,
      color: "green",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      id: 2,
      title: "Investoren kaufen D.INVEST",
      description: "Neue Investoren kaufen D.INVEST für 5€/Token",
      details: [
        "Mehr Staking-Rewards werden ausgegeben → temporärer Preisrückgang",
        "Neues Kapital fließt in bessere Musikproduktion"
      ],
      icon: <FaUsers className="text-blue-600" />,
      color: "blue",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Halving aktiviert sich",
      description: "Staking-Rate sinkt automatisch von 0,1 auf 0,05 D.FAITH pro Woche",
      details: [
        "Halving verhindert weitere Marktüberflutung",
        "Bewährtes Bitcoin-Halving-Konzept implementiert"
      ],
      icon: <FaCog className="text-orange-600" />,
      color: "orange",
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 4,
      title: "Zyklus beginnt erneut",
      description: "Neuer Zyklus startet auf höherem Preisniveau",
      details: [
        "Mehr Fans, bessere Reichweite, stärkere Community",
        "System kann in neue Märkte und Plattformen expandieren"
      ],
      icon: <FaChartLine className="text-purple-600" />,
      color: "purple",
      gradient: "from-purple-600 to-pink-600"
    }
  ]

  const currentSteps = currentCycle === 'main' ? mainCycleSteps : marketCycleSteps
  const currentStep = currentSteps[activeStep]

  // Spring animation for the main container
  const containerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: config.gentle
  })

  return (
    <animated.div ref={ref} style={containerSpring} className="min-h-screen flex flex-col justify-center p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
          Schritt-für-Schritt Prozess
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Wie das D.FAITH Ökosystem funktioniert
        </p>

        {/* Cycle Selector */}
        <div className="flex justify-center mb-6">
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-2 border border-white/20">
            <div className="flex gap-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCurrentCycle('main')
                  setActiveStep(0)
                }}
                className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  currentCycle === 'main'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <FaRedo />
                  <span>Haupt-Zyklus (6)</span>
                </div>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCurrentCycle('market')
                  setActiveStep(0)
                }}
                className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  currentCycle === 'market'
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <FaChartLine />
                  <span>Markt-Zyklus (4)</span>
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Play/Pause Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="backdrop-blur-xl bg-white/10 rounded-full p-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            {isPlaying ? <FaPause className="text-white" /> : <FaPlay className="text-white" />}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveStep(0)}
            className="backdrop-blur-xl bg-white/10 rounded-full p-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <FaRedo className="text-white" />
          </motion.button>
        </div>
      </motion.div>

      {/* Timeline Visualization */}
      <div className="flex-1 relative">
        {/* Progress Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-700 rounded-full">
          <motion.div
            className={`w-full bg-gradient-to-b ${currentStep?.gradient || 'from-blue-500 to-purple-500'} rounded-full origin-top`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: (activeStep + 1) / currentSteps.length }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {currentSteps.map((step, index) => (
            <motion.div
              key={`${currentCycle}-${step.id}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: index <= activeStep ? 1 : 0.3,
                x: 0,
                scale: index === activeStep ? 1.05 : 1
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step Circle */}
              <div className="absolute left-6 w-4 h-4 rounded-full border-4 border-gray-900 bg-gradient-to-r from-white to-gray-300 z-10" />
              
              {/* Step Content */}
              <motion.div
                className={`ml-16 backdrop-blur-xl rounded-2xl border transition-all duration-300 ${
                  index === activeStep
                    ? 'bg-white/15 border-white/30 shadow-2xl'
                    : 'bg-white/5 border-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveStep(index)}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                          {step.id}
                        </span>
                        <h3 className="font-bold text-white text-lg">{step.title}</h3>
                        {index === activeStep && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex items-center gap-1"
                          >
                            <FaFire className="text-orange-400 animate-pulse" />
                            <FaFire className="text-yellow-400 animate-pulse" />
                          </motion.div>
                        )}
                      </div>
                      <p className="text-gray-300 mb-3">{step.description}</p>
                    </div>
                  </div>

                  {/* Step Details */}
                  <AnimatePresence>
                    {index === activeStep && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2"
                      >
                        {step.details.map((detail, detailIndex) => (
                          <motion.div
                            key={detailIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                            className="flex items-start gap-3 text-sm"
                          >
                            <FaCheck className="text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400">{detail}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Arrow to next step */}
                {index < currentSteps.length - 1 && index === activeStep && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center pb-4"
                  >
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center`}
                    >
                      <FaArrowRight className="text-white rotate-90" />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Self-Reinforcing Cycle Explanation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8 backdrop-blur-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-6 border border-purple-500/30"
      >
        <h3 className="font-bold text-lg mb-4 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-2">
            <FaBolt /> Selbstverstärkender Kreislauf <FaBolt />
          </span>
        </h3>
        
        <div className="text-center space-y-3 text-sm">
          <div className="flex items-center justify-center flex-wrap gap-2">
            <span className="text-blue-300 font-semibold">Mehr Fans</span>
            <FaArrowRight className="text-gray-400" />
            <span className="text-green-300 font-semibold">Höhere D.FAITH Nachfrage</span>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-2">
            <span className="text-green-300 font-semibold">Preissteigerung</span>
            <FaArrowRight className="text-gray-400" />
            <span className="text-yellow-300 font-semibold">Attraktiveres D.INVEST</span>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-2">
            <span className="text-yellow-300 font-semibold">Mehr Kapital</span>
            <FaArrowRight className="text-gray-400" />
            <span className="text-purple-300 font-semibold">Bessere Musikproduktion</span>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-2">
            <span className="text-purple-300 font-semibold">Mehr Fans</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <FaRedo className="text-blue-400" />
            </motion.div>
            <span className="text-blue-300 font-semibold">Kreislauf</span>
          </div>
        </div>
      </motion.div>
    </animated.div>
  )
}

export default InteractiveTimeline