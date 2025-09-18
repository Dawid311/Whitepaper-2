"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaLightbulb, FaUsers, FaCoins, FaChartLine, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

import { SolutionConceptTranslations } from './SolutionConceptTranslations';

interface SolutionConceptProps {
  language: 'de' | 'en' | 'pl';
}

const SolutionConcept: React.FC<SolutionConceptProps> = ({ language }) => {
  const t = SolutionConceptTranslations(language);

  // Icon components with unique keys
  const dfaithIconComponents = [
    { id: 'users', component: <FaUsers className="text-amber-400" /> },
    { id: 'coins', component: <FaCoins className="text-amber-400" /> },
    { id: 'chart', component: <FaChartLine className="text-amber-400" /> }
  ];

  const dinvestIconComponents = [
    { id: 'coins', component: <FaCoins className="text-blue-400" /> },
    { id: 'chart', component: <FaChartLine className="text-blue-400" /> },
    { id: 'users', component: <FaUsers className="text-blue-400" /> }
  ];
  return (
    <div className="mb-16">
      {/* Lösung Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
            <FaLightbulb className="text-4xl text-white" />
          </div>
        </div>
        <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-6">
          {t.revolution}
        </h3>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          {t.subtitle}
        </p>
      </motion.div>

      {/* Zwei Token im Fokus */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* D.FAITH Token */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl p-8 border border-amber-500/30"
        >
          <div className="flex items-center gap-4 mb-6">
            <Image 
              src="/d-faith-logo.png" 
              alt="D.FAITH Logo" 
              width={80} 
              height={80}
            />
            <div>
              <h4 className="text-3xl font-bold text-amber-400">{t.dfaith}</h4>
              <p className="text-amber-300">{t.dfaithDesc}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {t.dfaithFeatures.map((feature, i) => (
              <div className="flex items-center gap-3" key={i}>
                {dfaithIconComponents[i].component}
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* entfernt: Wie Fans D.FAITH bekommen */}
        </motion.div>

        {/* D.INVEST Token */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30"
        >
          <div className="flex items-center gap-4 mb-6">
            <Image 
              src="/d-invest-logo.png" 
              alt="D.INVEST Logo" 
              width={80} 
              height={80}
            />
            <div>
              <h4 className="text-3xl font-bold text-blue-400">{t.dinvest}</h4>
              <p className="text-blue-300">{t.dinvestDesc}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {t.dinvestFeatures.map((feature, i) => (
              <div className="flex items-center gap-3" key={i}>
                {dinvestIconComponents[i].component}
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* entfernt: Investment Details */}
        </motion.div>
      </div>

      {/* Kernidee */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-8 border border-green-500/30"
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold text-green-400 mb-4">
            {t.coreIdea}
          </h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t.coreText}
          </p>
          
          <div className="flex justify-center items-center mt-6 space-x-4">
            <div className="text-center">
              <div className="bg-red-500/20 rounded-lg p-3 mb-2">
                <span className="text-sm font-bold text-red-400">{t.before}</span>
              </div>
              <p className="text-sm text-gray-400">{t.beforeDesc}</p>
            </div>
            <FaArrowRight className="text-green-400 text-2xl" />
            <div className="text-center">
              <div className="bg-green-500/20 rounded-lg p-3 mb-2">
                <span className="text-sm font-bold text-green-400">{t.after}</span>
              </div>
              <p className="text-sm text-gray-400">{t.afterDesc}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SolutionConcept
