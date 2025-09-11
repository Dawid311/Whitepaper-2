"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaChartLine, FaCoins, FaLock, FaUsers, FaRocket, FaCalculator, FaDollarSign, FaTrophy } from 'react-icons/fa'

const ValueCreationMechanism = () => {
  const [activeExample, setActiveExample] = useState(0)

  const examples = [
    {
      title: "Erster Beitrag - Start des Ökosystems",
      budget: 1500,
      engagement: 100,
      tokensDistributed: 500,
      priceIncrease: 15,
      description: "Marketing Budget wird in D.FAITH Token investiert"
    },
    {
      title: "Nach 5 Beiträgen - Momentum baut sich auf",
      budget: 1500,
      engagement: 350,
      tokensDistributed: 1750,
      priceIncrease: 95,
      description: "Fans merken den Wert, mehr Engagement entsteht"
    },
    {
      title: "Nach 10 Beiträgen - Exponentielles Wachstum",
      budget: 1500,
      engagement: 800,
      tokensDistributed: 4000,
      priceIncrease: 300,
      description: "D.INVEST wird attraktiv, erste Investoren steigen ein"
    }
  ]

  const mechanisms = [
    {
      title: "Geringe Reichweite → Token-Käufe",
      description: "Marketing Budget kauft D.FAITH statt Werbung",
      icon: <FaCoins className="text-2xl text-white" />,
      effect: "Sofortiger Preisanstieg statt verlorenes Geld",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Teure Werbung → Smart Verknappung",
      description: "50% aller Token permanent gesperrt",
      icon: <FaLock className="text-2xl text-white" />,
      effect: "Fans verdienen, statt Werbung zu ignorieren",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Fehlendes Kapital → Halving-System",
      description: "Exponentiell steigende Token-Preise",
      icon: <FaChartLine className="text-2xl text-white" />,
      effect: "D.INVEST wird für Investoren attraktiv",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Schwaches Engagement → Fan-Belohnungen",
      description: "Fans erhalten echte D.FAITH Token",
      icon: <FaDollarSign className="text-2xl text-white" />,
      effect: "Fans werden zu aktiven Promotern",
      color: "from-purple-500 to-pink-500"
    }
  ]

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
        <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent mb-6">
          💰 Wertsteigerungs-Mechanismus
        </h3>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Wie jeder Beitrag automatisch den Token-Wert steigert und das System sich selbst verstärkt
        </p>
      </motion.div>

      {/* Mechanismen Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        {mechanisms.map((mechanism, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-br ${mechanism.color}/40 rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300`}
          >
            <div className="text-center">
              <div className={`inline-flex p-4 bg-gradient-to-r ${mechanism.color} rounded-full mb-4 text-white`}>
                {mechanism.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{mechanism.title}</h4>
              <p className="text-sm text-gray-300 mb-4">{mechanism.description}</p>
              <div className="bg-slate-800/40 rounded-lg p-3">
                <p className="text-xs font-semibold text-green-400">💡 {mechanism.effect}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Praktisches Beispiel */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 mb-12"
      >
        <div className="text-center mb-8">
          <h4 className="text-3xl font-bold text-white mb-4">📊 Praxis-Beispiel: Wertsteigerung über Zeit</h4>
          <p className="text-gray-300">Siehe wie sich jeder Beitrag auf den Token-Preis auswirkt</p>
        </div>

        {/* Example Selector */}
        <div className="flex justify-center gap-4 mb-8">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => setActiveExample(index)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeExample === index 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {example.title.split(' - ')[0]}
            </button>
          ))}
        </div>

        {/* Active Example */}
        <div className="bg-slate-900/50 rounded-2xl p-6">
          <h5 className="text-2xl font-bold text-blue-400 mb-4">{examples[activeExample].title}</h5>
          <p className="text-gray-300 mb-6">{examples[activeExample].description}</p>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 rounded-lg p-4 border border-blue-500/30">
              <div className="flex items-center gap-2 mb-2">
                <FaDollarSign className="text-blue-400" />
                <span className="font-bold text-blue-400">Marketing Budget</span>
              </div>
              <p className="text-2xl font-bold text-white">{examples[activeExample].budget}€</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-900/40 to-green-800/40 rounded-lg p-4 border border-green-500/30">
              <div className="flex items-center gap-2 mb-2">
                <FaUsers className="text-green-400" />
                <span className="font-bold text-green-400">Fan Engagement</span>
              </div>
              <p className="text-2xl font-bold text-white">{examples[activeExample].engagement}</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/40 rounded-lg p-4 border border-purple-500/30">
              <div className="flex items-center gap-2 mb-2">
                <FaCoins className="text-purple-400" />
                <span className="font-bold text-purple-400">Token verteilt</span>
              </div>
              <p className="text-2xl font-bold text-white">{examples[activeExample].tokensDistributed}</p>
            </div>
            
            <div className="bg-gradient-to-r from-red-900/40 to-red-800/40 rounded-lg p-4 border border-red-500/30">
              <div className="flex items-center gap-2 mb-2">
                <FaChartLine className="text-red-400" />
                <span className="font-bold text-red-400">Preissteigerung</span>
              </div>
              <p className="text-2xl font-bold text-white">+{examples[activeExample].priceIncrease}%</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ROI Rechnung für D.INVEST */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-8 border border-green-500/30 mb-12"
      >
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white">
              <FaCalculator className="text-3xl" />
            </div>
          </div>
          <h4 className="text-3xl font-bold text-green-400 mb-4">
            🎯 D.INVEST Rentabilitäts-Rechnung
          </h4>
          <p className="text-lg text-gray-300 mb-6">
            Warum D.INVEST bei steigenden D.FAITH Preisen extrem profitabel wird
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Initial Investment */}
          <div className="bg-slate-800/40 rounded-lg p-6">
            <h5 className="font-bold text-blue-400 mb-4 text-lg">📥 Investment Details</h5>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">D.INVEST Preis:</span>
                <span className="font-bold text-green-400">5€</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Staking Rate:</span>
                <span className="font-bold text-blue-400">0,1 D.FAITH/Woche</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">D.FAITH pro Jahr:</span>
                <span className="font-bold text-purple-400">5,2 Token</span>
              </div>
            </div>
          </div>

          {/* ROI bei verschiedenen D.FAITH Preisen */}
          <div className="bg-slate-800/40 rounded-lg p-6">
            <h5 className="font-bold text-green-400 mb-4 text-lg">💰 ROI bei D.FAITH Preisen</h5>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Bei 0,05€ (Start):</span>
                <span className="font-bold text-red-400">5,2% ROI</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Bei 0,20€ (+300%):</span>
                <span className="font-bold text-yellow-400">20,8% ROI</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Bei 0,50€ (+900%):</span>
                <span className="font-bold text-green-400">52% ROI</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Bei 1€ (+1900%):</span>
                <span className="font-bold text-green-400">104% ROI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-green-800/30 rounded-lg border border-green-500/30">
          <p className="text-green-300 font-semibold text-center">
            🚀 Bei nur 300% D.FAITH Preissteigerung wird D.INVEST bereits extrem profitabel!
          </p>
          <p className="text-gray-300 text-sm text-center mt-2">
            Das System ist so konzipiert, dass diese Preissteigerung durch kontinuierliche Verknappung automatisch eintritt.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default ValueCreationMechanism
