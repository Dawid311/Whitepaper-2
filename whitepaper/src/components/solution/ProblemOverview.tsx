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
      
      {/* Problem Zusammenfassung */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-2xl p-8 border border-red-500/30"
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold text-red-400 mb-4">
            ⚠️ Das zentrale Problem
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            <strong>Teufelskreis:</strong> Ohne Reichweite kein Engagement → Ohne Engagement keine neuen Fans → 
            Ohne Fans kein Einkommen → Ohne Einkommen keine Investition in besseren Content → Ohne besseren Content keine Reichweite.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default ProblemOverview
