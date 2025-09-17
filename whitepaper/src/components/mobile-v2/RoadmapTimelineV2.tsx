'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../../context/LanguageContext'
import { roadmapTimelineTexts } from './RoadmapTimelineV2Translations'
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
  const { language } = useLanguage()
  const texts = roadmapTimelineTexts[language]

  const phases = [
    {
      id: 1,
      title: texts.phases[0].title,
      period: "Q4 2025",
      status: "completed",
      progress: 100,
      statusIcon: <FaCheckCircle />,
      statusText: texts.statusTexts.completed,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      description: texts.phases[0].description,
      milestones: [
        { text: texts.phases[0].milestones[0], completed: true, icon: <FaLightbulb /> },
        { text: texts.phases[0].milestones[1], completed: true, icon: <FaCode /> },
        { text: texts.phases[0].milestones[2], completed: true, icon: <FaShoppingCart /> },
        { text: texts.phases[0].milestones[3], completed: true, icon: <FaRocket /> },
        { text: texts.phases[0].milestones[4], completed: true, icon: <FaCog /> },
        { text: texts.phases[0].milestones[5], completed: true, icon: <FaUsers /> },
        { text: texts.phases[0].milestones[6], completed: true, icon: <FaCheckCircle /> }
      ]
    },
    {
      id: 2,
      title: texts.phases[1].title,
      period: "Q1 2026", 
      status: "active",
      progress: 70,
      statusIcon: <FaCog />,
      statusText: texts.statusTexts.active,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20", 
      borderColor: "border-blue-500/30",
      description: texts.phases[1].description,
      milestones: [
        { text: texts.phases[1].milestones[0], completed: true, icon: <FaGlobe /> },
        { text: texts.phases[1].milestones[1], completed: true, icon: <FaUsers /> },
        { text: texts.phases[1].milestones[2], completed: true, icon: <FaChartLine /> },
        { text: texts.phases[1].milestones[3], completed: true, icon: <FaMusic /> },
        { text: texts.phases[1].milestones[4], completed: false, icon: <FaRocket /> },
        { text: texts.phases[1].milestones[5], completed: false, icon: <FaUsers /> }
      ]
    },
    {
      id: 3,
      title: texts.phases[2].title,
      period: "Q2-Q3 2026",
      status: "planned",
      progress: 0,
      statusIcon: <FaClipboardList />,
      statusText: texts.statusTexts.planned,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30", 
      description: texts.phases[2].description,
      milestones: [
        { text: texts.phases[2].milestones[0], completed: false, icon: <FaMusic /> },
        { text: texts.phases[2].milestones[1], completed: false, icon: <FaUsers /> },
        { text: texts.phases[2].milestones[2], completed: false, icon: <FaCrown /> }
      ]
    },
    {
      id: 4,
      title: texts.phases[3].title,
      period: "Q4 2026 - Q1 2027",
      status: "future",
      progress: 0,
      statusIcon: <FaEye />,
      statusText: texts.statusTexts.future,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      description: texts.phases[3].description,
      milestones: [
        { text: texts.phases[3].milestones[0], completed: false, icon: <FaExpand /> },
        { text: texts.phases[3].milestones[1], completed: false, icon: <FaPlayCircle /> },
        { text: texts.phases[3].milestones[2], completed: false, icon: <FaCog /> },
        { text: texts.phases[3].milestones[3], completed: false, icon: <FaGlobe /> }
      ]
    }
  ]

  const currentFocus = {
    title: texts.currentFocus.title,
    priorities: [
      { text: texts.currentFocus.priorities[0], icon: <FaRocket /> },
      { text: texts.currentFocus.priorities[1], icon: <FaUsers /> },
      { text: texts.currentFocus.priorities[2], icon: <FaChartLine /> }
    ]
  }

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
          {texts.header.title}
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          {texts.header.subtitle}
        </p>
        
        {/* Timeline Overview */}
        <div className="flex justify-center mb-8">
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/20">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-green-400">{texts.header.statusLegend.completed}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-blue-400">{texts.header.statusLegend.active}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full" />
                <span className="text-orange-400">{texts.header.statusLegend.planned}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full" />
                <span className="text-purple-400">{texts.header.statusLegend.future}</span>
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
                    <FaClipboardList /> {texts.ui.milestones}
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
                {selectedPhase === phase.id ? texts.ui.hideDetails : texts.ui.showDetails}
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

      {/* Long-term Vision */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="backdrop-blur-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl p-6 border border-amber-500/30"
      >
        <div className="text-center">
          <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center justify-center gap-2">
            <FaLightbulb /> {texts.longTermVision.title}
          </h3>
          <p className="text-gray-300 leading-relaxed italic">
            &ldquo;{texts.longTermVision.description}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500" />
            <span className="text-amber-400 font-semibold text-sm">{texts.longTermVision.subtitle}</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default RoadmapTimelineV2