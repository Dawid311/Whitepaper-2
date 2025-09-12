"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaInstagram, FaTiktok, FaFacebook, FaCoins, FaLock, FaUsers, FaChartLine, FaArrowRight, FaTimes, FaInfoCircle, FaChartArea, FaRocket } from 'react-icons/fa'

const StepByStepProcess = () => {
  const [openModal, setOpenModal] = useState<number | string | null>(null)

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
            content: "1.500€ für die spezifische Kampagne reserviert"
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
      title: "Kreislauf wiederholt sich",
      subtitle: "System verstärkt sich automatisch bei jedem neuen Post",
      icon: <FaArrowRight className="text-2xl text-white" />,
      color: "from-cyan-500 to-blue-500",
      isRepeat: true,
      modalContent: {
        title: "🔄 Endloser Verstärkungszyklus",
        details: [
          {
            title: "📈 Exponentielles Wachstum",
            content: "Jeder Post verstärkt das System mehr als der vorherige"
          },
          {
            title: "🎯 Automatische Optimierung",
            content: "System lernt aus jedem Durchlauf und wird effizienter"
          },
          {
            title: "🚀 Momentum Building",
            content: "Fans erwarten bereits Belohnungen → Mehr Engagement"
          },
          {
            title: "💰 Steigender Token-Wert",
            content: "D.FAITH wird bei jedem Zyklus wertvoller"
          }
        ]
      }
    }
  ]

  const cycleSteps = [
    {
      id: 'profitable',
      title: "D.INVEST wird rentabel",
      subtitle: "Hohe D.FAITH Preise machen Staking extrem profitabel",
      icon: <FaChartLine className="text-2xl text-white" />,
      color: "from-green-500 to-emerald-500",
      effect: "104% ROI möglich",
      modalContent: {
        title: "💰 D.INVEST Rentabilitätsschwelle",
        details: [
          {
            title: "📊 ROI Explosion",
            content: "Bei 1€ D.FAITH Preis: 104% jährlicher ROI auf D.INVEST"
          },
          {
            title: "🎯 Investor Appeal",
            content: "Traditionelle Investoren werden auf hohe Renditen aufmerksam"
          },
          {
            title: "📈 Staking Rewards",
            content: "0,1 D.FAITH pro D.INVEST pro Woche wird sehr wertvoll"
          },
          {
            title: "🔥 FOMO Effekt",
            content: "Limitierte D.INVEST Verfügbarkeit schürt Nachfrage"
          }
        ]
      }
    },
    {
      id: 'crash',
      title: "Investoren fluten Markt",
      subtitle: "Massive D.INVEST Käufe führen zu D.FAITH Crash",
      icon: <FaChartArea className="text-2xl text-white" />,
      color: "from-red-500 to-orange-500",
      effect: "Temporärer 70% Crash",
      isCrash: true,
      modalContent: {
        title: "💥 Der unvermeidliche Crash",
        details: [
          {
            title: "🌊 Investor Flood",
            content: "Große Investoren kaufen massiv D.INVEST für 5€/Token"
          },
          {
            title: "📉 D.FAITH Crash",
            content: "Massive Staking-Rewards fluten Markt → 70% Preisfall"
          },
          {
            title: "💰 Dawid's Payday",
            content: "Neues Kapital fließt in hochwertige Musikproduktion und Marketing"
          },
          {
            title: "🔄 Bitcoin-Pattern",
            content: "Wie Bitcoin: Crash ist Teil des Wachstumszyklus"
          }
        ]
      }
    },
    {
      id: 'halving',
      title: "Halving aktiviert sich",
      subtitle: "Smart Contract reduziert Ausgaberate automatisch",
      icon: <FaLock className="text-2xl text-white" />,
      color: "from-purple-500 to-pink-500",
      effect: "50% weniger Rewards",
      modalContent: {
        title: "⚡ Halving-Mechanismus greift",
        details: [
          {
            title: "✂️ Automatische Kürzung",
            content: "Staking-Rate sinkt von 0,1 auf 0,05 D.FAITH pro Woche"
          },
          {
            title: "🛡️ Crash-Schutz",
            content: "Halving verhindert weitere Marktüberflutung"
          },
          {
            title: "📈 Basis erhöht",
            content: "Neuer Zyklus startet auf höherem Preisniveau"
          },
          {
            title: "🎯 Bitcoin-Mechanik",
            content: "Bewährtes Halving-Konzept aus der Krypto-Welt"
          }
        ]
      }
    },
    {
      id: 'restart',
      title: "Zyklus beginnt erneut",
      subtitle: "Höhere Basis, stärkeres System, exponentielles Wachstum",
      icon: <FaRocket className="text-2xl text-white" />,
      color: "from-cyan-500 to-purple-500",
      effect: "Nächster Level",
      isRestart: true,
      modalContent: {
        title: "🚀 Neuer Zyklus - höheres Level",
        details: [
          {
            title: "📈 Höhere Startbasis",
            content: "Neuer Zyklus beginnt bei 0,30€ statt 0,05€ D.FAITH"
          },
          {
            title: "💎 Stärkeres System",
            content: "Mehr Fans, bessere Musik, größere Reichweite"
          },
          {
            title: "🎵 Professionellere Produktion",
            content: "Millionen-Investment ermöglicht Hollywood-Level Content"
          },
          {
            title: "🌍 Globaler Markt",
            content: "System expandiert in neue Märkte und Plattformen"
          }
        ]
      }
    }
  ]

  const openStepModal = (stepId: number | string) => {
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
          🔄 Der D.FAITH Kreislauf
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
            className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-500 cursor-pointer hover:scale-105 border-slate-700 hover:border-slate-600 ${step.isRepeat ? 'bg-gradient-to-br from-cyan-900/20 to-blue-900/20' : ''}`}
            onClick={() => openStepModal(step.id)}
          >
            {/* Step Number */}
            <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm`}>
              {step.id}
            </div>

            {/* Repeat Indicator */}
            {step.isRepeat && (
              <div className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                LOOP
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
              {step.isRepeat && (
                <div className="flex items-center gap-1 text-cyan-400 text-xs">
                  <FaArrowRight />
                  <span>Zyklus</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cycle Arrow Down */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center my-12"
      >
        <div className="text-6xl animate-bounce mb-4">⬇️</div>
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-lg">
          💰 D.INVEST wird interessant
        </div>
      </motion.div>

      {/* Cycle Steps Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        {cycleSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-500 cursor-pointer hover:scale-105 border-slate-700 hover:border-slate-600 ${
              step.isCrash ? 'bg-gradient-to-br from-red-900/20 to-orange-900/20' : ''
            } ${step.isRestart ? 'bg-gradient-to-br from-cyan-900/20 to-purple-900/20' : ''}`}
            onClick={() => openStepModal(step.id)}
          >
            {/* Step Label */}
            <div className={`absolute -top-3 -left-3 px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-xs`}>
              {step.id === 'profitable' && 'PROFIT'}
              {step.id === 'crash' && 'CRASH'}
              {step.id === 'halving' && 'HALVING'}
              {step.id === 'restart' && 'RESTART'}
            </div>

            {/* Special Indicators */}
            {step.isCrash && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                📉 -70%
              </div>
            )}
            {step.isRestart && (
              <div className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                🔄 LOOP
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

            {/* Effect */}
            <div className="bg-slate-700/30 rounded-lg p-3 mb-4">
              <p className="text-xs font-semibold text-center">
                <span className="text-yellow-400">⚡</span> {step.effect}
              </p>
            </div>

            {/* Click for Details */}
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 text-blue-400 text-sm">
                <FaInfoCircle />
                <span>Details anzeigen</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cycle Arrow Up */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center my-12"
      >
        <div className="text-6xl animate-bounce mb-4">⬆️</div>
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-xl flex items-center gap-3">
          <span className="text-2xl">🔄</span>
          Zyklus beginnt wieder - auf höherem Level!
        </div>
        <p className="text-gray-400 text-center mt-4 max-w-md">
          Jeder Zyklus verstärkt das System. Aus 0,05€ werden 0,30€ Startpreis. 
          Exponentielles Wachstum garantiert!
        </p>
      </motion.div>

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
                const cycleStep = cycleSteps.find(s => s.id === openModal)
                const currentStep = step || cycleStep
                if (!currentStep) return null

                return (
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 bg-gradient-to-r ${currentStep.color} bg-opacity-20 rounded-full`}>
                          {currentStep.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{currentStep.modalContent.title}</h3>
                          <p className="text-gray-400">{currentStep.subtitle}</p>
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
                      {currentStep.modalContent.details.map((detail, index) => (
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
