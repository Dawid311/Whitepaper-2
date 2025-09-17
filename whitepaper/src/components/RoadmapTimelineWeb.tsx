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
import { roadmapTimelineWebTranslations } from './RoadmapTimelineWebTranslations';

interface RoadmapTimelineWebProps {
  language: 'de' | 'en' | 'pl';
}

// Desktop-optimierte Roadmap-Komponente, inspiriert von der mobilen Version, aber mit neuem Layout
const RoadmapTimelineWeb: React.FC<RoadmapTimelineWebProps> = ({ language }) => {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  const t = roadmapTimelineWebTranslations[language]; // Polnisch ist jetzt verfügbar

  const phases = [
    {
      id: 1,
      title: t.phases[0].title,
      period: "Q4 2025",
      status: "completed",
      progress: 100,
      statusIcon: <FaCheckCircle />,
      statusText: t.statusLabels.completed,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      description: t.phases[0].description,
      milestones: [
        { text: t.phases[0].milestones[0], completed: true, icon: <FaLightbulb /> },
        { text: t.phases[0].milestones[1], completed: true, icon: <FaCode /> },
        { text: t.phases[0].milestones[2], completed: true, icon: <FaShoppingCart /> },
        { text: t.phases[0].milestones[3], completed: true, icon: <FaRocket /> },
        { text: t.phases[0].milestones[4], completed: true, icon: <FaCog /> },
        { text: t.phases[0].milestones[5], completed: true, icon: <FaUsers /> },
        { text: t.phases[0].milestones[6], completed: true, icon: <FaCheckCircle /> }
      ]
    },
    {
      id: 2,
      title: t.phases[1].title,
      period: "Q1 2026",
      status: "active",
      progress: 70,
      statusIcon: <FaCog />,
      statusText: t.statusLabels.active,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      description: t.phases[1].description,
      milestones: [
        { text: t.phases[1].milestones[0], completed: true, icon: <FaGlobe /> },
        { text: t.phases[1].milestones[1], completed: true, icon: <FaUsers /> },
        { text: t.phases[1].milestones[2], completed: true, icon: <FaChartLine /> },
        { text: t.phases[1].milestones[3], completed: true, icon: <FaMusic /> },
        { text: t.phases[1].milestones[4], completed: false, icon: <FaRocket /> },
        { text: t.phases[1].milestones[5], completed: false, icon: <FaUsers /> }
      ]
    },
    {
      id: 3,
      title: t.phases[2].title,
      period: "Q2-Q3 2026",
      status: "planned",
      progress: 0,
      statusIcon: <FaClipboardList />,
      statusText: t.statusLabels.planned,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/30",
      description: t.phases[2].description,
      milestones: [
        { text: t.phases[2].milestones[0], completed: false, icon: <FaMusic /> },
        { text: t.phases[2].milestones[1], completed: false, icon: <FaUsers /> },
        { text: t.phases[2].milestones[2], completed: false, icon: <FaCrown /> }
      ]
    },
    {
      id: 4,
      title: t.phases[3].title,
      period: "Q4 2026 - Q1 2027",
      status: "future",
      progress: 0,
      statusIcon: <FaEye />,
      statusText: t.statusLabels.future,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      description: t.phases[3].description,
      milestones: [
        { text: t.phases[3].milestones[0], completed: false, icon: <FaExpand /> },
        { text: t.phases[3].milestones[1], completed: false, icon: <FaPlayCircle /> },
        { text: t.phases[3].milestones[2], completed: false, icon: <FaCog /> },
        { text: t.phases[3].milestones[3], completed: false, icon: <FaGlobe /> }
      ]
    }
  ];

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {t.title}
          </h2>
          <p className="text-zinc-300 text-xl max-w-2xl mx-auto">
            {t.subtitle}
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
                      <FaClipboardList /> {t.milestonesLabel}
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
                  {selectedPhase === phase.id ? t.hideDetails : t.showDetails}
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
