'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaMusic,
  FaEthereum,
  FaChartLine,
  FaRocket,
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaLinkedin,
  FaCode,
  FaMicrophone,
  FaLightbulb,
  FaCog
} from 'react-icons/fa'
import Image from 'next/image'

const TeamSectionV3: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  
  const teamMember = {
    name: "Dawid Faith",
    role: "Gründer, Entwickler & Künstler", 
    description: "Visionär und Vollzeit-Entwickler des D.FAITH Ökosystems",
    image: "/dawid-faith-photo.jpg",
    skills: [
      { skill: "Blockchain Development", level: 95, icon: <FaEthereum />, color: "from-blue-500 to-cyan-500" },
      { skill: "Musik & Kreativität", level: 90, icon: <FaMusic />, color: "from-purple-500 to-pink-500" },
      { skill: "Business Strategy", level: 85, icon: <FaChartLine />, color: "from-green-500 to-emerald-500" },
      { skill: "Full-Stack Development", level: 88, icon: <FaCode />, color: "from-orange-500 to-red-500" }
    ],
    achievements: [
      "Smart Contracts auf Base Chain deployed",
      "Vollständige Webapp-Integration entwickelt",
      "Proprietary Social Media APIs erstellt",
      "6-Stufen Halving-System implementiert"
    ],
    socialLinks: [
      { platform: "Instagram", icon: <FaInstagram />, color: "text-pink-400", handle: "@dawidfaith" },
      { platform: "TikTok", icon: <FaTiktok />, color: "text-gray-300", handle: "@dawidfaith" },
      { platform: "Facebook", icon: <FaFacebook />, color: "text-blue-400", handle: "@dawidfaithmusic" }
    ]
  }

  const expertise = [
    {
      area: "Blockchain Architecture",
      icon: <FaEthereum />,
      color: "from-blue-500 to-purple-500",
      details: [
        "Solidity Smart Contract Development",
        "Base Chain Integration & Optimization", 
        "DeFi Protocol Design",
        "Gas-Optimierung & Security Audits"
      ]
    },
    {
      area: "Music Production",
      icon: <FaMicrophone />,
      color: "from-purple-500 to-pink-500", 
      details: [
        "Songwriting & Komposition",
        "Studio Production & Mixing",
        "Live Performance & Konzerte",
        "Audio Engineering & Mastering"
      ]
    },
    {
      area: "Full-Stack Development",
      icon: <FaCode />,
      color: "from-green-500 to-blue-500",
      details: [
        "React/Next.js Frontend Development",
        "TypeScript & Advanced JavaScript",
        "API Design & Backend Architecture", 
        "Database Design & Optimization"
      ]
    },
    {
      area: "Innovation & Strategy",
      icon: <FaLightbulb />,
      color: "from-orange-500 to-red-500",
      details: [
        "Creator Economy Innovation",
        "Token Economics Design",
        "Community Building Strategies",
        "Product Vision & Roadmap Planning"
      ]
    }
  ]

  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
          Das Team
        </h2>
        <p className="text-gray-300 text-lg">
          Die Visionäre hinter der D.FAITH Revolution
        </p>
      </motion.div>

      {/* Main Team Member Profile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="backdrop-blur-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl p-8 mb-8 border border-amber-500/30"
      >
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-6">
            <Image
              src={teamMember.image}
              alt={teamMember.name}
              width={120}
              height={120}
              className="rounded-full border-4 border-amber-500/50 mx-auto"
            />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
              <FaMusic className="text-white" />
            </div>
            {/* Live Indicator */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-amber-400 mb-2">{teamMember.name}</h3>
          <p className="text-amber-300/80 text-lg mb-4">{teamMember.role}</p>
          <p className="text-gray-300 leading-relaxed max-w-md mx-auto">
            {teamMember.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {teamMember.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg`}>
                  <span className="text-white text-sm">{skill.icon}</span>
                </div>
                <div className="flex-1">
                  <span className="text-white font-semibold text-sm">{skill.skill}</span>
                </div>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.6 + index * 0.1 }}
                  className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
              <p className="text-amber-300 text-xs text-right font-medium">{skill.level}%</p>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {teamMember.socialLinks.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 ${social.color} hover:bg-white/10 transition-all duration-300 mb-2`}
              >
                {social.icon}
              </motion.button>
              <p className="text-xs text-gray-400">{social.handle}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="backdrop-blur-sm bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-500/20"
        >
          <h4 className="text-lg font-bold text-green-400 mb-4 text-center flex items-center justify-center gap-2">
            <FaRocket /> Schlüssel-Erfolge
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {teamMember.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="flex items-center gap-3 bg-white/5 rounded-lg p-3"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-gray-300 text-sm">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Expertise Areas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="space-y-4"
      >
        <h4 className="text-xl font-bold text-center text-amber-400 mb-6">
          Expertise-Bereiche
        </h4>
        
        {expertise.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
            className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 bg-gradient-to-r ${area.color} rounded-xl`}>
                <span className="text-white text-lg">{area.icon}</span>
              </div>
              <h5 className="font-bold text-white text-lg">{area.area}</h5>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              {area.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="flex items-center gap-3">
                  <div className={`w-1.5 h-1.5 bg-gradient-to-r ${area.color} rounded-full`} />
                  <span className="text-gray-300 text-sm">{detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Vision Statement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="mt-8 backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-6 border border-purple-500/30"
      >
        <div className="text-center">
          <h4 className="text-lg font-bold text-purple-400 mb-4">
            💡 Vision & Mission
          </h4>
          <p className="text-gray-300 leading-relaxed italic">
            "Ich glaube daran, dass Technologie die Creator Economy revolutionieren kann. 
            Durch D.FAITH schaffen wir eine Welt, in der Fans direkt von ihrem Engagement profitieren 
            und Künstler nachhaltig finanziert werden können. Das ist erst der Anfang einer 
            größeren Bewegung."
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500" />
            <span className="text-purple-400 font-semibold text-sm">Dawid Faith</span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TeamSectionV3