'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Section {
  id: string
  title: string
  icon: React.ReactNode
  gradient: string
}

interface BottomNavigationProps {
  sections: Section[]
  currentSection: string
  onSectionChange: (sectionId: string) => void
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  sections, 
  currentSection, 
  onSectionChange 
}) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    onSectionChange(sectionId)
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed bottom-4 left-4 right-4 z-50"
    >
      <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-3 border border-white/20 shadow-2xl">
        <div className="flex justify-between items-center relative">
          {/* Active section indicator */}
          <motion.div
            className="absolute top-1 bottom-1 w-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl"
            animate={{
              x: sections.findIndex(s => s.id === currentSection) * 56 + 8
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          
          {sections.map((section) => (
            <motion.button
              key={section.id}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection(section.id)}
              className={`relative z-10 w-14 h-14 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${
                currentSection === section.id 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <motion.div
                animate={{
                  scale: currentSection === section.id ? 1.2 : 1,
                  y: currentSection === section.id ? -2 : 0
                }}
                transition={{ duration: 0.3 }}
                className="text-lg"
              >
                {section.icon}
              </motion.div>
              
              {currentSection === section.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                >
                  <div className="backdrop-blur-sm bg-black/50 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap">
                    {section.title}
                  </div>
                  <div className="w-2 h-2 bg-black/50 transform rotate-45 mx-auto -mt-1" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default BottomNavigation