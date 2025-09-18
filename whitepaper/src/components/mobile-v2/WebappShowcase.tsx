'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../../context/LanguageContext'
import { webappShowcaseTexts } from './WebappShowcaseTranslations'
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
  const { language } = useLanguage()
  const texts = webappShowcaseTexts[language]
  
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
      title: texts.features[0].title,
      icon: <FaWallet className="text-2xl" />,
      gradient: 'from-amber-500 to-yellow-500',
      description: texts.features[0].description,
      details: texts.features[0].details
    },
    {
      id: 'social',
      title: texts.features[1].title,
      icon: <FaUsers className="text-2xl" />,
      gradient: 'from-pink-500 to-purple-500',
      description: texts.features[1].description,
      details: texts.features[1].details
    },
    {
      id: 'shop',
      title: texts.features[2].title,
      icon: <FaShoppingCart className="text-2xl" />,
      gradient: 'from-emerald-500 to-green-500',
      description: texts.features[2].description,
      details: texts.features[2].details
    },
    {
      id: 'concerts',
      title: texts.features[3].title,
      icon: <FaMusic className="text-2xl" />,
      gradient: 'from-blue-500 to-cyan-500',
      description: texts.features[3].description,
      details: texts.features[3].details
    }
  ]

  const platforms = [
    { icon: <FaInstagram className="text-pink-500" />, name: texts.platforms[0].name, connected: true },
    { icon: <FaTiktok className="text-white" />, name: texts.platforms[1].name, connected: true },
    { icon: <FaFacebook className="text-blue-500" />, name: texts.platforms[2].name, connected: true },
    { icon: <FaSpotify className="text-green-500" />, name: texts.platforms[3].name, connected: false, coming: true }
  ]

  return (
    <div 
      ref={ref} 
      className="min-h-screen flex flex-col justify-center p-6 relative"
      style={{
        background: `
          linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(88, 28, 135, 0.85) 50%, rgba(15, 23, 42, 0.95) 100%),
          url('/dawid-faith-still.jpg')
        `,
        backgroundSize: '400px 400px, cover',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Overlay für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/70 to-slate-900/80 backdrop-blur-sm"></div>
      
      {/* Content Container */}
      <div className="relative z-10">{/* Header mit Icon, Headline, Slogan */}
      <div className="flex flex-col items-center gap-4 mb-8 mt-8">
        <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
          <Image 
            src="/dawid-faith-still.jpg" 
            alt="Dawid Faith" 
            width={64} 
            height={64} 
            className="w-full h-full object-cover" 
          />
        </div>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 mt-2">{texts.header.title}</h2>
        <p className="text-base text-zinc-200 font-medium">{texts.header.subtitle}</p>
      </div>
      {/* Feature-Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-400/30 p-4 flex flex-col items-center text-center shadow">
          <FaWallet className="text-xl text-amber-400 mb-1" />
          <span className="font-bold text-amber-300 mb-0.5">Wallet</span>
          <span className="text-xs text-zinc-200 mb-0.5">{texts.features[0].shortDesc}</span>
          <span className="text-xs text-zinc-400">{texts.features[0].briefDesc}</span>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/10 border border-pink-400/30 p-4 flex flex-col items-center text-center shadow">
          <FaUsers className="text-xl text-pink-400 mb-1" />
          <span className="font-bold text-pink-300 mb-0.5">Social Profiles</span>
          <span className="text-xs text-zinc-200 mb-0.5">{texts.features[1].shortDesc}</span>
          <span className="text-xs text-zinc-400">{texts.features[1].briefDesc}</span>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 border border-emerald-400/30 p-4 flex flex-col items-center text-center shadow">
          <FaShoppingCart className="text-xl text-emerald-400 mb-1" />
          <span className="font-bold text-emerald-300 mb-0.5">Exklusiv Shop</span>
          <span className="text-xs text-zinc-200 mb-0.5">{texts.features[2].shortDesc}</span>
          <span className="text-xs text-zinc-400">{texts.features[2].briefDesc}</span>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-400/30 p-4 flex flex-col items-center text-center shadow">
          <FaMusic className="text-xl text-blue-400 mb-1" />
          <span className="font-bold text-blue-300 mb-0.5">Live Konzerte</span>
          <span className="text-xs text-zinc-200 mb-0.5">{texts.features[3].shortDesc}</span>
          <span className="text-xs text-zinc-400">{texts.features[3].briefDesc}</span>
        </div>
      </div>
      {/* Plattform-Badges */}
      <div className="flex flex-wrap gap-2 justify-center items-center mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-semibold"><FaInstagram /> {texts.platforms[0].name}</span>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 text-white text-xs font-semibold"><FaTiktok /> {texts.platforms[1].name}</span>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold"><FaFacebook /> {texts.platforms[2].name}</span>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-semibold"><FaSpotify /> {texts.platforms[3].name}</span>
      </div>
      {/* Call-to-Action */}
      <div className="w-full flex justify-center mt-2 mb-4">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform text-base flex items-center gap-2 animate-pulse">
          {texts.callToAction.buttonText} <FaArrowRight className="text-base" />
        </button>
      </div>
      </div>
    </div>
  )
}

export default WebappShowcase