'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
  FaArrowRight
} from 'react-icons/fa'

const InteractiveTimeline: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [activeStep, setActiveStep] = useState(0)
  const [currentCycle, setCurrentCycle] = useState<'main' | 'market'>('main')

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
      icon: <FaMusic />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Fan Interaktion wird erkannt",
      description: "Automatisches Tracking von Likes, Kommentaren, Shares",
      details: [
        "Kommentar mit 'D.FAITH' → Automatischer Link zur Webapp",
        "Profilerstellung und Cross-Platform Tracking"
      ],
      icon: <FaHeart />,
      color: "from-red-500 to-pink-500"
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
      icon: <FaCoins />,
      color: "from-yellow-500 to-amber-500"
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
      icon: <FaLock />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 5,
      title: "Preissteigerung durch Verknappung",
      description: "Kontinuierliche Käufe reduzieren verfügbare Token",
      details: [
        "D.INVEST Staking wird profitabler",
        "Attraktive ROI lockt neue Investoren an"
      ],
      icon: <FaArrowUp />,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 6,
      title: "Kreislauf wiederholt sich",
      description: "System verstärkt sich automatisch bei jedem neuen Post",
      details: [
        "Fans erwarten bereits Belohnungen → Mehr Engagement",
        "D.FAITH kann bei jedem Zyklus wertvoller werden"
      ],
      icon: <FaRedo />,
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const marketCycleSteps = [
    {
      id: 1,
      title: "D.INVEST wird rentabel",
      description: "Bei höheren D.FAITH Preisen entstehen attraktive ROI-Möglichkeiten",
      details: ["104% ROI möglich bei optimalen Bedingungen"],
      icon: <FaDollarSign />,
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 2,
      title: "Investoren kaufen D.INVEST",
      description: "Neue Investoren kaufen D.INVEST für 5€/Token",
      details: [
        "Mehr Staking-Rewards werden ausgegeben → temporärer Preisrückgang",
        "Neues Kapital fließt in bessere Musikproduktion"
      ],
      icon: <FaUsers />,
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Halving aktiviert sich",
      description: "Staking-Rate sinkt automatisch von 0,1 auf 0,05 D.FAITH pro Woche",
      details: [
        "Halving verhindert weitere Marktüberflutung",
        "Bewährtes Bitcoin-Halving-Konzept implementiert"
      ],
      icon: <FaCog />,
      color: "from-orange-600 to-red-600"
    },
    {
      id: 4,
      title: "Zyklus beginnt erneut",
      description: "Neuer Zyklus startet auf höherem Preisniveau",
      details: [
        "Mehr Fans, bessere Reichweite, stärkere Community",
        "System kann in neue Märkte und Plattformen expandieren"
      ],
      icon: <FaChartLine />,
      color: "from-purple-600 to-pink-600"
    }
  ]

  const currentSteps = currentCycle === 'main' ? mainCycleSteps : marketCycleSteps

  return (
    <div ref={ref} className="min-h-screen p-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold text-white mb-3">
          Schritt-für-Schritt Prozess
        </h2>
        <p className="text-gray-300 text-base mb-8">
          Wie das D.FAITH Ökosystem funktioniert
        </p>

        {/* Cycle Selector */}
        <div className="flex justify-center mb-8">
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-1 border border-white/20">
            <div className="flex">
              <button
                onClick={() => {
                  setCurrentCycle('main')
                  setActiveStep(0)
                }}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  currentCycle === 'main'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Haupt-Zyklus (6 Schritte)
              </button>
              <button
                onClick={() => {
                  setCurrentCycle('market')
                  setActiveStep(0)
                }}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  currentCycle === 'market'
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Markt-Zyklus (4 Schritte)
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timeline Steps */}
      <div className="space-y-6">
        {currentSteps.map((step, index) => (
          <motion.div
            key={`${currentCycle}-${step.id}`}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setActiveStep(index === activeStep ? -1 : index)}
            className="relative cursor-pointer"
          >
            {/* Connection Line */}
            {index < currentSteps.length - 1 && (
              <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-white/30 to-white/10" />
            )}

            {/* Step Card */}
            <div className={`backdrop-blur-xl rounded-2xl border transition-all duration-300 ${
              index === activeStep
                ? 'bg-white/15 border-white/30 shadow-2xl scale-[1.02]'
                : 'bg-white/8 border-white/15 hover:bg-white/12'
            }`}>
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Step Number & Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-xl relative`}>
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-black text-sm font-bold">
                      {step.id}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Expand Arrow */}
                  <motion.div
                    animate={{ rotate: index === activeStep ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <FaArrowRight className="text-gray-400" />
                  </motion.div>
                </div>

                {/* Expanded Details */}
                {index === activeStep && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-white/10"
                  >
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white/5"
                        >
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mt-0.5`}>
                            <FaCheck className="text-white text-xs" />
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cycle Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-10 backdrop-blur-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-6 border border-purple-500/30"
      >
        <h3 className="font-bold text-lg mb-4 text-center text-white">
          Selbstverstärkender Kreislauf
        </h3>
        
        <div className="text-center space-y-4">
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-xl">
              <span className="text-blue-300 font-medium">Mehr Fans</span>
              <FaArrowRight className="text-gray-400" />
              <span className="text-green-300 font-medium">Höhere Nachfrage</span>
            </div>
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-xl">
              <span className="text-green-300 font-medium">Preissteigerung</span>
              <FaArrowRight className="text-gray-400" />
              <span className="text-yellow-300 font-medium">Mehr Investoren</span>
            </div>
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-xl">
              <span className="text-yellow-300 font-medium">Mehr Kapital</span>
              <FaArrowRight className="text-gray-400" />
              <span className="text-purple-300 font-medium">Bessere Musik</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 mt-4 p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
            <FaRedo className="text-blue-400" />
            <span className="text-white font-medium">Kreislauf verstärkt sich kontinuierlich</span>
            <FaRedo className="text-purple-400" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default InteractiveTimeline