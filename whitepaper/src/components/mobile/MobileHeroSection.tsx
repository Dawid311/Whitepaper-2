'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaFireAlt, FaUsers, FaChartLine } from 'react-icons/fa'
import Image from 'next/image'

interface MobileHeroSectionProps {
  tokenPrices: {
    dfaith: number
    dinvest: number
  }
  activeUsers: number
  isLoading: boolean
}

const MobileHeroSection: React.FC<MobileHeroSectionProps> = ({
  tokenPrices,
  activeUsers,
  isLoading
}) => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-purple-900/20 to-blue-900/20">
        <div className="absolute inset-0 bg-[url('/d-faith-logo.png')] bg-center bg-no-repeat bg-contain opacity-5"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-6 text-center"
      >
        {/* Main Title */}
        <div className="mb-6">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-block"
          >
            <Image
              src="/d-faith-logo.png"
              alt="D.FAITH Logo"
              width={80}
              height={80}
              className="mx-auto mb-4 rounded-2xl shadow-2xl"
            />
            {/* Glowing effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-purple-500 to-blue-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-400 to-blue-400 mb-2"
          >
            D.FAITH
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-300 mb-2"
          >
            Revolutionäres Fan-Engagement
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 px-4 py-2 rounded-full text-sm border border-green-500/30"
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <FaRocket className="text-xs" />
            Live auf Base Chain
          </motion.div>
        </div>

        {/* Live Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          {/* D.FAITH Price */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-amber-900/40 to-yellow-900/40 rounded-2xl p-4 border border-amber-500/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <FaFireAlt className="text-amber-400" />
              <span className="text-xs text-amber-300 font-medium">D.FAITH</span>
            </div>
            <div className="text-2xl font-bold text-amber-400">
              {isLoading ? (
                <div className="animate-pulse">€...</div>
              ) : (
                `€${tokenPrices.dfaith.toFixed(2)}`
              )}
            </div>
            <div className="text-xs text-amber-300/70">Live Preis</div>
          </motion.div>

          {/* D.INVEST Price */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-2xl p-4 border border-blue-500/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <FaChartLine className="text-blue-400" />
              <span className="text-xs text-blue-300 font-medium">D.INVEST</span>
            </div>
            <div className="text-2xl font-bold text-blue-400">€5,00</div>
            <div className="text-xs text-blue-300/70">Fix Preis</div>
          </motion.div>

          {/* Total Supply */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-2xl p-4 border border-green-500/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <FaRocket className="text-green-400" />
              <span className="text-xs text-green-300 font-medium">Supply</span>
            </div>
            <div className="text-2xl font-bold text-green-400">100K</div>
            <div className="text-xs text-green-300/70">D.FAITH Token</div>
          </motion.div>

          {/* Active Users */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-4 border border-purple-500/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <FaUsers className="text-purple-400" />
              <span className="text-xs text-purple-300 font-medium">Fans</span>
            </div>
            <div className="text-2xl font-bold text-purple-400">
              {isLoading ? (
                <div className="animate-pulse">...</div>
              ) : (
                activeUsers
              )}
            </div>
            <div className="text-xs text-purple-300/70">Aktive User</div>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold py-3 px-6 rounded-xl shadow-lg"
          >
            🎵 Fan werden
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg"
          >
            💎 Investieren
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500 text-center"
          >
            <div className="text-xs mb-1">Scroll für mehr</div>
            <div className="w-1 h-6 bg-gradient-to-b from-gray-500 to-transparent rounded-full mx-auto"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default MobileHeroSection