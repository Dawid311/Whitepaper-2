'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChartBar, FaCoins, FaPlay, FaPause, FaInfoCircle } from 'react-icons/fa'

const HalvingVisualization = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(1)
  const [selectedDinvestAmount, setSelectedDinvestAmount] = useState(10)
  
  // Halving stages with monthly breakdown
  const halvingStages = [
    {
      stage: 1,
      rate: 10.00,
      range: '0-10k D.FAITH verteilt',
      color: 'from-green-400 to-emerald-500',
      description: 'Maximale Rewards - Frühe Adopter profitieren am meisten'
    },
    {
      stage: 2,
      rate: 5.00,
      range: '10k-20k D.FAITH verteilt',
      color: 'from-blue-400 to-cyan-500',
      description: 'Erste Halbierung - Immer noch attraktive Rewards'
    },
    {
      stage: 3,
      rate: 2.50,
      range: '20k-40k D.FAITH verteilt',
      color: 'from-purple-400 to-violet-500',
      description: 'Zweite Halbierung - Verknappung beginnt'
    },
    {
      stage: 4,
      rate: 1.25,
      range: '40k-60k D.FAITH verteilt',
      color: 'from-orange-400 to-amber-500',
      description: 'Dritte Halbierung - Deutliche Verknappung'
    },
    {
      stage: 5,
      rate: 0.63,
      range: '60k-80k D.FAITH verteilt',
      color: 'from-red-400 to-rose-500',
      description: 'Vierte Halbierung - Starke Verknappung'
    },
    {
      stage: 6,
      rate: 0.31,
      range: 'ab 80k D.FAITH verteilt',
      color: 'from-gray-400 to-zinc-500',
      description: 'Finale Stufe - Maximale Verknappung'
    }
  ]

  // Calculate monthly D.FAITH generation based on D.INVEST amount and stage
  const calculateMonthlyReward = (dinvestAmount: number, stage: number) => {
    const weeklyRate = halvingStages[stage - 1]?.rate || 0.31
    const weeklyReward = (dinvestAmount * weeklyRate) / 100 // Rate is in percentage  
    const monthlyReward = weeklyReward * 4.33 // ~4.33 weeks per month
    return monthlyReward.toFixed(2)
  }

  // Different D.INVEST amounts to showcase
  const dinvestAmounts = [1, 5, 10, 25, 50, 100]
      range: '80k+ D.FAITH',
      color: 'from-gray-400 to-zinc-500',
      description: 'Finale Stufe - Minimale Emission, maximale Knappheit'
    }
  ]

  // Simulate monthly D.FAITH generation for 1000 D.INVEST
  const calculateMonthlyGeneration = (month: number, dinvestAmount: number = 1000) => {
    const monthsPerStage = 2 // Annahme: 2 Monate pro Stufe
    const stageIndex = Math.min(Math.floor((month - 1) / monthsPerStage), halvingStages.length - 1)
    const currentStage = halvingStages[stageIndex]
    
    // Wöchentliche Berechnung: (amount * rate) / 10000
    const weeklyReward = (dinvestAmount * (currentStage.rate * 100)) / 10000
    const monthlyReward = weeklyReward * 4.33 // 4.33 Wochen pro Monat
    
    return {
      stage: currentStage,
      monthlyReward: monthlyReward.toFixed(2),
      cumulativeReward: 0 // Wird später berechnet
    }
  }

  // Generate 12 months of data
  const monthlyData = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1
    return {
      month,
      ...calculateMonthlyGeneration(month)
    }
  })

  // Calculate cumulative rewards
  let cumulative = 0
  monthlyData.forEach(data => {
    cumulative += parseFloat(data.monthlyReward)
    data.cumulativeReward = cumulative.toFixed(2)
  })

  // Animation control
  const startAnimation = () => {
    setIsAnimating(true)
    setCurrentMonth(1)
    
    const interval = setInterval(() => {
      setCurrentMonth(prev => {
        if (prev >= 12) {
          setIsAnimating(false)
          clearInterval(interval)
          return 12
        }
        return prev + 1
      })
    }, 500)
  }

  const stopAnimation = () => {
    setIsAnimating(false)
  }

  return (
    <div className="space-y-8">
      {/* Control Panel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 rounded-2xl p-6 border border-zinc-700"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-500/20 rounded-full">
              <FaChartBar className="text-2xl text-orange-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Halving-Simulation</h3>
              <p className="text-zinc-400">12 Monate mit 1.000 D.INVEST</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startAnimation}
              disabled={isAnimating}
              className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold px-6 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaPlay className="text-sm" />
              Animation starten
            </motion.button>
            
            {isAnimating && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={stopAnimation}
                className="flex items-center gap-2 bg-red-500 text-white font-bold px-6 py-3 rounded-xl"
              >
                <FaPause className="text-sm" />
                Stopp
              </motion.button>
            )}
          </div>
        </div>

        {/* Current Month Display */}
        <div className="bg-zinc-700/50 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-zinc-400">Aktueller Monat:</span>
              <span className="ml-2 text-2xl font-bold text-white">{currentMonth}</span>
            </div>
            <div>
              <span className="text-zinc-400">Kumulativ generiert:</span>
              <span className="ml-2 text-2xl font-bold text-amber-400">
                {monthlyData[currentMonth - 1]?.cumulativeReward || '0.00'} D.FAITH
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Halving Stages Overview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {halvingStages.map((stage, index) => (
          <motion.div
            key={stage.stage}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-br ${stage.color} bg-opacity-20 rounded-2xl p-6 border border-current border-opacity-30 relative overflow-hidden`}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">Stufe {stage.stage}</h4>
                <div className="text-3xl font-bold opacity-50">{stage.rate}%</div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-zinc-300">Bereich:</div>
                  <div className="font-semibold text-white">{stage.range}</div>
                </div>
                
                <div>
                  <div className="text-sm text-zinc-300">Wöchentliche Rate:</div>
                  <div className="font-bold text-2xl">{stage.rate}%</div>
                </div>
                
                <div className="border-t border-current border-opacity-30 pt-3">
                  <div className="text-sm text-zinc-200">{stage.description}</div>
                </div>
              </div>
            </div>
            
            {/* Background icon */}
            <FaCoins className="absolute -bottom-4 -right-4 text-6xl opacity-10" />
          </motion.div>
        ))}
      </motion.div>

      {/* Monthly Breakdown Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-6 border border-zinc-700"
      >
        <h3 className="text-xl font-bold text-white mb-6">Monatliche D.FAITH Generierung (1.000 D.INVEST)</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {monthlyData.map((data, index) => (
            <motion.div
              key={data.month}
              initial={{ opacity: 0.3, scale: 0.9 }}
              animate={{
                opacity: data.month <= currentMonth ? 1 : 0.3,
                scale: data.month <= currentMonth ? 1 : 0.9,
                y: data.month === currentMonth ? -5 : 0
              }}
              transition={{ duration: 0.3 }}
              className={`bg-gradient-to-br rounded-xl p-4 border text-center relative ${
                data.month <= currentMonth
                  ? `${data.stage.color} border-current border-opacity-50`
                  : 'from-zinc-700 to-zinc-800 border-zinc-600'
              }`}
            >
              {data.month === currentMonth && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"
                />
              )}
              
              <div className="text-sm font-bold text-zinc-300 mb-2">Monat {data.month}</div>
              <div className="text-xs text-zinc-400 mb-2">Stufe {data.stage.stage}</div>
              <div className="text-lg font-bold text-white mb-1">{data.monthlyReward}</div>
              <div className="text-xs text-zinc-400">D.FAITH</div>
              
              <div className="border-t border-current border-opacity-30 mt-3 pt-2">
                <div className="text-xs text-zinc-400">Kumulativ:</div>
                <div className="text-sm font-bold text-amber-400">{data.cumulativeReward}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Summary Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30">
          <div className="flex items-center gap-3 mb-4">
            <FaCoins className="text-2xl text-green-400" />
            <h4 className="font-bold text-green-400">Gesamt nach 12 Monaten</h4>
          </div>
          <div className="text-3xl font-bold text-green-400 mb-2">
            {monthlyData[11]?.cumulativeReward || '0.00'} D.FAITH
          </div>
          <div className="text-sm text-green-200">Mit 1.000 D.INVEST gestaked</div>
        </div>

        <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl p-6 border border-amber-500/30">
          <div className="flex items-center gap-3 mb-4">
            <FaChartBar className="text-2xl text-amber-400" />
            <h4 className="font-bold text-amber-400">Durchschnitt/Monat</h4>
          </div>
          <div className="text-3xl font-bold text-amber-400 mb-2">
            {(parseFloat(monthlyData[11]?.cumulativeReward || '0') / 12).toFixed(2)} D.FAITH
          </div>
          <div className="text-sm text-amber-200">Über alle Halving-Stufen</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30">
          <div className="flex items-center gap-3 mb-4">
            <FaInfoCircle className="text-2xl text-purple-400" />
            <h4 className="font-bold text-purple-400">ROI nach 12 Monaten</h4>
          </div>
          <div className="text-3xl font-bold text-purple-400 mb-2">
            {((parseFloat(monthlyData[11]?.cumulativeReward || '0') / 1000) * 100).toFixed(2)}%
          </div>
          <div className="text-sm text-purple-200">Ohne Preissteigerung</div>
        </div>
      </motion.div>

      {/* Explanation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30"
      >
        <h4 className="font-bold text-blue-400 mb-4">Wie funktioniert das Halving-System?</h4>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-zinc-300">
          <div>
            <h5 className="font-semibold text-white mb-2">Verknappungsmechanismus:</h5>
            <ul className="space-y-1 text-zinc-300">
              <li>• Alle 2 Monate halbiert sich die Reward-Rate</li>
              <li>• Frühe Investoren erhalten maximale Belohnungen</li>
              <li>• Kontinuierliche Verknappung steigert den Wert</li>
              <li>• Nach 12 Monaten ist die Emission minimal</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-2">Preissteigerung:</h5>
            <ul className="space-y-1 text-zinc-300">
              <li>• Weniger neue Token = höhere Nachfrage</li>
              <li>• Marketing-Budget kauft Token zurück</li>
              <li>• Halving verstärkt den "Moon-Effekt"</li>
              <li>• Langfristige Wertsteigerung erwartet</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HalvingVisualization
