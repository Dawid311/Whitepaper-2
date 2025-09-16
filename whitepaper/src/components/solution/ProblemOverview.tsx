"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaChartLine, FaMusic, FaUsers } from 'react-icons/fa'
import Image from 'next/image'

const ProblemOverview = () => {
  const problems = [
    {
      icon: <FaInstagram className="text-3xl text-purple-500" />,
      title: "Geringe Reichweite",
      description: "Qualitätsvoller Content erreicht nicht genug Menschen organisch",
      pain: "🔴 HOCH",
      impact: "Wenige neue Follower trotz gutem Content"
    },
    {
      icon: <FaChartLine className="text-3xl text-red-500" />,
      title: "Teure Werbung",
      description: "Paid Ads kosten viel, bringen aber nicht nachhaltige Fans",
      pain: "🔴 HOCH",
      impact: "Hohe Kosten ohne garantierte ROI"
    },
    {
      icon: <FaMusic className="text-3xl text-blue-500" />,
      title: "Fehlendes Kapital",
      description: "Keine Mittel für Musikproduktion und professionelle Videos",
      pain: "🟠 MITTEL",
      impact: "Limitierte Produktionsqualität"
    },
    {
      icon: <FaUsers className="text-3xl text-green-500" />,
      title: "Schwaches Engagement",
      description: "Fan-Interaktionen bringen keinen direkten Mehrwert",
      pain: "🟡 NIEDRIG",
      impact: "Oberflächliche Fan-Beziehungen"
    }
  ]

  return (
    <div className="mb-16">
      {/* Persönliche Motivation von Dawid Faith */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8 mb-12"
      >
        <div className="flex items-center gap-6 mb-6">
          <Image
            src="/dawid-faith-photo.jpg"
            alt="Dawid Faith"
            width={80}
            height={80}
            className="rounded-full border-2 border-purple-500"
          />
          <div>
            <h3 className="text-2xl font-bold text-white">Dawid Faith</h3>
            <p className="text-purple-400">Künstler & D.FAITH Entwickler</p>
          </div>
        </div>
        <blockquote className="text-gray-300 italic text-lg leading-relaxed border-l-4 border-purple-500 pl-4">
          &quot;Als unabhängiger Künstler stehe ich vor den gleichen Problemen wie viele andere: 
          Mein Content bekommt nicht die Reichweite, die er verdient. Bezahlte Werbung ist 
          teuer und zeitintensiv - und das Geld habe ich nicht. Außerdem fehlt mir das 
          Kapital für Musikproduktion. Deshalb entwickelte ich D.FAITH: um Fans direkt 
          für ihr Engagement zu belohnen und gleichzeitig Kapital für meine Musik zu generieren.&quot;
        </blockquote>
      </motion.div>

      {/* Problem-Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-slate-700/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                {problem.title}
              </h4>
              <p className="text-gray-400 mb-4">
                {problem.description}
              </p>
              <div className="mt-auto space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Schmerzgrad:</span>
                  <span className="font-bold">{problem.pain}</span>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-2">
                  <p className="text-xs text-gray-300">{problem.impact}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Problem Zusammenfassung - Übernommener Mobile Teufelskreis (6 Knoten) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <div className="relative w-full max-w-4xl">
          <div className="relative bg-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-red-400 text-center mb-6">⚠️ Das zentrale Problem</h3>

            <div className="flex justify-center">
              <svg viewBox="0 0 320 320" className="w-96 h-96">
                {/* Background Circle */}
                <circle
                  cx="160"
                  cy="160"
                  r="120"
                  fill="none"
                  stroke="rgba(239, 68, 68, 0.15)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                
                {/* Animated Circle Path */}
                <motion.circle
                  cx="160"
                  cy="160"
                  r="120"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.6, delay: 0.6 }}
                />

                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="25%" stopColor="#f97316" />
                    <stop offset="50%" stopColor="#eab308" />
                    <stop offset="75%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>

                {/* Problem Nodes (6) - positions mirror mobile layout */}
                {
                  [
                    { x: 160, y: 40, text: 'Geringe\nReichweite', color: '#ef4444' },
                    { x: 264, y: 104, text: 'Schwaches\nEngagement', color: '#f97316' },
                    { x: 264, y: 216, text: 'Keine\nneuen Fans', color: '#eab308' },
                    { x: 160, y: 280, text: 'Kein\nEinkommen', color: '#22c55e' },
                    { x: 56, y: 216, text: 'Keine\nInvestition', color: '#3b82f6' },
                    { x: 56, y: 104, text: 'Schlechter\nContent', color: '#8b5cf6' }
                  ].map((node, index) => (
                    <g key={index}>
                      <motion.rect
                        x={node.x - 35}
                        y={node.y - 18}
                        width="70"
                        height="36"
                        rx="8"
                        fill={node.color}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.95 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                      />
                      <motion.text
                        x={node.x}
                        y={node.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{ pointerEvents: 'none' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
                        className="text-white text-xs font-bold"
                      >
                        {node.text.split('\n').map((line, li) => (
                          <tspan key={li} x={node.x} dy={li === 0 ? -5 : 12}>{line}</tspan>
                        ))}
                      </motion.text>
                    </g>
                  ))
                }

                {/* Center overlay */}
                <g />
              </svg>
            </div>

            {/* Center Text Overlay (absolute) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center bg-black/40 backdrop-blur-sm rounded-full p-4 border border-red-500/30">
                <div className="text-red-400 font-bold text-sm">TEUFELSKREIS</div>
                <div className="text-gray-300 text-xs">Endlose Schleife</div>
              </div>
            </div>

            <p className="text-center text-gray-300 mt-6">
              Jeder Punkt verstärkt den nächsten in einem endlosen Kreislauf der Stagnation.
              <br />
              <span className="text-red-300 font-semibold">D.FAITH durchbricht diesen Kreislauf!</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProblemOverview
