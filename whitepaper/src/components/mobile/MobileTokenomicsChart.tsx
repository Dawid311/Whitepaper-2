'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaCoins, 
  FaFireAlt, 
  FaLock, 
  FaPercent, 
  FaTrophy, 
  FaCalculator 
} from 'react-icons/fa'

interface MobileTokenomicsChartProps {
  tokenPrices: {
    dfaith: number
    dinvest: number
  }
}

const MobileTokenomicsChart: React.FC<MobileTokenomicsChartProps> = ({ tokenPrices }) => {
  const [selectedInvestment, setSelectedInvestment] = useState(10)
  const [activeTab, setActiveTab] = useState<'overview' | 'halving' | 'roi'>('overview')

  // ROI Calculation
  const calculateROI = (investment: number, dfaithPrice: number) => {
    const yearlyRewards = 52 * 0.1 * investment // 0.1 D.FAITH per week per D.INVEST
    const yearlyValue = yearlyRewards * dfaithPrice
    const roi = (yearlyValue / (investment * 5)) * 100
    return { yearlyRewards, yearlyValue, roi }
  }

  const investments = [5, 10, 25, 50]
  const priceScenarios = [0.20, 0.50, 1.00, 1.50]

  const halvingStages = [
    { stage: 1, range: '0-10K', rate: 10.0, status: 'Aktiv', color: 'green' },
    { stage: 2, range: '10-20K', rate: 5.0, status: 'Bald', color: 'blue' },
    { stage: 3, range: '20-40K', rate: 2.5, status: 'Zukunft', color: 'purple' },
    { stage: 4, range: '40-60K', rate: 1.25, status: 'Zukunft', color: 'orange' },
    { stage: 5, range: '60-80K', rate: 0.63, status: 'Zukunft', color: 'red' },
    { stage: 6, range: '80K+', rate: 0.31, status: 'Final', color: 'gray' },
  ]

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-2">Tokenomics</h3>
        <p className="text-gray-400 text-sm">Dual-Token Ökosystem</p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex bg-zinc-800/50 rounded-2xl p-1 backdrop-blur-sm">
        {[
          { id: 'overview', label: 'Übersicht', icon: FaCoins },
          { id: 'halving', label: 'Halving', icon: FaFireAlt },
          { id: 'roi', label: 'ROI', icon: FaCalculator },
        ].map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab(tab.id as 'overview' | 'halving' | 'roi')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-amber-500 to-purple-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <tab.icon className="text-xs" />
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Token Comparison */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-amber-900/40 to-yellow-900/40 rounded-2xl p-4 border border-amber-500/30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <FaCoins className="text-amber-400" />
                  <span className="font-bold text-amber-400">D.FAITH</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Supply:</span>
                    <span className="text-white font-bold">100.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Preis:</span>
                    <span className="text-amber-400 font-bold">€{tokenPrices.dfaith.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Ziel:</span>
                    <span className="text-green-400 font-bold">€1,50</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-2xl p-4 border border-blue-500/30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <FaTrophy className="text-blue-400" />
                  <span className="font-bold text-blue-400">D.INVEST</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Supply:</span>
                    <span className="text-white font-bold">10.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Preis:</span>
                    <span className="text-blue-400 font-bold">€5,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Staking:</span>
                    <span className="text-green-400 font-bold">0,1/Woche</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Token Distribution Visual */}
            <div className="bg-zinc-800/50 rounded-2xl p-4 border border-zinc-700/50">
              <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <FaLock className="text-purple-400" />
                Token Verteilung
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Smart Contract (Gesperrt)</span>
                  <span className="text-purple-400 font-bold">80.000</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Community Umlauf</span>
                  <span className="text-green-400 font-bold">20.000</span>
                </div>
                <div className="w-full bg-zinc-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'halving' && (
          <motion.div
            key="halving"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-2xl p-4 border border-orange-500/30">
              <h4 className="font-bold text-orange-400 mb-2">6-Stufen Halving System</h4>
              <p className="text-gray-300 text-sm">
                Bewährtes Bitcoin-Konzept mit 32x Verknappung von Stufe 1 zu Stufe 6
              </p>
            </div>

            <div className="space-y-3">
              {halvingStages.map((stage, index) => (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-gradient-to-r from-${stage.color}-900/30 to-${stage.color}-800/20 rounded-xl p-4 border border-${stage.color}-500/30`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">Stufe {stage.stage}</span>
                      <span className={`text-xs px-2 py-1 rounded-full bg-${stage.color}-500/20 text-${stage.color}-400`}>
                        {stage.status}
                      </span>
                    </div>
                    <span className="text-lg font-bold text-white">{stage.rate}%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Range: {stage.range}</span>
                    <span className="text-gray-400">pro Woche</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'roi' && (
          <motion.div
            key="roi"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Investment Selector */}
            <div className="bg-zinc-800/50 rounded-2xl p-4 border border-zinc-700/50">
              <h4 className="font-bold text-white mb-3">Investment auswählen</h4>
              <div className="grid grid-cols-4 gap-2">
                {investments.map((amount) => (
                  <motion.button
                    key={amount}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedInvestment(amount)}
                    className={`py-2 px-3 rounded-lg font-medium text-sm transition-all ${
                      selectedInvestment === amount
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
                    }`}
                  >
                    {amount} D.INVEST
                  </motion.button>
                ))}
              </div>
            </div>

            {/* ROI Scenarios */}
            <div className="space-y-3">
              {priceScenarios.map((price, index) => {
                const { yearlyRewards, yearlyValue, roi } = calculateROI(selectedInvestment, price)
                return (
                  <motion.div
                    key={price}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`bg-gradient-to-r rounded-xl p-4 border ${
                      roi > 100
                        ? 'from-green-900/40 to-emerald-900/40 border-green-500/30'
                        : roi > 50
                        ? 'from-blue-900/40 to-cyan-900/40 border-blue-500/30'
                        : 'from-gray-900/40 to-zinc-900/40 border-gray-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <FaPercent className={roi > 100 ? 'text-green-400' : roi > 50 ? 'text-blue-400' : 'text-gray-400'} />
                        <span className="font-bold text-white">D.FAITH @ €{price.toFixed(2)}</span>
                      </div>
                      <span className={`text-xl font-bold ${
                        roi > 100 ? 'text-green-400' : roi > 50 ? 'text-blue-400' : 'text-gray-400'
                      }`}>
                        {roi.toFixed(1)}%
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">Investment</div>
                        <div className="font-bold text-white">€{(selectedInvestment * 5).toFixed(0)}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Yearly Rewards</div>
                        <div className="font-bold text-white">{yearlyRewards.toFixed(1)} D.FAITH</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Yearly Value</div>
                        <div className="font-bold text-white">€{yearlyValue.toFixed(2)}</div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileTokenomicsChart