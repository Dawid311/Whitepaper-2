'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaRocket, 
  FaCoins, 
  FaUsers, 
  FaRoad,
  FaLightbulb,
  FaChartLine,
  FaShieldAlt
} from 'react-icons/fa'
import Image from 'next/image'

const MobileWhitepaper = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [tokenPrices, setTokenPrices] = useState({
    dfaith: 0,
    dinvest: 5.00
  })
  const [activeUsers, setActiveUsers] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch live data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pricesResponse, leaderboardResponse] = await Promise.allSettled([
          fetch('/api/token-prices'),
          fetch('/api/leaderboard').catch(() => fetch('https://leaderboard-pi-liard.vercel.app/api/leaderboard'))
        ])
        
        if (pricesResponse.status === 'fulfilled' && pricesResponse.value.ok) {
          const pricesData = await pricesResponse.value.json()
          if (pricesData.tokens?.dfaith) {
            setTokenPrices({
              dfaith: pricesData.tokens.dfaith.price_eur,
              dinvest: 5.00
            })
          }
        }
        
        if (leaderboardResponse.status === 'fulfilled' && leaderboardResponse.value.ok) {
          const leaderData = await leaderboardResponse.value.json()
          const usersCount = leaderData.stats?.activeUsers || leaderData.entries?.length || 8
          setActiveUsers(usersCount)
        }
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  const sections = [
    {
      id: 'overview',
      title: 'Projekt-Übersicht',
      icon: <FaRocket className="text-amber-400" />,
      content: (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-amber-400 mb-2">D.FAITH Ökosystem</h3>
            <p className="text-gray-300 text-sm">Revolutionäres Fan-Engagement durch Blockchain-Technologie</p>
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs mt-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Live auf Base Chain
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-zinc-800/50 rounded-lg p-3">
              <div className="text-lg font-bold text-amber-400">
                €{isLoading ? '...' : tokenPrices.dfaith.toFixed(2)}
              </div>
              <div className="text-xs text-zinc-400">D.FAITH Preis</div>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-3">
              <div className="text-lg font-bold text-blue-400">5,00€</div>
              <div className="text-xs text-zinc-400">D.INVEST Preis</div>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-3">
              <div className="text-lg font-bold text-green-400">100K</div>
              <div className="text-xs text-zinc-400">D.FAITH Supply</div>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-3">
              <div className="text-lg font-bold text-purple-400">
                {isLoading ? '...' : activeUsers}
              </div>
              <div className="text-xs text-zinc-400">Active Users</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'problem',
      title: 'Das Problem',
      icon: <FaLightbulb className="text-red-400" />,
      content: (
        <div className="space-y-4">
          <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
            <h4 className="font-bold text-red-400 mb-2">Dawid Faith:</h4>
            <p className="text-sm text-gray-300">
              "Als unabhängiger Künstler bekommt mein Content nicht die Reichweite, die er verdient. 
              Bezahlte Werbung ist teuer und das Kapital für Musikproduktion fehlt."
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-zinc-800/50 rounded-lg p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-white">Geringe Reichweite</span>
                <span className="text-xs text-red-400 font-bold">🔴 HOCH</span>
              </div>
              <p className="text-xs text-gray-400">Qualitätsvoller Content erreicht zu wenige Menschen</p>
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-white">Teure Werbung</span>
                <span className="text-xs text-red-400 font-bold">🔴 HOCH</span>
              </div>
              <p className="text-xs text-gray-400">Hohe Kosten ohne garantierte ROI</p>
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-white">Fehlendes Kapital</span>
                <span className="text-xs text-orange-400 font-bold">🟠 MITTEL</span>
              </div>
              <p className="text-xs text-gray-400">Limitierte Produktionsqualität</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-lg p-3 border border-red-500/30">
            <h4 className="text-sm font-bold text-red-400 mb-2">Der Teufelskreis:</h4>
            <p className="text-xs text-gray-300">
              Ohne Reichweite kein Engagement → Ohne Engagement keine Fans → Ohne Fans kein Einkommen → 
              Ohne Einkommen keine besseren Inhalte
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'solution',
      title: 'Die Lösung',
      icon: <FaLightbulb className="text-green-400" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-lg p-4 border border-green-500/30">
            <h4 className="font-bold text-green-400 mb-2">Die D.FAITH Revolution</h4>
            <p className="text-sm text-gray-300">
              Intelligentes Dual-Token-System, das den Teufelskreis durchbricht und eine Win-Win-Situation schafft.
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-amber-900/30 rounded-lg p-3 border border-amber-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Image src="/d-faith-logo.png" alt="D.FAITH" width={24} height={24} />
                <span className="font-bold text-amber-400">D.FAITH Token</span>
              </div>
              <p className="text-xs text-gray-300 mb-2">Fan-Belohnungstoken</p>
              <div className="space-y-1 text-xs text-gray-400">
                <div>• Like: 10 EXP → Token-Reward</div>
                <div>• Kommentar: 10 EXP → Token-Reward</div>
                <div>• Live-Konzert: 150 EXP → Hohe Belohnung</div>
              </div>
            </div>

            <div className="bg-blue-900/30 rounded-lg p-3 border border-blue-500/30">
              <div className="flex items-center gap-2 mb-2">
                <Image src="/d-invest-logo.png" alt="D.INVEST" width={24} height={24} />
                <span className="font-bold text-blue-400">D.INVEST Token</span>
              </div>
              <p className="text-xs text-gray-300 mb-2">Investment Token (5€ pro Token)</p>
              <div className="space-y-1 text-xs text-gray-400">
                <div>• Entsperrt 80.000 gesperrte D.FAITH</div>
                <div>• 0,1 D.FAITH pro Woche Staking</div>
                <div>• Kapitalbeschaffung für Musik</div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800/30 rounded-lg p-3">
            <h4 className="text-sm font-bold text-white mb-2">Die Kernidee:</h4>
            <p className="text-xs text-gray-300">
              Statt Geld für Werbung auszugeben, investiert Dawid direkt in Fan-Belohnungen. 
              Fans werden bezahlt für ihr Engagement = mehr Motivation = bessere Reichweite.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'tokenomics',
      title: 'Tokenomics',
      icon: <FaCoins className="text-purple-400" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-amber-900/30 rounded-lg p-3 border border-amber-500/30">
              <h4 className="font-bold text-amber-400 text-sm mb-1">D.FAITH</h4>
              <div className="text-xs text-gray-300 space-y-1">
                <div>Total: 100.000 Token</div>
                <div>Ziel: 1,50€</div>
                <div>Typ: Utility Token</div>
              </div>
            </div>
            <div className="bg-blue-900/30 rounded-lg p-3 border border-blue-500/30">
              <h4 className="font-bold text-blue-400 text-sm mb-1">D.INVEST</h4>
              <div className="text-xs text-gray-300 space-y-1">
                <div>Total: 10.000 Token</div>
                <div>Preis: 5,00€</div>
                <div>Typ: Investment Token</div>
              </div>
            </div>
          </div>

          <div className="bg-orange-900/30 rounded-lg p-3 border border-orange-500/30">
            <h4 className="font-bold text-orange-400 text-sm mb-2">Halving-System (6 Stufen)</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-300">Stufe 1 (Aktiv):</span>
                <span className="text-green-400 font-bold">10,00%/Woche</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Stufe 6 (Final):</span>
                <span className="text-red-400 font-bold">0,31%/Woche</span>
              </div>
              <div className="text-gray-400 text-xs">
                → 32x weniger Rewards = kontinuierliche Verknappung
              </div>
            </div>
          </div>

          <div className="bg-green-900/30 rounded-lg p-3 border border-green-500/30">
            <h4 className="font-bold text-green-400 text-sm mb-2">ROI-Beispiel (10 D.INVEST):</h4>
            <div className="space-y-1 text-xs text-gray-300">
              <div>Investment: 50€</div>
              <div>Bei D.FAITH 0,20€: <span className="text-green-400">20,8% ROI</span></div>
              <div>Bei D.FAITH 0,50€: <span className="text-green-400">52,0% ROI</span></div>
              <div>Bei D.FAITH 1,00€: <span className="text-green-400">104% ROI</span></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'tech',
      title: 'Technische Architektur',
      icon: <FaShieldAlt className="text-blue-400" />,
      content: (
        <div className="space-y-4">
          <div className="bg-green-900/30 rounded-lg p-3 border border-green-500/30">
            <h4 className="font-bold text-green-400 text-sm mb-2">Status: Vollständig Live ✅</h4>
            <p className="text-xs text-gray-300">
              Professionelle Blockchain-Infrastruktur mit proprietären APIs auf Base Chain deployiert.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm">Smart Contracts:</h4>
            <div className="bg-zinc-800/50 rounded-lg p-2">
              <div className="text-xs text-gray-300 space-y-1">
                <div className="font-bold text-amber-400">Staking Contract</div>
                <div className="font-mono text-xs text-blue-400 break-all">
                  0xe85b32a44b9eD3ecf8bd331FED46fbdAcDBc9940
                </div>
              </div>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-2">
              <div className="text-xs text-gray-300 space-y-1">
                <div className="font-bold text-amber-400">D.FAITH Token</div>
                <div className="font-mono text-xs text-blue-400 break-all">
                  0x69eFD833288605f320d77eB2aB99DDE62919BbC1
                </div>
              </div>
            </div>
            <div className="bg-zinc-800/50 rounded-lg p-2">
              <div className="text-xs text-gray-300 space-y-1">
                <div className="font-bold text-blue-400">D.INVEST Token</div>
                <div className="font-mono text-xs text-blue-400 break-all">
                  0x6F1fFd03106B27781E86b33Df5dBB734ac9DF4bb
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm">Tech-Stack:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-zinc-800/50 rounded-lg p-2">
                <div className="font-bold text-blue-400">Frontend</div>
                <div className="text-gray-400">Next.js, TypeScript</div>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-2">
                <div className="font-bold text-green-400">Blockchain</div>
                <div className="text-gray-400">Base Chain, Solidity</div>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-2">
                <div className="font-bold text-purple-400">APIs</div>
                <div className="text-gray-400">Proprietary Social</div>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-2">
                <div className="font-bold text-amber-400">Features</div>
                <div className="text-gray-400">Cross-Platform</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'roadmap',
      title: 'Roadmap',
      icon: <FaRoad className="text-cyan-400" />,
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="bg-green-900/30 rounded-lg p-3 border border-green-500/30">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-green-400 text-sm">Phase 1: Foundation</h4>
                <span className="text-xs text-green-400">✅ 100%</span>
              </div>
              <div className="text-xs text-gray-300 space-y-1">
                <div>• Smart Contracts entwickelt & deployed</div>
                <div>• D.FAITH & D.INVEST Token live</div>
                <div>• Staking System mit 6 Stufen</div>
                <div>• Social Media Integration</div>
              </div>
            </div>

            <div className="bg-blue-900/30 rounded-lg p-3 border border-blue-500/30">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-blue-400 text-sm">Phase 2: Community</h4>
                <span className="text-xs text-blue-400">🔄 70%</span>
              </div>
              <div className="text-xs text-gray-300 space-y-1">
                <div>• ✅ Live Webapp mit allen Features</div>
                <div>• ✅ Instagram/TikTok Integration</div>
                <div>• ✅ Live-Event Integration</div>
                <div>• 🔄 Marketing-Kampagne</div>
                <div>• 🔄 774 → 5K Follower Ziel</div>
              </div>
            </div>

            <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-500/30">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-purple-400 text-sm">Phase 3: Expansion</h4>
                <span className="text-xs text-purple-400">📋 Geplant</span>
              </div>
              <div className="text-xs text-gray-300 space-y-1">
                <div>• Spotify API Integration</div>
                <div>• Partnerships mit Künstlern</div>
                <div>• NFT-Integration (Pilot)</div>
                <div>• Analytics Dashboard</div>
              </div>
            </div>
          </div>

          <div className="bg-cyan-900/30 rounded-lg p-3 border border-cyan-500/30">
            <h4 className="font-bold text-cyan-400 text-sm mb-2">Aktueller Fokus:</h4>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center">
                <div className="font-bold text-white">774 → 5K</div>
                <div className="text-gray-400">Instagram</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-green-400">Live Events</div>
                <div className="text-gray-400">Konzerte</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-purple-400">Marketing</div>
                <div className="text-gray-400">Kampagne</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <Image
              src="/d-faith-logo.png"
              alt="D.FAITH Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-lg font-bold text-white">D.FAITH</h1>
              <p className="text-xs text-gray-400">Mobile Whitepaper</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl border border-zinc-700/50">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  {section.icon}
                  <span className="font-semibold text-white">{section.title}</span>
                </div>
                {expandedSection === section.id ? (
                  <FaChevronUp className="text-gray-400" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>
              
              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 border-t border-zinc-700/50">
                      {section.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}

        {/* Footer */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4 border border-blue-500/30 mt-8">
          <div className="text-center">
            <h3 className="font-bold text-white mb-2">Bereit für die Revolution?</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold py-2 px-4 rounded-lg text-sm">
                Fan werden
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-lg text-sm">
                Investieren
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center text-xs text-gray-500 pb-8">
          <p>D.FAITH Ökosystem - Live auf Base Chain</p>
          <p className="mt-1">© 2025 Dawid Faith</p>
        </div>
      </div>
    </div>
  )
}

export default MobileWhitepaper