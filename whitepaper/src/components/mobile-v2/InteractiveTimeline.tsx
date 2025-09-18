'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../../context/LanguageContext'
import { interactiveTimelineTexts } from './InteractiveTimelineTranslations'
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
  const { language } = useLanguage()

  // Icon components with unique keys
  const mainCycleIconComponents = [
    { id: 'music', component: <FaMusic /> },
    { id: 'heart', component: <FaHeart /> },
    { id: 'coins', component: <FaCoins /> },
    { id: 'lock', component: <FaLock /> },
    { id: 'arrow-up', component: <FaArrowUp /> },
    { id: 'redo', component: <FaRedo /> }
  ];

  const marketCycleIconComponents = [
    { id: 'dollar-sign', component: <FaDollarSign /> },
    { id: 'users', component: <FaUsers /> },
    { id: 'arrow-down', component: <FaArrowDown /> },
    { id: 'cog', component: <FaCog /> },
    { id: 'chart-line', component: <FaChartLine /> }
  ];
  const texts = interactiveTimelineTexts[language]
  const uiLabels = {
    back: language === 'en' ? 'Back' : language === 'pl' ? 'Wstecz' : 'Zurück',
    next: language === 'en' ? 'Next step' : language === 'pl' ? 'Następny krok' : 'Nächster Schritt',
    closeDetails: language === 'en' ? 'Close details' : language === 'pl' ? 'Zamknij szczegóły' : 'Details schließen'
  }

  const mainCycleSteps = texts.mainCycle.steps.map((step, index) => ({
    id: index + 1,
    title: step.title,
    description: step.description,
    details: step.details,
    icon: mainCycleIconComponents[index].component,
    color: ["from-purple-500 to-pink-500", "from-blue-500 to-cyan-500", "from-green-500 to-emerald-500", 
            "from-orange-500 to-red-500", "from-yellow-500 to-orange-500", "from-cyan-500 to-blue-500"][index]
  }))

  // Extra step outside the circle
  const extraStep = {
    id: 3.1,
    title: texts.extraStep.title,
    description: texts.extraStep.description,
    details: texts.extraStep.details,
    icon: <FaCheck />,
    color: "from-emerald-500 to-green-500"
  }

  const marketCycleSteps = texts.marketCycle.steps.map((step, index) => ({
    id: index + 1,
    title: step.title,
    description: step.description,
    details: step.details,
    icon: marketCycleIconComponents[index].component,
    color: ["from-green-600 to-emerald-600", "from-red-500 to-orange-500", "from-red-600 to-red-800",
            "from-purple-500 to-pink-500", "from-cyan-500 to-purple-500"][index]
  }))

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
          {texts.header.title}
        </h2>
        <p className="text-gray-300 text-base mb-8">
          {texts.header.subtitle}
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
                {texts.header.mainCycleButton}
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
                {texts.header.marketCycleButton}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Details werden nun unterhalb des Kreises angezeigt */}

      {/* Timeline Circle */}
      <div className="relative w-full max-w-md mx-auto mb-10 flex items-center justify-center min-h-96">
        {/* Center Info */}
        <div className="absolute z-30 backdrop-blur-xl bg-white/10 rounded-full border border-white/20 flex flex-col items-center justify-center">
          <div className={`${
            currentSteps.length === 6 ? 'w-32 h-32' : 'w-24 h-24'
          } flex flex-col items-center justify-center`}>
            <span className={`text-white font-bold ${
              currentSteps.length === 6 ? 'text-lg' : 'text-base'
            }`}>
              {currentCycle === 'main' ? '6' : '5'} Schritte
            </span>
            <span className={`text-gray-300 text-center ${
              currentSteps.length === 6 ? 'text-xs' : 'text-xs'
            }`}>
              {currentCycle === 'main' ? texts.header.mainCycleButton.split(' ')[0] : texts.header.marketCycleButton.split(' ')[0]}
            </span>
          </div>
        </div>

        {/* Circle Steps using CSS Grid */}
        <div className={`grid place-items-center w-80 h-80 relative ${
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
            
            {/* External Step 3.1 - Arrow from Step 3 downward to External Step */}
            {currentSteps.length === 6 && (
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.1 }}
                x1="256" y1="240" x2="280" y2="320"
                stroke="#10b981" strokeWidth="2"
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
                left: '240px',
                top: '300px'
              }}
            >
              {/* External Step Card */}
              <div className={`backdrop-blur-xl rounded-2xl border transition-all duration-300 ${
                activeStep === 6
                  ? 'bg-white/20 border-white/40 scale-110 shadow-2xl'
                  : 'bg-white/10 border-white/20 hover:bg-white/15 hover:scale-105'
              } w-20 h-20 flex flex-col items-center justify-center`}>
                {/* Step Icon */}
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${extraStep.color} flex items-center justify-center text-white text-sm`}>
                  {extraStep.icon}
                </div>
                
                {/* Step Number */}
                <div className="text-white text-xs font-bold mt-1">
                  {extraStep.id}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

        {/* Aktiver Schritt – Nur Überschrift und Unterüberschrift unter dem Kreis */}
        {activeStep !== -1 && (
          <motion.div
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 mb-8"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${
                activeStep === 6 ? extraStep.color : currentSteps[activeStep].color
              } flex items-center justify-center text-white text-lg`}>
                {activeStep === 6 ? extraStep.icon : currentSteps[activeStep].icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-lg leading-tight">
                  {activeStep === 6 ? extraStep.title : currentSteps[activeStep].title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {activeStep === 6 ? extraStep.description : currentSteps[activeStep].description}
                </p>
              </div>
              <button
                onClick={() => setActiveStep(-1)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={uiLabels.closeDetails}
              >
                <FaArrowRight className="transform rotate-90" />
              </button>
            </div>
          </motion.div>
        )}

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
              {texts.expandableInfo.profitableTitle}
            </h3>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <span>
                {showProfitableInfo ? texts.ui.hideDetails : texts.ui.showDetails}
              </span>
              <FaArrowRight className={`transition-transform duration-300 ${
                showProfitableInfo ? 'rotate-90' : ''
              }`} />
            </div>
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
                  {texts.expandableInfo.profitableContent}
                </p>
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
              {texts.expandableInfo.halvingTitle}
            </h3>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <span>
                {showRewardLevelsInfo ? texts.ui.hideDetails : texts.ui.showDetails}
              </span>
              <FaArrowRight className={`transition-transform duration-300 ${
                showRewardLevelsInfo ? 'rotate-90' : ''
              }`} />
            </div>
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
                    {texts.expandableInfo.halvingContent.description}
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-4">
                  <p className="text-white text-sm leading-relaxed font-medium">
                    {texts.expandableInfo.halvingContent.success}
                  </p>
                </div>
                
                <div className="flex items-center justify-center gap-3 p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl">
                  <FaChartLine className="text-yellow-400" />
                  <span className="text-white font-medium">{texts.expandableInfo.halvingContent.longTerm}</span>
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