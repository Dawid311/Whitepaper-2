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
  const [activeTab, setActiveTab] = useState<'overview' | 'calculator' | 'halving'>('overview')

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
              <div className="flex items-center justify-between p-3 bg-zinc-800/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-sm text-white">Verkaufsrate</span>
                </div>
                <span className="font-bold text-amber-400">
                  {tokenData.dinvest.total > 0 ? ((tokenData.dinvest.sold / tokenData.dinvest.total) * 100).toFixed(1) : '0'}%
                </span>
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
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-6 border border-green-500/30"
        >
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white">
                <FaCalculator className="text-2xl" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">
              🎯 D.INVEST Rentabilitäts-Rechner
            </h3>
            <p className="text-gray-300 mb-3">
              Berechnen Sie Ihre Rendite bei verschiedenen D.FAITH Preisen
            </p>
            <div className="bg-blue-900/30 rounded-lg p-3 border border-blue-500/30">
              <p className="text-blue-300 text-sm">
                💡 Wählen Sie Investment-Anzahl, D.FAITH Preis und Halving-Stufe für Ihre Rendite-Berechnung
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-4 mb-6">
            {/* Left Column - Input Controls */}
            <div className="lg:col-span-2 space-y-3">
              {/* Investment Amount */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1">
                  💰 D.INVEST Token
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    min="1"
                    max="1000"
                    className="w-full bg-zinc-900/80 border border-zinc-600 rounded-lg py-2 px-3 text-lg font-bold text-green-400 focus:border-green-500 focus:outline-none pr-16"
                    placeholder="10"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 text-sm">
                    Token
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mt-1 mb-1">
                  á 5€ • Gesamt: {formatNumber(investmentAmount * 5)}€
                </p>
                <div className="flex gap-1 flex-wrap">
                  {[1, 5, 10, 20, 50].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setInvestmentAmount(amount)}
                      className={`px-2 py-1 rounded text-xs transition-colors ${
                        investmentAmount === amount
                          ? 'bg-green-500/30 text-green-400 border border-green-500/50'
                          : 'bg-zinc-700/50 text-zinc-300 hover:bg-zinc-600/50'
                      }`}
                    >
                      {amount}
                    </button>
                  ))}
                </div>
              </div>

              {/* D.FAITH Price and Halving in same row */}
              <div className="grid grid-cols-2 gap-3">
                {/* D.FAITH Price Selector */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1">
                    📈 D.FAITH Preis (€)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={dfaithPrice}
                      onChange={(e) => setDfaithPrice(Number(e.target.value))}
                      min="0.01"
                      max="5"
                      step="0.01"
                      className="w-full bg-zinc-900/80 border border-zinc-600 rounded-lg py-2 px-3 text-lg font-bold text-blue-400 focus:border-blue-500 focus:outline-none pr-8"
                      placeholder="0.20"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 text-sm">
                      €
                    </div>
                  </div>
                  <div className="flex gap-1 flex-wrap mt-1">
                    {priceScenarios.map((scenario) => (
                      <button
                        key={scenario.price}
                        onClick={() => setDfaithPrice(scenario.price)}
                        className={`px-1 py-0.5 rounded text-xs transition-colors ${
                          dfaithPrice === scenario.price 
                            ? 'bg-blue-500/30 text-blue-400 border border-blue-500/50' 
                            : 'bg-zinc-700/50 text-zinc-300 hover:bg-zinc-600/50'
                        }`}
                      >
                        {scenario.price}€
                      </button>
                    ))}
                  </div>
                </div>

                {/* Halving Stage Selector */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1">
                    ⚡ Halving-Stufe
                  </label>
                  <div className="relative">
                    <select
                      value={selectedHalvingStage}
                      onChange={(e) => setSelectedHalvingStage(Number(e.target.value))}
                      className="w-full bg-zinc-900/80 border border-zinc-600 rounded-lg py-2 px-3 text-sm font-bold text-purple-400 focus:border-purple-500 focus:outline-none appearance-none cursor-pointer pr-8"
                    >
                      {halvingStages.map((stage) => (
                        <option 
                          key={stage.stage} 
                          value={stage.stage}
                          className="bg-zinc-900 text-white"
                        >
                          Stufe {stage.stage} ({stage.rate}%)
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">
                    {currentHalvingStage.rate}% wöchentlich
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Results */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {/* Yearly Earnings */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-3 border border-green-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <FaDollarSign className="text-lg text-green-400" />
                  <h4 className="font-bold text-green-400 text-sm">Jährliche Einnahmen</h4>
                </div>
                <div className="text-xl font-bold text-green-400 mb-1">
                  {yearlyDfaithValue.toFixed(2)}€
                </div>
                <div className="text-xs text-green-200">
                  {(yearlyDfaithRewards * investmentAmount).toFixed(1)} D.FAITH × {dfaithPrice}€
                </div>
              </div>

              {/* ROI */}
              <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-lg p-3 border border-emerald-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <FaChartLine className="text-lg text-emerald-400" />
                  <h4 className="font-bold text-emerald-400 text-sm">ROI pro Jahr</h4>
                </div>
                <div className={`text-xl font-bold mb-1 ${
                  yearlyRoi >= 50 ? 'text-emerald-400' : 
                  yearlyRoi >= 20 ? 'text-yellow-400' : 
                  'text-red-400'
                }`}>
                  {yearlyRoi.toFixed(1)}%
                </div>
                <div className="text-xs text-emerald-200">
                  Bei {investmentAmount} Token
                </div>
              </div>

              {/* Break-even Time */}
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-3 border border-blue-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <FaClock className="text-lg text-blue-400" />
                  <h4 className="font-bold text-blue-400 text-sm">Break-Even</h4>
                </div>
                <div className="text-lg font-bold text-blue-400">
                  {yearlyRoi > 0 ? `${(100 / yearlyRoi).toFixed(1)} Jahre` : 'N/A'}
                </div>
              </div>

              {/* Investment Summary */}
              <div className="bg-gradient-to-r from-zinc-700/20 to-zinc-600/20 rounded-lg p-3 border border-zinc-600/30">
                <div className="flex items-center gap-2 mb-2">
                  <FaRocket className="text-lg text-zinc-400" />
                  <h4 className="font-bold text-zinc-400 text-sm">Investment</h4>
                </div>
                <div className="text-lg font-bold text-white">
                  {formatNumber(totalInvestment)}€
                </div>
                <div className="text-xs text-zinc-300">
                  {investmentAmount} × 5€
                </div>
              </div>
            </div>
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
          {activeTab === 'calculator' && renderCalculator()}
          {activeTab === 'halving' && renderHalving()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default TokenomicsChart
