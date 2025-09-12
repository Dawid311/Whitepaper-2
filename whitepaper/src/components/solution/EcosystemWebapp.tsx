"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUsers, FaWallet, FaShoppingCart, FaMusic, FaInstagram, FaTiktok, FaFacebook, FaSpotify, FaCalendarAlt, FaCoins, FaDollarSign, FaChartLine } from 'react-icons/fa'
import Image from 'next/image'

const EcosystemWebapp = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  const features = [
    {
      id: 'social-profiles',
      title: 'Social Media Profile',
      description: 'Automatische Erkennung von Fan-Engagement',
      icon: <FaUsers className="text-2xl" />,
      color: 'from-slate-600 to-slate-500',
      bgColor: 'bg-slate-800/80',
      borderColor: 'border-slate-600',
      textColor: 'text-slate-300',
      details: {
        platforms: ['Instagram', 'TikTok', 'Facebook'],
        rewards: [
          { action: 'Like', exp: 10, description: 'Einfache Interaktion' },
          { action: 'Kommentar', exp: 10, description: 'Aktive Teilnahme' },
          { action: 'Share', exp: 10, description: 'Content Verbreitung' },
          { action: 'Story', exp: 20, description: 'Persönliche Empfehlung' },
          { action: 'Save', exp: 10, description: 'Content Merkung' }
        ],
        globalLeaderboard: true
      }
    },
    {
      id: 'dawid-wallet',
      title: 'Dawid Faith Wallet',
      description: 'Vollständige Token-Verwaltung und Trading',
      icon: <FaWallet className="text-2xl" />,
      color: 'from-indigo-600 to-indigo-500',
      bgColor: 'bg-indigo-900/80',
      borderColor: 'border-indigo-600',
      textColor: 'text-indigo-300',
      details: {
        functions: [
          'D.FAITH Token kaufen/verkaufen gegen ETH',
          'D.INVEST Token kaufen für €5 pro Token',
          'D.INVEST Staking mit 0,1 D.FAITH pro Woche',
          'Wallet-zu-Wallet Transfers',
          'Transaction History & Analytics'
        ],
        integration: 'Automatische Wallet-Erstellung beim ersten Claim'
      }
    },
    {
      id: 'dfaith-shop',
      title: 'D.FAITH Exklusiv Shop',
      description: 'Limitierte Musik-Produkte vor offiziellem Release',
      icon: <FaShoppingCart className="text-2xl" />,
      color: 'from-emerald-600 to-emerald-500',
      bgColor: 'bg-emerald-900/80',
      borderColor: 'border-emerald-600',
      textColor: 'text-emerald-300',
      details: {
        products: [
          'Neue Songs 48h vor Spotify Release',
          'Limitierte Merchandise (T-Shirts, Hoodies)',
          'Signierte CD/Vinyl Editionen',
          'Exklusive Konzert-Tickets',
          'Behind-the-Scenes Content'
        ],
        payment: 'Nur mit D.FAITH Token bezahlbar',
        benefits: '20-50% günstiger als normale Preise'
      }
    },
    {
      id: 'live-concerts',
      title: 'Live Konzerte',
      description: 'Konzert-Integration mit Live Codes',
      icon: <FaMusic className="text-2xl" />,
      color: 'from-amber-600 to-amber-500',
      bgColor: 'bg-amber-900/80',
      borderColor: 'border-amber-600',
      textColor: 'text-amber-300',
      details: {
        features: [
          'Liste aller kommenden Dawid Faith Konzerte',
          'Live Code Eingabe während Konzerten',
          '+150 EXP pro gültigem Live Code',
          'Exklusive Konzert-NFTs (zukünftig)',
          'Meet & Greet Verlosungen'
        ],
        impact: 'Höchste EXP-Belohnung im System'
      }
    },
    {
      id: 'streaming',
      title: 'Spotify Streaming',
      description: 'EXP sammeln durch Musik hören (in Entwicklung)',
      icon: <FaSpotify className="text-2xl" />,
      color: 'from-green-600 to-green-500',
      bgColor: 'bg-green-900/80',
      borderColor: 'border-green-600',
      textColor: 'text-green-300',
      details: {
        concept: [
          'Spotify API Integration',
          'Automatische Erkennung von Dawid Faith Streams',
          '+5 EXP pro komplettem Song',
          '+20 EXP für Playlist-Add',
          'Monatliche Streaming-Challenges'
        ],
        future: 'Grundlage für eigene Streaming-Plattform'
      }
    }
  ]

  const renderFeatureModal = () => {
    const feature = features.find(f => f.id === activeFeature)
    if (!feature) return null

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-3xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-slate-700/50">
          <button
            onClick={() => setActiveFeature(null)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl"
          >
            ✕
          </button>

          <div className="text-center mb-6">
            <div className={`inline-flex p-4 bg-gradient-to-r ${feature.color} rounded-full mb-4`}>
              {feature.icon}
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>

          <div className="space-y-6">
            {feature.id === 'social-profiles' && (
              <>
                <div className="bg-slate-800/40 rounded-lg p-4">
                  <h4 className="font-bold text-purple-400 mb-3">Unterstützte Plattformen</h4>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <FaInstagram className="text-purple-500" />
                      <span className="text-sm">Instagram</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaTiktok className="text-white" />
                      <span className="text-sm">TikTok</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaFacebook className="text-blue-500" />
                      <span className="text-sm">Facebook</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-800/40 rounded-lg p-4">
                  <h4 className="font-bold text-green-400 mb-3">EXP Rewards</h4>
                  <div className="space-y-2">
                    {feature.details.rewards?.map((reward, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-300">{reward.action}</span>
                        <span className="font-bold text-green-400">+{reward.exp} EXP</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {feature.id === 'dawid-wallet' && (
              <div className="bg-slate-800/40 rounded-lg p-4">
                <h4 className="font-bold text-blue-400 mb-3">Wallet Funktionen</h4>
                <div className="space-y-2">
                  {feature.details.functions?.map((func, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span className="text-gray-300 text-sm">{func}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {feature.id === 'dfaith-shop' && (
              <>
                <div className="bg-slate-800/40 rounded-lg p-4">
                  <h4 className="font-bold text-green-400 mb-3">Exklusive Produkte</h4>
                  <div className="space-y-2">
                    {feature.details.products?.map((product, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <span className="text-gray-300 text-sm">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                  <p className="text-green-300 font-semibold">💰 Nur mit D.FAITH Token bezahlbar</p>
                  <p className="text-gray-300 text-sm mt-2">{feature.details.benefits}</p>
                </div>
              </>
            )}

            {feature.id === 'live-concerts' && (
              <div className="bg-slate-800/40 rounded-lg p-4">
                <h4 className="font-bold text-orange-400 mb-3">Konzert Features</h4>
                <div className="space-y-2">
                  {feature.details.features?.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {feature.id === 'streaming' && (
              <div className="bg-slate-800/40 rounded-lg p-4">
                <h4 className="font-bold text-green-400 mb-3">Streaming Integration (Entwicklung)</h4>
                <div className="space-y-2">
                  {feature.details.concept?.map((concept, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <span className="text-gray-300 text-sm">{concept}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
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
          🌐 Die D.FAITH Ökosystem Webapp
        </h3>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
          Alle Features vereint in einer benutzerfreundlichen Web-Anwendung - 
          komplett live und funktionsfähig!
        </p>
        
        {/* Webapp Screenshot Mockup */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8 max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/dawid-faith-photo.jpg"
              alt="Dawid Faith"
              width={60}
              height={60}
              className="rounded-full border-2 border-purple-500"
            />
            <div className="text-left">
              <h4 className="text-xl font-bold text-white">Willkommen in der D.FAITH Webapp</h4>
              <p className="text-gray-400">Dein personalisiertes Fan-Dashboard</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gradient-to-r from-green-500/60 to-emerald-500/60 rounded-lg p-3 border border-green-500/50">
              <div className="flex items-center gap-2 mb-2">
                <FaCoins className="text-green-400" />
                <span className="font-bold">D.FAITH Balance</span>
              </div>
              <p className="text-2xl font-bold text-green-400">1,247 Token</p>
              <p className="text-gray-400">≈ 0.087 ETH</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/60 to-purple-500/60 rounded-lg p-3 border border-blue-500/50">
              <div className="flex items-center gap-2 mb-2">
                <FaChartLine className="text-blue-400" />
                <span className="font-bold">EXP Level</span>
              </div>
              <p className="text-2xl font-bold text-blue-400">Level 8</p>
              <p className="text-gray-400">2,340 / 3,000 EXP</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/60 to-pink-500/60 rounded-lg p-3 border border-purple-500/50">
              <div className="flex items-center gap-2 mb-2">
                <FaUsers className="text-purple-400" />
                <span className="font-bold">Leaderboard</span>
              </div>
              <p className="text-2xl font-bold text-purple-400">#23</p>
              <p className="text-gray-400">von 1,847 Fans</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`${feature.bgColor || 'bg-slate-800/50'} backdrop-blur-sm rounded-2xl p-6 border ${feature.borderColor || 'border-slate-700'} hover:scale-105 hover:shadow-lg hover:shadow-${feature.color.split('-')[1]}-500/20 transition-all duration-300 cursor-pointer`}
            onClick={() => setActiveFeature(feature.id)}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 bg-gradient-to-r ${feature.color} rounded-full text-white shadow-lg`}>
                {feature.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                <p className={`text-sm ${feature.textColor || 'text-gray-400'}`}>{feature.description}</p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <button className={`text-sm font-semibold text-white bg-gradient-to-r ${feature.color} hover:scale-105 px-6 py-2 rounded-lg transition-all duration-300 shadow-md`}>
                Details anzeigen →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Integration Highlights */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-8 border border-blue-500/30"
      >
        <div className="text-center mb-8">
          <h4 className="text-3xl font-bold text-blue-400 mb-4">
            🔗 Nahtlose Integration
          </h4>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Alle Features arbeiten zusammen für maximalen Nutzen
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/40 rounded-lg p-6">
            <h5 className="font-bold text-green-400 mb-4 text-lg">🎯 Für Fans</h5>
            <ul className="space-y-2 text-gray-300">
              <li>• Automatische Profilerstellung beim ersten Kommentar</li>
              <li>• Cross-Platform EXP sammeln (Instagram, TikTok, Facebook)</li>
              <li>• Direkte Token-Claims in der integrierten Wallet</li>
              <li>• Exklusive Shop-Zugang mit gesammelten Token</li>
              <li>• Live-Konzert Integration mit Bonus EXP</li>
            </ul>
          </div>
          
          <div className="bg-slate-800/40 rounded-lg p-6">
            <h5 className="font-bold text-blue-400 mb-4 text-lg">🚀 Für Dawid Faith</h5>
            <ul className="space-y-2 text-gray-300">
              <li>• Automatisierte Fan-Belohnung ohne manuellen Aufwand</li>
              <li>• Realtime Analytics über Fan-Engagement</li>
              <li>• Direkter Produktverkauf über integrierten Shop</li>
              <li>• Kapitalbeschaffung durch D.INVEST Sales</li>
              <li>• Konzert-Promotion mit digitalem Ticketing</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Render Modal */}
      {activeFeature && renderFeatureModal()}
    </div>
  )
}

export default EcosystemWebapp
