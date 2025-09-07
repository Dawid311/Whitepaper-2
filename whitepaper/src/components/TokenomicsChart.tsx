'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import Image from 'next/image'

const TokenomicsChart = () => {
  // D.FAITH Token Distribution
  const dfaithData = [
    { name: 'Gesperrt im Contract', value: 80000, color: '#f59e0b' },
    { name: 'Initiale Liquidität', value: 20000, color: '#3b82f6' }
  ]

  // D.INVEST Token Distribution
  const dinvestData = [
    { name: 'Öffentlicher Verkauf', value: 10000, color: '#8b5cf6' }
  ]

  // Token Flow Data
  const tokenFlowData = [
    { stage: 'Stufe 1', range: '0-10k', rate: 10.00, tokens: 10000 },
    { stage: 'Stufe 2', range: '10k-20k', rate: 5.00, tokens: 10000 },
    { stage: 'Stufe 3', range: '20k-40k', rate: 2.50, tokens: 20000 },
    { stage: 'Stufe 4', range: '40k-60k', rate: 1.25, tokens: 20000 },
    { stage: 'Stufe 5', range: '60k-80k', rate: 0.63, tokens: 20000 },
    { stage: 'Stufe 6+', range: '80k+', rate: 0.31, tokens: 0 }
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
          
          <div className="space-y-2 mt-4">
            {dfaithData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-zinc-300">{item.name}</span>
                </div>
                <span className="text-sm font-bold">{item.value.toLocaleString()}</span>
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
              <h3 className="text-xl font-bold text-blue-400">D.INVEST Token Verteilung</h3>
              <p className="text-zinc-400 text-sm">Total: 10.000 Token à 5€</p>
            </div>
          </div>
          
          <div className="h-64 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-purple-200">Öffentlich</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-bold text-white">10.000 Token</div>
                <div className="text-sm text-zinc-400">Gesamtwert: 50.000€</div>
                <div className="text-sm text-green-400 font-semibold">5€ pro Token</div>
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
            <BarChart data={tokenFlowData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
          {tokenFlowData.map((stage, index) => (
            <div key={index} className="bg-zinc-700/50 rounded-lg p-3 text-center">
              <div className="text-sm font-bold text-amber-400">{stage.stage}</div>
              <div className="text-xs text-zinc-400 mb-1">{stage.range}</div>
              <div className="text-lg font-bold text-white">{stage.rate}%</div>
              <div className="text-xs text-zinc-500">{stage.tokens.toLocaleString()} Token</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Token Flow Explanation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-500/30"
      >
        <h3 className="text-xl font-bold text-white mb-4">Token-Interaktion & Wertsteigerung</h3>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">1</span>
            </div>
            <h4 className="font-semibold text-blue-400 mb-2">D.INVEST Kauf</h4>
            <p className="text-sm text-zinc-300">Investor kauft D.INVEST für 5€ pro Token</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">2</span>
            </div>
            <h4 className="font-semibold text-purple-400 mb-2">Marketing Budget</h4>
            <p className="text-sm text-zinc-300">Kapital fließt in Marketing & Fan-Belohnungen</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">3</span>
            </div>
            <h4 className="font-semibold text-amber-400 mb-2">D.FAITH Nachkauf</h4>
            <p className="text-sm text-zinc-300">Tokens werden zurückgekauft & Contract gespeist</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold">4</span>
            </div>
            <h4 className="font-semibold text-green-400 mb-2">Verknappung</h4>
            <p className="text-sm text-zinc-300">Halving-System führt zu Wertsteigerung</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TokenomicsChart
