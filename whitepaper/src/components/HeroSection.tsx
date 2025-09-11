'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaChevronDown, FaRocket, FaPlay } from 'react-icons/fa'

interface HeroSectionProps {
  onScrollToNext: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToNext }) => {
  const [activeUsers, setActiveUsers] = useState(8) // Default fallback value
  const [isLoading, setIsLoading] = useState(true)
  const [tokenPrices, setTokenPrices] = useState({
    dfaith: 0.12,
    dinvest: 5.00
  })

  useEffect(() => {
    const fetchActiveUsers = async () => {
      try {
        // Fetch both leaderboard and token prices
        const [leaderboardResponse, pricesResponse] = await Promise.allSettled([
          fetch('/api/leaderboard').catch(() => fetch('https://leaderboard-pi-liard.vercel.app/api/leaderboard')),
          fetch('/api/token-prices')
        ])
        
        // Process leaderboard data
        if (leaderboardResponse.status === 'fulfilled' && leaderboardResponse.value.ok) {
          const data = await leaderboardResponse.value.json()
          const usersCount = data.stats?.activeUsers || data.entries?.length || 8
          setActiveUsers(usersCount)
        }
        
        // Process token prices
        if (pricesResponse.status === 'fulfilled' && pricesResponse.value.ok) {
          const pricesData = await pricesResponse.value.json()
          const dfaithToken = pricesData.tokens?.dfaith
          const dinvestToken = pricesData.tokens?.dinvest
          
          setTokenPrices({
            dfaith: dfaithToken?.price_eur || 0.138, // Euro statt USD
            dinvest: dinvestToken?.price_eur || 5.00
          })
        }
      } catch (error) {
        console.error('Failed to fetch data:', error)
        // Keep default values
      } finally {
        setIsLoading(false)
      }
    }

    fetchActiveUsers()
    // Refresh every 5 minutes
    const interval = setInterval(fetchActiveUsers, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="relative w-full">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium border border-amber-500/30"
              >
                <FaRocket className="text-sm" />
                Live auf Base Chain
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  D.FAITH
                </span>
                <br />
                <span className="text-white">Ökosystem</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-xl md:text-2xl text-zinc-400 max-w-lg"
              >
                Revolutionäres Fan-Engagement durch{' '}
                <span className="text-blue-400 font-semibold">Blockchain-Technologie</span>
              </motion.p>
            </div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700">
                <div className="text-2xl font-bold text-amber-400">
                  €{isLoading ? '...' : tokenPrices.dfaith.toFixed(2)}
                </div>
                <div className="text-sm text-zinc-400">D.FAITH Preis</div>
              </div>
              <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700">
                <div className="text-2xl font-bold text-blue-400">
                  {isLoading ? '...' : tokenPrices.dinvest.toFixed(2)}€
                </div>
                <div className="text-sm text-zinc-400">D.INVEST Preis</div>
              </div>
              <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700">
                <div className="text-2xl font-bold text-green-400">100K</div>
                <div className="text-sm text-zinc-400">D.FAITH Supply</div>
              </div>
              <div className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700">
                <div className="text-2xl font-bold text-purple-400">
                  {isLoading ? '...' : activeUsers}
                </div>
                <div className="text-sm text-zinc-400">Active Users</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
              >
                <FaPlay className="text-sm" />
                Jetzt investieren
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onScrollToNext}
                className="border border-zinc-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-zinc-800/50 transition-colors"
              >
                Mehr erfahren
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <Image
                  src="/dawid-faith-photo.jpg"
                  alt="Dawid Faith"
                  width={500}
                  height={600}
                  className="rounded-2xl border border-zinc-700 shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Floating Token Logos */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -left-6 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl p-4 border border-amber-500/30 backdrop-blur-sm"
              >
                <Image
                  src="/d-faith-logo.png"
                  alt="D.FAITH Logo"
                  width={60}
                  height={60}
                />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-4 border border-blue-500/30 backdrop-blur-sm"
              >
                <Image
                  src="/d-invest-logo.png"
                  alt="D.INVEST Logo"
                  width={60}
                  height={60}
                />
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-blue-500/20 rounded-2xl blur-xl" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={onScrollToNext}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Scroll für mehr</span>
            <FaChevronDown className="text-xl" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
