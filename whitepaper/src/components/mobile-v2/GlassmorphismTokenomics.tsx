'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSpring, animated, config } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import { 
  FaCoins,
  FaDollarSign,
  FaChartLine,
  FaTrophy,
  FaBolt,
  FaRocket,
  FaStar,
  FaArrowUp,
  FaCog,
  FaShieldAlt,
  FaCode,
  FaEthereum
} from 'react-icons/fa'
import Image from 'next/image'

interface GlassmorphismTokenomicsProps {
  tokenPrices?: {
    dfaith: number
    dinvest: number
  }
}

const GlassmorphismTokenomics: React.FC<GlassmorphismTokenomicsProps> = ({ tokenPrices: propTokenPrices }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [activeTab, setActiveTab] = useState<'overview' | 'halving' | 'roi' | 'tech'>('overview')
  const [selectedStage, setSelectedStage] = useState(1)
  const [investmentAmount, setInvestmentAmount] = useState(10)
  const [dfaithPrice, setDfaithPrice] = useState(0.20)
  const [selectedHalvingStage, setSelectedHalvingStage] = useState(1)

  // Live Price States
  const [tokenPrices, setTokenPrices] = useState({
    dfaith: 0.138, // Euro statt USD
    dinvest: 5,
    eth: 2300 // Euro
  })
  const [isLoading, setIsLoading] = useState(true)

  // Live Token Data States
  const [liveTokenData, setLiveTokenData] = useState({
    dinvest: {
      available: 0,
      sold: 0
    },
    dfaith: {
      contractBalance: 0, // Aus Staking API (totalStaked)
      dexLiquidity: 0, // Aus DEX API
      communityCirculation: 0 // Berechnet
    }
  })
  const [isTokenDataLoading, setIsTokenDataLoading] = useState(true)

  // Live Halving Stage State
  const [liveHalvingStage, setLiveHalvingStage] = useState(1)

  // Animation values
  const [animatedValues, setAnimatedValues] = useState({
    dfaithPrice: 0,
    dinvestPrice: 0,
    totalSupply: 0,
    roi: 0
  })

  // Fetch token prices
  useEffect(() => {
    const fetchTokenPrices = async () => {
      try {
        const response = await fetch('/api/token-prices')
        
        // Prüfe, ob die Response OK ist
        if (!response.ok) {
          console.error('API response not OK:', response.status, response.statusText)
          return
        }

        // Prüfe Content-Type
        const contentType = response.headers.get('content-type')
        if (!contentType || !contentType.includes('application/json')) {
          console.error('Response is not JSON:', contentType)
          return
        }

        const text = await response.text()
        if (!text) {
          console.error('Empty response body')
          return
        }

        const data = JSON.parse(text)
        
        if (data.tokens?.dfaith) {
          setTokenPrices({
            dfaith: data.tokens.dfaith.price_eur, // Euro statt USD
            dinvest: data.tokens.dinvest.price_eur,
            eth: data.eth_price_eur || 2300
          })
        }
      } catch (error) {
        console.error('Error fetching token prices:', error)
        // Verwende Fallback-Werte bei Fehlern
        setTokenPrices({
          dfaith: 0.138,
          dinvest: 5,
          eth: 2300
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchTokenPrices()
    const interval = setInterval(fetchTokenPrices, 5 * 60 * 1000) // Update every 5 minutes

    return () => clearInterval(interval)
  }, [])

  // Fetch live token data
  useEffect(() => {
    const fetchLiveTokenData = async () => {
      try {
        // Fetch D.INVEST balance - API zeigt verfügbare (nicht verkaufte)
        const dinvestResponse = await fetch('/api/dinvest-balance')
        let dinvestData = { available: 0, sold: 0 }
        
        if (dinvestResponse.ok) {
          const dinvestJson = await dinvestResponse.json()
          if (dinvestJson.success && dinvestJson.data?.balance) {
            const availableTokens = parseInt(dinvestJson.data.balance)
            const totalDinvestSupply = 10000 // Annahme: 10.000 D.INVEST insgesamt
            const soldTokens = totalDinvestSupply - availableTokens
            
            dinvestData = {
              available: availableTokens,
              sold: soldTokens
            }
          }
        }

        // Fetch DEX liquidity direkt von dex-liquidity API
        const dexResponse = await fetch('/api/dex-liquidity')
        let dfaithDexLiquidity = 0
        
        if (dexResponse.ok) {
          const dexJson = await dexResponse.json()
          if (dexJson.success && dexJson.data?.balances?.tokenInPool) {
            dfaithDexLiquidity = parseFloat(dexJson.data.balances.tokenInPool)
          }
        }

        // Fetch Staking Contract data für availableRewards (D.FAITH im Contract)
        const stakingResponse = await fetch('/api/staking')
        let contractBalance = 0
        
        if (stakingResponse.ok) {
          const stakingJson = await stakingResponse.json()
          if (stakingJson.data?.totalStaked) {
            contractBalance = parseFloat(stakingJson.data.totalStaked)
          }
          // Live Halving Stage aus Staking API
          if (stakingJson.data?.halvingStage) {
            setLiveHalvingStage(stakingJson.data.halvingStage)
          }
        }

        // Berechne Community Circulation (Rest der verfügbaren D.FAITH)
        const totalSupply = 100000
        const communityCirculation = totalSupply - contractBalance - dfaithDexLiquidity

        setLiveTokenData({
          dinvest: dinvestData,
          dfaith: {
            contractBalance,
            dexLiquidity: dfaithDexLiquidity,
            communityCirculation: Math.max(0, communityCirculation)
          }
        })

      } catch (error) {
        console.error('Error fetching live token data:', error)
        // Keine Fallback-Werte setzen - bleibe bei 0
      } finally {
        setIsTokenDataLoading(false)
      }
    }

    fetchLiveTokenData()
    const interval = setInterval(fetchLiveTokenData, 2 * 60 * 1000) // Update every 2 minutes

    return () => clearInterval(interval)
  }, [])

  // Consistent number formatting
  const formatNumber = (num: number, decimals?: number) => {
    if (decimals !== undefined) {
      return num.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  // Token Data (jetzt mit Live-Daten)
  const tokenData = {
    dfaith: {
      total: 100000,
      contractBalance: isTokenDataLoading ? 0 : liveTokenData.dfaith.contractBalance,
      dexLiquidity: isTokenDataLoading ? 0 : liveTokenData.dfaith.dexLiquidity,
      communityCirculation: isTokenDataLoading ? 0 : liveTokenData.dfaith.communityCirculation,
      currentPrice: isLoading ? 0.001 : tokenPrices.dfaith,
      targetPrice: 1.5
    },
    dinvest: {
      total: 10000,
      available: isTokenDataLoading ? 0 : liveTokenData.dinvest.available,
      sold: isTokenDataLoading ? 0 : liveTokenData.dinvest.sold,
      price: isLoading ? 5 : tokenPrices.dinvest,
      totalValue: isLoading ? 50000 : tokenPrices.dinvest * 10000
    }
  }

  useEffect(() => {
    if (inView) {
      // Animate values counting up
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps
      
      const animate = async () => {
        for (let i = 0; i <= steps; i++) {
          const progress = i / steps
          setAnimatedValues({
            dfaithPrice: tokenData.dfaith.currentPrice * progress,
            dinvestPrice: tokenData.dinvest.price * progress,
            totalSupply: tokenData.dfaith.total * progress,
            roi: calculateROI(investmentAmount, tokenData.dfaith.currentPrice) * progress
          })
          await new Promise(resolve => setTimeout(resolve, stepDuration))
        }
      }
      animate()
    }
  }, [inView, tokenData, investmentAmount])

  const calculateROI = (investment: number, dfaithPrice: number) => {
    // Halving-abhängige Reward-Rate
    const currentHalvingStage = halvingStages.find(stage => stage.stage === selectedHalvingStage) || halvingStages[0]
    const weeklyDfaithRewards = (currentHalvingStage.rate / 100) // Prozent zu Dezimal
    const yearlyDfaithRewards = weeklyDfaithRewards * 52 // pro Jahr
    
    // Berechnungen
    const totalInvestment = investment * 5 // D.INVEST price
    const yearlyDfaithValue = yearlyDfaithRewards * dfaithPrice * investment
    const yearlyRoi = totalInvestment > 0 ? (yearlyDfaithValue / totalInvestment) * 100 : 0
    
    return yearlyRoi
  }

  const halvingStages = [
    { stage: 1, range: "0-10k", rate: 10.0, color: "#10b981", status: "Aktiv", multiplier: "32" },
    { stage: 2, range: "10k-20k", rate: 5.0, color: "#3b82f6", status: "Bald", multiplier: "16" },
    { stage: 3, range: "20k-40k", rate: 2.5, color: "#8b5cf6", status: "Zukunft", multiplier: "8" },
    { stage: 4, range: "40k-60k", rate: 1.25, color: "#f59e0b", status: "Zukunft", multiplier: "4" },
    { stage: 5, range: "60k-80k", rate: 0.63, color: "#ef4444", status: "Zukunft", multiplier: "2" },
    { stage: 6, range: "80k+", rate: 0.31, color: "#991b1b", status: "Final", multiplier: "1" }
  ]

  const roiScenarios = [
    { price: 0.05, label: "0,05€ (Start)", priceIncrease: "+0%", color: "#ef4444" },
    { price: 0.20, label: "0,20€", priceIncrease: "+300%", color: "#f59e0b" },
    { price: 0.50, label: "0,50€", priceIncrease: "+900%", color: "#10b981" },
    { price: 1.00, label: "1,00€", priceIncrease: "+1900%", color: "#8b5cf6" }
  ]

  // Spring animations
  const containerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: config.gentle
  })

  const tabSpring = useSpring({
    transform: activeTab === 'overview' ? 'translateX(0%)' : 
               activeTab === 'halving' ? 'translateX(100%)' : 
               activeTab === 'roi' ? 'translateX(200%)' : 'translateX(300%)',
    config: config.wobbly
  })

  return (
    <animated.div ref={ref} style={containerSpring} className="min-h-screen flex flex-col justify-center p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Tokenomics
        </h2>
        <p className="text-gray-300 text-lg mb-4">
          Dual-Token Ökonomie mit intelligenter Verknappung
        </p>
        
        {/* Live Data Indicator */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-flex items-center gap-2 backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-4 py-2 border border-green-500/30"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 font-semibold text-sm">
            Live Blockchain Daten
          </span>
        </motion.div>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="backdrop-blur-xl bg-white/10 rounded-2xl p-2 border border-white/20 mb-8"
      >
        <div className="flex relative">
          <animated.div
            style={tabSpring}
            className="absolute inset-y-1 w-1/4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl"
          />
          
          {[
            { id: 'overview', label: 'Übersicht', icon: <FaCoins /> },
            { id: 'halving', label: 'Halving', icon: <FaBolt /> },
            { id: 'roi', label: 'ROI', icon: <FaChartLine /> },
            { id: 'tech', label: 'Tech', icon: <FaCog /> }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id as 'overview' | 'halving' | 'roi' | 'tech')}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 relative z-10 ${
                activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Token Cards */}
            <div className="grid grid-cols-1 gap-6">
              {/* D.FAITH Token */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-3xl p-6 border border-amber-500/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <Image src="/d-faith-logo.png" alt="D.FAITH" width={60} height={60} className="rounded-2xl" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-yellow-500/30 rounded-2xl blur-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-400">D.FAITH Token</h3>
                    <p className="text-amber-300/70">Fan-Reward Token</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <FaCoins className="text-amber-400" />
                      <span className="text-gray-300 text-sm">Smart Contract</span>
                    </div>
                    <p className="text-2xl font-bold text-amber-400">
                      {formatNumber(tokenData.dfaith.contractBalance)}
                    </p>
                  </div>

                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <FaDollarSign className="text-green-400" />
                      <span className="text-gray-300 text-sm">Aktueller Preis</span>
                    </div>
                    <p className="text-2xl font-bold text-green-400">
                      €{tokenData.dfaith.currentPrice.toFixed(3)}
                    </p>
                  </div>

                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <FaChartLine className="text-blue-400" />
                      <span className="text-gray-300 text-sm">DEX Liquidität</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-400">
                      {formatNumber(tokenData.dfaith.dexLiquidity)}
                    </p>
                  </div>

                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <FaRocket className="text-purple-400" />
                      <span className="text-gray-300 text-sm">Community</span>
                    </div>
                    <p className="text-2xl font-bold text-purple-400">
                      {formatNumber(tokenData.dfaith.communityCirculation, 2)}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* D.INVEST Token */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-6 border border-purple-500/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <Image src="/d-invest-logo.png" alt="D.INVEST" width={60} height={60} className="rounded-2xl" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-400">D.INVEST Token</h3>
                    <p className="text-purple-300/70">Investment Token</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <FaDollarSign className="text-purple-400" />
                      <span className="text-gray-300 text-sm">Fester Preis</span>
                    </div>
                    <p className="text-2xl font-bold text-purple-400">
                      €{tokenData.dinvest.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <FaCoins className="text-green-400" />
                      <span className="text-gray-300 text-sm">Verkauft</span>
                    </div>
                    <p className="text-2xl font-bold text-green-400">
                      {formatNumber(tokenData.dinvest.sold)}
                    </p>
                  </div>

                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <FaRocket className="text-blue-400" />
                      <span className="text-gray-300 text-sm">Verfügbar</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-400">
                      {formatNumber(tokenData.dinvest.available)}
                    </p>
                  </div>

                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <FaChartLine className="text-orange-400" />
                      <span className="text-gray-300 text-sm">Aktuelle Stufe</span>
                    </div>
                    <p className="text-2xl font-bold text-orange-400">
                      Stufe {liveHalvingStage}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {activeTab === 'halving' && (
          <motion.div
            key="halving"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-orange-400 mb-2 flex items-center justify-center gap-2">
                <FaBolt /> 6-Stufen Halving System <FaBolt />
              </h3>
              <p className="text-gray-400">Systematische Verknappung für nachhaltiges Wachstum</p>
              <p className="text-green-400 text-sm mt-2">
                🔴 Live: Stufe {liveHalvingStage} aktiv
              </p>
            </div>

            {halvingStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedStage(stage.stage)}
                className={`backdrop-blur-xl rounded-2xl p-4 border cursor-pointer transition-all duration-300 ${
                  selectedStage === stage.stage
                    ? 'bg-white/15 border-white/30 scale-105'
                    : stage.stage === liveHalvingStage
                    ? 'bg-green-500/20 border-green-500/40 hover:bg-green-500/30'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: stage.color }}
                    >
                      <span className="text-white font-bold">{stage.stage}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Stufe {stage.stage}</p>
                      <p className="text-gray-400 text-sm">{stage.range}</p>
                      {stage.stage === liveHalvingStage && (
                        <p className="text-green-400 text-xs font-bold">🔴 AKTIV</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold text-white">{stage.rate.toFixed(2)}%</p>
                    <p className="text-gray-400 text-xs">{stage.multiplier}x</p>
                  </div>
                </div>

                {selectedStage === stage.stage && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-white/10"
                  >
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-gray-400 text-xs">Status</p>
                        <p className={`font-semibold ${
                          stage.status === 'Aktiv' ? 'text-green-400' : 'text-gray-400'
                        }`}>{stage.status}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Wöchentliche Rate</p>
                        <p className="font-semibold text-white">{stage.rate.toFixed(2)}%</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">vs. Final</p>
                        <p className="font-semibold text-purple-400">{stage.multiplier}x</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'roi' && (
          <motion.div
            key="roi"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Investment Calculator */}
            <div className="backdrop-blur-xl bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-500/20">
              <h3 className="text-xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-2">
                  <FaTrophy /> ROI Rechner <FaTrophy />
                </span>
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">D.INVEST Token Anzahl</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="10000"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="backdrop-blur-sm bg-white/10 rounded-lg px-3 py-2 border border-white/20">
                      <span className="text-white font-bold">{investmentAmount}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">D.FAITH Preis (€)</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0.05"
                      max="2.00"
                      step="0.05"
                      value={dfaithPrice}
                      onChange={(e) => setDfaithPrice(Number(e.target.value))}
                      className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="backdrop-blur-sm bg-white/10 rounded-lg px-3 py-2 border border-white/20">
                      <span className="text-white font-bold">€{dfaithPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">Halving-Stufe</label>
                  <div className="grid grid-cols-3 gap-2">
                    {halvingStages.slice(0, 6).map((stage) => (
                      <button
                        key={stage.stage}
                        onClick={() => setSelectedHalvingStage(stage.stage)}
                        className={`py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                          selectedHalvingStage === stage.stage
                            ? 'text-white border-2'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                        style={{
                          backgroundColor: selectedHalvingStage === stage.stage ? stage.color : undefined,
                          borderColor: selectedHalvingStage === stage.stage ? stage.color : 'transparent'
                        }}
                      >
                        {stage.stage}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-gray-400 text-sm mb-1">Investment</p>
                    <p className="text-2xl font-bold text-green-400">€{(investmentAmount * 5).toLocaleString()}</p>
                  </div>
                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-gray-400 text-sm mb-1">Jährlicher ROI</p>
                    <p className="text-2xl font-bold text-blue-400">{calculateROI(investmentAmount, dfaithPrice).toFixed(1)}%</p>
                  </div>
                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10 col-span-2">
                    <p className="text-gray-400 text-sm mb-1">Jährlicher Gewinn</p>
                    <p className="text-xl font-bold text-purple-400">
                      €{((investmentAmount * 5 * calculateROI(investmentAmount, dfaithPrice)) / 100).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'tech' && (
          <motion.div
            key="tech"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Blockchain Infrastructure */}
            <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent flex items-center justify-center gap-2">
                  <FaEthereum /> Blockchain-Infrastruktur <FaEthereum />
                </span>
              </h3>

              <div className="space-y-4">
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <FaShieldAlt className="text-blue-400" />
                    <h4 className="font-bold text-blue-400">Base Chain (Layer 2)</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Niedrige Transaction-Fees, schnelle Verarbeitung und vollständig Ethereum-kompatibel. 
                    Optimiert für DeFi-Anwendungen mit enterprise-level Security.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FaCode className="text-green-400" />
                        <span className="text-gray-300 text-sm">D.FAITH Contract</span>
                      </div>
                      <button 
                        onClick={() => window.open('https://basescan.org/address/0x69eFD833288605f320d77eB2aB99DDE62919BbC1', '_blank')}
                        className="text-green-400 hover:text-green-300 text-xs font-mono bg-white/10 px-2 py-1 rounded"
                      >
                        0x69eF...9BbC1 ↗
                      </button>
                    </div>
                  </div>

                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FaCode className="text-purple-400" />
                        <span className="text-gray-300 text-sm">D.INVEST Contract</span>
                      </div>
                      <button 
                        onClick={() => window.open('https://basescan.org/address/0x6F1fFd03106B27781E86b33Df5dBB734ac9DF4bb', '_blank')}
                        className="text-purple-400 hover:text-purple-300 text-xs font-mono bg-white/10 px-2 py-1 rounded"
                      >
                        0x6F1f...F4bb ↗
                      </button>
                    </div>
                  </div>

                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FaCode className="text-orange-400" />
                        <span className="text-gray-300 text-sm">Staking Contract</span>
                      </div>
                      <button 
                        onClick={() => window.open('https://basescan.org/address/0xe85b32a44b9eD3ecf8bd331FED46fbdAcDBc9940', '_blank')}
                        className="text-orange-400 hover:text-orange-300 text-xs font-mono bg-white/10 px-2 py-1 rounded"
                      >
                        0xe85b...9940 ↗
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-2">
                  <FaCog /> Token-Spezifikationen <FaCog />
                </span>
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="font-bold text-amber-400 mb-2">D.FAITH Token</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Standard:</span>
                        <span className="text-white">ERC-20</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Decimals:</span>
                        <span className="text-white">2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Supply:</span>
                        <span className="text-white">100.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Type:</span>
                        <span className="text-white">Utility</span>
                      </div>
                    </div>
                  </div>

                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="font-bold text-purple-400 mb-2">D.INVEST Token</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Standard:</span>
                        <span className="text-white">ERC-20</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Decimals:</span>
                        <span className="text-white">0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Supply:</span>
                        <span className="text-white">10.000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Type:</span>
                        <span className="text-white">Investment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </animated.div>
  )
}

export default GlassmorphismTokenomics