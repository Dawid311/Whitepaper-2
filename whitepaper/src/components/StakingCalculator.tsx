'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FaCalculator, FaCoins, FaClock, FaArrowRight } from 'react-icons/fa'

const StakingCalculator = () => {
  const [stakeAmount, setStakeAmount] = useState(100)
  const [timeframe, setTimeframe] = useState(30) // days

  // Halving rates (basis points - 1000 = 10%)
  const rewardRates = [
    { stage: 1, rate: 1000, range: '0-10k', description: 'Stufe 1: Maximale Rewards' },
    { stage: 2, rate: 500, range: '10k-20k', description: 'Stufe 2: Halbe Rewards' },
    { stage: 3, rate: 250, range: '20k-40k', description: 'Stufe 3: Viertel Rewards' },
    { stage: 4, rate: 125, range: '40k-60k', description: 'Stufe 4: Achtel Rewards' },
    { stage: 5, rate: 63, range: '60k-80k', description: 'Stufe 5: Reduzierte Rewards' },
    { stage: 6, rate: 31, range: '80k+', description: 'Stufe 6: Minimale Rewards' }
  ]

  const [selectedStage, setSelectedStage] = useState(1)

  // Calculate rewards based on current stage
  const calculateRewards = useMemo(() => {
    const currentRate = rewardRates.find(r => r.stage === selectedStage)?.rate || 1000
    
    // Weekly reward calculation (contract-conform)
    const weeklyReward = (stakeAmount * currentRate) / 10000
    
    // Calculate for selected timeframe
    const weeks = timeframe / 7
    const totalReward = weeklyReward * weeks
    
    // Calculate ROI
    const roi = (totalReward / stakeAmount) * 100
    
    // Calculate monthly compounds (assuming weekly compounding)
    const months = timeframe / 30
    const monthlyRate = (currentRate / 10000) / 4.33 // weekly to monthly approximation
    const compoundedAmount = stakeAmount * Math.pow(1 + monthlyRate, months * 4.33)
    const compoundedReward = compoundedAmount - stakeAmount
    
    return {
      weeklyReward: weeklyReward.toFixed(2),
      totalReward: totalReward.toFixed(2),
      roi: roi.toFixed(2),
      compoundedReward: compoundedReward.toFixed(2),
      currentRate: (currentRate / 100).toFixed(2)
    }
  }, [stakeAmount, timeframe, selectedStage])

  // Calculate time to reach minimum claim (0.01 D.FAITH)
  const timeToMinClaim = useMemo(() => {
    const currentRate = rewardRates.find(r => r.stage === selectedStage)?.rate || 1000
    const weeklyReward = (stakeAmount * currentRate) / 10000
    
    if (weeklyReward <= 0) return 'N/A'
    
    const weeksToMinClaim = 0.01 / weeklyReward
    const daysToMinClaim = weeksToMinClaim * 7
    
    if (daysToMinClaim < 1) return '< 1 Tag'
    if (daysToMinClaim < 7) return `${Math.ceil(daysToMinClaim)} Tage`
    if (daysToMinClaim < 30) return `${Math.ceil(daysToMinClaim / 7)} Wochen`
    return `${Math.ceil(daysToMinClaim / 30)} Monate`
  }, [stakeAmount, selectedStage])

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-8 border border-zinc-700"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-purple-500/20 rounded-full">
            <FaCalculator className="text-2xl text-purple-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Staking Rechner</h3>
            <p className="text-zinc-400">Berechnen Sie Ihre D.FAITH Rewards</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            {/* Stake Amount Input */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                D.INVEST Staking Betrag
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(Number(e.target.value))}
                  min="1"
                  max="10000"
                  className="w-full bg-zinc-900/80 border border-zinc-600 rounded-xl py-4 px-4 text-lg font-bold text-purple-400 focus:border-purple-500 focus:outline-none pr-20"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-400 font-medium">
                  Token
                </div>
              </div>
              <div className="mt-2 flex gap-2">
                {[1, 10, 50, 100, 500, 1000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setStakeAmount(amount)}
                    className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-lg text-sm hover:bg-zinc-600/50 transition-colors"
                  >
                    {amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeframe Input */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Zeitraum (Tage)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={timeframe}
                  onChange={(e) => setTimeframe(Number(e.target.value))}
                  min="1"
                  max="365"
                  className="w-full bg-zinc-900/80 border border-zinc-600 rounded-xl py-4 px-4 text-lg font-bold text-blue-400 focus:border-blue-500 focus:outline-none pr-20"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-400 font-medium">
                  Tage
                </div>
              </div>
              <div className="mt-2 flex gap-2">
                {[7, 14, 30, 90, 180, 365].map((days) => (
                  <button
                    key={days}
                    onClick={() => setTimeframe(days)}
                    className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-lg text-sm hover:bg-zinc-600/50 transition-colors"
                  >
                    {days}d
                  </button>
                ))}
              </div>
            </div>

            {/* Reward Stage Selection */}
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Aktuelle Reward-Stufe
              </label>
              <div className="grid grid-cols-2 gap-2">
                {rewardRates.map((stage) => (
                  <button
                    key={stage.stage}
                    onClick={() => setSelectedStage(stage.stage)}
                    className={`p-3 rounded-lg border transition-colors text-left ${
                      selectedStage === stage.stage
                        ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                        : 'bg-zinc-700/30 border-zinc-600 text-zinc-300 hover:bg-zinc-600/50'
                    }`}
                  >
                    <div className="font-bold text-sm">Stufe {stage.stage}</div>
                    <div className="text-xs opacity-75">{stage.range}</div>
                    <div className="text-sm font-semibold">{(stage.rate / 100).toFixed(2)}%</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Weekly Rewards */}
            <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl p-6 border border-amber-500/30">
              <div className="flex items-center gap-3 mb-4">
                <FaCoins className="text-2xl text-amber-400" />
                <div>
                  <h4 className="font-bold text-amber-400">Wöchentliche Rewards</h4>
                  <p className="text-xs text-amber-200">Kontinuierliche Ausschüttung</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-amber-400 mb-2">
                {calculateRewards.weeklyReward} D.FAITH
              </div>
              <div className="text-sm text-amber-200">
                Rate: {calculateRewards.currentRate}% pro Woche
              </div>
            </div>

            {/* Total Rewards */}
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
              <div className="flex items-center gap-3 mb-4">
                <FaArrowRight className="text-2xl text-green-400" />
                <div>
                  <h4 className="font-bold text-green-400">Gesamt-Rewards</h4>
                  <p className="text-xs text-green-200">Nach {timeframe} Tagen</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                {calculateRewards.totalReward} D.FAITH
              </div>
              <div className="text-sm text-green-200">
                ROI: {calculateRewards.roi}%
              </div>
            </div>

            {/* Time to Min Claim */}
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="text-2xl text-blue-400" />
                <div>
                  <h4 className="font-bold text-blue-400">Zeit bis Min. Claim</h4>
                  <p className="text-xs text-blue-200">0.01 D.FAITH Minimum</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-blue-400">
                {timeToMinClaim}
              </div>
            </div>

            {/* Investment Summary */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
              <h4 className="font-bold text-purple-400 mb-4">Investment Übersicht</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Investition:</span>
                  <span className="font-bold text-white">{stakeAmount} D.INVEST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Wert:</span>
                  <span className="font-bold text-green-400">{(stakeAmount * 5).toLocaleString()}€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Erwartete Rewards:</span>
                  <span className="font-bold text-amber-400">{calculateRewards.totalReward} D.FAITH</span>
                </div>
                <div className="border-t border-purple-500/30 pt-3">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">ROI:</span>
                    <span className="font-bold text-purple-400">{calculateRewards.roi}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
          <p className="text-sm text-zinc-400">
            <strong className="text-amber-400">Hinweis:</strong> Diese Berechnungen basieren auf aktuellen Reward-Raten und können sich durch das Halving-System ändern. 
            Tatsächliche Rewards können durch Netzwerk-Bedingungen und Smart Contract Updates variieren.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default StakingCalculator
