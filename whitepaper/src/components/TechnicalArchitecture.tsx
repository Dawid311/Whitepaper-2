'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaServer, FaShieldAlt, FaCode, FaCogs, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'

const TechnicalArchitecture = () => {
  const contracts = [
    {
      name: 'Staking Contract',
      address: '0xe85b32a44b9eD3ecf8bd331FED46fbdAcDBc9940',
      description: 'Handles D.INVEST staking and D.FAITH reward distribution',
      status: 'Live',
      features: ['6-Stage Halving', 'Real-time Rewards', 'Flexible Unstaking']
    },
    {
      name: 'D.FAITH Token',
      address: '0x69eFD833288605f320d77eB2aB99DDE62919BbC1',
      description: 'Fan reward token with 2 decimals precision',
      status: 'Live',
      features: ['ERC-20 Standard', 'Utility Token', 'Tradeable on DEX']
    },
    {
      name: 'D.INVEST Token',
      address: '0x6F1fFd03106B27781E86b33Df5dBB734ac9DF4bb',
      description: 'Investment token with 0 decimals (whole numbers only)',
      status: 'Live',
      features: ['Fixed Supply: 10k', 'Stakeable', 'Governance Ready']
    }
  ]

  const techStack = [
    {
      category: 'Blockchain',
      icon: <FaShieldAlt className="text-2xl text-blue-400" />,
      items: [
        { name: 'Base Chain', description: 'Layer 2 solution for low fees' },
        { name: 'Solidity', description: 'Smart contract programming' },
        { name: 'Thirdweb SDK', description: 'Web3 integration' }
      ]
    },
    {
      category: 'Frontend',
      icon: <FaCode className="text-2xl text-green-400" />,
      items: [
        { name: 'Next.js', description: 'React framework with SSR' },
        { name: 'TypeScript', description: 'Type-safe development' },
        { name: 'Tailwind CSS', description: 'Utility-first styling' }
      ]
    },
    {
      category: 'Backend',
      icon: <FaServer className="text-2xl text-purple-400" />,
      items: [
        { name: 'Proprietary APIs', description: 'Custom social media integration' },
        { name: 'Real-time Updates', description: '5-second refresh intervals' },
        { name: 'Security Layer', description: 'Multi-layered protection' }
      ]
    },
    {
      category: 'Features',
      icon: <FaCogs className="text-2xl text-amber-400" />,
      items: [
        { name: 'Cross-Platform', description: 'Instagram, TikTok integration' },
        { name: 'EXP System', description: 'Gamification & leveling' },
        { name: 'Live Tracking', description: 'Real-time engagement monitoring' }
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Technische Architektur
        </h2>
        <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30 mb-4">
          <FaCheckCircle className="text-sm" />
          Vollständig implementiert und live
        </div>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          Professionelle Blockchain-Infrastruktur mit proprietären APIs und Security-First Ansatz
        </p>
      </motion.div>

      {/* Smart Contract Addresses */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Live Smart Contracts auf Base Chain</h3>
        
        {contracts.map((contract, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-6 border border-zinc-700"
          >
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <h4 className="text-lg font-bold text-white">{contract.name}</h4>
                </div>
                <p className="text-zinc-400 text-sm mb-3">{contract.description}</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium">
                    {contract.status}
                  </span>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-zinc-400 mb-2">Contract Address:</div>
                <div className="bg-zinc-700/50 rounded-lg p-3 font-mono text-sm text-blue-400 break-all">
                  {contract.address}
                </div>
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm mt-2 transition-colors">
                  <FaExternalLinkAlt className="text-xs" />
                  View on BaseScan
                </button>
              </div>
              
              <div>
                <div className="text-sm text-zinc-400 mb-3">Features:</div>
                <div className="space-y-1">
                  {contract.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-400 text-xs" />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Technologie-Stack</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {techStack.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-6 border border-zinc-700"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h4 className="text-xl font-bold text-white">{category.category}</h4>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, i) => (
                  <div key={i} className="border-l-2 border-zinc-600 pl-4">
                    <div className="font-semibold text-white">{item.name}</div>
                    <div className="text-sm text-zinc-400">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default TechnicalArchitecture
