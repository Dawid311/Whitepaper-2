'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaMusic, FaHeart, FaUsers, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import Image from 'next/image'

const MobileTeamSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-2">Das Team</h3>
        <p className="text-gray-400 text-sm">Die Köpfe hinter der Revolution</p>
      </motion.div>

      {/* Dawid Faith Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-900/20 via-purple-900/20 to-blue-900/20 border border-amber-500/30 backdrop-blur-sm"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/20 to-purple-600/20"></div>
          <div className="absolute top-4 right-4 w-20 h-20 bg-amber-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-400/10 rounded-full blur-lg"></div>
        </div>

        <div className="relative z-10 p-6">
          {/* Profile Header */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <Image
                src="/dawid-faith-photo.jpg"
                alt="Dawid Faith"
                width={80}
                height={80}
                className="rounded-2xl border-2 border-amber-500/50 shadow-xl"
              />
              {/* Status Indicator */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-zinc-900 flex items-center justify-center">
                <FaMusic className="text-xs text-white" />
              </div>
            </motion.div>

            <div className="flex-1">
              <h4 className="text-xl font-bold text-amber-400">Dawid Faith</h4>
              <p className="text-gray-300 text-sm mb-1">Gründer & Künstler</p>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-500 text-xs" />
                <span className="text-gray-500 text-xs">Deutschland</span>
              </div>
            </div>

            {/* Social Stats */}
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">774</div>
              <div className="text-xs text-gray-500">Follower</div>
            </div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-amber-900/30 to-purple-900/30 rounded-2xl p-4 border border-amber-500/20 mb-6"
          >
            <div className="text-4xl text-amber-400/50 mb-2">&quot;</div>
            <p className="text-sm text-gray-300 italic leading-relaxed">
              Als unabhängiger Künstler stehe ich vor den gleichen Problemen wie viele andere: 
              Mein Content bekommt nicht die Reichweite, die er verdient. Deshalb entwickelte ich 
              D.FAITH - um Fans direkt für ihr Engagement zu belohnen.
            </p>
            <div className="text-right mt-2">
              <span className="text-xs text-amber-400 font-medium">- Dawid Faith</span>
            </div>
          </motion.div>

          {/* Skills & Achievements */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-900/30 rounded-xl p-3 border border-blue-500/30"
            >
              <FaMusic className="text-blue-400 mb-2" />
              <div className="text-sm font-bold text-white">Blockchain Pioneer</div>
              <div className="text-xs text-gray-400">Smart Contract Dev</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-purple-900/30 rounded-xl p-3 border border-purple-500/30"
            >
              <FaHeart className="text-purple-400 mb-2" />
              <div className="text-sm font-bold text-white">Community Builder</div>
              <div className="text-xs text-gray-400">Fan Engagement</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-green-900/30 rounded-xl p-3 border border-green-500/30"
            >
              <FaUsers className="text-green-400 mb-2" />
              <div className="text-sm font-bold text-white">Artist Network</div>
              <div className="text-xs text-gray-400">Growing Community</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-amber-900/30 rounded-xl p-3 border border-amber-500/30"
            >
              <FaCalendarAlt className="text-amber-400 mb-2" />
              <div className="text-sm font-bold text-white">Live Events</div>
              <div className="text-xs text-gray-400">Concert Integration</div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2"
            >
              <FaInstagram />
              Instagram
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2"
            >
              <FaMusic />
              TikTok
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Vision Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-6 border border-blue-500/30"
      >
        <h4 className="text-lg font-bold text-blue-400 mb-3">Unsere Vision</h4>
        <p className="text-gray-300 text-sm leading-relaxed">
          Eine revolutionäre Creator Economy Platform schaffen, die das Verhältnis zwischen Künstlern, 
          Fans und Investoren fundamental verändert und nachhaltiges Wachstum für alle Beteiligten ermöglicht.
        </p>
      </motion.div>
    </div>
  )
}

export default MobileTeamSection