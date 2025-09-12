"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaUsers, FaWallet, FaShoppingCart, FaMusic, FaInstagram, FaTiktok, FaFacebook, FaSpotify, FaCalendarAlt, FaCoins, FaDollarSign, FaChartLine } from 'react-icons/fa'
import Image from 'next/image'

const EcosystemWebapp = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  // Auto-scroll to modal when it opens
  useEffect(() => {
    if (activeFeature) {
      setTimeout(() => {
        const modalElement = document.querySelector('[data-modal="true"]')
        if (modalElement) {
          modalElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'center'
          })
        }
      }, 150)
    }
  }, [activeFeature])

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
          'Neue Songs sind früher erhältlich',
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
          'Exklusive Konzert-NFTs (zukünftig)'
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
          'Feature ist noch in Entwicklung',
          'EXP sammeln durch Musik hören geplant'
        ],
        future: 'Grundlage für eigene Streaming-Plattform'
      }
    }
  ]

  const renderFeatureModal = () => {
    const feature = features.find(f => f.id === activeFeature)
    if (!feature) return null

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm overflow-y-auto">
        <div 
          className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 backdrop-blur-xl rounded-3xl p-8 max-w-4xl w-full mx-4 my-8 border border-slate-600/50 shadow-2xl"
          data-modal="true"
        >
          <button
            onClick={() => setActiveFeature(null)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl hover:bg-slate-700/50 rounded-full p-2 transition-all duration-300"
          >
            ✕
          </button>

          <div className="text-center mb-8">
            <div className={`inline-flex p-4 bg-gradient-to-r ${feature.color} rounded-full mb-4 shadow-lg`}>
              {feature.icon}
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-300 text-lg">{feature.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {feature.id === 'social-profiles' && (
              <>
                <div className="bg-gradient-to-r from-purple-900/30 to-slate-800/50 rounded-xl p-6 border border-purple-500/30">
                  <h4 className="font-bold text-purple-400 mb-4 text-lg flex items-center gap-2">
                    🌐 Unterstützte Plattformen
                  </h4>
                  <div className="flex gap-6 justify-center">
                    <div className="flex flex-col items-center gap-2 p-3 bg-purple-500/20 rounded-lg">
                      <FaInstagram className="text-purple-500 text-2xl" />
                      <span className="text-sm font-medium">Instagram</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3 bg-slate-600/20 rounded-lg">
                      <FaTiktok className="text-white text-2xl" />
                      <span className="text-sm font-medium">TikTok</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3 bg-blue-500/20 rounded-lg">
                      <FaFacebook className="text-blue-500 text-2xl" />
                      <span className="text-sm font-medium">Facebook</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-900/30 to-slate-800/50 rounded-xl p-6 border border-green-500/30">
                  <h4 className="font-bold text-green-400 mb-4 text-lg flex items-center gap-2">
                    ⭐ EXP Rewards
                  </h4>
                  <div className="space-y-3">
                    {feature.details.rewards?.map((reward, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                        <span className="text-gray-300 font-medium">{reward.action}</span>
                        <span className="font-bold text-green-400 text-lg">+{reward.exp} EXP</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {feature.id === 'dawid-wallet' && (
              <div className="md:col-span-2">
                <div className="bg-gradient-to-r from-indigo-900/30 to-slate-800/50 rounded-xl p-6 border border-indigo-500/30">
                  <h4 className="font-bold text-blue-400 mb-4 text-lg flex items-center gap-2">
                    💼 Wallet Funktionen
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {feature.details.functions?.map((func, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-indigo-500/10 rounded-lg">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{func}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {feature.id === 'dfaith-shop' && (
              <>
                <div className="bg-gradient-to-r from-emerald-900/30 to-slate-800/50 rounded-xl p-6 border border-emerald-500/30">
                  <h4 className="font-bold text-green-400 mb-4 text-lg flex items-center gap-2">
                    🛒 Exklusive Produkte
                  </h4>
                  <div className="space-y-3">
                    {feature.details.products?.map((product, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-800/20 to-emerald-800/20 rounded-xl p-6 border border-green-500/40">
                  <div className="text-center">
                    <div className="text-3xl mb-3">💰</div>
                    <p className="text-green-300 font-bold text-lg mb-2">Nur mit D.FAITH Token bezahlbar</p>
                    <p className="text-gray-300">{feature.details.benefits}</p>
                  </div>
                </div>
              </>
            )}

            {feature.id === 'live-concerts' && (
              <div className="md:col-span-2">
                <div className="bg-gradient-to-r from-amber-900/30 to-slate-800/50 rounded-xl p-6 border border-amber-500/30">
                  <h4 className="font-bold text-orange-400 mb-4 text-lg flex items-center gap-2">
                    🎵 Konzert Features
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {feature.details.features?.map((concertFeature, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-amber-500/10 rounded-lg">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{concertFeature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {feature.id === 'streaming' && (
              <div className="md:col-span-2">
                <div className="bg-gradient-to-r from-green-900/30 to-slate-800/50 rounded-xl p-6 border border-green-500/30">
                  <h4 className="font-bold text-green-400 mb-4 text-lg flex items-center gap-2">
                    🎧 Streaming Integration
                  </h4>
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🚧</div>
                    <h5 className="text-xl font-bold text-green-400 mb-3">Feature in Entwicklung</h5>
                    <p className="text-gray-300 mb-4">EXP sammeln durch Musik hören wird implementiert</p>
                    <div className="bg-green-500/10 rounded-lg p-4 inline-block">
                      <p className="text-green-300 font-medium">{feature.details.future}</p>
                    </div>
                  </div>
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