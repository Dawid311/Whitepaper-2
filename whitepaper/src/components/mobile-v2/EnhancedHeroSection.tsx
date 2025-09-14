'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSpring, animated, config } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import { 
  FaRocket, 
  FaCoins, 
  FaUsers,
  FaStar,
  FaPlay,
  FaMusic,
  FaFire
} from 'react-icons/fa'
import Image from 'next/image'

interface EnhancedHeroSectionProps {
  // Optional props for fallback values
  tokenPrices?: {
    dfaith: number
    dinvest: number
  }
  activeUsers?: number
  isLoading?: boolean
}

const EnhancedHeroSection: React.FC<EnhancedHeroSectionProps> = ({ 
  tokenPrices: propTokenPrices, 
  activeUsers: propActiveUsers, 
  isLoading: propIsLoading 
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [particleCount] = useState(20)
  
  // Live data states
  const [activeUsers, setActiveUsers] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [tokenPrices, setTokenPrices] = useState({
    dfaith: 0,
    dinvest: 5.00
  })
  
  // Floating particles animation
  const particles = Array.from({ length: particleCount }, (_, i) => i)

  // Live data fetching (copied from Desktop HeroSection)
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
          const usersCount = data.stats?.activeUsers || data.entries?.length || propActiveUsers || 8
          setActiveUsers(usersCount)
        } else if (propActiveUsers) {
          setActiveUsers(propActiveUsers)
        }
        
        // Process token prices
        if (pricesResponse.status === 'fulfilled' && pricesResponse.value.ok) {
          const pricesData = await pricesResponse.value.json()
          const dfaithToken = pricesData.tokens?.dfaith
          
          setTokenPrices({
            dfaith: dfaithToken?.price_eur || propTokenPrices?.dfaith || 0,
            dinvest: 5.00 // Fester Preis von 5€
          })
        } else if (propTokenPrices) {
          setTokenPrices(propTokenPrices)
        }
      } catch (error) {
        console.error('Failed to fetch data:', error)
        // Use fallback props if available
        if (propActiveUsers) setActiveUsers(propActiveUsers)
        if (propTokenPrices) setTokenPrices(propTokenPrices)
      } finally {
        setIsLoading(false)
      }
    }

    fetchActiveUsers()
    // Refresh every 5 minutes
    const interval = setInterval(fetchActiveUsers, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [propActiveUsers, propTokenPrices])

  // Stats counter animation
  const [stats, setStats] = useState({
    users: 0,
    dfaithPrice: 0,
    dinvestPrice: 0
  })

  useEffect(() => {
    if (inView && !isLoading) {
      // Animate stats counting up
      const animateStats = async () => {
        const duration = 2000
        const steps = 60
        const stepDuration = duration / steps
        
        for (let i = 0; i <= steps; i++) {
          const progress = i / steps
          setStats({
            users: Math.floor(activeUsers * progress),
            dfaithPrice: tokenPrices.dfaith * progress,
            dinvestPrice: tokenPrices.dinvest * progress
          })
          await new Promise(resolve => setTimeout(resolve, stepDuration))
        }
      }
      animateStats()
    }
  }, [inView, isLoading, activeUsers, tokenPrices])

  // Spring animations for main elements
  const titleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px) scale(1)' : 'translateY(50px) scale(0.9)',
    config: config.wobbly,
    delay: 200
  })

  const subtitleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    config: config.gentle,
    delay: 400
  })

  const imageSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px) rotate(0deg) scale(1)' : 'translateY(20px) rotate(-5deg) scale(0.8)',
    config: config.wobbly,
    delay: 600
  })

  const statsSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: config.gentle,
    delay: 800
  })

  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center relative overflow-hidden p-6">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-4 py-2 border border-green-500/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-semibold text-sm">Live auf Base Chain</span>
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <animated.div style={titleSpring} className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            D.FAITH
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Ökosystem
          </h2>
        </animated.div>

        {/* Subtitle */}
        <animated.div style={subtitleSpring} className="text-center mb-8">
          <p className="text-lg text-gray-300 leading-relaxed">
            Revolutionäres Fan-Engagement durch{' '}
            <span className="text-blue-400 font-semibold">Blockchain-Technologie</span>
          </p>
        </animated.div>

        {/* Dawid Faith Image with Floating Effect */}
        <animated.div style={imageSpring} className="flex justify-center mb-8">
          <div className="relative">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotateY: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative"
            >
              <Image
                src="/dawid-faith-photo.jpg"
                alt="Dawid Faith"
                width={120}
                height={120}
                className="rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl"
              />
            </motion.div>
            
            {/* Floating Icons around image */}
            {[
              { icon: <FaMusic className="text-blue-400" />, position: 'top-0 left-0', delay: 0 },
              { icon: <FaCoins className="text-yellow-400" />, position: 'top-0 right-0', delay: 0.5 },
              { icon: <FaRocket className="text-green-400" />, position: 'bottom-0 left-0', delay: 1 },
              { icon: <FaStar className="text-purple-400" />, position: 'bottom-0 right-0', delay: 1.5 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.position} w-8 h-8 backdrop-blur-sm bg-white/10 rounded-full flex items-center justify-center border border-white/20`}
                animate={{ 
                  y: [0, -5, 0],
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: item.delay,
                  ease: "easeInOut" 
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </animated.div>

        {/* Live Stats */}
        <animated.div style={statsSpring}>
          <div className="grid grid-cols-1 gap-4 mb-8">
            {/* Active Users */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-4 border border-blue-500/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <FaUsers className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Active Users</p>
                    <p className="text-white font-bold text-xl">
                      {isLoading ? (
                        <div className="w-16 h-6 bg-gray-600 rounded animate-pulse" />
                      ) : (
                        stats.users.toLocaleString()
                      )}
                    </p>
                  </div>
                </div>
                <FaFire className="text-orange-400 text-xl animate-pulse" />
              </div>
            </motion.div>

            {/* Token Prices */}
            <div className="grid grid-cols-2 gap-4">
              {/* D.FAITH Price */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl p-4 border border-amber-500/20"
              >
                <div className="text-center">
                  <Image src="/d-faith-logo.png" alt="D.FAITH" width={32} height={32} className="rounded-lg mx-auto mb-2" />
                  <p className="text-gray-400 text-xs">D.FAITH</p>
                  <p className="text-amber-400 font-bold">
                    {isLoading ? (
                      <div className="w-12 h-5 bg-gray-600 rounded animate-pulse mx-auto" />
                    ) : (
                      `€${stats.dfaithPrice.toFixed(3)}`
                    )}
                  </p>
                </div>
              </motion.div>

              {/* D.INVEST Price */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-4 border border-purple-500/20"
              >
                <div className="text-center">
                  <Image src="/d-invest-logo.png" alt="D.INVEST" width={32} height={32} className="rounded-lg mx-auto mb-2" />
                  <p className="text-gray-400 text-xs">D.INVEST</p>
                  <p className="text-purple-400 font-bold">
                    {isLoading ? (
                      <div className="w-12 h-5 bg-gray-600 rounded animate-pulse mx-auto" />
                    ) : (
                      `€${stats.dinvestPrice.toFixed(2)}`
                    )}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </animated.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2">
              <FaRocket />
              <span>Jetzt mitmachen</span>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 font-bold text-white hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2">
              <FaPlay />
              <span>Mehr erfahren</span>
            </div>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center mt-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs">Scroll für mehr</span>
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default EnhancedHeroSection