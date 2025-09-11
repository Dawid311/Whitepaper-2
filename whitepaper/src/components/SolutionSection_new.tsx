"use client"

import React from 'react'
import { motion } from 'framer-motion'
import ProblemOverview from './solution/ProblemOverview'
import SolutionConcept from './solution/SolutionConcept'
import StepByStepProcess from './solution/StepByStepProcess'
import EcosystemWebapp from './solution/EcosystemWebapp'
import ValueCreationMechanism from './solution/ValueCreationMechanism'

const SolutionSection = () => {
  return (
    <section id="solution" className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Die D.FAITH Lösung
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ein revolutionäres Dual-Token-System, das Fan-Engagement belohnt und 
            kontinuierlich Kapital für Musikproduktion generiert
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* 1. Problem Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <ProblemOverview />
        </motion.div>

        {/* 2. Solution Concept */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <SolutionConcept />
        </motion.div>

        {/* 3. Step by Step Process */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <StepByStepProcess />
        </motion.div>

        {/* 4. Ecosystem Webapp */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <EcosystemWebapp />
        </motion.div>

        {/* 5. Value Creation Mechanism */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <ValueCreationMechanism />
        </motion.div>

        {/* Final Summary */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="relative text-center bg-slate-800/40 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/30 shadow-2xl shadow-blue-500/5"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10 rounded-3xl"></div>
          
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent mb-6">
                🎯 Das Ergebnis
              </h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Ein sich selbst verstärkendes Ökosystem, das alle Beteiligten gleichzeitig belohnt
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Für Fans */}
              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-2xl p-8 border border-green-500/30">
                <div className="text-center">
                  <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎵</span>
                  </div>
                  <h4 className="text-2xl font-bold text-green-400 mb-4">Für Fans</h4>
                  <ul className="text-gray-300 space-y-2 text-left">
                    <li>✅ Werden für ihr Engagement bezahlt</li>
                    <li>✅ Können Token in ETH tauschen</li>
                    <li>✅ Zugang zu exklusiven Produkten</li>
                    <li>✅ Teil einer echten Community</li>
                    <li>✅ Direkter Kontakt zum Künstler</li>
                  </ul>
                </div>
              </div>

              {/* Für Dawid Faith */}
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-2xl p-8 border border-blue-500/30">
                <div className="text-center">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎤</span>
                  </div>
                  <h4 className="text-2xl font-bold text-blue-400 mb-4">Für Dawid Faith</h4>
                  <ul className="text-gray-300 space-y-2 text-left">
                    <li>✅ Höheres organisches Engagement</li>
                    <li>✅ Kontinuierliche Kapitalzuflüsse</li>
                    <li>✅ Finanzierung für Musikproduktion</li>
                    <li>✅ Loyale und motivierte Fanbase</li>
                    <li>✅ Skalierbare Reichweite ohne Werbung</li>
                  </ul>
                </div>
              </div>

              {/* Für Investoren */}
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-500/30">
                <div className="text-center">
                  <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h4 className="text-2xl font-bold text-purple-400 mb-4">Für Investoren</h4>
                  <ul className="text-gray-300 space-y-2 text-left">
                    <li>✅ Hohe ROI durch Token-Verknappung</li>
                    <li>✅ Kontinuierliche Staking-Rewards</li>
                    <li>✅ Unterstützung von Musik & Kreativität</li>
                    <li>✅ Früher Zugang zu wachsendem Markt</li>
                    <li>✅ Transparente Blockchain-Technologie</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h4 className="text-3xl font-bold text-white mb-6">
                Bereit für die Revolution? 🚀
              </h4>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Das D.FAITH Ökosystem ist live und funktionsfähig. 
                Werde Teil einer neuen Ära des Fan-Engagements!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  🎵 Als Fan mitmachen
                </button>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  💎 D.INVEST kaufen
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionSection
