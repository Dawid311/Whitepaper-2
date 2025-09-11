"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlay, FaPause, FaInstagram, FaTiktok, FaFacebook, FaCoins, FaLock, FaUsers, FaChartLine, FaArrowRight, FaTimes, FaInfoCircle, FaChartArea } from 'react-icons/fa'

const StepByStepProcess = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [openModal, setOpenModal] = useState<number | null>(null)

  const steps = [
    {
      id: 1,
      title: "Dawid postet neuen Content",
      subtitle: "Song, Video oder Update auf Instagram, TikTok & Facebook",
      icon: <FaInstagram className="text-2xl text-white" />,
      color: "from-purple-500 to-pink-500",
      modalContent: {
        title: "📱 Content Posting & Initial Setup",
        details: [
          {
            title: "💰 Initialliquidität",
            content: "1.000€ für 20.000 D.FAITH Token bereitgestellt"
          },
          {
            title: "📊 Marketing Budget",
            content: "1.500€ für den spezifischen Beitrag reserviert"
          },
          {
            title: "🔒 Token Sperrung",
            content: "80.000 D.FAITH bleiben im Smart Contract gesperrt"
          },
          {
            title: "🎯 Plattformen",
            content: "Gleichzeitiges Posting auf Instagram, TikTok & Facebook"
          }
        ]
      }
    },
    {
      id: 2,
      title: "Fan Interaktion wird erkannt",
      subtitle: "Fans liken, kommentieren, teilen - automatisch erfasst",
      icon: <FaUsers className="text-2xl text-white" />,
      color: "from-blue-500 to-cyan-500",
      modalContent: {
        title: "👥 Fan Engagement Tracking",
        details: [
          {
            title: "❤️ Like Tracking",
            content: "10 EXP pro Like → Level-basierte D.FAITH Rewards"
          },
          {
            title: "💬 Kommentar System",
            content: "Kommentar mit 'D.FAITH' → Automatischer Link zur Webapp"
          },
          {
            title: "🔄 Share & Story",
            content: "10-20 EXP → Höhere Rewards je nach Engagement-Type"
          },
          {
            title: "📊 Profilerstellung",
            content: "Automatische Profilerstellung und Cross-Platform Tracking"
          }
        ]
      }
    },
    {
      id: 3,
      title: "Automatische Token-Käufe",
      subtitle: "System kauft D.FAITH Token basierend auf Engagement",
      icon: <FaCoins className="text-2xl text-white" />,
      color: "from-green-500 to-emerald-500",
      modalContent: {
        title: "💰 Automatisierte Token-Käufe",
        details: [
          {
            title: "💸 Budget Verwendung",
            content: "Marketing Budget wird für Token-Käufe verwendet"
          },
          {
            title: "📈 Level System",
            content: "Level-System bestimmt Token-Anzahl pro Fan"
          },
          {
            title: "🎁 Fan Distribution",
            content: "50% der gekauften Token gehen direkt an Fans"
          },
          {
            title: "🔒 Contract Feed",
            content: "50% werden im Smart Contract für Staking gesperrt"
          }
        ]
      }
    },
    {
      id: 4,
      title: "Smart Contract sammelt Token",
      subtitle: "Halving-Mechanismus sorgt für kontinuierliche Verknappung",
      icon: <FaLock className="text-2xl text-white" />,
      color: "from-orange-500 to-red-500",
      modalContent: {
        title: "🔐 Smart Contract Mechanismus",
        details: [
          {
            title: "⚡ Reward Stufen",
            content: "6 Reward-Stufen mit Halving-Effekt implementiert"
          },
          {
            title: "📊 Startrate",
            content: "0,1 D.FAITH pro D.INVEST pro Woche (Initial)"
          },
          {
            title: "✂️ Halving Effekt",
            content: "Jede Stufe halbiert die Ausgaberate automatisch"
          },
          {
            title: "🔑 Unlock Bedingung",
            content: "Token nur durch D.INVEST Staking entsperrbar"
          }
        ]
      }
    },
    {
      id: 5,
      title: "Preissteigerung durch Verknappung",
      subtitle: "D.FAITH wird wertvoller, D.INVEST wird attraktiver",
      icon: <FaChartLine className="text-2xl text-white" />,
      color: "from-yellow-500 to-orange-500",
      modalContent: {
        title: "📈 Exponentielles Preiswachstum",
        details: [
          {
            title: "🔥 Verknappungseffekt",
            content: "Kontinuierliche Käufe reduzieren verfügbare Token drastisch"
          },
          {
            title: "🚀 Preisexplosion",
            content: "Preis steigt exponentiell bei zunehmender Verknappung"
          },
          {
            title: "💎 D.INVEST Attraktivität",
            content: "D.INVEST Staking wird exponentiell profitabler"
          },
          {
            title: "👑 Investor Appeal",
            content: "Hohe ROI lockt erste strategische Investoren an"
          }
        ]
      }
    },
    {
      id: 6,
      title: "D.INVEST Investoren steigen ein",
      subtitle: "Neues Kapital + Preis Reset für neuen Zyklus",
      icon: <FaArrowRight className="text-2xl text-white" />,
      color: "from-purple-500 to-blue-500",
      isPriceReset: true,
      modalContent: {
        title: "💥 Investor Entry & Price Reset",
        details: [
          {
            title: "💰 Kapitalzufluss",
            content: "Investoren kaufen D.INVEST für 5€ pro Token"
          },
          {
            title: "🎵 Produktions-Boost",
            content: "Neues Kapital fließt in hochwertige Musikproduktion"
          },
          {
            title: "📉 Unvermeidlicher Crash",
            content: "Investoren führen zu temporärem Preis-Reset (wie Bitcoin Zyklen)"
          },
          {
            title: "🔄 Neuer Zyklus",
            content: "Halving setzt ein → Zyklus beginnt mit höherer Basis"
          }
        ]
      }
    }
  ]

  const startAnimation = () => {
    setIsPlaying(true)
    let currentStep = 0
    
    const interval = setInterval(() => {
      setActiveStep(currentStep)
      currentStep++
      
      if (currentStep >= steps.length) {
        clearInterval(interval)
        setIsPlaying(false)
        setActiveStep(0)
      }
    }, 2000)
  }

  const stopAnimation = () => {
    setIsPlaying(false)
    setActiveStep(0)
  }

  const openStepModal = (stepId: number) => {
    setOpenModal(stepId)
  }

  const closeModal = () => {
    setOpenModal(null)
  }

  return (
    <div className="mb-16">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-6">
          Der D.FAITH Kreislauf
        </h3>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
          So funktioniert das System Schritt für Schritt - von Fan-Interaktion bis zur Wertsteigerung
        </p>
      </motion.div>

      {/* Steps Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-500 cursor-pointer hover:scale-105 ${
              activeStep === index 
                ? 'border-blue-500 scale-105 shadow-2xl shadow-blue-500/20' 
                : 'border-slate-700 hover:border-slate-600'
            } ${step.isPriceReset ? 'bg-gradient-to-br from-red-900/20 to-orange-900/20' : ''}`}
            onClick={() => openStepModal(step.id)}
          >
            {/* Step Number */}
            <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm`}>
              {step.id}
            </div>

            {/* Price Reset Indicator */}
            {step.isPriceReset && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                CRASH!
              </div>
            )}

            {/* Icon */}
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 bg-gradient-to-r ${step.color} rounded-full`}>
                {step.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-white">{step.title}</h4>
                <p className="text-sm text-gray-400">{step.subtitle}</p>
              </div>
            </div>

            {/* Click for Details */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2 text-blue-400 text-sm">
                <FaInfoCircle />
                <span>Details anzeigen</span>
              </div>
              {step.isPriceReset && (
                <div className="flex items-center gap-1 text-red-400 text-xs">
                  <FaChartArea />
                  <span>Reset Cycle</span>
                </div>
              )}
            </div>

            {/* Active Indicator */}
            <AnimatePresence>
              {activeStep === index && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute inset-0 border-2 border-blue-500 rounded-xl pointer-events-none"
                >
                  <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    AKTIV
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const step = steps.find(s => s.id === openModal)
                if (!step) return null

                return (
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 bg-gradient-to-r ${step.color} bg-opacity-20 rounded-full`}>
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{step.modalContent.title}</h3>
                          <p className="text-gray-400">{step.subtitle}</p>
                        </div>
                      </div>
                      <button
                        onClick={closeModal}
                        className="p-2 hover:bg-slate-700 rounded-full transition-colors"
                      >
                        <FaTimes className="text-gray-400" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      {step.modalContent.details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-slate-700/30 rounded-lg p-4 border border-slate-600"
                        >
                          <h4 className="font-bold text-blue-400 mb-2">{detail.title}</h4>
                          <p className="text-gray-300">{detail.content}</p>
                        </motion.div>
                      ))}

                      {/* Special Price Reset Visualization */}
                      {step.isPriceReset && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                          className="bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-lg p-6 border border-red-500/30 mt-6"
                        >
                          <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                            <FaChartArea />
                            📉 Preis-Reset Visualisierung
                          </h4>
                          
                          <div className="space-y-4">
                            <div className="bg-slate-800/50 rounded-lg p-4">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-300">D.FAITH Preis vor Investoren:</span>
                                <span className="text-green-400 font-bold">+300% 🚀</span>
                              </div>
                              <div className="w-full bg-slate-700 rounded-full h-3">
                                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full w-full"></div>
                              </div>
                            </div>

                            <div className="flex justify-center">
                              <div className="text-red-500 text-3xl animate-bounce">⬇️ CRASH ⬇️</div>
                            </div>

                            <div className="bg-slate-800/50 rounded-lg p-4">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-300">D.FAITH Preis nach Reset:</span>
                                <span className="text-yellow-400 font-bold">+50% 📈</span>
                              </div>
                              <div className="w-full bg-slate-700 rounded-full h-3">
                                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full w-1/3"></div>
                              </div>
                            </div>

                            <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/30">
                              <p className="text-blue-300 text-sm text-center">
                                🔄 <strong>Wichtig:</strong> Wie bei Bitcoin führt jeder Investoren-Einstieg zu einem temporären Crash, 
                                aber die neue Basis ist höher als der vorherige Zyklus. Das Halving-System sorgt für 
                                exponentielles Wachstum über mehrere Zyklen.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-slate-700">
                      <button
                        onClick={closeModal}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
                      >
                        Verstanden ✓
                      </button>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default StepByStepProcess
