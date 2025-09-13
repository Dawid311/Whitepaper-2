'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaChevronDown,
  FaMusic,
  FaHeart,
  FaCoins,
  FaLock,
  FaArrowUp,
  FaRefresh,
  FaDollarSign,
  FaUsers,
  FaCog,
  FaChartLine,
  FaCheck,
  FaArrowRight
} from 'react-icons/fa'

const MobileStepByStepProcess = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const mainSteps = [
    {
      id: 1,
      title: "Dawid postet neuen Content",
      description: "Song, Video oder Update auf Instagram, TikTok & Facebook",
      details: [
        "1.000€ für 20.000 D.FAITH Token bereitgestellt",
        "1.500€ für spezifische Kampagne reserviert", 
        "80.000 D.FAITH bleiben im Smart Contract gesperrt"
      ],
      icon: <FaMusic className="text-blue-500" />
    },
    {
      id: 2,
      title: "Fan Interaktion wird erkannt",
      description: "Automatisches Tracking von Likes, Kommentaren, Shares",
      details: [
        "Kommentar mit 'D.FAITH' → Automatischer Link zur Webapp",
        "Profilerstellung und Cross-Platform Tracking"
      ],
      icon: <FaHeart className="text-red-500" />
    },
    {
      id: 3,
      title: "Automatische Token-Käufe",
      description: "Marketing Budget wird für Token-Käufe verwendet",
      details: [
        "Level-System bestimmt Token-Anzahl pro Fan",
        "50% der gekauften Token gehen direkt an Fans",
        "50% werden im Smart Contract für Staking gesperrt"
      ],
      icon: <FaCoins className="text-yellow-500" />
    },
    {
      id: 4,
      title: "Smart Contract sammelt Token",
      description: "6 Reward-Stufen mit Halving-Effekt implementiert",
      details: [
        "Startrate: 0,1 D.FAITH pro D.INVEST pro Woche (Initial)",
        "Jede Stufe halbiert die Ausgaberate automatisch",
        "Token nur durch D.INVEST Staking entsperrbar"
      ],
      icon: <FaLock className="text-purple-500" />
    },
    {
      id: 5,
      title: "Preissteigerung durch Verknappung",
      description: "Kontinuierliche Käufe reduzieren verfügbare Token",
      details: [
        "D.INVEST Staking wird profitabler",
        "Attraktive ROI lockt neue Investoren an"
      ],
      icon: <FaArrowUp className="text-green-500" />
    },
    {
      id: 6,
      title: "Kreislauf wiederholt sich",
      description: "System verstärkt sich automatisch bei jedem neuen Post",
      details: [
        "Fans erwarten bereits Belohnungen → Mehr Engagement",
        "D.FAITH kann bei jedem Zyklus wertvoller werden"
      ],
      icon: <FaRefresh className="text-indigo-500" />
    }
  ]

  const marketSteps = [
    {
      id: 1,
      title: "D.INVEST wird rentabel",
      description: "Bei höheren D.FAITH Preisen entstehen attraktive ROI-Möglichkeiten",
      details: ["104% ROI möglich bei optimalen Bedingungen"],
      icon: <FaDollarSign className="text-green-600" />
    },
    {
      id: 2,
      title: "Investoren kaufen D.INVEST",
      description: "Neue Investoren kaufen D.INVEST für 5€/Token",
      details: [
        "Mehr Staking-Rewards werden ausgegeben → temporärer Preisrückgang",
        "Neues Kapital fließt in bessere Musikproduktion"
      ],
      icon: <FaUsers className="text-blue-600" />
    },
    {
      id: 3,
      title: "Halving aktiviert sich",
      description: "Staking-Rate sinkt automatisch von 0,1 auf 0,05 D.FAITH pro Woche",
      details: [
        "Halving verhindert weitere Marktüberflutung",
        "Bewährtes Bitcoin-Halving-Konzept implementiert"
      ],
      icon: <FaCog className="text-orange-600" />
    },
    {
      id: 4,
      title: "Zyklus beginnt erneut",
      description: "Neuer Zyklus startet auf höherem Preisniveau",
      details: [
        "Mehr Fans, bessere Reichweite, stärkere Community",
        "System kann in neue Märkte und Plattformen expandieren"
      ],
      icon: <FaChartLine className="text-purple-600" />
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-4"
    >
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8 pt-8"
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Schritt-für-Schritt Prozess
          </h1>
          <p className="text-gray-300 text-sm">
            Wie das D.FAITH Ökosystem funktioniert
          </p>
        </motion.div>

        {/* Haupt-Zyklus Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <button
            onClick={() => toggleSection('main-cycle')}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-left flex items-center justify-between shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center">
              <FaRefresh className="mr-3 text-lg" />
              <div>
                <h3 className="font-semibold text-lg">Haupt-Zyklus</h3>
                <p className="text-blue-200 text-sm">6 Kern-Schritte des Systems</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expandedSection === 'main-cycle' ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown />
            </motion.div>
          </button>

          <AnimatePresence>
            {expandedSection === 'main-cycle' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-4"
              >
                {mainSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
                  >
                    <div className="flex items-start mb-2">
                      <div className="flex items-center mr-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold mr-2">
                          {step.id}
                        </div>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{step.title}</h4>
                        <p className="text-gray-300 text-sm mt-1">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="ml-11 space-y-1">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-400">
                          <FaCheck className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {index < mainSteps.length - 1 && (
                      <div className="flex justify-center mt-3">
                        <FaArrowRight className="text-gray-500" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Markt-Zyklus Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <button
            onClick={() => toggleSection('market-cycle')}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-4 text-left flex items-center justify-between shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center">
              <FaChartLine className="mr-3 text-lg" />
              <div>
                <h3 className="font-semibold text-lg">Markt-Zyklus</h3>
                <p className="text-green-200 text-sm">4 zusätzliche Schritte</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expandedSection === 'market-cycle' ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown />
            </motion.div>
          </button>

          <AnimatePresence>
            {expandedSection === 'market-cycle' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-4"
              >
                {marketSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
                  >
                    <div className="flex items-start mb-2">
                      <div className="flex items-center mr-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-sm font-bold mr-2">
                          {step.id}
                        </div>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{step.title}</h4>
                        <p className="text-gray-300 text-sm mt-1">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="ml-11 space-y-1">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-400">
                          <FaCheck className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {index < marketSteps.length - 1 && (
                      <div className="flex justify-center mt-3">
                        <FaArrowRight className="text-gray-500" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Self-Reinforcing Cycle Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-4 border border-purple-500/30 mb-8"
        >
          <h3 className="font-semibold text-lg mb-3 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Selbstverstärkender Kreislauf
            </span>
          </h3>
          
          <div className="text-center space-y-2 text-sm">
            <div className="flex items-center justify-center">
              <span className="text-blue-300">Mehr Fans</span>
              <FaArrowRight className="mx-2 text-gray-400" />
              <span className="text-green-300">Höhere D.FAITH Nachfrage</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-green-300">Preissteigerung</span>
              <FaArrowRight className="mx-2 text-gray-400" />
              <span className="text-yellow-300">Attraktiveres D.INVEST</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-yellow-300">Mehr Kapital</span>
              <FaArrowRight className="mx-2 text-gray-400" />
              <span className="text-purple-300">Bessere Musikproduktion</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-purple-300">Mehr Fans</span>
              <FaRefresh className="mx-2 text-blue-400" />
              <span className="text-blue-300">Kreislauf</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default MobileStepByStepProcess