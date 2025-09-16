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
  FaUnlock,
  FaRocket
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
      {/* Header mit Icon, Headline, Slogan */}
      <div className="flex flex-col items-center gap-4 mb-8 mt-8">
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 via-pink-500 to-purple-500 shadow-lg">
          <FaRocket className="text-white text-3xl" />
        </div>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 mt-2">D.FAITH Webapp</h2>
        <p className="text-base text-zinc-200 font-medium">Alle Funktionen. Alle Plattformen. Deine Community.</p>
      </div>
      {/* Feature-Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-400/30 p-4 flex flex-col items-center text-center shadow">
          <FaWallet className="text-xl text-amber-400 mb-1" />
          <span className="font-bold text-amber-300 mb-0.5">Wallet</span>
          <span className="text-xs text-zinc-200 mb-0.5">Token-Management & Staking</span>
          <span className="text-xs text-zinc-400">Kaufen, verkaufen, verdienen</span>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/10 border border-pink-400/30 p-4 flex flex-col items-center text-center shadow">
          <FaUsers className="text-xl text-pink-400 mb-1" />
          <span className="font-bold text-pink-300 mb-0.5">Social Profiles</span>
          <span className="text-xs text-zinc-200 mb-0.5">Fan-Engagement & Leaderboard</span>
          <span className="text-xs text-zinc-400">Instagram, TikTok, Facebook</span>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 border border-emerald-400/30 p-4 flex flex-col items-center text-center shadow">
          <FaShoppingCart className="text-xl text-emerald-400 mb-1" />
          <span className="font-bold text-emerald-300 mb-0.5">Exklusiv Shop</span>
          <span className="text-xs text-zinc-200 mb-0.5">Merch, Tickets, Musik</span>
          <span className="text-xs text-zinc-400">Nur mit D.FAITH Token</span>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-400/30 p-4 flex flex-col items-center text-center shadow">
          <FaMusic className="text-xl text-blue-400 mb-1" />
          <span className="font-bold text-blue-300 mb-0.5">Live Konzerte</span>
          <span className="text-xs text-zinc-200 mb-0.5">Konzert-Integration & Codes</span>
          <span className="text-xs text-zinc-400">Belohnungen & NFT-Plan</span>
        </div>
      </div>
      {/* Plattform-Badges */}
      <div className="flex flex-wrap gap-2 justify-center items-center mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-semibold"><FaInstagram /> Instagram</span>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 text-white text-xs font-semibold"><FaTiktok /> TikTok</span>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold"><FaFacebook /> Facebook</span>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-semibold"><FaSpotify /> Spotify</span>
      </div>
      {/* Call-to-Action */}
      <div className="w-full flex justify-center mt-2 mb-4">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform text-base flex items-center gap-2 animate-pulse">
          Webapp entdecken <FaArrowRight className="text-base" />
        </button>
      </div>
    </div>
  )
}

export default WebappShowcase