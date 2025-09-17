'use client'

import React, { useState, useEffect } from 'react'
import { tokenomicsChartTranslations } from './TokenomicsChartTranslations'
import { motion, AnimatePresence } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { 
  FaInfoCircle, 
  FaCalculator, 
  FaFire, 
  FaClock, 
  FaArrowRight,
  FaRocket,
  FaDollarSign,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaCode,
  FaCog,
  FaCube
} from 'react-icons/fa'
import Image from 'next/image'

interface TokenomicsChartProps {
  language: 'de' | 'en' | 'pl';
}

const TokenomicsChart: React.FC<TokenomicsChartProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'calculator' | 'halving' | 'tech'>('overview')

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
  // Live Halving Stage (aus Staking API)
  const [liveHalvingStage, setLiveHalvingStage] = useState(1)

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

  // Übersetzungen laden
  const t = tokenomicsChartTranslations[language]

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
  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }> }) => {
    if (active && payload && payload.length) {
      const data = payload[0]
      // Übersetzte Namen für die Charts
      let translatedName = data.name
      if (data.name === 'Smart Contract') translatedName = t.chart.smartContract
      if (data.name === 'DEX Liquidität') translatedName = t.chart.dexLiquidity
      if (data.name === 'Community Umlauf') translatedName = t.chart.communityCirculation
      if (data.name === 'Verkauft') translatedName = t.chart.sold
      if (data.name === 'Verfügbar') translatedName = t.chart.available
      if (data.name === 'Community Circulation') translatedName = t.chart.communityCirculation
      if (data.name === 'Sold') translatedName = t.chart.sold
      if (data.name === 'Available') translatedName = t.chart.available
      if (data.name === 'DEX liquidity') translatedName = t.chart.dexLiquidity
      if (data.name === 'Smart contract') translatedName = t.chart.smartContract

      const isDfaith = [t.chart.smartContract, t.chart.dexLiquidity, t.chart.communityCirculation].includes(translatedName)
      const total = isDfaith ? tokenData.dfaith.total : tokenData.dinvest.total
      const percentage = ((data.value / total) * 100).toFixed(1)
      
      return (
        <div className="bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-lg p-3">
          <p className="text-white font-semibold">{translatedName}</p>
          <p className="text-zinc-300">{formatNumber(data.value)} {t.tooltip.tokens}</p>
          <p className="text-zinc-400 text-sm">{percentage}{t.tooltip.percent}</p>
          {!isTokenDataLoading && isDfaith && (
            <p className="text-green-400 text-xs mt-1">{t.tooltip.liveData}</p>
          )}
        </div>
      )
    }
    return null
  }

  // Tab Button Component
  const TabButton = ({ label, icon: Icon, isActive, onClick }: {
    label: string
    icon: React.ComponentType<{ className?: string }>
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
            <div className="flex items-center gap-4 mb-6 justify-between">
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
                <h3 className="text-2xl font-bold text-amber-400">{t.dfaith.name}</h3>
                <p className="text-zinc-400">{t.dfaith.description}</p>
                <p className="text-xs text-green-400 font-bold mt-1">{t.dfaith.halvingStage}: <span className="text-white">{liveHalvingStage}</span></p>
              </div>
              {/* Live Daten Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2 backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-3 py-1 border border-green-500/30"
              >
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold text-xs">{t.dfaith.liveData}</span>
              </motion.div>
            </div>

            {/* Kacheln */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <FaInfoCircle className="text-amber-400" />
                  <span className="text-gray-300 text-sm">{t.dfaith.contract}</span>
                </div>
                <p className="text-2xl font-bold text-amber-400">{formatNumber(tokenData.dfaith.contractBalance)}</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <FaDollarSign className="text-green-400" />
                  <span className="text-gray-300 text-sm">{t.dfaith.price}</span>
                </div>
                <p className="text-2xl font-bold text-green-400">€{tokenData.dfaith.currentPrice.toFixed(3)}</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <FaChartLine className="text-blue-400" />
                  <span className="text-gray-300 text-sm">{t.dfaith.dexLiquidity}</span>
                </div>
                <p className="text-2xl font-bold text-blue-400">{formatNumber(tokenData.dfaith.dexLiquidity)}</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <FaRocket className="text-purple-400" />
                  <span className="text-gray-300 text-sm">{t.dfaith.community}</span>
                </div>
                <p className="text-2xl font-bold text-purple-400">{formatNumber(tokenData.dfaith.communityCirculation, 2)}</p>
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
            <div className="flex items-center gap-4 mb-6 justify-between">
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
                <h3 className="text-2xl font-bold text-purple-400">{t.dinvest.name}</h3>
                <p className="text-zinc-400">{t.dinvest.description}</p>
              </div>
              {/* Live Daten Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2 backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-3 py-1 border border-green-500/30"
              >
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold text-xs">{t.dinvest.liveData}</span>
              </motion.div>
            </div>

            {/* Kacheln */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <FaDollarSign className="text-purple-400" />
                  <span className="text-gray-300 text-sm">{t.dinvest.price}</span>
                </div>
                <p className="text-2xl font-bold text-purple-400">€{tokenData.dinvest.price.toFixed(2)}</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <FaInfoCircle className="text-green-400" />
                  <span className="text-gray-300 text-sm">{t.dinvest.sold}</span>
                </div>
                <p className="text-2xl font-bold text-green-400">{formatNumber(tokenData.dinvest.sold)}</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <FaRocket className="text-blue-400" />
                  <span className="text-gray-300 text-sm">{t.dinvest.available}</span>
                </div>
                <p className="text-2xl font-bold text-blue-400">{formatNumber(tokenData.dinvest.available)}</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <FaChartLine className="text-orange-400" />
                  <span className="text-gray-300 text-sm">{t.dinvest.stage}</span>
                </div>
                <p className="text-2xl font-bold text-orange-400">{t.halving.stage} {liveHalvingStage}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  // ROI-Rechner wie in GlassmorphismTokenomics
  const calculateROI = (investment: number, dfaithPrice: number, halvingStage: number) => {
    const currentHalving = halvingStages.find(stage => stage.stage === halvingStage) || halvingStages[0]
    const weeklyDfaithRewards = (currentHalving.rate / 100)
    const yearlyDfaithRewards = weeklyDfaithRewards * 52
    const totalInvestment = investment * 5 // D.INVEST Preis
    const yearlyDfaithValue = yearlyDfaithRewards * dfaithPrice * investment
    const yearlyRoi = totalInvestment > 0 ? (yearlyDfaithValue / totalInvestment) * 100 : 0
    return yearlyRoi
  }

  const renderCalculator = () => (
    <div className="space-y-6 flex justify-center">
      <div className="backdrop-blur-xl bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-500/20 w-full max-w-md mx-auto">
        <h3 className="text-xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent flex items-center justify-center gap-2">
            <FaCalculator /> {t.calculator.title} <FaCalculator />
          </span>
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm mb-2">{t.calculator.tokenAmount}</label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="10000"
                value={investmentAmount}
                onChange={e => setInvestmentAmount(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-white font-bold w-16 text-right">{investmentAmount}</span>
            </div>
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-2">{t.calculator.dfaithPrice}</label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0.05"
                max="2.00"
                step="0.05"
                value={dfaithPrice}
                onChange={e => setDfaithPrice(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-white font-bold w-16 text-right">€{dfaithPrice.toFixed(2)}</span>
            </div>
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-2">{t.calculator.halvingStage}</label>
            <div className="grid grid-cols-3 gap-2">
              {halvingStages.map(stage => (
                <button
                  key={stage.stage}
                  onClick={() => setSelectedHalvingStage(stage.stage)}
                  className={`py-2 px-3 rounded-lg font-bold transition-all duration-200 ${
                    selectedHalvingStage === stage.stage
                      ? 'bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow'
                      : 'bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50 hover:text-white'
                  }`}
                >
                  {stage.stage}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-xs text-gray-400 mb-1">{t.calculator.annualReward}</p>
              <p className="font-bold text-green-400 text-2xl">{(halvingStages.find(s => s.stage === selectedHalvingStage)?.rate ?? 0 * 52).toFixed(2)}%</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-xs text-gray-400 mb-1">{t.calculator.annualRoi}</p>
              <p className="font-bold text-blue-400 text-2xl">{calculateROI(investmentAmount, dfaithPrice, selectedHalvingStage).toFixed(2)}%</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10 col-span-2">
              <p className="text-xs text-gray-400 mb-1">{t.calculator.investment}</p>
              <p className="font-bold text-white text-lg">{investmentAmount} x 5€ = <span className="text-green-400">{(investmentAmount * 5).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Halving Tab (interaktiv wie in GlassmorphismTokenomics)
  const [selectedStage, setSelectedStage] = useState(1)

  const renderHalving = () => (
    <div className="space-y-4 flex flex-col items-center">
      <div className="text-center mb-6 w-full max-w-md">
        <h3 className="text-xl font-bold text-orange-400 mb-2 flex items-center justify-center gap-2">
          <FaFire /> {t.halving.title} <FaFire />
        </h3>
        <p className="text-gray-400">{t.halving.description}</p>
        <p className="text-green-400 text-sm mt-2">
          {t.halving.live.replace('{stage}', String(liveHalvingStage))}
        </p>
      </div>

      <div className="w-full flex flex-col items-center gap-3">
        {halvingStages.map((stage, index) => (
          <motion.div
            key={stage.stage}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => setSelectedStage(stage.stage)}
            className={`backdrop-blur-xl rounded-2xl p-4 border cursor-pointer transition-all duration-300 w-full max-w-md ${
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
                  <span className="text-white font-bold text-lg">{stage.stage}</span>
                </div>
                <div>
                  <p className="font-bold text-white">{t.halving.stage} {stage.stage} <span className="text-xs text-gray-400 ml-2">{stage.range}</span></p>
                  <p className="text-gray-400 text-xs">{stage.status}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-white">{stage.rate}%</p>
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
                    <p className="text-xs text-gray-400">{t.halving.rewardRate}</p>
                    <p className="font-bold text-white">{stage.rate}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{t.halving.multiplier}</p>
                    <p className="font-bold text-white">{stage.multiplier}x</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{t.halving.status}</p>
                    <p className="font-bold text-white">{stage.status}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )

  // Tech Tab (Blockchain/Contracts/Specs)
  const renderTech = () => (
    <div className="space-y-8 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-900/90 to-cyan-900/90 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 w-full max-w-md mx-auto"
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 flex items-center justify-center gap-2">
            <FaCube className="inline text-blue-400 drop-shadow" />
            {t.tech.blockchain}
          </h3>
          <p className="text-zinc-400 text-lg">{t.tech.blockchainDesc}</p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-zinc-800/80 rounded-2xl p-6 border border-blue-500/20">
            <div className="flex items-center gap-2 mb-2">
              <FaShieldAlt className="text-blue-400" />
              <span className="font-bold text-blue-400">{t.tech.baseChain}</span>
            </div>
            <p className="text-zinc-300 text-sm">{t.tech.baseChainDesc}</p>
          </div>
          <div className="bg-zinc-800/80 rounded-2xl p-6 border border-green-500/20">
            <div className="flex items-center gap-2 mb-2">
              <FaCode className="text-green-400" />
              <span className="font-bold text-green-400">{t.tech.dfaithContract}</span>
            </div>
            <button
              onClick={() => window.open('https://basescan.org/address/0x69eFD833288605f320d77eB2aB99DDE62919BbC1', '_blank', 'noopener,noreferrer')}
              className="mt-2 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-mono text-xs rounded-lg shadow hover:scale-105 transition-transform"
            >
              0x69eF...9BbC1 {t.tech.contractBtn}
            </button>
          </div>
          <div className="bg-zinc-800/80 rounded-2xl p-6 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-2">
              <FaCode className="text-purple-400" />
              <span className="font-bold text-purple-400">{t.tech.dinvestContract}</span>
            </div>
            <button
              onClick={() => window.open('https://basescan.org/address/0x6F1fFd03106B27781E86b33Df5dBB734ac9DF4bb', '_blank', 'noopener,noreferrer')}
              className="mt-2 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-mono text-xs rounded-lg shadow hover:scale-105 transition-transform"
            >
              0x6F1f...F4bb {t.tech.contractBtn}
            </button>
          </div>
          <div className="bg-zinc-800/80 rounded-2xl p-6 border border-orange-500/20">
            <div className="flex items-center gap-2 mb-2">
              <FaCode className="text-orange-400" />
              <span className="font-bold text-orange-400">{t.tech.stakingContract}</span>
            </div>
            <button
              onClick={() => window.open('https://basescan.org/address/0xe85b32a44b9eD3ecf8bd331FED46fbdAcDBc9940', '_blank', 'noopener,noreferrer')}
              className="mt-2 px-3 py-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-mono text-xs rounded-lg shadow hover:scale-105 transition-transform"
            >
              0xe85b...9940 {t.tech.contractBtn}
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 w-full max-w-md mx-auto"
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            <FaCog className="inline mr-2" /> {t.tech.tokenSpecs}
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-800/80 rounded-2xl p-6 border border-amber-500/20">
            <h4 className="font-bold text-amber-400 mb-2">{t.tech.dfaith}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-zinc-400">{t.tech.standard}:</span><span className="text-white">ERC-20</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">{t.tech.decimals}:</span><span className="text-white">2</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">{t.tech.supply}:</span><span className="text-white">100.000</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">{t.tech.type}:</span><span className="text-white">{t.tech.utility}</span></div>
            </div>
          </div>
          <div className="bg-zinc-800/80 rounded-2xl p-6 border border-purple-500/20">
            <h4 className="font-bold text-purple-400 mb-2">{t.tech.dinvest}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-zinc-400">{t.tech.standard}:</span><span className="text-white">ERC-20</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">{t.tech.decimals}:</span><span className="text-white">0</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">{t.tech.supply}:</span><span className="text-white">10.000</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">{t.tech.type}:</span><span className="text-white">{t.tech.investment}</span></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Überschrift und Untertitel */}
      <div className="text-center mb-8">
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-amber-400 via-green-400 to-purple-400 bg-clip-text text-transparent mb-3 drop-shadow-lg">
          {t.title}
        </h2>
        <p className="text-xl md:text-2xl text-zinc-400 font-medium">
          {t.subtitle}
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <TabButton
          label={t.tabs.overview}
          icon={FaInfoCircle}
          isActive={activeTab === 'overview'}
          onClick={() => setActiveTab('overview')}
        />
        <TabButton
          label={t.tabs.calculator}
          icon={FaCalculator}
          isActive={activeTab === 'calculator'}
          onClick={() => setActiveTab('calculator')}
        />
        <TabButton
          label={t.tabs.halving}
          icon={FaFire}
          isActive={activeTab === 'halving'}
          onClick={() => setActiveTab('halving')}
        />
        <TabButton
          label={t.tabs.tech}
          icon={FaCog}
          isActive={activeTab === 'tech'}
          onClick={() => setActiveTab('tech')}
        />
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {['calculator', 'halving'].includes(activeTab) ? (
          <motion.div
            key={activeTab}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 }}
          >
            {activeTab === 'calculator' && renderCalculator()}
            {activeTab === 'halving' && renderHalving()}
          </motion.div>
        ) : (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'tech' && renderTech()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TokenomicsChart
