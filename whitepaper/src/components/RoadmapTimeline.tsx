'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaClock, FaRocket, FaUsers, FaGlobe, FaMusic } from 'react-icons/fa'

const RoadmapTimeline = () => {
  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      period: 'Q4 2025',
      status: 'completed',
      progress: 100,
      color: 'from-green-400 to-emerald-500',
      icon: <FaCheckCircle className="text-2xl" />,
      items: [
        { task: 'Konzeptentwicklung und Whitepaper', completed: true },
        { task: 'Smart Contract Entwicklung und Deployment', completed: true },
        { task: 'Vollständige Dawid Faith Wallet Implementation', completed: true },
        { task: 'D.INVEST und D.FAITH Token Launch auf Base Chain', completed: true },
        { task: 'Advanced Staking System mit 6 Reward-Stufen', completed: true },
        { task: 'Social Media Integration (Proprietary APIs)', completed: true },
        { task: 'Live Testing und Security Audits', completed: true }
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Community Building',
      period: 'Q1 2026',
      status: 'in-progress',
      progress: 70,
      color: 'from-blue-400 to-cyan-500',
      icon: <FaUsers className="text-2xl" />,
      items: [
        { task: 'Live Webapp mit allen Features', completed: true },
        { task: 'Instagram/TikTok Fan-Engagement System', completed: true },
        { task: 'EXP-System und Real-time Leaderboards', completed: true },
        { task: 'Erste groß angelegte Marketing-Kampagne', completed: false },
        { task: 'Live-Event-Integration bei Konzerten', completed: false },
        { task: 'Community-Wachstum von 774 auf 5.000+ Follower', completed: false }
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Expansion',
      period: 'Q2-Q3 2026',
      status: 'planned',
      progress: 0,
      color: 'from-purple-400 to-violet-500',
      icon: <FaRocket className="text-2xl" />,
      items: [
        { task: 'Spotify API Integration für Stream-Rewards', completed: false },
        { task: 'Mobile App (iOS/Android) Development', completed: false },
        { task: 'Advanced Analytics Dashboard', completed: false },
        { task: 'Partnerships mit anderen Künstlern', completed: false },
        { task: 'NFT-Integration (Pilotprojekt)', completed: false },
        { task: 'Internationale Marketing-Expansion', completed: false }
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Ecosystem',
      period: 'Q4 2026 - Q1 2027',
      status: 'planned',
      progress: 0,
      color: 'from-orange-400 to-amber-500',
      icon: <FaGlobe className="text-2xl" />,
      items: [
        { task: 'Multi-Artist Platform', completed: false },
        { task: 'Eigene Streaming-Platform (Beta)', completed: false },
        { task: 'Advanced Governance Features', completed: false },
        { task: 'Cross-Chain-Integration', completed: false },
        { task: 'Internationale Expansion', completed: false }
      ]
    },
    {
      phase: 'Phase 5',
      title: 'Metaverse Integration',
      period: '2027+',
      status: 'future',
      progress: 0,
      color: 'from-pink-400 to-rose-500',
      icon: <FaMusic className="text-2xl" />,
      items: [
        { task: 'VR-Konzert-Integration', completed: false },
        { task: 'Metaverse-Avatar-System', completed: false },
        { task: 'Virtual Merchandise', completed: false },
        { task: 'AI-Content-Generation', completed: false },
        { task: 'Global Creator Economy Platform', completed: false }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 border-green-400'
      case 'in-progress': return 'text-blue-400 border-blue-400'
      case 'planned': return 'text-purple-400 border-purple-400'
      case 'future': return 'text-pink-400 border-pink-400'
      default: return 'text-zinc-400 border-zinc-400'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Abgeschlossen'
      case 'in-progress': return 'In Bearbeitung'
      case 'planned': return 'Geplant'
      case 'future': return 'Zukunft'
      default: return 'Unbekannt'
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Roadmap
        </h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          Strategische Entwicklung des D.FAITH Ökosystems über die nächsten Jahre
        </p>
      </motion.div>

      <div className="space-y-8">
        {roadmapPhases.map((phase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline connector */}
            {index < roadmapPhases.length - 1 && (
              <div className="absolute left-6 md:left-1/2 top-24 w-0.5 h-16 bg-gradient-to-b from-zinc-600 to-transparent transform md:-translate-x-1/2 z-0" />
            )}

            <div className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Phase Info */}
              <div className={`${index % 2 === 1 ? 'md:order-2 md:text-right' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${phase.color} text-white relative z-10`}>
                    {phase.icon}
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400">{phase.period}</div>
                    <h3 className="text-2xl font-bold text-white">{phase.phase}: {phase.title}</h3>
                  </div>
                </div>

                {/* Status Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium mb-4 ${getStatusColor(phase.status)}`}>
                  {phase.status === 'completed' && <FaCheckCircle className="text-xs" />}
                  {phase.status === 'in-progress' && <FaClock className="text-xs" />}
                  {phase.status === 'planned' && <FaRocket className="text-xs" />}
                  {phase.status === 'future' && <FaMusic className="text-xs" />}
                  {getStatusLabel(phase.status)}
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-400">Fortschritt</span>
                    <span className="text-sm font-bold text-white">{phase.progress}%</span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${phase.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className={`h-2 rounded-full bg-gradient-to-r ${phase.color}`}
                    />
                  </div>
                </div>
              </div>

              {/* Tasks List */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-6 border border-zinc-700">
                  <h4 className="text-lg font-bold text-white mb-4">Meilensteine</h4>
                  <div className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          item.completed 
                            ? 'bg-green-500 text-white' 
                            : 'bg-zinc-600 text-zinc-400'
                        }`}>
                          {item.completed ? (
                            <FaCheckCircle className="text-xs" />
                          ) : (
                            <div className="w-2 h-2 bg-current rounded-full" />
                          )}
                        </div>
                        <span className={`text-sm ${
                          item.completed ? 'text-zinc-300' : 'text-zinc-400'
                        }`}>
                          {item.task}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Current Focus */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30"
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Aktueller Fokus: Community Building</h3>
          <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
            Mit der vollständigen technischen Infrastruktur im Hintergrund konzentrieren wir uns jetzt auf das Wachstum 
            der Community und die erste große Marketing-Kampagne.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-400 mb-2">774 → 5K</div>
              <div className="text-sm text-zinc-400">Instagram Follower Ziel</div>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-green-400 mb-2">Live Events</div>
              <div className="text-sm text-zinc-400">Konzert-Integration geplant</div>
            </div>
            <div className="bg-zinc-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-400 mb-2">Marketing</div>
              <div className="text-sm text-zinc-400">Große Kampagne startet</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default RoadmapTimeline
