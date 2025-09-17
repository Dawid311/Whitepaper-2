"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "react-icons/fa";

interface RoadmapTimelineWebProps {
  language: 'de' | 'en' | 'pl';
}

// Desktop-optimierte Roadmap-Komponente, inspiriert von der mobilen Version, aber mit neuem Layout
const RoadmapTimelineWeb: React.FC<RoadmapTimelineWebProps> = ({ language }) => {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

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
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      description:
        "Vollständig funktionsfähige technische Infrastruktur mit allen Core-Features implementiert und live auf Base Chain.",
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
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      description:
        "Mit der vollständigen technischen Infrastruktur konzentrieren wir uns auf Community-Wachstum und Marketing-Expansion.",
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
      bgColor: "from-orange-500/10 to-red-500/10",
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
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      description: "Transformation zu einer umfassenden Creator Economy Platform.",
      milestones: [
        { text: "Multi-Artist Platform", completed: false, icon: <FaExpand /> },
        { text: "Eigene Streaming-Platform (Beta)", completed: false, icon: <FaPlayCircle /> },
        { text: "Advanced Governance Features", completed: false, icon: <FaCog /> },
        { text: "Internationale Expansion", completed: false, icon: <FaGlobe /> }
      ]
    }
  ];

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Strategische Roadmap
          </h2>
          <p className="text-zinc-300 text-xl max-w-2xl mx-auto">
            Die wichtigsten Meilensteine und Visionen für das D.FAITH Ökosystem – transparent, ambitioniert und community-driven.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 shadow-xl border-2 ${phase.borderColor} bg-gradient-to-br ${phase.bgColor} hover:scale-[1.025] transition-transform cursor-pointer`}
              onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                  {phase.statusIcon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                  <p className="text-zinc-400 text-sm">{phase.period}</p>
                </div>
              </div>
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mr-2 ${
                  phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                  phase.status === 'active' ? 'bg-blue-500/20 text-blue-400' :
                  phase.status === 'planned' ? 'bg-orange-500/20 text-orange-400' : 'bg-purple-500/20 text-purple-400'
                }`}>
                  {phase.statusText}
                </span>
                <span className="ml-2 text-xs text-zinc-400 font-mono">{phase.progress}%</span>
              </div>
              <p className="text-zinc-200 text-base mb-4 min-h-[48px]">{phase.description}</p>
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
              <div className="flex items-center justify-end mt-4 text-gray-400 text-xs">
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
      </div>
    </section>
  );
};

export default RoadmapTimelineWeb;
