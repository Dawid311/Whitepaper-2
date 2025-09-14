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
  FaCode,
  FaMicrophone,
  FaLightbulb,
  FaEnvelope
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
      { skill: "Blockchain Development", icon: <FaEthereum />, color: "from-blue-500 to-cyan-500" },
      { skill: "Musik & Kreativität", icon: <FaMusic />, color: "from-purple-500 to-pink-500" },
      { skill: "Business Strategy", icon: <FaChartLine />, color: "from-green-500 to-emerald-500" },
      { skill: "Full-Stack Development", icon: <FaCode />, color: "from-orange-500 to-red-500" }
    ],
    socialLinks: [
      { 
        platform: "Instagram", 
        icon: <FaInstagram />, 
        color: "text-pink-400", 
        handle: "@dawidfaith",
        url: "https://www.instagram.com/dawidfaith/"
      },
      { 
        platform: "TikTok", 
        icon: <FaTiktok />, 
        color: "text-gray-300", 
        handle: "@dawidfaith",
        url: "https://www.tiktok.com/@dawidfaith"
      },
      { 
        platform: "Facebook", 
        icon: <FaFacebook />, 
        color: "text-blue-400", 
        handle: "Dawid Faith",
        url: "https://www.facebook.com/profile.php?id=61572473614500"
      },
      { 
        platform: "Email", 
        icon: <FaEnvelope />, 
        color: "text-green-400", 
        handle: "dawid.faith@gmail.com",
        url: "mailto:dawid.faith@gmail.com"
      }
    ]
  }

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
        className="backdrop-blur-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl p-8 mb-8 border border-amber-500/30 max-w-lg mx-auto"
      >
        {/* Profile Header */}
        <div className="text-center mb-6">
          <div className="relative inline-block mb-4">
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
          </div>

          <h3 className="text-2xl font-bold text-amber-400 mb-2">{teamMember.name}</h3>
          <p className="text-amber-300/80 text-lg mb-4">{teamMember.role}</p>
          <p className="text-gray-300 leading-relaxed">
            {teamMember.description}
          </p>
        </div>

        {/* Skills as Simple List */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {teamMember.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-3 border border-white/10"
            >
              <div className="flex items-start gap-2">
                <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg flex-shrink-0`}>
                  <span className="text-white text-sm">{skill.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-white font-semibold text-xs leading-tight block break-words">{skill.skill}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {teamMember.socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target={social.platform === "Email" ? "_self" : "_blank"}
              rel={social.platform === "Email" ? "" : "noopener noreferrer"}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 ${social.color} hover:bg-white/10 transition-all duration-300`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Vision Statement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-6 border border-purple-500/30 max-w-lg mx-auto"
      >
        <div className="text-center">
          <h4 className="text-lg font-bold text-purple-400 mb-4">
            💡 Vision & Mission
          </h4>
          <p className="text-gray-300 leading-relaxed italic">
            &ldquo;Ich glaube daran, dass Technologie die Creator Economy revolutionieren kann. 
            Durch D.FAITH schaffen wir eine Welt, in der Fans direkt von ihrem Engagement profitieren 
            und Künstler nachhaltig finanziert werden können. Das ist erst der Anfang einer 
            größeren Bewegung.&rdquo;
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