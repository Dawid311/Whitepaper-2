'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaInstagram, 
  FaRocket, 
  FaSpotify,
  FaQrcode,
  FaTrophy,
  FaExchangeAlt,
  FaShoppingCart,
  FaChartLine,
  FaCoins,
  FaUsers
} from 'react-icons/fa'

const SolutionSection = () => {
  const engagementFlow = [
    {
      step: 1,
      icon: <FaInstagram className="text-3xl text-pink-400" />,
      title: "Kommentar mit D.FAITH",
      description: "Fan kommentiert mit Keyword 'D.FAITH'",
      action: "Automatische Profilerstellung"
    },
    {
      step: 2,
      icon: <FaQrcode className="text-3xl text-blue-400" />,
      title: "Sofortige Verifizierung",
      description: "System prüft: Like, Share, Save, Kommentar",
      action: "Link zur Dawid Faith Wallet"
    },
    {
      step: 3,
      icon: <FaShoppingCart className="text-3xl text-purple-400" />,
      title: "Automatischer Token-Kauf",
      description: "Marketing Budget kauft Token basierend auf User Level",
      action: "Token bereit zum Claimen"
    },
    {
      step: 4,
      icon: <FaCoins className="text-3xl text-yellow-400" />,
      title: "Token Claim",
      description: "Belohnung abhängig vom User Level",
      action: "D.FAITH Token erhalten"
    },
    {
      step: 5,
      icon: <FaChartLine className="text-3xl text-green-400" />,
      title: "Token-Preis steigt",
      description: "Durch Verknappung steigt der Wert",
      action: "Motivation weiterzumachen"
    }
  ]

  return (
    <section id="solution" className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Die Social Media Revolution
          </h2>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto mb-8">
            Vom Problem zur Lösung: Wie D.FAITH das Engagement-Game für immer verändert
          </p>
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-500/20 max-w-4xl mx-auto">
            <p className="text-lg text-green-300 font-medium">
              🚀 <strong>Die Revolution:</strong> Fans werden für ihr Engagement belohnt und entwickeln echte Verbindungen zur Musik
            </p>
          </div>
        </motion.div>

        {/* Engagement Flow Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Der revolutionäre Engagement-Flow</h3>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              Vom ersten Kommentar bis zum exklusiven VIP-Zugang - so funktioniert die neue Ära des Fan-Engagements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {engagementFlow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-zinc-800/50 to-zinc-900/70 rounded-2xl p-6 border border-zinc-700/50 text-center hover:scale-105 transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center items-center mb-4 h-16">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-zinc-400 text-sm mb-3">{step.description}</p>
                <div className="border-t border-zinc-700 pt-3">
                  <p className="text-green-400 text-xs font-medium">→ {step.action}</p>
                </div>

                {/* Connection Arrow */}
                {index < engagementFlow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-purple-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ergebnisse des Engagement-Flows */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Was dieser Flow bewirkt</h3>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              Durch Levelsystem und Tokenisierung entstehen messbare Erfolge für das Projekt
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl p-6 border border-pink-500/20 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-pink-300 mb-2">Mehr Reichweite</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Levelsystem motiviert zu organischem Teilen und Interagieren
              </p>
              <div className="bg-pink-500/10 rounded-lg p-2 border border-pink-500/20">
                <p className="text-pink-300 text-xs font-bold">📈 +300% Social Media Reach</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-blue-300 mb-2">Mehr Konzerte</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Exklusive Live-Codes schaffen stärkere Fan-Bindung
              </p>
              <div className="bg-blue-500/10 rounded-lg p-2 border border-blue-500/20">
                <p className="text-blue-300 text-xs font-bold">🎤 +200% Konzertbesucher</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSpotify className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-green-300 mb-2">Mehr Streams</h4>
              <p className="text-zinc-400 text-sm mb-3">
                EXP für jeden Stream motiviert zu mehr Hörzeit
              </p>
              <div className="bg-green-500/10 rounded-lg p-2 border border-green-500/20">
                <p className="text-green-300 text-xs font-bold">🎵 +500% Spotify Streams</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-yellow-500/20 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-yellow-300 mb-2">Mehr Kapital</h4>
              <p className="text-zinc-400 text-sm mb-3">
                D.INVEST Token schaffen direkte Finanzierung
              </p>
              <div className="bg-yellow-500/10 rounded-lg p-2 border border-yellow-500/20">
                <p className="text-yellow-300 text-xs font-bold">💰 50.000€ Projektkapital</p>
              </div>
            </motion.div>
          </div>

          {/* Zusammenfassung der Erfolge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-emerald-500/20 max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <FaChartLine className="text-3xl text-emerald-400" />
              <h4 className="text-2xl font-bold text-emerald-300">Das Ergebnis: Nachhaltiges Wachstum</h4>
              <FaCoins className="text-3xl text-teal-400" />
            </div>
            <p className="text-zinc-400 text-lg mb-4">
              Der <strong className="text-white">Engagement-Flow mit Tokenisierung</strong> schafft eine Win-Win-Situation: 
              Fans werden belohnt, Künstler wachsen organisch
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center gap-1">
                <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                <span className="text-pink-300 text-sm font-medium">Social Reach</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-blue-300 text-sm font-medium">Live Events</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-green-300 text-sm font-medium">Music Streams</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-yellow-300 text-sm font-medium">Project Capital</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
