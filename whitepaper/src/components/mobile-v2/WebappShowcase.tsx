'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { 
  FaWallet, 
  FaCoins, 
  FaChartLine, 
  FaUsers, 
  FaMusic, 
  FaShoppingCart, 
  FaPlay,
  FaMobileAlt,
  FaExternalLinkAlt,
  FaExchangeAlt,
  FaGift,
  FaTicketAlt,
  FaSpotify,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaArrowRight,
  FaStar,
  FaLock,
  FaUnlock
} from 'react-icons/fa'

interface WebappShowcaseProps {
  // Props sind jetzt optional, da wir Live-Daten fetchen
  tokenPrices?: {
    dfaith: number
    dinvest: number
  }
  activeUsers?: number
}

const WebappShowcase: React.FC<WebappShowcaseProps> = ({ 
  tokenPrices: propTokenPrices,
  activeUsers: propActiveUsers
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [selectedFeature, setSelectedFeature] = useState('wallet')
  
  // Live data states
  const [activeUsers, setActiveUsers] = useState(propActiveUsers || 774)
  const [isLoading, setIsLoading] = useState(true)
  const [tokenPrices, setTokenPrices] = useState(propTokenPrices || {
    dfaith: 0.12,
    dinvest: 5.00
  })

  // Live data fetching
  useEffect(() => {
    const fetchLiveData = async () => {
      try {
        const [leaderboardResponse, pricesResponse] = await Promise.allSettled([
          fetch('/api/leaderboard').catch(() => fetch('https://leaderboard-pi-liard.vercel.app/api/leaderboard')),
          fetch('/api/token-prices')
        ])
        
        if (leaderboardResponse.status === 'fulfilled' && leaderboardResponse.value.ok) {
          const data = await leaderboardResponse.value.json()
          const usersCount = data.stats?.activeUsers || data.entries?.length || propActiveUsers || 774
          setActiveUsers(usersCount)
        }
        
        if (pricesResponse.status === 'fulfilled' && pricesResponse.value.ok) {
          const pricesData = await pricesResponse.value.json()
          const dfaithToken = pricesData.tokens?.dfaith
          
          setTokenPrices({
            dfaith: dfaithToken?.price_eur || propTokenPrices?.dfaith || 0.12,
            dinvest: 5.00
          })
        }
      } catch (error) {
        console.error('Failed to fetch live data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLiveData()
    const interval = setInterval(fetchLiveData, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [propActiveUsers, propTokenPrices])

  const features = [
    {
      id: 'wallet',
      title: 'Dawid Faith Wallet',
      icon: <FaWallet className="text-2xl" />,
      gradient: 'from-amber-500 to-yellow-500',
      description: 'Vollständiges Token-Management',
      details: [
        'D.FAITH Token kaufen/verkaufen gegen ETH',
        'D.INVEST Token kaufen für 5€ pro Token',
        'D.INVEST Staking mit 0,1 D.FAITH pro Woche',
        'Wallet-zu-Wallet Transfers',
        'Live Transaction History & Analytics'
      ]
    },
    {
      id: 'social',
      title: 'Social Media Profile',
      icon: <FaUsers className="text-2xl" />,
      gradient: 'from-pink-500 to-purple-500',
      description: 'Cross-Platform Fan-Engagement',
      details: [
        'Automatische Erkennung von Fan-Engagement',
        'Instagram, TikTok, Facebook Integration',
        'Globales Leaderboard-System',
        'Automatische Profilerstellung beim ersten Claim',
        'Level-System mit steigenden Rewards'
      ]
    },
    {
      id: 'shop',
      title: 'D.FAITH Exklusiv Shop',
      icon: <FaShoppingCart className="text-2xl" />,
      gradient: 'from-emerald-500 to-green-500',
      description: 'Exklusive Inhalte & Merchandise',
      details: [
        'Neue Songs früher erhältlich',
        'Limitierte Merchandise (T-Shirts, Hoodies)',
        'Signierte CD/Vinyl Editionen',
        'Exklusive Konzert-Tickets',
        'Nur mit D.FAITH Token bezahlbar (20-50% günstiger)'
      ]
    },
    {
      id: 'concerts',
      title: 'Live Konzerte',
      icon: <FaMusic className="text-2xl" />,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Konzert-Integration & Live Codes',
      details: [
        'Liste aller kommenden Dawid Faith Konzerte',
        'Live Code Eingabe während Konzerten',
        '+150 EXP pro gültigem Live Code (höchste Belohnung)',
        'Exklusive Konzert-NFTs (zukünftig geplant)'
      ]
    }
  ]

  const platforms = [
    { icon: <FaInstagram className="text-pink-500" />, name: 'Instagram', connected: true },
    { icon: <FaTiktok className="text-white" />, name: 'TikTok', connected: true },
    { icon: <FaFacebook className="text-blue-500" />, name: 'Facebook', connected: true },
    { icon: <FaSpotify className="text-green-500" />, name: 'Spotify', connected: false, coming: true }
  ]

  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center p-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
            <FaMobileAlt className="text-2xl text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4">
          D.FAITH Ökosystem Webapp
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Alle Features vereint in einer benutzerfreundlichen Web-Anwendung
        </p>
        
        {/* Live Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 backdrop-blur-xl bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-300 font-semibold">Komplett live und funktionsfähig!</span>
        </motion.div>
      </motion.div>

      {/* Platform Integration */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 mb-8"
      >
        <h3 className="text-lg font-bold text-white mb-4 text-center">
          Cross-Platform Integration
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {platforms.map((platform, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
              {platform.icon}
              <div className="flex-1">
                <div className="text-sm font-medium text-white">{platform.name}</div>
                <div className="text-xs text-gray-400">
                  {platform.connected ? (
                    <span className="text-green-400 flex items-center gap-1">
                      <FaUnlock className="text-xs" /> Verbunden
                    </span>
                  ) : platform.coming ? (
                    <span className="text-amber-400 flex items-center gap-1">
                      <FaLock className="text-xs" /> Bald verfügbar
                    </span>
                  ) : (
                    <span className="text-gray-500">Nicht verfügbar</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Feature Selection */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-6"
      >
        <h3 className="text-xl font-bold text-white mb-4 text-center">
          Hauptfeatures der Webapp
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature) => (
            <motion.button
              key={feature.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedFeature(feature.id)}
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                selectedFeature === feature.id
                  ? `bg-gradient-to-r ${feature.gradient} border-white/30 text-white`
                  : 'backdrop-blur-xl bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <div className="text-sm font-semibold mt-2">{feature.title}</div>
                <div className="text-xs mt-1 opacity-80">{feature.description}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Feature Details */}
      <motion.div
        key={selectedFeature}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 mb-8"
      >
        {(() => {
          const feature = features.find(f => f.id === selectedFeature)!
          return (
            <>
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 bg-gradient-to-r ${feature.gradient} rounded-xl`}>
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
              <div className="space-y-3">
                {feature.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <FaStar className="text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </>
          )
        })()}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30 text-center"
      >
        <h3 className="text-xl font-bold text-purple-300 mb-3">
          Jetzt zur Webapp!
        </h3>
        <p className="text-gray-300 mb-4 text-sm">
          Erleben Sie alle Features live und werden Sie Teil der D.FAITH Community
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
        >
          <span>Webapp öffnen</span>
          <FaExternalLinkAlt className="text-sm" />
        </motion.button>
        
        <div className="flex justify-center items-center gap-2 mt-4 text-xs text-gray-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span>Base Chain • Live • Sicher</span>
        </div>
      </motion.div>
    </div>
  )
}

export default WebappShowcase