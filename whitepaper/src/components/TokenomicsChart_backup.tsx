'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import Image from 'next/image'

const TokenomicsChart = () => {
  // D.FAITH Token Distribution - Basierend auf README
  const dfaithData = [
    { name: 'Im Smart Contract gesperrt', value: 80000, color: '#f59e0b', description: 'Nur durch D.INVEST Staking freisetzbar' },
    { name: 'Initiale Liquidität', value: 20000, color: '#3b82f6', description: 'Mit 1.000€ ETH für Handelbarkeit' }
  ]

  // D.INVEST Token Distribution - Basierend auf README
  const dinvestData = [
    { name: 'Öffentlicher Verkauf', value: 10000, color: '#8b5cf6', price: 5, totalValue: 50000 }
  ]

  // Halving-System: 6 Reward-Stufen basierend auf Solution Section
  const halvingData = [
    { stage: 'Stufe 1', range: '0-10.000', rate: 10.00, tokens: 10000, status: 'Aktuelle Stufe', color: '#22c55e' },
    { stage: 'Stufe 2', range: '10.000-20.000', rate: 5.00, tokens: 10000, status: 'Kommend', color: '#3b82f6' },
    { stage: 'Stufe 3', range: '20.000-40.000', rate: 2.50, tokens: 20000, status: 'Kommend', color: '#8b5cf6' },
    { stage: 'Stufe 4', range: '40.000-60.000', rate: 1.25, tokens: 20000, status: 'Kommend', color: '#f59e0b' },
    { stage: 'Stufe 5', range: '60.000-80.000', rate: 0.63, tokens: 20000, status: 'Kommend', color: '#ef4444' },
    { stage: 'Stufe 6+', range: '80.000+', rate: 0.31, tokens: 'Unbegrenzt', status: 'Finale Stufe', color: '#991b1b' }
  ]

  // Marketing Budget Flow - Wie Token Wert erhalten
  const tokenFlowSteps = [
    { 
      step: 1, 
      title: 'D.INVEST Verkauf', 
      description: 'Investoren kaufen D.INVEST à 5€', 
      icon: '💰',
      amount: '50.000€ Maximum'
    },
    { 
      step: 2, 
      title: 'Marketing Budget', 
      description: 'Kapital wird für Fan-Belohnungen verwendet', 
      icon: '📱',
      amount: 'Variable Budgets'
    },
    { 
      step: 3, 
      title: 'D.FAITH Käufe', 
      description: 'Automatische Token-Käufe für Fan-Rewards', 
      icon: '🎵',
      amount: 'Je nach Level'
    },
    { 
      step: 4, 
      title: 'Contract Fütterung', 
      description: '50% fließen zurück in Smart Contract', 
      icon: '🔒',
      amount: 'Permanente Sperrung'
    }
  ]

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-sm font-bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div className="space-y-8">
      {/* Token Distribution Charts */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* D.FAITH Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-6 border border-zinc-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <Image 
              src="/d-faith-logo.png" 
              alt="D.FAITH Logo" 
              width={40} 
              height={40}
              className="rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold text-amber-400">D.FAITH Token Verteilung</h3>
              <p className="text-zinc-400 text-sm">Total: 100.000 Token</p>
            </div>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dfaithData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dfaithData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: any) => [value.toLocaleString(), 'Token']}
                  contentStyle={{
                    backgroundColor: '#27272a',
                    border: '1px solid #52525b',
                    borderRadius: '0.5rem',
                    color: 'white'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-3 mt-4">
            {dfaithData.map((item, index) => (
              <div key={index} className="bg-zinc-700/30 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm font-semibold text-white">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold text-amber-400">{item.value.toLocaleString()}</span>
                </div>
                <p className="text-xs text-zinc-400 ml-5">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* D.INVEST Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-6 border border-zinc-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <Image 
              src="/d-invest-logo.png" 
              alt="D.INVEST Logo" 
              width={40} 
              height={40}
              className="rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold text-purple-400">D.INVEST Token Verteilung</h3>
              <p className="text-zinc-400 text-sm">Total: 10.000 Token à 5€ = 50.000€</p>
            </div>
          </div>
          
          <div className="h-64 flex items-center justify-center">
            <div className="text-center space-y-6">
              <div className="w-40 h-40 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-purple-200">Öffentlicher</div>
                  <div className="text-sm text-purple-200">Verkauf</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-white">10.000 Token</div>
                <div className="bg-purple-900/30 rounded-lg p-4 space-y-2">
                  <div className="text-lg text-purple-400 font-semibold">💰 5€ pro Token</div>
                  <div className="text-sm text-zinc-400">Gesamtkapital: <span className="text-green-400 font-bold">50.000€</span></div>
                  <div className="text-xs text-zinc-500">Für Marketing, Produktion & Entwicklung</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Halving System Chart */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-6 border border-zinc-700"
      >
        <h3 className="text-xl font-bold text-white mb-6">Halving-System: Reward Raten pro Stufe</h3>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={halvingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="stage" 
                stroke="#9ca3af"
                fontSize={12}
              />
              <YAxis 
                stroke="#9ca3af"
                fontSize={12}
                label={{ value: 'Rate (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#9ca3af' } }}
              />
              <Tooltip 
                formatter={(value: any, name: string) => [
                  name === 'rate' ? `${value}%` : value.toLocaleString(),
                  name === 'rate' ? 'Wöchentliche Rate' : 'Token in dieser Stufe'
                ]}
                labelFormatter={(label: string) => `${label}`}
                contentStyle={{
                  backgroundColor: '#27272a',
                  border: '1px solid #52525b',
                  borderRadius: '0.5rem',
                  color: 'white'
                }}
              />
              <Bar 
                dataKey="rate" 
                fill="url(#colorGradient)"
                radius={[4, 4, 0, 0]}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.3}/>
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
          {halvingData.map((stage, index) => (
            <div key={index} className={`bg-zinc-700/50 rounded-lg p-3 text-center border ${
              stage.status === 'Aktuelle Stufe' ? 'border-green-500/50 bg-green-900/20' : 'border-zinc-600/30'
            }`}>
              <div className="text-sm font-bold text-amber-400">{stage.stage}</div>
              <div className="text-xs text-zinc-400 mb-1">{stage.range}</div>
              <div className="text-lg font-bold text-white">{stage.rate}%</div>
              <div className="text-xs text-zinc-500">
                {typeof stage.tokens === 'number' ? stage.tokens.toLocaleString() : stage.tokens} Token
              </div>
              <div className={`text-xs mt-1 ${
                stage.status === 'Aktuelle Stufe' ? 'text-green-400' : 
                stage.status === 'Finale Stufe' ? 'text-red-400' : 'text-zinc-500'
              }`}>
                {stage.status}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Marketing Budget Flow */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-3">🔄 Wie D.FAITH Token ihren Wert erhalten</h3>
          <p className="text-zinc-400">Der automatische Wertsteigerungs-Kreislauf des D.FAITH Ökosystems</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tokenFlowSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 h-full">
                <div className="text-center">
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <h4 className="font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-sm text-zinc-300 mb-4">{step.description}</p>
                  <div className="bg-gradient-to-r from-amber-900/40 to-yellow-900/40 rounded-lg p-3 border border-amber-500/30">
                    <div className="text-xs text-amber-400 font-semibold">{step.amount}</div>
                  </div>
                </div>
              </div>
              
              {/* Arrow to next step */}
              {index < tokenFlowSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">→</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Key Insight */}
        <div className="mt-8 bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-xl p-6 border border-amber-500/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-2xl">💡</div>
            <h4 className="text-lg font-bold text-amber-400">Schlüssel-Mechanismus</h4>
          </div>
          <p className="text-zinc-300 text-sm mb-3">
            <strong>50% aller gekauften D.FAITH Token</strong> fließen permanent zurück in den Smart Contract. 
            Durch das Halving-System werden diese Token immer seltener und wertvoller.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="bg-zinc-800/30 rounded-lg p-3">
              <div className="text-green-400 font-semibold mb-1">✓ Für Fans:</div>
              <div className="text-zinc-400">Token-Belohnungen + Wertsteigerung</div>
            </div>
            <div className="bg-zinc-800/30 rounded-lg p-3">
              <div className="text-purple-400 font-semibold mb-1">✓ Für Investoren:</div>
              <div className="text-zinc-400">D.INVEST Wertsteigerung durch Verknappung</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Fan Rewards & Level System */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-8 border border-zinc-700"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-3">🏆 Fan-Reward System</h3>
          <p className="text-zinc-400">Level-basierte Token-Belohnungen für Social Media Engagement</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Reward Formula */}
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30">
            <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center">
              <span className="mr-2">💰</span>
              Token-Reward Formel
            </h4>
            <div className="bg-zinc-800/50 rounded-lg p-4 text-center mb-4">
              <div className="text-lg font-mono text-green-300 mb-2">
                <span className="text-blue-400">Marketing Budget</span> × <span className="text-purple-400">User Level</span>
              </div>
              <div className="text-sm text-zinc-400">
                Beispiel: 0.50€ × Level 5 = Token im Wert von 2.50€
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-400">Level 1:</span>
                <span className="text-green-400">Base Reward</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Level 5:</span>
                <span className="text-green-400">5x Base Reward</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Level 10+:</span>
                <span className="text-green-400">10x+ Base Reward</span>
              </div>
            </div>
          </div>

          {/* EXP Sources */}
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/30">
            <h4 className="text-lg font-bold text-purple-400 mb-4 flex items-center">
              <span className="mr-2">⭐</span>
              EXP Quellen
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-zinc-800/30 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <span>❤️</span>
                  <span className="text-sm text-white">Like</span>
                </div>
                <span className="text-purple-400 font-semibold">+10 EXP</span>
              </div>
              <div className="flex items-center justify-between bg-zinc-800/30 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <span>💬</span>
                  <span className="text-sm text-white">Kommentar</span>
                </div>
                <span className="text-purple-400 font-semibold">+25 EXP</span>
              </div>
              <div className="flex items-center justify-between bg-zinc-800/30 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <span>📤</span>
                  <span className="text-sm text-white">Share</span>
                </div>
                <span className="text-purple-400 font-semibold">+50 EXP</span>
              </div>
              <div className="flex items-center justify-between bg-zinc-800/30 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <span>💾</span>
                  <span className="text-sm text-white">Save</span>
                </div>
                <span className="text-purple-400 font-semibold">+30 EXP</span>
              </div>
              <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 rounded-lg p-3 border border-yellow-500/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span>🎵</span>
                    <span className="text-sm text-white">Konzert Code</span>
                  </div>
                  <span className="text-yellow-400 font-semibold">+500 EXP</span>
                </div>
                <div className="text-xs text-yellow-300 mt-1">Live Event Bonus</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-6 border border-blue-500/30">
            <h5 className="text-lg font-bold text-blue-400 mb-3">🌍 Globales System</h5>
            <p className="text-zinc-300 text-sm mb-4">
              EXP sammelt sich plattformübergreifend (Instagram, TikTok, Facebook) und 
              alle Aktivitäten werden im globalen Leaderboard zusammengerechnet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-zinc-800/50 px-4 py-2 rounded-lg">
                <span className="text-pink-400 font-semibold">📸 Instagram</span>
              </div>
              <div className="bg-zinc-800/50 px-4 py-2 rounded-lg">
                <span className="text-blue-400 font-semibold">🎵 TikTok</span>
              </div>
              <div className="bg-zinc-800/50 px-4 py-2 rounded-lg">
                <span className="text-blue-600 font-semibold">👥 Facebook</span>
              </div>
              <div className="bg-zinc-800/50 px-4 py-2 rounded-lg">
                <span className="text-green-400 font-semibold">🎧 Spotify*</span>
              </div>
            </div>
            <div className="text-xs text-zinc-500 mt-2">*In Entwicklung</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TokenomicsChart
