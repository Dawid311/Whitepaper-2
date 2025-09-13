'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaShieldAlt, 
  FaCode, 
  FaLayerGroup, 
  FaCheck, 
  FaCopy, 
  FaExternalLinkAlt,
  FaRocket,
  FaCog,
  FaLock
} from 'react-icons/fa'

const MobileTechSection: React.FC = () => {
  const [activeContract, setActiveContract] = useState<string | null>(null)
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const contracts = [
    {
      id: 'staking',
      name: 'Staking Contract',
      address: '0xe85b32a44b9eD3ecf8bd331FED46fbdAcDBc9940',
      description: 'Handles D.INVEST staking and D.FAITH reward distribution',
      color: 'amber',
      features: ['6-Stage Halving System', 'Real-time Rewards', 'Flexible Unstaking']
    },
    {
      id: 'dfaith',
      name: 'D.FAITH Token',
      address: '0x69eFD833288605f320d77eB2aB99DDE62919BbC1',
      description: 'Fan reward token with 2 decimals precision',
      color: 'blue',
      features: ['ERC-20 Standard', 'Utility Token', 'DEX Tradeable']
    },
    {
      id: 'dinvest',
      name: 'D.INVEST Token',
      address: '0x6F1fFd03106B27781E86b33Df5dBB734ac9DF4bb',
      description: 'Investment token with 0 decimals',
      color: 'purple',
      features: ['Fixed Supply: 10K', 'Stakeable Token', 'Governance Ready']
    }
  ]

  const techStack = [
    {
      category: 'Blockchain',
      items: [
        { name: 'Base Chain', description: 'Layer 2 für niedrige Fees', icon: FaLayerGroup, color: 'blue' },
        { name: 'Solidity', description: 'Smart Contract Programmierung', icon: FaCode, color: 'green' },
        { name: 'Thirdweb SDK', description: 'Web3 Integration', icon: FaRocket, color: 'purple' }
      ]
    },
    {
      category: 'Frontend',
      items: [
        { name: 'Next.js', description: 'React Framework mit SSR', icon: FaLayerGroup, color: 'amber' },
        { name: 'TypeScript', description: 'Type-safe Development', icon: FaCode, color: 'cyan' },
        { name: 'Tailwind CSS', description: 'Utility-first Styling', icon: FaCog, color: 'pink' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Proprietary APIs', description: 'Custom Social Integration', icon: FaShieldAlt, color: 'red' },
        { name: 'Real-time Updates', description: '5-Sekunden Refresh', icon: FaRocket, color: 'green' },
        { name: 'Security Layer', description: 'Multi-layered Protection', icon: FaLock, color: 'orange' }
      ]
    }
  ]

  const copyToClipboard = async (address: string, contractName: string) => {
    try {
      await navigator.clipboard.writeText(address)
      setCopiedAddress(contractName)
      setTimeout(() => setCopiedAddress(null), 2000)
    } catch (err) {
      console.error('Failed to copy address:', err)
    }
  }

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-2">Technische Architektur</h3>
        <p className="text-gray-400 text-sm">Vollständig implementiert und live</p>
      </motion.div>

      {/* Status Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-4 border border-green-500/30 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <FaCheck className="text-green-400" />
          <span className="font-bold text-green-400 text-lg">Vollständig Live</span>
          <FaCheck className="text-green-400" />
        </div>
        <p className="text-gray-300 text-sm">
          Professionelle Blockchain-Infrastruktur mit proprietären APIs auf Base Chain deployiert
        </p>
      </motion.div>

      {/* Smart Contracts */}
      <div className="space-y-4">
        <h4 className="font-bold text-white text-lg flex items-center gap-2">
          <FaCode className="text-blue-400" />
          Smart Contracts
        </h4>

        {contracts.map((contract, index) => (
          <motion.div
            key={contract.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className={`bg-gradient-to-r from-${contract.color}-900/30 to-${contract.color}-800/20 rounded-2xl border border-${contract.color}-500/30 overflow-hidden`}
          >
            <motion.button
              whileHover={{ scale: 1.01 }}
              onClick={() => setActiveContract(activeContract === contract.id ? null : contract.id)}
              className="w-full p-4 text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <h5 className={`font-bold text-${contract.color}-400 text-lg`}>{contract.name}</h5>
                <div className={`w-3 h-3 bg-${contract.color}-400 rounded-full animate-pulse`}></div>
              </div>
              <p className="text-gray-300 text-sm">{contract.description}</p>
            </motion.button>

            <AnimatePresence>
              {activeContract === contract.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t border-gray-700/50"
                >
                  <div className="p-4 space-y-4">
                    {/* Contract Address */}
                    <div className="bg-zinc-800/50 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400 text-sm">Contract Address:</span>
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => copyToClipboard(contract.address, contract.name)}
                            className="p-1 rounded bg-gray-700 hover:bg-gray-600"
                          >
                            {copiedAddress === contract.name ? (
                              <FaCheck className="text-green-400 text-xs" />
                            ) : (
                              <FaCopy className="text-gray-400 text-xs" />
                            )}
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-1 rounded bg-gray-700 hover:bg-gray-600"
                          >
                            <FaExternalLinkAlt className="text-gray-400 text-xs" />
                          </motion.button>
                        </div>
                      </div>
                      <div className="font-mono text-xs text-blue-400 break-all bg-zinc-900/50 p-2 rounded">
                        {contract.address}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <span className="text-gray-400 text-sm">Features:</span>
                      {contract.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <FaCheck className="text-green-400 text-xs" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="space-y-4">
        <h4 className="font-bold text-white text-lg flex items-center gap-2">
          <FaCog className="text-purple-400" />
          Tech Stack
        </h4>

        {techStack.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
            className="space-y-3"
          >
            <h5 className="font-semibold text-gray-300">{category.category}</h5>
            <div className="grid gap-3">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-gradient-to-r from-${item.color}-900/30 to-${item.color}-800/20 rounded-xl p-4 border border-${item.color}-500/30`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`text-${item.color}-400 text-lg`} />
                    <div className="flex-1">
                      <div className={`font-bold text-${item.color}-400`}>{item.name}</div>
                      <div className="text-gray-400 text-sm">{item.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Security Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-4 border border-red-500/30"
      >
        <h4 className="font-bold text-red-400 text-lg mb-3 flex items-center gap-2">
          <FaShieldAlt />
          Security Features
        </h4>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-400" />
            <span className="text-gray-300">Smart Contract Audits</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-400" />
            <span className="text-gray-300">Multi-layered Protection</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-400" />
            <span className="text-gray-300">Gas Optimization</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-400" />
            <span className="text-gray-300">Fail-safe Mechanisms</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MobileTechSection