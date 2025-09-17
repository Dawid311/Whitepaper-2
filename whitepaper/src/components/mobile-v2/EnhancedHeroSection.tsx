'use client'

import React, { useState, useEffect } from 'react'
import { EnhancedHeroSectionTranslations } from './EnhancedHeroSectionTranslations';
import { motion } from 'framer-motion'
import { useSpring, animated, config } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import { 
  FaRocket, 
  FaUsers,
  FaPlay,
  FaFire
} from 'react-icons/fa'
import Image from 'next/image'

interface EnhancedHeroSectionProps {
  tokenPrices?: {
    dfaith: number
    dinvest: number
  }
  activeUsers?: number
  isLoading?: boolean
  language?: 'de' | 'en' | 'pl';
}

const EnhancedHeroSection: React.FC<EnhancedHeroSectionProps> = ({ 
  tokenPrices: propTokenPrices, 
  activeUsers: propActiveUsers, 
  isLoading: propIsLoading,
  language = 'de'
}) => {
  const t = EnhancedHeroSectionTranslations(language);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [particleCount] = useState(20)
  
  // Live data states - only real live data, no fallbacks
  const [activeUsers, setActiveUsers] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [tokenPrices, setTokenPrices] = useState<{
    dfaith: number | null
    dinvest: number | null
  }>({
    dfaith: null,
    dinvest: null
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
        
        // Process leaderboard data - only set if we get real data
        if (leaderboardResponse.status === 'fulfilled' && leaderboardResponse.value.ok) {
          const data = await leaderboardResponse.value.json()
          const usersCount = data.stats?.activeUsers || data.entries?.length
          if (usersCount && usersCount > 0) {
            setActiveUsers(usersCount)
          }
        }
        
        // Process token prices - only set if we get real data
        if (pricesResponse.status === 'fulfilled' && pricesResponse.value.ok) {
          const pricesData = await pricesResponse.value.json()
          const dfaithToken = pricesData.tokens?.dfaith
          
          if (dfaithToken?.price_eur) {
            setTokenPrices({
              dfaith: dfaithToken.price_eur,
              dinvest: 5.00 // This is a fixed price, not from API
            })
          }
        }
      } catch (error) {
        console.error('Failed to fetch live data:', error)
        // No fallbacks - keep null values to show loading state
      } finally {
        setIsLoading(false)
      }
    }

    fetchActiveUsers()
    // Refresh every 5 minutes
    const interval = setInterval(fetchActiveUsers, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [propActiveUsers, propTokenPrices])

  // Stats counter animation - only show real live data
  const [stats, setStats] = useState<{
    users: number | null
    dfaithPrice: number | null
    dinvestPrice: number | null
  }>({
    users: null,
    dfaithPrice: null,
    dinvestPrice: null
  })

  useEffect(() => {
    // Set stats directly from live data without animation
    setStats({
      users: activeUsers,
      dfaithPrice: tokenPrices.dfaith,
      dinvestPrice: tokenPrices.dinvest
    })
  }, [activeUsers, tokenPrices])

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
        {/* Main Title */}
        <animated.div style={titleSpring} className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            {t.title1}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {t.title2}
          </h2>
        </animated.div>

        {/* Subtitle */}
        <animated.div style={subtitleSpring} className="text-center mb-8">
          <p className="text-lg text-gray-300 leading-relaxed">
            {t.subtitle}
            <span className="text-blue-400 font-semibold">{t.subtitleHighlight}</span>
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
                    <p className="text-gray-400 text-sm">{t.activeUsers}</p>
                    <p className="text-white font-bold text-xl">
                      {isLoading || stats.users === null ? (
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
                  <p className="text-gray-400 text-xs">{t.dfaith}</p>
                  <p className="text-amber-400 font-bold">
                    {isLoading || stats.dfaithPrice === null ? (
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
                  <p className="text-gray-400 text-xs">{t.dinvest}</p>
                  <p className="text-purple-400 font-bold">
                    {isLoading || stats.dinvestPrice === null ? (
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
              <span>{t.cta1}</span>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 font-bold text-white hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2">
              <FaPlay />
              <span>{t.cta2}</span>
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
              <span className="text-xs">{t.scroll}</span>
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default EnhancedHeroSection