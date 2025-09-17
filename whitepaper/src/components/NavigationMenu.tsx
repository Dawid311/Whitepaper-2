'use client'

import React from 'react'
import { useLanguage } from '../context/LanguageContext';
import { navigationMenuTranslations } from './NavigationMenuTranslations';
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

// Flag components
const DEFlag = () => (
  <div className="inline-flex w-8 h-5 bg-gradient-to-b from-black via-red-600 to-yellow-400 rounded border border-gray-300 shadow-sm"></div>
);

const ENFlag = () => (
  <div className="inline-flex w-8 h-5 relative bg-red-600 rounded border border-gray-300 overflow-hidden shadow-sm">
    {/* Red and white stripes */}
    <div className="absolute inset-0">
      <div className="w-full h-0.5 bg-red-600 absolute top-0"></div>
      <div className="w-full h-0.5 bg-white absolute top-0.5"></div>
      <div className="w-full h-0.5 bg-red-600 absolute top-1"></div>
      <div className="w-full h-0.5 bg-white absolute top-1.5"></div>
      <div className="w-full h-0.5 bg-red-600 absolute top-2"></div>
      <div className="w-full h-0.5 bg-white absolute top-2.5"></div>
      <div className="w-full h-0.5 bg-red-600 absolute top-3"></div>
      <div className="w-full h-0.5 bg-white absolute top-3.5"></div>
      <div className="w-full h-0.5 bg-red-600 absolute top-4"></div>
      <div className="w-full h-0.5 bg-white absolute bottom-0"></div>
    </div>
    {/* Blue canton */}
    <div className="absolute top-0 left-0 w-3 h-2.5 bg-blue-800"></div>
    {/* Stars (simplified as small white dots) */}
    <div className="absolute top-0 left-0 w-3 h-2.5">
      <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
      <div className="absolute top-0.5 left-1.5 w-0.5 h-0.5 bg-white rounded-full"></div>
      <div className="absolute top-0.5 left-2.5 w-0.5 h-0.5 bg-white rounded-full"></div>
      <div className="absolute top-1.5 left-1 w-0.5 h-0.5 bg-white rounded-full"></div>
      <div className="absolute top-1.5 left-2 w-0.5 h-0.5 bg-white rounded-full"></div>
    </div>
  </div>
);

const PLFlag = () => (
  <div className="inline-flex w-8 h-5 relative rounded border border-gray-300 overflow-hidden shadow-sm">
    <div className="absolute top-0 left-0 w-full h-2.5 bg-white"></div>
    <div className="absolute bottom-0 left-0 w-full h-2.5 bg-red-600"></div>
  </div>
);

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
  const { language, setLanguage } = useLanguage();
  const t = navigationMenuTranslations[language];
  const [showLanguageDropdown, setShowLanguageDropdown] = React.useState(false);

  const navItems = [
    { id: 'hero', label: t.navItems.hero },
    { id: 'solution', label: t.navItems.solution },
    { id: 'tokenomics', label: t.navItems.tokenomics },
    { id: 'webapp', label: t.navItems.webapp },
    { id: 'roadmap', label: t.navItems.roadmap },
    { id: 'team', label: t.navItems.team }
  ]

  const handleSectionClick = (sectionId: string) => {
    // Schließe das mobile Menü
    setIsMenuOpen(false);
    
    // Scrolle zum Element
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Aktualisiere aktive Sektion
    onSectionChange(sectionId);
  };

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
              <span className="text-zinc-400 text-sm hidden sm:block">{t.whitepaper}</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
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
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="ml-4 px-3 py-2 rounded bg-zinc-800 text-zinc-200 border border-zinc-700 hover:bg-zinc-700 transition-colors flex items-center gap-2"
                  aria-label={t.languageLabel}
                >
                  {language === 'de' && <DEFlag />}
                  {language === 'en' && <ENFlag />}
                  {language === 'pl' && <PLFlag />}
                  <span className="text-xs">▼</span>
                </button>
                
                {showLanguageDropdown && (
                  <div className="absolute top-full right-0 mt-1 bg-zinc-800 border border-zinc-700 rounded shadow-lg z-50">
                    <button
                      onClick={() => { setLanguage('de'); setShowLanguageDropdown(false); }}
                      className="w-full px-3 py-2 text-left hover:bg-zinc-700 transition-colors flex items-center gap-2"
                    >
                      <DEFlag />
                    </button>
                    <button
                      onClick={() => { setLanguage('en'); setShowLanguageDropdown(false); }}
                      className="w-full px-3 py-2 text-left hover:bg-zinc-700 transition-colors flex items-center gap-2"
                    >
                      <ENFlag />
                    </button>
                    <button
                      onClick={() => { setLanguage('pl'); setShowLanguageDropdown(false); }}
                      className="w-full px-3 py-2 text-left hover:bg-zinc-700 transition-colors flex items-center gap-2"
                    >
                      <PLFlag />
                    </button>
                  </div>
                )}
              </div>
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
                onClick={() => handleSectionClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Sprachumschalter */}
            <div className="pt-3 border-t border-zinc-700">
              <label className="block text-sm text-zinc-400 mb-2">{t.languageLabel}</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setLanguage('de')}
                  className={`p-3 rounded bg-zinc-800 border ${language === 'de' ? 'border-blue-500' : 'border-zinc-700'} hover:bg-zinc-700 transition-colors flex items-center justify-center`}
                >
                  <DEFlag />
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`p-3 rounded bg-zinc-800 border ${language === 'en' ? 'border-blue-500' : 'border-zinc-700'} hover:bg-zinc-700 transition-colors flex items-center justify-center`}
                >
                  <ENFlag />
                </button>
                <button
                  onClick={() => setLanguage('pl')}
                  className={`p-3 rounded bg-zinc-800 border ${language === 'pl' ? 'border-blue-500' : 'border-zinc-700'} hover:bg-zinc-700 transition-colors flex items-center justify-center`}
                >
                  <PLFlag />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default NavigationMenu
