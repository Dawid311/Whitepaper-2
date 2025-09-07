'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCoins, FaUsers, FaChartLine, FaFire, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const LiveStats = () => {
  const [isLive, setIsLive] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)
  
  // Simulate live data updates
  const [stats, setStats] = useState({
    dfaithPrice: 0.12,
    dinvestPrice: 5.00,
    totalStaked: 1250,
    totalRewardsDistributed: 125.50,
    activeUsers: 47,
    instagramFollowers: 774
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        dfaithPrice: Number((prev.dfaithPrice + (Math.random() - 0.5) * 0.01).toFixed(4)),
        totalRewardsDistributed: Number((prev.totalRewardsDistributed + Math.random() * 0.1).toFixed(2)),
        activeUsers: Math.floor(40 + Math.random() * 20),
        totalStaked: prev.totalStaked + Math.floor(Math.random() * 10)
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-zinc-900/95 to-black/95 backdrop-blur-md border border-zinc-700 rounded-xl p-4 shadow-2xl max-w-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
          <span className="text-sm font-medium text-white">
            Live Daten
          </span>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
        >
          {isExpanded ? (
            <>
              <FaChevronUp className="text-xs" />
              Min
            </>
          ) : (
            <>
              <FaChevronDown className="text-xs" />
              Mehr
            </>
          )}
        </button>
      </div>

      <div className="space-y-3">
        {/* Immer sichtbare Hauptstats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center bg-zinc-800/30 rounded-lg p-2">
            <div className="flex items-center justify-center gap-1 mb-1">
              <FaCoins className="text-sm text-amber-400" />
              <span className="text-xs text-zinc-400">D.FAITH</span>
            </div>
            <div className="text-sm font-bold text-amber-400">
              ${stats.dfaithPrice.toFixed(4)}
            </div>
            <div className="text-xs text-green-400">+12.5%</div>
          </div>
          
          <div className="text-center bg-zinc-800/30 rounded-lg p-2">
            <div className="flex items-center justify-center gap-1 mb-1">
              <FaFire className="text-sm text-blue-400" />
              <span className="text-xs text-zinc-400">D.INVEST</span>
            </div>
            <div className="text-sm font-bold text-blue-400">
              {stats.dinvestPrice.toFixed(2)}€
            </div>
            <div className="text-xs text-zinc-400">Stabil</div>
          </div>
        </div>

        {/* Erweiterte Stats */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 border-t border-zinc-700 pt-3"
            >
              <div className="flex items-center justify-between bg-zinc-800/20 rounded p-2">
                <div className="flex items-center gap-2">
                  <FaChartLine className="text-sm text-green-400" />
                  <span className="text-xs text-zinc-400">Total Staked</span>
                </div>
                <span className="text-xs font-medium text-white">
                  {stats.totalStaked.toLocaleString()}
                </span>
              </div>
              
              <div className="flex items-center justify-between bg-zinc-800/20 rounded p-2">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-sm text-purple-400" />
                  <span className="text-xs text-zinc-400">Rewards verteilt</span>
                </div>
                <span className="text-xs font-medium text-white">
                  {stats.totalRewardsDistributed.toFixed(1)}
                </span>
              </div>
              
              <div className="flex items-center justify-between bg-zinc-800/20 rounded p-2">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-sm text-orange-400" />
                  <span className="text-xs text-zinc-400">Active Users</span>
                </div>
                <span className="text-xs font-medium text-white">
                  {stats.activeUsers}
                </span>
              </div>
              
              <div className="text-center pt-2 border-t border-zinc-800">
                <div className="text-xs text-zinc-500 mb-1">Netzwerk</div>
                <div className="flex items-center justify-center gap-1">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  <span className="text-xs text-blue-400">Base Chain</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="text-xs text-zinc-500 text-center mt-3 pt-2 border-t border-zinc-800">
        Update alle 5s
      </div>
    </motion.div>
  )
}

export default LiveStats
