"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaLightbulb, FaUsers, FaCoins, FaChartLine, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

const SolutionConcept = () => {
  return (
    <div className="mb-16">
      {/* Lösung Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
            <FaLightbulb className="text-4xl text-white" />
          </div>
        </div>
        <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-6">
          Die D.FAITH Revolution
        </h3>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Ein intelligentes Dual-Token-System, das den Teufelskreis durchbricht und 
          eine Win-Win-Situation für Künstler und Fans schafft
        </p>
      </motion.div>

      {/* Zwei Token im Fokus */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* D.FAITH Token */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl p-8 border border-amber-500/30"
        >
          <div className="flex items-center gap-4 mb-6">
            <Image 
              src="/d-faith-logo.png" 
              alt="D.FAITH Logo" 
              width={80} 
              height={80}
            />
            <div>
              <h4 className="text-3xl font-bold text-amber-400">D.FAITH</h4>
              <p className="text-amber-300">Fan-Belohnungstoken</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaUsers className="text-amber-400" />
              <span className="text-gray-300">Belohnt treue Fans für ihr Engagement</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCoins className="text-amber-400" />
              <span className="text-gray-300">Kann in ETH getauscht oder im Shop verwendet werden</span>
            </div>
            <div className="flex items-center gap-3">
              <FaChartLine className="text-amber-400" />
              <span className="text-gray-300">Wertsteigerung durch Verknappung</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-900/30 rounded-lg border border-amber-500/20">
            <h5 className="font-bold text-amber-300 mb-2">Wie Fans D.FAITH bekommen:</h5>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Like (10 EXP) → Token-Reward</li>
              <li>• Kommentar (10 EXP) → Token-Reward</li>
              <li>• Share (10 EXP) → Token-Reward</li>
              <li>• Story (20 EXP) → Token-Reward</li>
              <li>• Live-Konzert Besuch (150 EXP) → Hohe Token-Reward</li>
            </ul>
          </div>
        </motion.div>

        {/* D.INVEST Token */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30"
        >
          <div className="flex items-center gap-4 mb-6">
            <Image 
              src="/d-invest-logo.png" 
              alt="D.INVEST Logo" 
              width={80} 
              height={80}
            />
            <div>
              <h4 className="text-3xl font-bold text-blue-400">D.INVEST</h4>
              <p className="text-blue-300">Investitions-Token</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaCoins className="text-blue-400" />
              <span className="text-gray-300">Ermöglicht Kapitalbeschaffung für Musikproduktion</span>
            </div>
            <div className="flex items-center gap-3">
              <FaChartLine className="text-blue-400" />
              <span className="text-gray-300">Entsperrt gesperrte D.FAITH Token durch Staking</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUsers className="text-blue-400" />
              <span className="text-gray-300">Investoren profitieren von steigenden D.FAITH Preisen</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-500/20">
            <h5 className="font-bold text-blue-300 mb-2">Investment Details:</h5>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Preis: <strong className="text-green-400">5€ pro D.INVEST</strong></li>
              <li>• Total Supply: <strong>10.000 Token</strong></li>
              <li>• Staking Rate: <strong>0.1 D.FAITH pro Woche</strong></li>
              <li>• Entsperrt: <strong>80.000 gesperrte D.FAITH</strong></li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Kernidee */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-8 border border-green-500/30"
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold text-green-400 mb-4">
            💡 Die Kernidee
          </h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <strong>Statt Geld für Werbung auszugeben</strong>, investiert Dawid Faith direkt in 
            <strong> Fan-Belohnungen</strong>. Fans werden für ihr Engagement bezahlt, wodurch sie 
            <strong> motivierter</strong> sind zu interagieren. Mehr Engagement = bessere Reichweite = 
            mehr neue Fans = <strong>selbstverstärkender Kreislauf</strong>. 
            Gleichzeitig generiert das System Kapital für Musikproduktion durch D.INVEST.
          </p>
          
          <div className="flex justify-center items-center mt-6 space-x-4">
            <div className="text-center">
              <div className="bg-red-500/20 rounded-lg p-3 mb-2">
                <span className="text-sm font-bold text-red-400">VORHER</span>
              </div>
              <p className="text-sm text-gray-400">Geld für Werbung ohne Garantie</p>
            </div>
            <FaArrowRight className="text-green-400 text-2xl" />
            <div className="text-center">
              <div className="bg-green-500/20 rounded-lg p-3 mb-2">
                <span className="text-sm font-bold text-green-400">NACHHER</span>
              </div>
              <p className="text-sm text-gray-400">Direkter Fan-Nutzen + Kapital</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SolutionConcept
