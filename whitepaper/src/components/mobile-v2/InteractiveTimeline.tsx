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
  FaArrowDown,
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
  const [showProfitableInfo, setShowProfitableInfo] = useState(false)
  const [showRewardLevelsInfo, setShowRewardLevelsInfo] = useState(false)

  const mainCycleSteps = [
    {
      id: 1,
      title: "Dawid postet neuen Content",
      description: "Song, Video oder Update auf Instagram, TikTok & Facebook",
      details: [
        "1.000€ für 20.000 D.FAITH Token bereitgestellt",
        "1.500€ für spezifische Kampagne reserviert", 
        "80.000 D.FAITH bleiben im Smart Contract gesperrt",
        "Gleichzeitiges Posting auf allen Plattformen"
      ],
      icon: <FaMusic />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Fan Interaktion wird erkannt",
      description: "Fans liken, kommentieren, teilen - automatisch erfasst",
      details: [
        "10 EXP pro Like → Level-basierte D.FAITH Rewards",
        "Kommentar mit 'D.FAITH' → Automatischer Link zur Webapp",
        "10-20 EXP für Shares & Stories → Höhere Rewards",
        "Automatische Profilerstellung und Cross-Platform Tracking"
      ],
      icon: <FaHeart />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Automatische Token-Käufe",
      description: "System kauft D.FAITH Token basierend auf Engagement",
      details: [
        "Marketing Budget wird für Token-Käufe verwendet",
        "Level-System bestimmt Token-Anzahl pro Fan",
        "50% der gekauften Token gehen direkt an Fans",
        "50% werden im Smart Contract für Staking gesperrt"
      ],
      icon: <FaCoins />,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3.1,
      title: "Fans claimen Tokens basierend auf Level",
      description: "Fans können ihre verdienten D.FAITH Tokens über die Webapp abholen",
      details: [
        "Level-basierte Token-Mengen automatisch zugewiesen",
        "Einfacher Claim-Prozess über die D.FAITH Webapp",
        "Transparente Anzeige aller verfügbaren Rewards",
        "→ Mehr zur Webapp-Funktionalität im entsprechenden Abschnitt"
      ],
      icon: <FaCheck />,
      color: "from-emerald-500 to-green-500"
    },
    {
      id: 4,
      title: "Smart Contract sammelt Token",
      description: "50% der gekauften Token gehen an Smart Contract",
      details: [
        "50% der gekauften Token gehen automatisch an Smart Contract",
        "6 Reward-Stufen mit Halving-Effekt implementiert",
        "Startrate: 0,1 D.FAITH pro D.INVEST pro Woche (Initial)",
        "Jede Stufe halbiert die Ausgaberate automatisch",
        "Token nur durch D.INVEST Staking entsperrbar"
      ],
      icon: <FaLock />,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Preissteigerung durch Verknappung",
      description: "D.FAITH wird wertvoller, D.INVEST wird attraktiver",
      details: [
        "Kontinuierliche Käufe reduzieren verfügbare Token",
        "Preis steigt bei zunehmender Verknappung",
        "D.INVEST Staking wird profitabler",
        "Attraktive ROI lockt neue Investoren an"
      ],
      icon: <FaArrowUp />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      title: "Kreislauf wiederholt sich",
      description: "System verstärkt sich automatisch bei jedem neuen Post",
      details: [
        "Jeder Post kann das System weiter verbessern",
        "System lernt aus jedem Durchlauf und wird effizienter",
        "Fans erwarten bereits Belohnungen → Mehr Engagement",
        "D.FAITH kann bei jedem Zyklus wertvoller werden"
      ],
      icon: <FaRedo />,
      color: "from-cyan-500 to-blue-500"
    }
  ]

  const marketCycleSteps = [
    {
      id: 1,
      title: "D.INVEST wird profitabel",
      description: "Hohe D.FAITH Preise machen Staking profitabel",
      details: [
        "Bei höheren D.FAITH Preisen kann attraktiver ROI auf D.INVEST entstehen",
        "Investoren werden auf potentielle Renditen aufmerksam",
        "0,1 D.FAITH pro D.INVEST pro Woche wird wertvoller",
        "104% ROI möglich bei optimalen Bedingungen"
      ],
      icon: <FaDollarSign />,
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 2,
      title: "Investoren kaufen D.INVEST",
      description: "Neue D.INVEST Käufe führen zu erhöhten D.FAITH Rewards",
      details: [
        "Weitere Investoren kaufen D.INVEST für 5€/Token",
        "Mehr Staking-Rewards werden ausgegeben → temporärer Preisrückgang",
        "Neues Kapital fließt in bessere Musikproduktion und Marketing",
        "Preiskorrektur ist Teil des natürlichen Wachstumszyklus"
      ],
      icon: <FaUsers />,
      color: "from-red-500 to-orange-500"
    },
    {
      id: 3,
      title: "Investoren verkaufen D.FAITH Rewards",
      description: "Crash -80%: Massive Verkäufe führen zu drastischem Preisverfall",
      details: [
        "Investoren verkaufen ihre D.FAITH Rewards für sofortige Gewinne",
        "Markt wird mit D.FAITH überflutet → Preiscrash -80%",
        "Panikverkäufe verstärken den Abwärtstrend",
        "D.INVEST Staking wird vorübergehend unattraktiv"
      ],
      icon: <FaArrowDown />,
      color: "from-red-600 to-red-800"
    },
    {
      id: 4,
      title: "Halving aktiviert sich",
      description: "Smart Contract reduziert Ausgaberate automatisch",
      details: [
        "Staking-Rate sinkt von 0,1 auf 0,05 D.FAITH pro Woche",
        "Halving verhindert weitere Marktüberflutung",
        "Neuer Zyklus startet auf höherem Preisniveau",
        "Bewährtes Halving-Konzept aus der Krypto-Welt"
      ],
      icon: <FaCog />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "D.FAITH Preis steigt",
      description: "D.FAITH Preis steigt durch Halving auf neue Hochs",
      details: [
        "Reduzierte Token-Ausgabe führt zu natürlicher Verknappung",
        "D.FAITH Preis steigt durch verringerte Staking-Rewards",
        "Höhere D.FAITH Preise machen D.INVEST trotz Halving wieder profitabel",
        "System ist bereit für den nächsten profitablen Zyklus bei höherem Preisniveau"
      ],
      icon: <FaChartLine />,
      color: "from-cyan-500 to-purple-500"
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
          Wie das D.FAITH Ökosystem funktioniert
        </h2>
        <p className="text-gray-300 text-base mb-8">
          Schritt-für-Schritt Prozesse
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
                Haupt-Zyklus (7 Schritte)
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
                Markt-Zyklus (5 Schritte)
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Active Step Details - moved above circle */}
      {activeStep !== -1 && (
        <motion.div
          initial={{ opacity: 0, y: 20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          transition={{ duration: 0.3 }}
          className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 mb-8"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentSteps[activeStep].color} flex items-center justify-center text-white text-lg`}>
              {currentSteps[activeStep].icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white text-lg leading-tight">
                {currentSteps[activeStep].title}
              </h3>
              <p className="text-gray-300 text-sm">
                {currentSteps[activeStep].description}
              </p>
            </div>
            <button
              onClick={() => setActiveStep(-1)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaArrowRight className="transform rotate-90" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Timeline Circle */}
      <div className="relative w-full max-w-md mx-auto mb-10 flex items-center justify-center min-h-96">
        {/* Center Info */}
        <div className="absolute z-30 backdrop-blur-xl bg-white/10 rounded-full border border-white/20 flex flex-col items-center justify-center">
          <div className={`${
            currentSteps.length === 7 ? 'w-32 h-32' : currentSteps.length === 6 ? 'w-32 h-32' : 'w-24 h-24'
          } flex flex-col items-center justify-center`}>
            <span className={`text-white font-bold ${
              currentSteps.length === 7 ? 'text-lg' : currentSteps.length === 6 ? 'text-lg' : 'text-base'
            }`}>
              {currentCycle === 'main' ? '7' : '5'} Schritte
            </span>
            <span className={`text-gray-300 text-center ${
              currentSteps.length === 7 ? 'text-xs' : currentSteps.length === 6 ? 'text-xs' : 'text-xs'
            }`}>
              {currentCycle === 'main' ? 'Haupt-Zyklus' : 'Markt-Zyklus'}
            </span>
          </div>
        </div>

        {/* Circle Steps using CSS Grid */}
        <div className={`grid place-items-center w-80 h-80 relative ${
          currentSteps.length === 7 
            ? 'grid-cols-5 grid-rows-5' 
            : currentSteps.length === 6 
            ? 'grid-cols-5 grid-rows-5' 
            : 'grid-cols-5 grid-rows-5'
        }`}>
          {currentSteps.map((step, index) => {
            // Grid positions for perfect circle distribution
            const gridPositions = currentSteps.length === 7 ? [
              { gridColumn: '3', gridRow: '1' },    // Top (1)
              { gridColumn: '5', gridRow: '2' },    // Top Right (2)
              { gridColumn: '5', gridRow: '3' },    // Right (3)
              { gridColumn: '4', gridRow: '4' },    // Bottom Right (3.1)
              { gridColumn: '3', gridRow: '5' },    // Bottom (4)
              { gridColumn: '1', gridRow: '4' },    // Bottom Left (5)
              { gridColumn: '1', gridRow: '2' }     // Top Left (6)
            ] : currentSteps.length === 6 ? [
              { gridColumn: '3', gridRow: '1' },    // Top
              { gridColumn: '5', gridRow: '2' },    // Top Right
              { gridColumn: '5', gridRow: '4' },    // Bottom Right
              { gridColumn: '3', gridRow: '5' },    // Bottom
              { gridColumn: '1', gridRow: '4' },    // Bottom Left
              { gridColumn: '1', gridRow: '2' }     // Top Left
            ] : [
              { gridColumn: '3', gridRow: '1' },    // Top (12 Uhr)
              { gridColumn: '5', gridRow: '2' },    // Top Right (2 Uhr)
              { gridColumn: '4', gridRow: '5' },    // Bottom Right (5 Uhr)
              { gridColumn: '2', gridRow: '5' },    // Bottom Left (7 Uhr)
              { gridColumn: '1', gridRow: '2' }     // Top Left (10 Uhr)
            ]

            return (
              <motion.div
                key={`${currentCycle}-${step.id}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveStep(index === activeStep ? -1 : index)}
                className={`cursor-pointer ${
                  index === activeStep ? 'z-20' : 'z-10'
                }`}
                style={{
                  gridColumn: gridPositions[index].gridColumn,
                  gridRow: gridPositions[index].gridRow
                }}
              >
                {/* Step Card */}
                <div className={`backdrop-blur-xl rounded-2xl border transition-all duration-300 ${
                  index === activeStep
                    ? 'bg-white/20 border-white/40 scale-110 shadow-2xl'
                    : 'bg-white/10 border-white/20 hover:bg-white/15 hover:scale-105'
                } w-20 h-20 flex flex-col items-center justify-center`}>
                  {/* Step Icon */}
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-sm`}>
                    {step.icon}
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-white text-xs font-bold mt-1">
                    {step.id}
                  </div>
                </div>
              </motion.div>
            )
          })}

          {/* SVG Connection Lines with Arrows */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 320 320"
            style={{ zIndex: 5 }}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  fill="#60a5fa"
                />
              </marker>
              <marker
                id="arrowhead-purple"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  fill="#a855f7"
                />
              </marker>
            </defs>
            
            {currentSteps.length === 7 ? (
              <>
                {/* 1 → 2: Top to Top-Right */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  x1="160" y1="32" x2="256" y2="64"
                  stroke="#60a5fa" strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 2 → 3: Top-Right to Right */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  x1="256" y1="96" x2="256" y2="160"
                  stroke="#60a5fa" strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 3 → 3.1: Right to Bottom-Right */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  x1="240" y1="180" x2="224" y2="224"
                  stroke="#10b981" strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 3.1 → 4: Bottom-Right to Bottom */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  x1="192" y1="256" x2="160" y2="288"
                  stroke="#60a5fa" strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 4 → 5: Bottom to Bottom-Left */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  x1="128" y1="288" x2="64" y2="256"
                  stroke="#60a5fa" strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 5 → 6: Bottom-Left to Top-Left */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  x1="64" y1="224" x2="64" y2="96"
                  stroke="#60a5fa" strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 6 → 1: Top-Left to Top (completing circle) */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  x1="96" y1="64" x2="128" y2="32"
                  stroke="#a855f7" strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
              </>
            ) : currentSteps.length === 6 ? (
              <>
                {/* 1 → 2: Top to Top-Right */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  x1="160" y1="32" x2="256" y2="64"
                  stroke="#60a5fa" strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 2 → 3: Top-Right to Bottom-Right */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  x1="256" y1="96" x2="256" y2="224"
                  stroke="#60a5fa" strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 3 → 4: Bottom-Right to Bottom */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  x1="224" y1="256" x2="160" y2="288"
                  stroke="#60a5fa" strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 4 → 5: Bottom to Bottom-Left */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  x1="128" y1="288" x2="64" y2="256"
                  stroke="#60a5fa" strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 5 → 6: Bottom-Left to Top-Left */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  x1="64" y1="224" x2="64" y2="96"
                  stroke="#60a5fa" strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 6 → 1: Top-Left to Top (completing circle) */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  x1="96" y1="64" x2="128" y2="32"
                  stroke="#a855f7" strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
              </>
            ) : (
              <>
                {/* 1 → 2: Top to Top-Right (12 Uhr → 2 Uhr) */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  x1="160" y1="32" x2="256" y2="64"
                  stroke="#60a5fa" strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 2 → 3: Top-Right to Bottom-Right (2 Uhr → 5 Uhr) */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  x1="240" y1="96" x2="224" y2="288"
                  stroke="#60a5fa" strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 3 → 4: Bottom-Right to Bottom-Left (5 Uhr → 7 Uhr) */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  x1="192" y1="288" x2="128" y2="288"
                  stroke="#60a5fa" strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 4 → 5: Bottom-Left to Top-Left (7 Uhr → 10 Uhr) */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  x1="96" y1="256" x2="64" y2="96"
                  stroke="#60a5fa" strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* 5 → 1: Top-Left to Top (10 Uhr → 12 Uhr, completing circle) */}
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  x1="96" y1="64" x2="128" y2="32"
                  stroke="#a855f7" strokeWidth="2"
                  markerEnd="url(#arrowhead-purple)"
                />
              </>
            )}
          </svg>
        </div>
      </div>

      {/* Cycle Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-10 space-y-6"
      >
        {/* Was passiert wenn D.INVEST profitabel wird? */}
        <div className="backdrop-blur-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl border border-purple-500/30">
          <button
            onClick={() => setShowProfitableInfo(!showProfitableInfo)}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors rounded-2xl"
          >
            <h3 className="font-bold text-lg text-white">
              💰 Was passiert wenn D.INVEST profitabel wird?
            </h3>
            <FaArrowRight className={`text-gray-400 transition-transform duration-300 ${
              showProfitableInfo ? 'rotate-90' : ''
            }`} />
          </button>
          
          {showProfitableInfo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-6"
            >
              <div className="text-center space-y-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Wenn D.INVEST profitabel wird, kaufen Investoren verstärkt D.INVEST Token. 
                    Dadurch werden mehr D.FAITH Rewards ausgegeben, was zu fallenden D.FAITH Preisen führt. 
                    Dieser Zyklus wiederholt sich solange, bis das automatische Halving eintritt und 
                    die Ausgaberate halbiert wird, um den Markt zu stabilisieren.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-xl">
                    <span className="text-green-300 font-medium">� D.INVEST wird profitabel</span>
                    <FaArrowRight className="text-gray-400" />
                    <span className="text-blue-300 font-medium">� Mehr Investoren kaufen</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-xl">
                    <span className="text-red-300 font-medium">📉 Mehr D.FAITH Rewards</span>
                    <FaArrowRight className="text-gray-400" />
                    <span className="text-orange-300 font-medium">💥 Fallende Preise</span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-xl">
                    <span className="text-purple-300 font-medium">🔄 Zyklus wiederholt sich</span>
                    <FaArrowRight className="text-gray-400" />
                    <span className="text-yellow-300 font-medium">⚡ Halving greift ein</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 mt-4 p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                  <FaRedo className="text-blue-400" />
                  <span className="text-white font-medium">Halving stabilisiert den Markt und startet neuen Zyklus</span>
                  <FaRedo className="text-purple-400" />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Warum 6 Halving Stufen? */}
        <div className="backdrop-blur-xl bg-gradient-to-r from-orange-600/20 to-yellow-600/20 rounded-2xl border border-orange-500/30">
          <button
            onClick={() => setShowRewardLevelsInfo(!showRewardLevelsInfo)}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors rounded-2xl"
          >
            <h3 className="font-bold text-lg text-white">
              🏆 Warum 6 Halving Stufen?
            </h3>
            <FaArrowRight className={`text-gray-400 transition-transform duration-300 ${
              showRewardLevelsInfo ? 'rotate-90' : ''
            }`} />
          </button>
          
          {showRewardLevelsInfo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-6"
            >
              <div className="text-center space-y-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Dieser Mechanismus soll dazu führen, dass Kapital an das Projekt in Zyklen fließt, 
                    damit es sich weiterentwickelt und selbst Einnahmen erwirtschaften kann.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-4">
                  <p className="text-white text-sm leading-relaxed font-medium">
                    Sobald alle D.INVEST verkauft sind und das Projekt erfolgreich ist, werden weiterhin 
                    aus den Einnahmen D.FAITH Tokens beim Marketing gekauft.
                  </p>
                </div>
                
                <div className="flex items-center justify-center gap-3 p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl">
                  <FaChartLine className="text-yellow-400" />
                  <span className="text-white font-medium">Langfristige Investoren profitieren dadurch am meisten</span>
                  <FaChartLine className="text-orange-400" />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default InteractiveTimeline