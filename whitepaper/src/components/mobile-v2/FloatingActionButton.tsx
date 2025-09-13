'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRocket, FaShareAlt, FaDownload, FaWallet, FaChartLine, FaTimes, FaCopy } from 'react-icons/fa'

interface FloatingActionButtonProps {
  isInvestmentOpen?: boolean
  onToggleInvestment?: () => void
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  isInvestmentOpen,
  onToggleInvestment
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (showShareMenu) setShowShareMenu(false)
  }

  const handleShare = () => {
    setShowShareMenu(!showShareMenu)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // Toast notification könnte hier hinzugefügt werden
  }

  const mainActions = [
    {
      icon: <FaWallet />,
      label: 'Investieren',
      gradient: 'from-green-400 to-blue-500',
      onClick: onToggleInvestment
    },
    {
      icon: <FaChartLine />,
      label: 'Portfolio',
      gradient: 'from-purple-400 to-pink-500',
      onClick: () => console.log('Portfolio')
    },
    {
      icon: <FaShareAlt />,
      label: 'Teilen',
      gradient: 'from-orange-400 to-red-500',
      onClick: handleShare
    },
    {
      icon: <FaDownload />,
      label: 'Download',
      gradient: 'from-cyan-400 to-blue-500',
      onClick: () => console.log('Download')
    }
  ]

  const shareOptions = [
    { platform: 'WhatsApp', url: 'https://wa.me/?text=', color: 'bg-green-500' },
    { platform: 'Telegram', url: 'https://t.me/share/url?url=', color: 'bg-blue-500' },
    { platform: 'Twitter', url: 'https://twitter.com/intent/tweet?url=', color: 'bg-blue-400' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/sharing/share-offsite/?url=', color: 'bg-blue-700' }
  ]

  return (
    <>
      {/* Main FAB */}
      <motion.div
        className="fixed bottom-24 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={toggleMenu}
          className={`w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl flex items-center justify-center text-white text-xl transition-all duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <FaTimes /> : <FaRocket />}
          </motion.div>
        </motion.button>

        {/* Ripple Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
          animate={{
            scale: isOpen ? [1, 1.5, 1] : 1,
            opacity: isOpen ? [0.5, 0, 0] : 0
          }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Action Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-44 right-6 z-40"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3">
              {mainActions.map((action, index) => (
                <motion.button
                  key={action.label}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={action.onClick}
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${action.gradient} shadow-xl flex items-center justify-center text-white relative group`}
                >
                  {action.icon}
                  
                  {/* Label Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute right-14 bg-black/80 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap"
                  >
                    {action.label}
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share Menu */}
      <AnimatePresence>
        {showShareMenu && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-60 flex items-end justify-center pb-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowShareMenu(false)}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 mx-4 border border-white/20"
              initial={{ y: 100, scale: 0.9 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 100, scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="text-white text-center mb-4">
                <h3 className="text-lg font-bold mb-2">D.FAITH teilen</h3>
                <p className="text-sm text-gray-300">Erzähle anderen von der Revolution!</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {shareOptions.map((option, index) => (
                  <motion.button
                    key={option.platform}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const url = encodeURIComponent(window.location.href)
                      const text = encodeURIComponent('Schau dir D.FAITH an - Die Krypto-Revolution! 🚀')
                      window.open(`${option.url}${url}&text=${text}`, '_blank')
                    }}
                    className={`${option.color} text-white p-3 rounded-xl flex flex-col items-center space-y-1 transition-all duration-200`}
                  >
                    <div className="text-lg">📱</div>
                    <span className="text-xs">{option.platform}</span>
                  </motion.button>
                ))}
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => copyToClipboard(window.location.href)}
                className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white p-3 rounded-xl flex items-center justify-center space-x-2"
              >
                <FaCopy />
                <span>Link kopieren</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Investment Modal Backdrop */}
      <AnimatePresence>
        {isInvestmentOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggleInvestment}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingActionButton