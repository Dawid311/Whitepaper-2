'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { 
  FaInfoCircle, 
  FaCalculator, 
  FaFire, 
  FaCoins, 
  FaClock, 
  FaArrowRight,
  FaRocket,
  FaDollarSign,
  FaUsers,
  FaExchangeAlt,
  FaChartLine,
  FaHandHoldingUsd,
  FaGift,
  FaLock,
  FaPause,
  FaPlay,
  FaGem
} from 'react-icons/fa'
import Image from 'next/image'

const TokenomicsChart = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'calculator' | 'halving' | 'tokenflow'>('overview')
  
  // Token Flow Animation States
  const [currentStage, setCurrentStage] = useState(0)
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true)

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

  // Calculator States (müssen auf oberster Ebene sein)
  const [investmentAmount, setInvestmentAmount] = useState(10)
  const [dfaithPrice, setDfaithPrice] = useState(0.20)
  const [selectedHalvingStage, setSelectedHalvingStage] = useState(1)

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

  // Token Flow Animation Effect
  useEffect(() => {
    if (!isAnimationPlaying) return
    
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % 4)
    }, 2000)

    return () => clearInterval(interval)
  }, [isAnimationPlaying])

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

  // Halving stages for visualization
  const halvingStages = [
    { stage: 1, range: '0-10k', rate: 10.0, color: '#10b981', status: 'Aktiv', multiplier: '32' },
    { stage: 2, range: '10k-20k', rate: 5.0, color: '#3b82f6', status: 'Bald', multiplier: '16' },
    { stage: 3, range: '20k-40k', rate: 2.5, color: '#8b5cf6', status: 'Zukunft', multiplier: '8' },
    { stage: 4, range: '40k-60k', rate: 1.25, color: '#f59e0b', status: 'Zukunft', multiplier: '4' },
    { stage: 5, range: '60k-80k', rate: 0.63, color: '#ef4444', status: 'Zukunft', multiplier: '2' },
    { stage: 6, range: '80k+', rate: 0.31, color: '#991b1b', status: 'Final', multiplier: '1' }
  ]

  // Recharts Data (jetzt mit Live-Daten)
  const dfaithChartData = [
    { name: 'Smart Contract', value: tokenData.dfaith.contractBalance, fill: '#f59e0b' },
    { name: 'DEX Liquidität', value: tokenData.dfaith.dexLiquidity, fill: '#3b82f6' },
    { name: 'Community Umlauf', value: tokenData.dfaith.communityCirculation, fill: '#10b981' }
  ]

  const dinvestChartData = [
    { name: 'Verkauft', value: tokenData.dinvest.sold, fill: '#8b5cf6' },
    { name: 'Verfügbar', value: tokenData.dinvest.available, fill: '#374151' }
  ]

  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0]
      const isDfaith = data.name.includes('Rewards') || data.name.includes('DEX') || data.name.includes('Community')
      const total = isDfaith ? tokenData.dfaith.total : tokenData.dinvest.total
      const percentage = ((data.value / total) * 100).toFixed(1)
      
      return (
        <div className="bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-lg p-3">
          <p className="text-white font-semibold">{data.name}</p>
          <p className="text-zinc-300">{formatNumber(data.value)} Token</p>
          <p className="text-zinc-400 text-sm">{percentage}%</p>
          {!isTokenDataLoading && isDfaith && (
            <p className="text-green-400 text-xs mt-1">Live Daten</p>
          )}
        </div>
      )
    }
    return null
  }

  // Tab Button Component
  const TabButton = ({ tab, label, icon: Icon, isActive, onClick }: {
    tab: string
    label: string
    icon: React.ComponentType<any>
    isActive: boolean
    onClick: () => void
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
          : 'bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 hover:text-white'
      }`}
    >
      <Icon className="text-lg" />
      <span>{label}</span>
    </button>
  )

  // Overview Tab
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
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl rounded-3xl p-8 border border-amber-500/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <Image 
                  src="/d-faith-logo.png" 
                  alt="D.FAITH Logo" 
                  width={60} 
                  height={60}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-400">D.FAITH</h3>
                <p className="text-zinc-400">Fan-Reward Token</p>
              </div>
            </div>

            <div className="h-48 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dfaithChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {dfaithChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-sm text-white">Smart Contract</span>
                </div>
                <span className="font-bold text-amber-400">{formatNumber(tokenData.dfaith.contractBalance)}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-white">DEX Liquidität</span>
                </div>
                <span className="font-bold text-blue-400">{formatNumber(tokenData.dfaith.dexLiquidity)}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-white">Community Umlauf</span>
                </div>
                <span className="font-bold text-green-400">{formatNumber(tokenData.dfaith.communityCirculation, 2)}</span>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-4 border border-green-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-green-400 text-sm">Aktuell</div>
                  <div className="text-xl font-bold text-white">
                    €{isLoading ? '...' : tokenData.dfaith.currentPrice.toFixed(2)}
                  </div>
                </div>
                <FaArrowRight className="text-green-400 text-xl" />
                <div className="text-right">
                  <div className="text-green-400 text-sm">Ziel</div>
                  <div className="text-xl font-bold text-green-400">€{tokenData.dfaith.targetPrice}</div>
                </div>
              </div>
              {!isLoading && !isTokenDataLoading && (
                <div className="mt-2 text-xs text-green-300 opacity-75">
                  Live Daten von Blockchain & DEX
                </div>
              )}
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <Image 
                  src="/d-invest-logo.png" 
                  alt="D.INVEST Logo" 
                  width={60} 
                  height={60}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-400">D.INVEST</h3>
                <p className="text-zinc-400">Investment Token</p>
              </div>
            </div>

            <div className="h-48 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dinvestChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {dinvestChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-white">Verkauft</span>
                </div>
                <span className="font-bold text-purple-400">{formatNumber(tokenData.dinvest.sold, 0)}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  <span className="text-sm text-white">Verfügbar</span>
                </div>
                <span className="font-bold text-gray-400">{formatNumber(tokenData.dinvest.available, 0)}</span>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-4 border border-blue-500/30">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-blue-400 text-sm">Preis/Token</div>
                  <div className="text-xl font-bold text-white">
                    {isLoading ? '...' : tokenData.dinvest.price.toFixed(2)}€
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 text-sm">Gesamtkapital</div>
                  <div className="text-xl font-bold text-purple-400">
                    {formatNumber(tokenData.dinvest.totalValue)}€
                  </div>
                </div>
              </div>
              {!isLoading && !isTokenDataLoading && (
                <div className="mt-2 text-xs text-blue-300 opacity-75 text-center">
                  Live Token-Balances integriert
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ecosystem Connection */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl rounded-3xl p-8 border border-zinc-700/50"
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
            🔗 Dual-Token Ökosystem
          </h3>
          <p className="text-zinc-400 text-lg">Wie beide Token zusammenarbeiten für nachhaltiges Wachstum</p>
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
      </motion.div>
    </div>
  )

  // Token Flow Tab
  const renderTokenFlow = () => (
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

  // D.INVEST Rentabilitäts-Rechner Tab
  const renderCalculator = () => {
    // D.INVEST Details
    const dinvestPrice = 5 // Euro
    
    // Halving-abhängige Reward-Rate
    const currentHalvingStage = halvingStages.find(stage => stage.stage === selectedHalvingStage) || halvingStages[0]
    const weeklyDfaithRewards = currentHalvingStage.rate / 100 // Prozent zu Dezimal
    const yearlyDfaithRewards = weeklyDfaithRewards * 52 // pro Jahr
    
    // Berechnungen
    const totalInvestment = investmentAmount * dinvestPrice
    const yearlyDfaithValue = yearlyDfaithRewards * dfaithPrice * investmentAmount
    const yearlyRoi = (yearlyDfaithValue / totalInvestment) * 100
    
    // Verschiedene Preis-Szenarien
    const priceScenarios = [
      { price: 0.05, label: "0,05€ (Start)", priceIncrease: "+0%", color: "text-red-400" },
      { price: 0.20, label: "0,20€", priceIncrease: "+300%", color: "text-yellow-400" },
      { price: 0.50, label: "0,50€", priceIncrease: "+900%", color: "text-green-400" },
      { price: 1.00, label: "1,00€", priceIncrease: "+1900%", color: "text-emerald-400" },
    ]

    return (
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-3xl p-8 border border-green-500/30"
        >
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white">
                <FaCalculator className="text-3xl" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-green-400 mb-4">
              🎯 D.INVEST Rentabilitäts-Rechner
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Berechnen Sie Ihre Rendite bei verschiedenen D.FAITH Preisen
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Input Section */}
            <div className="space-y-6">
              {/* Investment Amount */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Anzahl D.INVEST Token
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    min="1"
                    max="1000"
                    className="w-full bg-zinc-900/80 border border-zinc-600 rounded-xl py-4 px-4 text-lg font-bold text-green-400 focus:border-green-500 focus:outline-none pr-20"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-400 font-medium">
                    Token
                  </div>
                </div>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {[1, 5, 10, 20, 50, 100].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setInvestmentAmount(amount)}
                      className="px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-lg text-sm hover:bg-zinc-600/50 transition-colors"
                    >
                      {amount}
                    </button>
                  ))}
                </div>
              </div>

              {/* D.FAITH Price Selector */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Erwarteter D.FAITH Preis (€)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={dfaithPrice}
                    onChange={(e) => setDfaithPrice(Number(e.target.value))}
                    min="0.01"
                    max="5"
                    step="0.01"
                    className="w-full bg-zinc-900/80 border border-zinc-600 rounded-xl py-4 px-4 text-lg font-bold text-blue-400 focus:border-blue-500 focus:outline-none pr-8"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-400 font-medium">
                    €
                  </div>
                </div>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {priceScenarios.map((scenario) => (
                    <button
                      key={scenario.price}
                      onClick={() => setDfaithPrice(scenario.price)}
                      className={`px-3 py-1 bg-zinc-700/50 text-zinc-300 rounded-lg text-sm hover:bg-zinc-600/50 transition-colors ${
                        dfaithPrice === scenario.price ? 'bg-blue-500/30 border border-blue-500/50' : ''
                      }`}
                    >
                      {scenario.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Halving Stage Selector */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Halving-Stufe auswählen
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {halvingStages.map((stage) => (
                    <button
                      key={stage.stage}
                      onClick={() => setSelectedHalvingStage(stage.stage)}
                      className={`p-3 rounded-lg border transition-all duration-200 ${
                        selectedHalvingStage === stage.stage
                          ? 'border-green-500/50 bg-green-900/30 text-green-400'
                          : 'border-zinc-700/50 bg-zinc-800/30 text-zinc-300 hover:bg-zinc-700/30'
                      }`}
                    >
                      <div className="text-sm font-bold">Stufe {stage.stage}</div>
                      <div className="text-xs opacity-75">{stage.range}</div>
                      <div className="text-xs" style={{ color: stage.color }}>
                        {stage.rate}% Rate
                      </div>
                      <div className="text-xs text-amber-400">
                        {stage.status}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-2 p-3 bg-amber-900/20 border border-amber-500/30 rounded-lg">
                  <div className="flex items-center gap-2 text-amber-400 text-sm">
                    <FaInfoCircle />
                    <span>Aktuelle Stufe: {currentHalvingStage.stage} ({currentHalvingStage.rate}% Wochenrate)</span>
                  </div>
                </div>
              </div>

              {/* Investment Details */}
              <div className="bg-slate-800/40 rounded-lg p-6">
                <h5 className="font-bold text-blue-400 mb-4 text-lg">📥 Investment Details</h5>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">D.INVEST Preis:</span>
                    <span className="font-bold text-green-400">{dinvestPrice}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Staking Rate:</span>
                    <span className="font-bold text-blue-400">{weeklyDfaithRewards.toFixed(3)} D.FAITH/Woche</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Halving-Stufe:</span>
                    <span className="font-bold text-purple-400">Stufe {currentHalvingStage.stage} ({currentHalvingStage.rate}%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">D.FAITH pro Jahr:</span>
                    <span className="font-bold text-purple-400">{yearlyDfaithRewards.toFixed(1)} Token</span>
                  </div>
                  <div className="border-t border-slate-600 pt-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Gesamt-Investment:</span>
                      <span className="font-bold text-white">{formatNumber(totalInvestment)}€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {/* Yearly Earnings */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <FaDollarSign className="text-2xl text-green-400" />
                  <div>
                    <h4 className="font-bold text-green-400">Jährliche Einnahmen</h4>
                    <p className="text-xs text-green-200">D.FAITH Rewards Wert</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {yearlyDfaithValue.toFixed(2)}€
                </div>
                <div className="text-sm text-green-200">
                  {(yearlyDfaithRewards * investmentAmount).toFixed(1)} D.FAITH × {dfaithPrice}€
                </div>
              </div>

              {/* ROI */}
              <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl p-6 border border-emerald-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <FaChartLine className="text-2xl text-emerald-400" />
                  <div>
                    <h4 className="font-bold text-emerald-400">Jährliche Rendite (ROI)</h4>
                    <p className="text-xs text-emerald-200">Return on Investment</p>
                  </div>
                </div>
                <div className={`text-3xl font-bold mb-2 ${
                  yearlyRoi >= 50 ? 'text-emerald-400' : 
                  yearlyRoi >= 20 ? 'text-yellow-400' : 
                  'text-red-400'
                }`}>
                  {yearlyRoi.toFixed(1)}%
                </div>
                <div className="text-sm text-emerald-200">
                  Pro {investmentAmount} D.INVEST Token
                </div>
              </div>

              {/* Break-even Time */}
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <FaClock className="text-2xl text-blue-400" />
                  <div>
                    <h4 className="font-bold text-blue-400">Break-Even Zeit</h4>
                    <p className="text-xs text-blue-200">Investment zurückverdient</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {yearlyRoi > 0 ? `${(100 / yearlyRoi).toFixed(1)} Jahre` : 'N/A'}
                </div>
              </div>
            </div>
          </div>

          {/* ROI bei verschiedenen D.FAITH Preisen */}
          <div className="bg-slate-800/40 rounded-lg p-6 mb-6">
            <h5 className="font-bold text-green-400 mb-4 text-lg">💰 ROI-Szenarien bei verschiedenen D.FAITH Preisen</h5>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {priceScenarios.map((scenario, index) => {
                const scenarioRoi = ((yearlyDfaithRewards * scenario.price * investmentAmount) / totalInvestment) * 100
                return (
                  <div key={index} className="bg-zinc-700/30 rounded-lg p-4 text-center">
                    <div className="text-sm text-gray-300 mb-1">{scenario.label}</div>
                    <div className="text-xs text-gray-400 mb-2">{scenario.priceIncrease}</div>
                    <div className={`text-xl font-bold ${scenario.color}`}>
                      {scenarioRoi.toFixed(1)}% ROI
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="p-4 bg-green-800/30 rounded-lg border border-green-500/30">
            <p className="text-green-300 font-semibold text-center">
              🚀 Bei nur 300% D.FAITH Preissteigerung wird D.INVEST bereits extrem profitabel!
            </p>
            <p className="text-gray-300 text-sm text-center mt-2">
              Das System ist so konzipiert, dass diese Preissteigerung durch kontinuierliche Verknappung automatisch eintritt.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700">
            <p className="text-sm text-zinc-400">
              <strong className="text-amber-400">Hinweis:</strong> Diese Berechnungen basieren auf aktuellen Parametern und sind Schätzungen. 
              Tatsächliche Renditen können durch Marktbedingungen, Token-Preisentwicklung und Smart Contract Updates variieren.
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  // Halving Tab
  const renderHalving = () => (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/30"
      >
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
          tab="tokenflow"
          label="Token-Flow"
          icon={FaExchangeAlt}
          isActive={activeTab === 'tokenflow'}
          onClick={() => setActiveTab('tokenflow')}
        />
        <TabButton
          tab="calculator"
          label="Rentabilitäts-Rechner"
          icon={FaCalculator}
          isActive={activeTab === 'calculator'}
          onClick={() => setActiveTab('calculator')}
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
          {activeTab === 'tokenflow' && renderTokenFlow()}
          {activeTab === 'calculator' && renderCalculator()}
          {activeTab === 'halving' && renderHalving()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default TokenomicsChart
