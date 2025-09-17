'use client'

import React from 'react'
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

interface NavigationMenuProps {
  activeSection: string
  onSectionChange: (section: string) => void
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  activeSection,
  onSectionChange,
  isMenuOpen,
  setIsMenuOpen
}) => {
  const navItems = [
    { id: 'hero', label: 'Start' },
    { id: 'solution', label: 'Problem & Lösung' },
    { id: 'tokenomics', label: 'Tokenomics' },
    { id: 'webapp', label: 'Webapp' },
    { id: 'tech', label: 'Technik' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'team', label: 'Team' }
  ]

  const { language, setLanguage } = useLanguage();

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800"
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                D.FAITH
              </div>
              <span className="text-zinc-400 text-sm hidden sm:block">Whitepaper</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {/* Sprachumschalter */}
              <select
                value={language}
                onChange={e => setLanguage(e.target.value as 'de' | 'en' | 'pl')}
                className="ml-4 px-2 py-1 rounded bg-zinc-800 text-zinc-200 border border-zinc-700 focus:outline-none"
                aria-label="Sprache wählen"
              >
                <option value="de">DE</option>
                <option value="en">EN</option>
                <option value="pl">PL</option>
              </select>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-zinc-800 lg:hidden"
        >
          <div className="p-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}

export default NavigationMenu
