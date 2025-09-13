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
  FaFire,
  FaSparkles,
  FaBolt,
  FaDiamond,
  FaRocket,
  FaStar,
  FaArrowUp,
  FaArrowDown,
  FaEquals,
  FaPercentage
} from 'react-icons/fa'
import Image from 'next/image'

interface GlassmorphismTokenomicsProps {
  tokenPrices: {
    dfaith: number
    dinvest: number
  }
}

const GlassmorphismTokenomics: React.FC<GlassmorphismTokenomicsProps> = ({ tokenPrices }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [activeTab, setActiveTab] = useState<'overview' | 'halving' | 'roi'>('overview')
  const [selectedStage, setSelectedStage] = useState(1)
  const [investmentAmount, setInvestmentAmount] = useState(10)

  // Animation values
  const [animatedValues, setAnimatedValues] = useState({
    dfaithPrice: 0,
    dinvestPrice: 0,
    totalSupply: 0,
    roi: 0
  })

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
            dfaithPrice: tokenPrices.dfaith * progress,
            dinvestPrice: tokenPrices.dinvest * progress,
            totalSupply: 100000 * progress,
            roi: calculateROI(investmentAmount, tokenPrices.dfaith) * progress
          })
          await new Promise(resolve => setTimeout(resolve, stepDuration))
        }
      }
      animate()
    }
  }, [inView, tokenPrices, investmentAmount])

  const calculateROI = (investment: number, dfaithPrice: number) => {
    const annualDFaith = investment * 0.1 * 52 // Weekly rewards
    const annualValue = annualDFaith * dfaithPrice
    const initialInvestment = investment * 5 // D.INVEST price
    return initialInvestment > 0 ? (annualValue / initialInvestment) * 100 : 0
  }

  const halvingStages = [
    { stage: 1, range: "0 - 10K", rate: "10.00%", status: "Aktiv", multiplier: "32x", color: "green" },
    { stage: 2, range: "10K - 20K", rate: "5.00%", status: "Bald", multiplier: "16x", color: "blue" },
    { stage: 3, range: "20K - 40K", rate: "2.50%", status: "Zukunft", multiplier: "8x", color: "purple" },
    { stage: 4, range: "40K - 60K", rate: "1.25%", status: "Zukunft", multiplier: "4x", color: "orange" },
    { stage: 5, range: "60K - 80K", rate: "0.63%", status: "Zukunft", multiplier: "2x", color: "red" },
    { stage: 6, range: "80K+", rate: "0.31%", status: "Final", multiplier: "1x", color: "gray" }
  ]

  const roiScenarios = [
    { price: 0.05, label: "Start", roi: 5.2, color: "gray" },
    { price: 0.20, label: "+300%", roi: 20.8, color: "blue" },
    { price: 0.50, label: "+900%", roi: 52.0, color: "green" },
    { price: 1.00, label: "+1900%", roi: 104.0, color: "purple" }
  ]

  // Spring animations
  const containerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: config.gentle
  })

  const tabSpring = useSpring({
    transform: activeTab === 'overview' ? 'translateX(0%)' : 
               activeTab === 'halving' ? 'translateX(100%)' : 'translateX(200%)',
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
        <p className="text-gray-300 text-lg">
          Dual-Token Ökonomie mit intelligenter Verknappung
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="backdrop-blur-xl bg-white/10 rounded-2xl p-2 border border-white/20 mb-8"
      >
        <div className="flex relative">
          <motion.div
            style={tabSpring}
            className="absolute inset-y-1 w-1/3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl"
          />
          
          {[
            { id: 'overview', label: 'Übersicht', icon: <FaCoins /> },
            { id: 'halving', label: 'Halving', icon: <FaBolt /> },
            { id: 'roi', label: 'ROI', icon: <FaChartLine /> }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 relative z-10 ${
                activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {tab.icon}
                <span>{tab.label}</span>
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
                      <span className="text-gray-300 text-sm">Total Supply</span>
                    </div>
                    <p className="text-2xl font-bold text-amber-400">
                      {animatedValues.totalSupply.toLocaleString('de-DE', { maximumFractionDigits: 0 })}
                    </p>
                  </div>

                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <FaDollarSign className="text-green-400" />
                      <span className="text-gray-300 text-sm">Aktueller Preis</span>
                    </div>
                    <p className="text-2xl font-bold text-green-400">
                      €{animatedValues.dfaithPrice.toFixed(3)}
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
                      €{animatedValues.dinvestPrice.toFixed(2)}
                    </p>
                  </div>

                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <FaRocket className="text-blue-400" />
                      <span className="text-gray-300 text-sm">Staking Rate</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-400">0,1/Woche</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Ecosystem Synergie */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20"
            >
              <h4 className="text-lg font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-2">
                  <FaSparkles /> Dual-Token Synergie <FaSparkles />
                </span>
              </h4>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  { 
                    title: "Fan Engagement", 
                    icon: <FaStar className="text-yellow-400" />,
                    desc: "D.FAITH für Social Media Interaktionen"
                  },
                  { 
                    title: "Kapitalbildung", 
                    icon: <FaDollarSign className="text-green-400" />,
                    desc: "D.INVEST für Projekt-Finanzierung"
                  },
                  { 
                    title: "Wertsteigerung", 
                    icon: <FaArrowUp className="text-blue-400" />,
                    desc: "Halving-System führt zu Verknappung"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 backdrop-blur-sm bg-white/5 rounded-xl p-3 border border-white/10"
                  >
                    {item.icon}
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${
                      stage.color === 'green' ? 'from-green-500 to-emerald-500' :
                      stage.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                      stage.color === 'purple' ? 'from-purple-500 to-indigo-500' :
                      stage.color === 'orange' ? 'from-orange-500 to-red-500' :
                      stage.color === 'red' ? 'from-red-500 to-pink-500' :
                      'from-gray-500 to-gray-600'
                    } flex items-center justify-center`}>
                      <span className="text-white font-bold">{stage.stage}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Stufe {stage.stage}</p>
                      <p className="text-gray-400 text-sm">{stage.range}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold text-white">{stage.rate}</p>
                    <p className="text-gray-400 text-xs">{stage.multiplier}</p>
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
                        <p className="font-semibold text-white">{stage.rate}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">vs. Final</p>
                        <p className="font-semibold text-purple-400">{stage.multiplier}</p>
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
                      max="100"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="backdrop-blur-sm bg-white/10 rounded-lg px-3 py-2 border border-white/20">
                      <span className="text-white font-bold">{investmentAmount}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-gray-400 text-sm mb-1">Investment</p>
                    <p className="text-2xl font-bold text-green-400">€{(investmentAmount * 5).toLocaleString()}</p>
                  </div>
                  <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-gray-400 text-sm mb-1">Jährlicher ROI</p>
                    <p className="text-2xl font-bold text-blue-400">{animatedValues.roi.toFixed(1)}%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI Scenarios */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-center text-white">Preis-Szenarien</h4>
              {roiScenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`backdrop-blur-xl rounded-2xl p-4 border ${
                    scenario.color === 'gray' ? 'bg-gray-500/10 border-gray-500/20' :
                    scenario.color === 'blue' ? 'bg-blue-500/10 border-blue-500/20' :
                    scenario.color === 'green' ? 'bg-green-500/10 border-green-500/20' :
                    'bg-purple-500/10 border-purple-500/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${
                        scenario.color === 'gray' ? 'from-gray-500 to-gray-600' :
                        scenario.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                        scenario.color === 'green' ? 'from-green-500 to-emerald-500' :
                        'from-purple-500 to-pink-500'
                      } flex items-center justify-center`}>
                        <FaDollarSign className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">€{scenario.price.toFixed(2)} D.FAITH</p>
                        <p className="text-gray-400 text-sm">{scenario.label}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-2xl font-bold text-white">{scenario.roi}%</p>
                      <p className="text-gray-400 text-sm">ROI</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </animated.div>
  )
}

export default GlassmorphismTokenomics