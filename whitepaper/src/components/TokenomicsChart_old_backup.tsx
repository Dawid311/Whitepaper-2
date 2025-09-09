'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaCoins, 
  FaRocket, 
  FaUsers, 
  FaChartLine, 
  FaLock, 
  FaUnlock,
  FaFire,
  FaGem,
  FaShieldAlt,
  FaArrowRight,
  FaPlay,
  FaPause,
  FaInfoCircle,
  FaMusic,
  FaDollarSign,
  FaTrophy,
  FaExchangeAlt,
  FaGlobe,
  FaCalculator,
  FaClock
} from 'react-icons/fa'
import Image from 'next/image'

const TokenomicsChart = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'flow' | 'rewards' | 'halving'>('overview')
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true)
  const [currentStage, setCurrentStage] = useState(0)

  // Staking Calculator States (moved from renderRewards to fix Rules of Hooks)
  const [stakeAmount, setStakeAmount] = useState(100)
  const [timeframe, setTimeframe] = useState(30) // days
  const [selectedStage, setSelectedStage] = useState(1)

  // Consistent number formatting to avoid hydration errors
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  // Halving rates (basis points - 1000 = 10%)
  const rewardRates = [
    { stage: 1, rate: 1000, range: '0-10k', description: 'Stufe 1: Maximale Rewards' },
    { stage: 2, rate: 500, range: '10k-20k', description: 'Stufe 2: Halbe Rewards' },
    { stage: 3, rate: 250, range: '20k-40k', description: 'Stufe 3: Viertel Rewards' },
    { stage: 4, rate: 125, range: '40k-60k', description: 'Stufe 4: Achtel Rewards' },
    { stage: 5, rate: 63, range: '60k-80k', description: 'Stufe 5: Reduzierte Rewards' },
    { stage: 6, rate: 31, range: '80k+', description: 'Stufe 6: Minimale Rewards' }
  ]

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

  // Token Data
  const tokenData = {
    dfaith: {
      total: 100000,
      locked: 80000,
      liquidity: 20000,
      currentPrice: 0.01,
      targetPrice: 15.0
    },
    dinvest: {
      total: 10000,
      price: 5,
      totalValue: 50000,
      sold: 2500
    }
  }

  // Halving Stages
  const halvingStages = [
    { stage: 1, range: '0-10k', rate: 10.00, color: '#22c55e', status: 'Aktiv', multiplier: 32 },
    { stage: 2, range: '10k-20k', rate: 5.00, color: '#3b82f6', status: 'Bald', multiplier: 16 },
    { stage: 3, range: '20k-40k', rate: 2.50, color: '#8b5cf6', status: 'Kommend', multiplier: 8 },
    { stage: 4, range: '40k-60k', rate: 1.25, color: '#f59e0b', status: 'Kommend', multiplier: 4 },
    { stage: 5, range: '60k-80k', rate: 0.63, color: '#ef4444', status: 'Kommend', multiplier: 2 },
    { stage: 6, range: '80k+', rate: 0.31, color: '#991b1b', status: 'Final', multiplier: 1 }
  ]

  // Animation cycle
  useEffect(() => {
    if (!isAnimationPlaying) return
    
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % 4)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isAnimationPlaying])

  const TabButton = ({ tab, label, icon: Icon, isActive, onClick }: any) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25' 
          : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-white'
      }`}
    >
      <Icon className="text-lg" />
      <span>{label}</span>
    </button>
  )

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Token Overview Cards */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* D.FAITH Token */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl rounded-3xl p-8 border border-amber-500/30 hover:border-amber-400/50 transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image 
                    src="/d-faith-logo.png" 
                    alt="D.FAITH Logo" 
                    width={60} 
                    height={60}
                    className="rounded-full border-2 border-amber-400/50"
                  />
                  <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                    <FaMusic className="text-white text-xs" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-400">D.FAITH</h3>
                  <p className="text-zinc-400">Fan-Reward Token</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">{tokenData.dfaith.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
                <div className="text-amber-400 text-sm">Total Supply</div>
              </div>
            </div>

            {/* Token Distribution Visualization */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-zinc-300 text-sm">Token Verteilung</span>
                <span className="text-zinc-400 text-xs">100%</span>
              </div>
              <div className="w-full h-4 bg-zinc-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <div className="flex justify-between mt-2 text-xs">
                <span className="text-orange-400">80% Gesperrt ({formatNumber(tokenData.dfaith.locked)})</span>
                <span className="text-blue-400">20% Liquidität ({formatNumber(tokenData.dfaith.liquidity)})</span>
              </div>
            </div>

            {/* Price Projection */}
            <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-4 border border-green-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-green-400 text-sm">Aktueller Preis</div>
                  <div className="text-2xl font-bold text-white">${tokenData.dfaith.currentPrice}</div>
                </div>
                <FaArrowRight className="text-green-400 text-2xl" />
                <div className="text-right">
                  <div className="text-green-400 text-sm">Langfristziel</div>
                  <div className="text-2xl font-bold text-green-400">${tokenData.dfaith.targetPrice}+</div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                  1.500x Potenzial 🚀
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* D.INVEST Token */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image 
                    src="/d-invest-logo.png" 
                    alt="D.INVEST Logo" 
                    width={60} 
                    height={60}
                    className="rounded-full border-2 border-purple-400/50"
                  />
                  <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-1">
                    <FaRocket className="text-white text-xs" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">D.INVEST</h3>
                  <p className="text-zinc-400">Investment Token</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">{formatNumber(tokenData.dinvest.total)}</div>
                <div className="text-purple-400 text-sm">Total Supply</div>
              </div>
            </div>

            {/* Sales Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-zinc-300 text-sm">Verkaufsfortschritt</span>
                <span className="text-zinc-400 text-xs">{((tokenData.dinvest.sold / tokenData.dinvest.total) * 100).toFixed(1)}%</span>
              </div>
              <div className="w-full h-4 bg-zinc-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000" 
                  style={{ width: `${(tokenData.dinvest.sold / tokenData.dinvest.total) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs">
                <span className="text-purple-400">{formatNumber(tokenData.dinvest.sold)} Verkauft</span>
                <span className="text-zinc-400">{formatNumber(tokenData.dinvest.total - tokenData.dinvest.sold)} Verfügbar</span>
              </div>
            </div>

            {/* Investment Details */}
            <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-4 border border-blue-500/30">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-blue-400 text-sm">Preis pro Token</div>
                  <div className="text-2xl font-bold text-white">5€</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 text-sm">Gesamtkapital</div>
                  <div className="text-2xl font-bold text-purple-400">{formatNumber(tokenData.dinvest.totalValue)}€</div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                  💰 Direkte Kapitalbeschaffung
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ecosystem Connection */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
        <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
              🔗 Dual-Token Ökosystem
            </h3>
            <p className="text-zinc-400 text-lg">Wie beide Token zusammenarbeiten, um ein nachhaltiges Wachstum zu schaffen</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="text-3xl text-white" />
              </div>
              <h4 className="text-lg font-bold text-green-400 mb-2">Fan Engagement</h4>
              <p className="text-zinc-400 text-sm">Fans erhalten D.FAITH Token für Social Media Interaktionen</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaDollarSign className="text-3xl text-white" />
              </div>
              <h4 className="text-lg font-bold text-blue-400 mb-2">Kapitalbildung</h4>
              <p className="text-zinc-400 text-sm">Investoren kaufen D.INVEST für Projekt-Finanzierung</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaRocket className="text-3xl text-white" />
              </div>
              <h4 className="text-lg font-bold text-purple-400 mb-2">Wertsteigerung</h4>
              <p className="text-zinc-400 text-sm">Halving-System führt zu kontinuierlicher Verknappung</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )

  const renderFlow = () => (
    <div className="space-y-8">
      {/* Animated Flow Visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50 overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h3 className="text-3xl font-bold text-white">💫 Token Flow Visualisierung</h3>
              <button
                onClick={() => setIsAnimationPlaying(!isAnimationPlaying)}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
              >
                {isAnimationPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
            <p className="text-zinc-400">Automatischer Kreislauf der Token-Interaktionen</p>
          </div>

          {/* Flow Steps */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: FaDollarSign, title: 'D.INVEST Kauf', desc: 'Investor kauft D.INVEST à 5€', color: 'from-blue-500 to-cyan-500' },
              { icon: FaRocket, title: 'Marketing Budget', desc: 'Kapital für Fan-Belohnungen', color: 'from-purple-500 to-pink-500' },
              { icon: FaCoins, title: 'D.FAITH Kauf', desc: 'Automatische Token-Käufe', color: 'from-amber-500 to-orange-500' },
              { icon: FaLock, title: 'Contract Fütterung', desc: '50% zurück in Smart Contract', color: 'from-green-500 to-emerald-500' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.5, scale: 0.95 }}
                animate={{ 
                  opacity: currentStage === index ? 1 : 0.5,
                  scale: currentStage === index ? 1.05 : 0.95,
                }}
                transition={{ duration: 0.3 }}
                className={`relative group ${currentStage === index ? 'z-20' : 'z-10'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className={`relative bg-zinc-800/80 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 ${
                  currentStage === index ? 'border-white/50 shadow-2xl' : 'border-zinc-700/50'
                }`}>
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                      currentStage === index ? 'animate-pulse' : ''
                    }`}>
                      <step.icon className="text-2xl text-white" />
                    </div>
                    <h4 className="font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-zinc-400">{step.desc}</p>
                  </div>
                </div>

                {/* Arrow */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-30">
                    <FaArrowRight className={`text-2xl transition-colors duration-300 ${
                      currentStage === index ? 'text-white animate-bounce' : 'text-zinc-600'
                    }`} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Cycle Indicator */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-zinc-800/50 rounded-full px-6 py-3 border border-zinc-700/50">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-zinc-300 text-sm">Kontinuierlicher Kreislauf aktiv</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Impact Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: FaFire, title: 'Token Burn Rate', value: '50%', desc: 'Gekaufte Token permanent gesperrt', color: 'text-red-400' },
          { icon: FaChartLine, title: 'Wertsteigerung', value: '1.500x', desc: 'Langfristiges Preispotenzial', color: 'text-green-400' },
          { icon: FaGem, title: 'Verknappung', value: '6 Stufen', desc: 'Halving-System Mechanismus', color: 'text-purple-400' }
        ].map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl rounded-2xl p-6 border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-zinc-700/50 rounded-xl flex items-center justify-center">
                <metric.icon className={`text-xl ${metric.color}`} />
              </div>
              <div>
                <h4 className="font-bold text-white">{metric.title}</h4>
                <p className="text-xs text-zinc-400">{metric.desc}</p>
              </div>
            </div>
            <div className={`text-3xl font-bold ${metric.color}`}>{metric.value}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderRewards = () => (
      <div className="space-y-8">
        {/* Staking Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-purple-500/20 rounded-full">
              <FaCalculator className="text-2xl text-purple-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Staking Rechner</h3>
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
                <div className="mt-2 flex gap-2 flex-wrap">
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
                <div className="mt-2 flex gap-2 flex-wrap">
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
                    <span className="font-bold text-green-400">{formatNumber(stakeAmount * 5)}€</span>
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

  const renderHalving = () => (
    <div className="space-y-8">
      {/* Halving Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
        <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/30">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-3">
              ⚡ Halving-System
            </h3>
            <p className="text-zinc-400 text-lg">6-Stufen Verknappungs-Mechanismus für kontinuierliche Wertsteigerung</p>
          </div>

          {/* Current Status */}
          <div className="bg-green-900/30 rounded-2xl p-6 border border-green-500/30 mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <h4 className="text-xl font-bold text-green-400">Aktuelle Stufe: 1</h4>
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10.00%</div>
              <div className="text-green-400">Wöchentliche Reward-Rate</div>
              <div className="text-zinc-400 text-sm mt-2">Token Range: 0 - 10.000</div>
            </div>
          </div>

          {/* Halving Stages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {halvingStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`relative group cursor-pointer ${
                  stage.status === 'Aktiv' ? 'ring-2 ring-green-500/50' : ''
                }`}
              >
                <div className={`absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} 
                     style={{ backgroundColor: stage.color }}></div>
                <div className={`relative bg-zinc-800/80 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 ${
                  stage.status === 'Aktiv' ? 'border-green-500/50 bg-green-900/20' : 'border-zinc-700/50'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-white">Stufe {stage.stage}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      stage.status === 'Aktiv' ? 'bg-green-500/20 text-green-400' :
                      stage.status === 'Bald' ? 'bg-blue-500/20 text-blue-400' :
                      stage.status === 'Final' ? 'bg-red-500/20 text-red-400' :
                      'bg-zinc-500/20 text-zinc-400'
                    }`}>
                      {stage.status}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-zinc-400 text-sm">Range:</span>
                      <span className="text-white text-sm">{stage.range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400 text-sm">Rate:</span>
                      <span className="font-bold" style={{ color: stage.color }}>{stage.rate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400 text-sm">vs. Final:</span>
                      <span className="text-amber-400 font-bold">{stage.multiplier}x</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Visualization */}
          <div className="mt-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-6 border border-red-500/30">
            <h5 className="text-xl font-bold text-red-400 mb-4 flex items-center">
              <FaFire className="mr-3" />
              Verknappungs-Effekt
            </h5>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400 mb-1">32x</div>
                <div className="text-zinc-400 text-sm">Weniger Rewards in Stufe 6 vs. Stufe 1</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400 mb-1">50%</div>
                <div className="text-zinc-400 text-sm">Token permanent im Contract gesperrt</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-400 mb-1">∞</div>
                <div className="text-zinc-400 text-sm">Unbegrenztes Wachstumspotenzial</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <TabButton
          tab="overview"
          label="Überblick"
          icon={FaInfoCircle}
          isActive={activeTab === 'overview'}
          onClick={() => setActiveTab('overview')}
        />
        <TabButton
          tab="flow"
          label="Token Flow"
          icon={FaExchangeAlt}
          isActive={activeTab === 'flow'}
          onClick={() => setActiveTab('flow')}
        />
        <TabButton
          tab="rewards"
          label="Staking Calculator"
          icon={FaCalculator}
          isActive={activeTab === 'rewards'}
          onClick={() => setActiveTab('rewards')}
        />
        <TabButton
          tab="halving"
          label="Halving"
          icon={FaFire}
          isActive={activeTab === 'halving'}
          onClick={() => setActiveTab('halving')}
        />
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'flow' && renderFlow()}
          {activeTab === 'rewards' && renderRewards()}
          {activeTab === 'halving' && renderHalving()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default TokenomicsChart
