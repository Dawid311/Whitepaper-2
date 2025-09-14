'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaCheckCircle,
  FaCog,
  FaClipboardList,
  FaEye,
  FaRocket,
  FaCode,
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaMusic,
  FaShoppingCart,
  FaCalendarAlt,
  FaArrowRight,
  FaPlayCircle,
  FaLightbulb,
  FaCrown,
  FaExpand
} from 'react-icons/fa'

const RoadmapTimelineV2: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null)

  const phases = [
    {
      id: 1,
      title: "Foundation",
      period: "Q4 2025",
      status: "completed",
      progress: 100,
      statusIcon: <FaCheckCircle />,
      statusText: "✅ ABGESCHLOSSEN",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      description: "Vollständig funktionsfähige technische Infrastruktur mit allen Core-Features implementiert und live auf Base Chain.",
      milestones: [
        { text: "Konzeptentwicklung und Whitepaper", completed: true, icon: <FaLightbulb /> },
        { text: "Smart Contract Entwicklung und Deployment", completed: true, icon: <FaCode /> },
        { text: "Vollständige Dawid Faith Wallet Implementation", completed: true, icon: <FaShoppingCart /> },
        { text: "D.INVEST und D.FAITH Token Launch auf Base Chain", completed: true, icon: <FaRocket /> },
        { text: "Advanced Staking System mit 6 Reward-Stufen", completed: true, icon: <FaCog /> },
        { text: "Social Media Integration (Proprietary APIs)", completed: true, icon: <FaUsers /> },
        { text: "Live Testing und Security Audits", completed: true, icon: <FaCheckCircle /> }
      ]
    },
    {
      id: 2,
      title: "Community Building",
      period: "Q1 2026", 
      status: "active",
      progress: 70,
      statusIcon: <FaCog />,
      statusText: "🔄 IN BEARBEITUNG",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20", 
      borderColor: "border-blue-500/30",
      description: "Mit der vollständigen technischen Infrastruktur konzentrieren wir uns auf Community-Wachstum und Marketing-Expansion.",
      milestones: [
        { text: "Live Webapp mit allen Features", completed: true, icon: <FaGlobe /> },
        { text: "Instagram/TikTok Fan-Engagement System", completed: true, icon: <FaUsers /> },
        { text: "EXP-System und Real-time Leaderboards", completed: true, icon: <FaChartLine /> },
        { text: "Live-Event-Integration bei Konzerten", completed: true, icon: <FaMusic /> },
        { text: "Erste groß angelegte Marketing-Kampagne", completed: false, icon: <FaRocket /> },
        { text: "Community-Wachstum von 774 auf 5.000+ Follower", completed: false, icon: <FaUsers /> }
      ]
    },
    {
      id: 3,
      title: "Expansion",
      period: "Q2-Q3 2026",
      status: "planned",
      progress: 0,
      statusIcon: <FaClipboardList />,
      statusText: "📋 GEPLANT",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30", 
      description: "Ausbau der Plattform-Features und erste internationale Expansion.",
      milestones: [
        { text: "Spotify API Integration für Stream-Rewards", completed: false, icon: <FaMusic /> },
        { text: "Partnerships mit anderen Künstlern", completed: false, icon: <FaUsers /> },
        { text: "NFT-Integration (Pilotprojekt)", completed: false, icon: <FaCrown /> }
      ]
    },
    {
      id: 4,
      title: "Ecosystem",
      period: "Q4 2026 - Q1 2027",
      status: "future",
      progress: 0,
      statusIcon: <FaEye />,
      statusText: "🔮 GEPLANT",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      description: "Transformation zu einer umfassenden Creator Economy Platform.",
      milestones: [
        { text: "Multi-Artist Platform", completed: false, icon: <FaExpand /> },
        { text: "Eigene Streaming-Platform (Beta)", completed: false, icon: <FaPlayCircle /> },
        { text: "Advanced Governance Features", completed: false, icon: <FaCog /> },
        { text: "Internationale Expansion", completed: false, icon: <FaGlobe /> }
      ]
    }
  ]

  const currentFocus = {
    title: "Aktueller Fokus: Community Building",
    priorities: [
      { text: "Große Kampagne startet", icon: <FaRocket /> },
      { text: "Budget fließt in Fan-Belohnungen", icon: <FaUsers /> },
      { text: "Viral-Marketing durch Token-Incentives", icon: <FaChartLine /> }
    ]
  }

  const flexibility = [
    { text: "Quarterly Reviews: Anpassung basierend auf Community-Feedback", icon: <FaCalendarAlt /> },
    { text: "Market-Responsive: Schnelle Reaktion auf Markttrends", icon: <FaChartLine /> },
    { text: "Community-Driven: Fan-Input fließt in Prioritätensetzung ein", icon: <FaUsers /> }
  ]

  return (
    <div ref={ref} className="min-h-screen p-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
          Strategische Roadmap
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Entwicklungsplan des D.FAITH Ökosystems mit klaren Meilensteinen
        </p>
        
        {/* Timeline Overview */}
        <div className="flex justify-center mb-8">
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/20">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-green-400">Abgeschlossen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-400">Aktiv</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full" />
                <span className="text-orange-400">Geplant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full" />
                <span className="text-purple-400">Zukunft</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timeline Phases */}
      <div className="space-y-6 mb-10">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
            className={`backdrop-blur-xl bg-gradient-to-r ${phase.bgColor} rounded-2xl p-6 border ${phase.borderColor} cursor-pointer transition-all duration-300 hover:scale-105`}
          >
            {/* Phase Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${phase.color} rounded-xl flex items-center justify-center text-white text-lg`}>
                  {phase.statusIcon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Phase {phase.id}: {phase.title}</h3>
                  <p className="text-gray-300 text-sm">{phase.period}</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className={`text-sm font-semibold mb-2 ${
                  phase.status === 'completed' ? 'text-green-400' :
                  phase.status === 'active' ? 'text-blue-400' :
                  phase.status === 'planned' ? 'text-orange-400' : 'text-purple-400'
                }`}>
                  {phase.statusText}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${phase.progress}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      className={`h-2 bg-gradient-to-r ${phase.color} rounded-full`}
                    />
                  </div>
                  <span className="text-white text-sm font-bold">{phase.progress}%</span>
                </div>
              </div>
            </div>

            {/* Progress Description */}
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {phase.description}
            </p>

            {/* Milestones */}
            <AnimatePresence>
              {selectedPhase === phase.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-white/10 pt-4 mt-4"
                >
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <FaClipboardList /> Meilensteine:
                  </h4>
                  <div className="space-y-2">
                    {phase.milestones.map((milestone, milestoneIndex) => (
                      <motion.div
                        key={milestoneIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: milestoneIndex * 0.1 }}
                        className={`flex items-center gap-3 p-3 rounded-lg ${
                          milestone.completed 
                            ? 'bg-green-500/20 border border-green-500/30' 
                            : 'bg-white/5 border border-white/10'
                        }`}
                      >
                        <div className={`text-lg ${
                          milestone.completed ? 'text-green-400' : 'text-gray-400'
                        }`}>
                          {milestone.completed ? <FaCheckCircle /> : milestone.icon}
                        </div>
                        <span className={`text-sm ${
                          milestone.completed ? 'text-green-300' : 'text-gray-300'
                        }`}>
                          {milestone.text}
                        </span>
                        {milestone.completed && (
                          <div className="ml-auto text-green-400">✅</div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Click indicator */}
            <div className="flex items-center justify-center mt-4 text-gray-400 text-xs">
              <FaArrowRight className={`transform transition-transform duration-300 ${
                selectedPhase === phase.id ? 'rotate-90' : ''
              }`} />
              <span className="ml-2">
                {selectedPhase === phase.id ? 'Details ausblenden' : 'Details anzeigen'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Current Focus */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30 mb-8"
      >
        <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
          <FaRocket /> {currentFocus.title}
        </h3>
        <div className="space-y-3">
          {currentFocus.priorities.map((priority, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="flex items-center gap-3 bg-white/5 rounded-lg p-3"
            >
              <div className="text-blue-400">{priority.icon}</div>
              <span className="text-gray-300">{priority.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Roadmap Flexibility */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30 mb-8"
      >
        <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
          <FaCog /> Entwicklungsprinzipien
        </h3>
        <div className="space-y-3">
          {flexibility.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
              className="flex items-center gap-3 bg-white/5 rounded-lg p-3"
            >
              <div className="text-purple-400">{item.icon}</div>
              <span className="text-gray-300 text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Long-term Vision */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="backdrop-blur-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl p-6 border border-amber-500/30"
      >
        <div className="text-center">
          <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center justify-center gap-2">
            <FaLightbulb /> Langfristige Vision
          </h3>
          <p className="text-gray-300 leading-relaxed italic">
            &ldquo;Eine revolutionäre Creator Economy Platform, die das Verhältnis zwischen Künstlern, 
            Fans und Investoren fundamental verändert und nachhaltiges Wachstum für alle Beteiligten ermöglicht.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500" />
            <span className="text-amber-400 font-semibold text-sm">Das ultimative Ziel</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default RoadmapTimelineV2