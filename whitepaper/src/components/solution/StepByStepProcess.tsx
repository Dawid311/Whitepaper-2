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

const StepByStepProcess: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [activeStep, setActiveStep] = useState(0)
  const [currentCycle, setCurrentCycle] = useState<'main' | 'market'>('main')
  const [showProfitableInfo, setShowProfitableInfo] = useState(false)
  const [showRewardLevelsInfo, setShowRewardLevelsInfo] = useState(false)

  // Advance to next step (wraps and includes extra step for main cycle)
  const goNextStep = () => {
    const stepsCount = currentSteps.length
    // when main cycle has extra external step (index 6)
    if (currentCycle === 'main') {
      // if nothing selected, open first
      if (activeStep === -1) {
        setActiveStep(0)
        return
      }
      // if on last main step (index stepsCount-1 -> 5), go to extraStep (6)
      if (activeStep === stepsCount - 1) {
        setActiveStep(6)
        return
      }
      // if on extraStep, wrap to first
      if (activeStep === 6) {
        setActiveStep(0)
        return
      }
      // otherwise advance
      setActiveStep((prev) => (prev + 1) % stepsCount)
    } else {
      // market cycle: just wrap within steps
      if (activeStep === -1) {
        setActiveStep(0)
        return
      }
      setActiveStep((prev) => (prev + 1) % stepsCount)
    }
  }

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

  // Extra step outside the circle
  const extraStep = {
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
  }

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
    <div ref={ref} className="py-20 max-w-7xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-white mb-6">
          Der D.FAITH Kreislauf
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Schritt-für-Schritt Prozesse - von Fan-Interaktion bis zur Wertsteigerung
        </p>

        {/* Cycle Selector */}
        <div className="flex justify-center mb-12">
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-2 border border-white/20">
            <div className="flex">
              <button
                onClick={() => {
                  setCurrentCycle('main')
                  setActiveStep(0)
                }}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
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
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
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

      {/* Active step details are rendered inside the right info panel (see below) */}

  {/* Main Content Layout - Timeline with responsive right-side info panel on lg */}
  <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Timeline Circle */}
        <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center min-h-[600px]">
          {/* Center Info */}
          <div className="absolute z-30 backdrop-blur-xl bg-white/10 rounded-full border border-white/20 flex flex-col items-center justify-center">
            <div className={`${
              currentSteps.length === 6 ? 'w-40 h-40' : 'w-32 h-32'
            } flex flex-col items-center justify-center`}>
              <span className={`text-white font-bold ${
                currentSteps.length === 6 ? 'text-2xl' : 'text-xl'
              }`}>
                {currentCycle === 'main' ? '6' : '5'} Schritte
              </span>
              <span className={`text-gray-300 text-center ${
                currentSteps.length === 6 ? 'text-sm' : 'text-sm'
              }`}>
                {currentCycle === 'main' ? 'Haupt-Zyklus' : 'Markt-Zyklus'}
              </span>
            </div>
          </div>

          {/* Circle Steps using CSS Grid */}
          <div className={`grid place-items-center w-96 h-96 relative ${
            currentSteps.length === 6 
              ? 'grid-cols-5 grid-rows-5' 
              : 'grid-cols-5 grid-rows-5'
          }`}>
            {currentSteps.map((step, index) => {
              // Grid positions for perfect circle distribution
              const gridPositions = currentSteps.length === 6 ? [
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
                  <div className={`backdrop-blur-xl rounded-3xl border transition-all duration-300 ${
                    index === activeStep
                      ? 'bg-white/20 border-white/40 scale-110 shadow-2xl'
                      : 'bg-white/10 border-white/20 hover:bg-white/15 hover:scale-105'
                  } w-24 h-24 flex flex-col items-center justify-center`}>
                    {/* Step Icon */}
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-lg`}>
                      {step.icon}
                    </div>
                    
                    {/* Step Number */}
                    <div className="text-white text-sm font-bold mt-1">
                      {step.id}
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* SVG Connection Lines with Arrows */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 384 384"
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
                <marker
                  id="arrowhead-green"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    fill="#10b981"
                  />
                </marker>
              </defs>
              
              {currentSteps.length === 6 ? (
                <>
                  {/* 1 → 2: Top to Top-Right */}
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    x1="192" y1="38" x2="307" y2="77"
                    stroke="#60a5fa" strokeWidth="3"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* 2 → 3: Top-Right to Bottom-Right */}
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    x1="307" y1="115" x2="307" y2="269"
                    stroke="#60a5fa" strokeWidth="3"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* 3 → 4: Bottom-Right to Bottom */}
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    x1="269" y1="307" x2="192" y2="346"
                    stroke="#60a5fa" strokeWidth="3"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* 4 → 5: Bottom to Bottom-Left */}
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    x1="154" y1="346" x2="77" y2="307"
                    stroke="#60a5fa" strokeWidth="3"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* 5 → 6: Bottom-Left to Top-Left */}
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    x1="77" y1="269" x2="77" y2="115"
                    stroke="#60a5fa" strokeWidth="3"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* 6 → 1: Top-Left to Top (completing circle) */}
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    x1="115" y1="77" x2="154" y2="38"
                    stroke="#a855f7" strokeWidth="3"
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
                    x1="192" y1="38" x2="307" y2="77"
                    stroke="#60a5fa" strokeWidth="3"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* 2 → 3: Top-Right to Bottom-Right (2 Uhr → 5 Uhr) */}
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    x1="288" y1="115" x2="269" y2="346"
                    stroke="#60a5fa" strokeWidth="3"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* 3 → 4: Bottom-Right to Bottom-Left (5 Uhr → 7 Uhr) */}
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    x1="230" y1="346" x2="154" y2="346"
                    stroke="#60a5fa" strokeWidth="3"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* 4 → 5: Bottom-Left to Top-Left (7 Uhr → 10 Uhr) */}
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    x1="115" y1="307" x2="77" y2="115"
                    stroke="#60a5fa" strokeWidth="3"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* 5 → 1: Top-Left to Top (10 Uhr → 12 Uhr, completing circle) */}
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    x1="115" y1="77" x2="154" y2="38"
                    stroke="#a855f7" strokeWidth="3"
                    markerEnd="url(#arrowhead-purple)"
                  />
                </>
              )}
              
              {/* External Step 3.1 - Arrow from Step 3 downward to External Step */}
              {currentSteps.length === 6 && (
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  x1="307" y1="288" x2="337" y2="384"
                  stroke="#10b981" strokeWidth="3"
                  markerEnd="url(#arrowhead-green)"
                />
              )}
            </svg>

            {/* External Step 3.1 positioned below Step 3 */}
            {currentSteps.length === 6 && (
              <motion.div
                key="external-step-3-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 }}
                onClick={() => setActiveStep(activeStep === 6 ? -1 : 6)}
                className={`cursor-pointer absolute ${
                  activeStep === 6 ? 'z-20' : 'z-10'
                }`}
                style={{
                  left: '288px',
                  top: '360px'
                }}
              >
                {/* External Step Card */}
                <div className={`backdrop-blur-xl rounded-3xl border transition-all duration-300 ${
                  activeStep === 6
                    ? 'bg-white/20 border-white/40 scale-110 shadow-2xl'
                    : 'bg-white/10 border-white/20 hover:bg-white/15 hover:scale-105'
                } w-24 h-24 flex flex-col items-center justify-center`}>
                  {/* Step Icon */}
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${extraStep.color} flex items-center justify-center text-white text-lg`}>
                    {extraStep.icon}
                  </div>
                  
                  {/* Step Number */}
                  <div className="text-white text-sm font-bold mt-1">
                    {extraStep.id}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Fragen-Sektion unter dem Kreislauf (verschoben vom rechten Sidebar) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Wenn D.INVEST profitabel wird, kaufen Investoren verstärkt D.INVEST Token. 
                    Dadurch werden mehr D.FAITH Rewards ausgegeben, was zu fallenden D.FAITH Preisen führt. 
                    Dieser Zyklus wiederholt sich solange, bis das automatische Halving eintritt und 
                    die Ausgaberate halbiert wird, um den Markt zu stabilisieren.
                  </p>
                </div>
              </motion.div>
            )}
          </div>

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
        </div>
      </div>
    </div>
  )
}

export default StepByStepProcess