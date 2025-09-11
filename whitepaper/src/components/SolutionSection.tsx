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
    <section id="solution" className="relative py-20 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-purple-950/30 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* 1. Das Problem */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl shadow-black/20">
            <ProblemOverview />
          </div>
        </motion.div>

        {/* 2. Lösung & Konzept */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl shadow-black/20">
            <SolutionConcept />
          </div>
        </motion.div>

        {/* 3. Schritt-für-Schritt Prozess */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl shadow-black/20">
            <StepByStepProcess />
          </div>
        </motion.div>

        {/* 4. Ökosystem & Webapp */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl shadow-black/20">
            <EcosystemWebapp />
          </div>
        </motion.div>

        {/* 5. Wertschöpfungsmechanismus */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-slate-700/30 shadow-2xl shadow-black/20">
            <ValueCreationMechanism />
          </div>
        </motion.div>

        {/* Innovative Results Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-2xl rounded-3xl border border-slate-600/30 shadow-2xl overflow-hidden">
            {/* Header Section with Holographic Effect */}
            <div className="relative p-12 text-center bg-gradient-to-r from-cyan-900/30 via-violet-900/30 to-pink-900/30">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-pink-500/10 animate-pulse"></div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="relative"
              >
                <div className="text-8xl mb-6">🎯</div>
                <h3 className="text-6xl font-black bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400 bg-clip-text text-transparent mb-6">
                  TRIPLE WIN
                </h3>
                <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
                  Ein Ökosystem, in dem <span className="text-cyan-400 font-bold">jeder profitiert</span>
                </p>
              </motion.div>
            </div>

            {/* Results Grid with Floating Cards */}
            <div className="p-12">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Fans Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30 shadow-2xl">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/25">
                        <span className="text-3xl">🎵</span>
                      </div>
                      <h4 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                        Fans
                      </h4>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        'Verdienen durch Engagement',
                        'Exklusive NFT-Zugang',
                        'Direkte Künstler-Verbindung',
                        'Community-Governance',
                        'Staking-Rewards'
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-center gap-3 text-slate-300"
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Creator Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-violet-500/30 shadow-2xl">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-500/25">
                        <span className="text-3xl">🎤</span>
                      </div>
                      <h4 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                        Dawid Faith
                      </h4>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        'Kontinuierliche Finanzierung',
                        'Organisches Fan-Wachstum',
                        'Kreative Freiheit',
                        'Datengesteuerte Insights',
                        'Globale Reichweite'
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-center gap-3 text-slate-300"
                        >
                          <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                          <span className="font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Investors Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-pink-500/30 shadow-2xl">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/25">
                        <span className="text-3xl">💎</span>
                      </div>
                      <h4 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                        Investoren
                      </h4>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        'Hohe ROI-Potentiale',
                        'Token-Deflation durch Burns',
                        'Yield-Farming-Möglichkeiten',
                        'Früher Markt-Zugang',
                        'Transparente Blockchain'
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-center gap-3 text-slate-300"
                        >
                          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                          <span className="font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Call to Action */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-16 text-center"
              >
                <h4 className="text-4xl font-bold text-white mb-8">
                  Bereit für die Zukunft? 🚀
                </h4>
                <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto">
                  Treten Sie dem D.FAITH Ökosystem bei und erleben Sie eine völlig neue Art des 
                  Fan-Engagements und der Wertschöpfung in der Musikindustrie.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold rounded-2xl shadow-lg shadow-cyan-500/25 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center gap-3">
                      <span className="text-2xl">🎵</span>
                      Fan werden & verdienen
                    </span>
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-bold rounded-2xl shadow-lg shadow-violet-500/25 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center gap-3">
                      <span className="text-2xl">💎</span>
                      D.INVEST Token kaufen
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionSection
