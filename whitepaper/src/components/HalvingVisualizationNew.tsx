'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChartBar, FaCoins, FaPlay, FaPause, FaInfoCircle, FaCalculator } from 'react-icons/fa'

const HalvingVisualization = () => {
  const [selectedDinvestAmount, setSelectedDinvestAmount] = useState(10)
  const [isAnimating, setIsAnimating] = useState(false)
  
  // Halving stages
  const halvingStages = [
    {
      stage: 1,
      weeklyRate: 10.00, // 10% per week
      range: '0-10k D.FAITH verteilt',
      color: 'from-green-400 to-emerald-500',
      description: 'Maximale Rewards - Frühe Adopter profitieren'
    },
    {
      stage: 2,
      weeklyRate: 5.00, // 5% per week
      range: '10k-20k D.FAITH verteilt',
      color: 'from-blue-400 to-cyan-500',
      description: 'Erste Halbierung'
    },
    {
      stage: 3,
      weeklyRate: 2.50, // 2.5% per week
      range: '20k-40k D.FAITH verteilt',
      color: 'from-purple-400 to-violet-500',
      description: 'Zweite Halbierung'
    },
    {
      stage: 4,
      weeklyRate: 1.25, // 1.25% per week
      range: '40k-60k D.FAITH verteilt',
      color: 'from-orange-400 to-amber-500',
      description: 'Dritte Halbierung'
    },
    {
      stage: 5,
      weeklyRate: 0.63, // 0.63% per week
      range: '60k-80k D.FAITH verteilt',
      color: 'from-red-400 to-rose-500',
      description: 'Vierte Halbierung'
    },
    {
      stage: 6,
      weeklyRate: 0.31, // 0.31% per week
      range: 'ab 80k D.FAITH verteilt',
      color: 'from-gray-400 to-zinc-500',
      description: 'Finale Stufe'
    }
  ]

  // Calculate monthly D.FAITH generation
  const calculateMonthlyReward = (dinvestAmount: number, weeklyRate: number) => {
    const weeklyReward = (dinvestAmount * weeklyRate) / 100
    const monthlyReward = weeklyReward * 4.33 // ~4.33 weeks per month
    return monthlyReward
  }

  // Different investment amounts to showcase
  const dinvestAmounts = [1, 5, 10, 25, 50, 100]

  // Generate example data for 12 months showing how rewards decrease
  const generateYearlyProjection = (dinvestAmount: number) => {
    const months = []
    let totalDistributed = 0
    
    for (let month = 1; month <= 12; month++) {
      // Determine which stage we're in based on total distributed
      let currentStage = 1
      if (totalDistributed >= 80000) currentStage = 6
      else if (totalDistributed >= 60000) currentStage = 5
      else if (totalDistributed >= 40000) currentStage = 4
      else if (totalDistributed >= 20000) currentStage = 3
      else if (totalDistributed >= 10000) currentStage = 2
      
      const stage = halvingStages[currentStage - 1]
      const monthlyReward = calculateMonthlyReward(dinvestAmount, stage.weeklyRate)
      
      // Simulate total distribution growth (this would come from all users)
      totalDistributed += 2000 + (month * 500) // Simulated growth
      
      months.push({
        month,
        monthlyReward: monthlyReward.toFixed(2),
        stage: currentStage,
        weeklyRate: stage.weeklyRate,
        totalDistributed,
        stageName: `Stufe ${currentStage}`
      })
    }
    
    return months
  }

  const yearlyData = generateYearlyProjection(selectedDinvestAmount)

  return (
    <section id="halving" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
          Halving Mechanismus
        </h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
          Erleben Sie live, wie sich die D.FAITH Rewards über die Zeit entwickeln
        </p>
        
        {/* D.INVEST Amount Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="text-zinc-400 self-center mr-4">D.INVEST Betrag:</span>
          {dinvestAmounts.map(amount => (
            <button
              key={amount}
              onClick={() => setSelectedDinvestAmount(amount)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedDinvestAmount === amount
                  ? 'bg-amber-500 text-black'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              {amount} Token
            </button>
          ))}
        </div>
      </motion.div>

      {/* Current Selection Info */}
      <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 rounded-2xl p-6 border border-zinc-700 mb-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-amber-400 mb-2">
            {selectedDinvestAmount} D.INVEST Token gestaked
          </h3>
          <p className="text-zinc-400">
            Hier sehen Sie, wie sich Ihre monatlichen D.FAITH Rewards entwickeln
          </p>
        </div>
      </div>

      {/* Monthly Rewards Table */}
      <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 rounded-2xl p-6 border border-zinc-700 mb-8">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <FaCalculator className="text-amber-400" />
          Monatliche D.FAITH Generierung
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="text-left py-3 px-2 text-zinc-400">Monat</th>
                <th className="text-left py-3 px-2 text-zinc-400">Stufe</th>
                <th className="text-left py-3 px-2 text-zinc-400">Wöchentliche Rate</th>
                <th className="text-left py-3 px-2 text-zinc-400">Monatlich D.FAITH</th>
                <th className="text-left py-3 px-2 text-zinc-400">Gesamt verteilt</th>
              </tr>
            </thead>
            <tbody>
              {yearlyData.map((data, index) => (
                <motion.tr
                  key={data.month}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="border-b border-zinc-800 hover:bg-zinc-800/30 transition-colors"
                >
                  <td className="py-3 px-2 font-medium text-white">
                    Monat {data.month}
                  </td>
                  <td className="py-3 px-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${
                      halvingStages[data.stage - 1].color
                    } text-black`}>
                      {data.stageName}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-zinc-300">
                    {data.weeklyRate.toFixed(2)}%
                  </td>
                  <td className="py-3 px-2 font-bold text-amber-400">
                    {data.monthlyReward} D.FAITH
                  </td>
                  <td className="py-3 px-2 text-zinc-400 text-sm">
                    {(data.totalDistributed / 1000).toFixed(0)}k
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Halving Stages Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {halvingStages.map((stage, index) => (
          <motion.div
            key={stage.stage}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 rounded-xl p-6 border border-zinc-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stage.color} flex items-center justify-center text-black font-bold`}>
                {stage.stage}
              </div>
              <div>
                <h4 className="font-bold text-white">Stufe {stage.stage}</h4>
                <p className="text-xs text-zinc-400">{stage.range}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-zinc-400">Wöchentliche Rate:</span>
                <span className="font-bold text-white">{stage.weeklyRate.toFixed(2)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">10 Token/Monat:</span>
                <span className="font-bold text-amber-400">
                  {calculateMonthlyReward(10, stage.weeklyRate).toFixed(2)} D.FAITH
                </span>
              </div>
            </div>
            
            <p className="text-sm text-zinc-500 mt-3">
              {stage.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Key Insights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl p-6 border border-amber-500/30"
      >
        <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
          <FaInfoCircle />
          Wichtige Erkenntnisse
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-white mb-2">Frühe Adopter Vorteil</h4>
            <p className="text-zinc-300 text-sm">
              In den ersten Monaten erhalten Sie bis zu 10% wöchentliche Rewards. 
              Je früher Sie einsteigen, desto mehr profitieren Sie.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Verknappung durch Design</h4>
            <p className="text-zinc-300 text-sm">
              Durch das Halving-System wird D.FAITH automatisch verknappt, 
              was zu potenziellem Wertwachstum führt.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HalvingVisualization
