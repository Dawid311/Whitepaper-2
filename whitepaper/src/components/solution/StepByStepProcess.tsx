'use client'

import React, { useState } from 'react'
import { StepByStepProcessTranslations } from './StepByStepProcessTranslations';
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

interface StepByStepProcessProps {
  language: 'de' | 'en' | 'pl';
}

const StepByStepProcess: React.FC<StepByStepProcessProps> = ({ language }) => {
  const t = StepByStepProcessTranslations(language);
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

  // Icons und Farben für die Schritte (Index-basiert, Reihenfolge wie in Übersetzung)
  const mainIconComponents = [
    { id: 'music', component: <FaMusic /> },
    { id: 'heart', component: <FaHeart /> },
    { id: 'coins', component: <FaCoins /> },
    { id: 'lock', component: <FaLock /> },
    { id: 'arrow-up', component: <FaArrowUp /> },
    { id: 'redo', component: <FaRedo /> }
  ];
  const mainColors = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-yellow-500 to-orange-500",
    "from-cyan-500 to-blue-500"
  ];
  const extraIconComponent = { id: 'check', component: <FaCheck /> };
  const extraColor = "from-emerald-500 to-green-500";
  const marketIconComponents = [
    { id: 'dollar', component: <FaDollarSign /> },
    { id: 'users', component: <FaUsers /> },
    { id: 'arrow-down', component: <FaArrowDown /> },
    { id: 'cog', component: <FaCog /> },
    { id: 'chart', component: <FaChartLine /> }
  ];
  const marketColors = [
    "from-green-600 to-emerald-600",
    "from-red-500 to-orange-500",
    "from-red-600 to-red-800",
    "from-purple-500 to-pink-500",
    "from-cyan-500 to-purple-500"
  ];

  const mainCycleSteps = t.mainCycleSteps.map((step, i) => ({ ...step, icon: mainIconComponents[i].component, color: mainColors[i] }));
  const marketCycleSteps = t.marketCycleSteps.map((step, i) => ({ ...step, icon: marketIconComponents[i].component, color: marketColors[i] }));
  const extraStep = { ...t.extraStep, icon: extraIconComponent.component, color: extraColor };

  const currentSteps = currentCycle === 'main' ? mainCycleSteps : marketCycleSteps;
  // the data object for the currently selected step (handles extra step)
  const displayedData = (activeStep === 6 && currentCycle === 'main') ? extraStep : currentSteps[activeStep];

  return (
    <div ref={ref} className="py-20 max-w-7xl mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-amber-400 via-green-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg flex items-center justify-center gap-3">
          <span>{t.title}</span>
        </h2>
        <p className="text-2xl md:text-2xl font-medium text-zinc-300 mb-12 bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
          {t.subtitle}
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
                {t.mainCycle.split('(')[0].trim()} ({mainCycleSteps.length} {language === 'de' ? 'Schritte' : language === 'pl' ? 'kroków' : 'steps'})
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
                {t.marketCycle.split('(')[0].trim()} ({marketCycleSteps.length} {language === 'de' ? 'Schritte' : language === 'pl' ? 'kroków' : 'steps'})
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Active step details are rendered inside the right info panel (see below) */}

  {/* Main Content Layout - Timeline with info panel on right side on lg */}
  <div className="flex flex-col lg:flex-row gap-12 items-center">
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
                {currentCycle === 'main' ? mainCycleSteps.length : marketCycleSteps.length} {language === 'de' ? 'Schritte' : language === 'pl' ? 'kroków' : 'steps'}
              </span>
              <span className={`text-gray-300 text-center ${
                currentSteps.length === 6 ? 'text-sm' : 'text-sm'
              }`}>
                {currentCycle === 'main' ? t.mainCycle.split('(')[0].trim() : t.marketCycle.split('(')[0].trim()}
              </span>
            </div>
          </div>

          {/* Circle Steps using CSS Grid */}
          <div className={`grid place-items-center w-[420px] h-[420px] relative ${
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
                    gridRow: gridPositions[index].gridRow,
                    transform: 'translateX(-18px)'
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
                  x1="307" y1="288" x2="307" y2="400"
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
                  left: '307px',
                  top: '400px', // weiter nach unten
                  transform: 'translateX(-50%)'
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

  {/* Content-Box jetzt mittig ausgerichtet und mit "Nächster Schritt" Button */}
  <div className="w-full flex justify-center lg:justify-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-xl bg-gradient-to-br from-black/40 to-black/20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl ring-1 ring-white/6 max-w-lg w-full"
      style={{ backdropFilter: 'saturate(120%)' }}
    >
      {/* Header with step icon and title */}
      <div className="flex items-center gap-4 p-5 border-b border-white/8 bg-black/10">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl bg-gradient-to-r ${displayedData?.color ?? 'from-gray-500 to-gray-700'} shadow-md ring-2 ring-white/6`}>
          {displayedData?.icon ?? <FaCheck />}
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">{displayedData ? displayedData.title : 'Wähle einen Schritt'}</h4>
          <p className="text-sm text-gray-300 max-w-xs">{displayedData ? displayedData.description : 'Klicke auf einen Punkt im Kreislauf.'}</p>
        </div>
      </div>
      <div className="p-6 flex flex-col justify-center bg-gradient-to-t from-white/3 to-transparent gap-4">
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveStep(-1)}
            className="px-3 py-2 border border-white/20 text-white rounded-lg hover:bg-white/5 transition"
          >
            {t.close}
          </button>
          <button
            onClick={goNextStep}
            className="px-3 py-2 border border-blue-400 text-white rounded-lg hover:bg-blue-500/20 transition"
          >
            {t.nextStep}
          </button>
        </div>
      </div>
    </motion.div>
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
              {t.profitable}
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
                  {t.profitableInfo}
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
              {t.halving}
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
                    {t.halvingInfo}
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
  )
}

export default StepByStepProcess