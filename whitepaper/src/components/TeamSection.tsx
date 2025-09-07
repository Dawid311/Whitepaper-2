'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaInstagram, FaGithub, FaLinkedin, FaMusic, FaCode, FaRocket } from 'react-icons/fa'

const TeamSection = () => {
  const skills = [
    'Smart Contract Development',
    'Frontend Development (React/Next.js)',
    'Backend Development',
    'Blockchain Integration',
    'UI/UX Design',
    'Music Production',
    'Social Media Marketing',
    'Community Building'
  ]

  const achievements = [
    {
      icon: <FaCode className="text-2xl text-blue-400" />,
      title: 'Full-Stack Development',
      description: 'Komplette D.FAITH Webapp von Grund auf entwickelt'
    },
    {
      icon: <FaRocket className="text-2xl text-green-400" />,
      title: 'Smart Contracts Live',
      description: 'Staking System und Token auf Base Chain deployed'
    },
    {
      icon: <FaMusic className="text-2xl text-purple-400" />,
      title: 'Künstlerische Vision',
      description: 'Authentische Verbindung zwischen Musik und Technologie'
    },
    {
      icon: <FaInstagram className="text-2xl text-pink-400" />,
      title: 'Community Building',
      description: '774 organische Instagram Follower aufgebaut'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Das Team
        </h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          One-Man-Army: Komplette Entwicklung und Vision von Dawid Faith
        </p>
      </motion.div>

      {/* Main Profile */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-3xl p-8 border border-zinc-700 mb-12"
      >
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Profile Image */}
          <div className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="relative w-80 h-96 mx-auto">
                <Image
                  src="/dawid-faith-photo.jpg"
                  alt="Dawid Faith"
                  fill
                  className="rounded-2xl object-cover border border-zinc-600"
                  priority
                />
                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-3 border border-purple-400/50">
                  <FaMusic className="text-white text-xl" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-3 border border-blue-400/50">
                  <FaCode className="text-white text-xl" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-3xl font-bold text-white">Dawid Faith</h3>
                <div className="flex items-center gap-2 bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium">
                  <FaRocket className="text-xs" />
                  Founder & Developer
                </div>
              </div>
              
              <div className="space-y-2 text-zinc-300">
                <p className="text-lg">
                  <span className="text-blue-400 font-semibold">Künstler</span>, 
                  <span className="text-green-400 font-semibold"> Full-Stack-Entwickler</span> und 
                  <span className="text-purple-400 font-semibold"> Blockchain-Innovator</span>
                </p>
                <p>
                  Dawid Faith hat das gesamte D.FAITH Ökosystem als Solo-Entwickler kreiert. 
                  Von der initialen Idee über Smart Contract Development bis hin zur vollständigen 
                  Webapp-Implementation - alles aus einer Hand.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-zinc-700/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-amber-400">774</div>
                <div className="text-sm text-zinc-400">Instagram Follower</div>
              </div>
              <div className="bg-zinc-700/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">3</div>
                <div className="text-sm text-zinc-400">Live Smart Contracts</div>
              </div>
              <div className="bg-zinc-700/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-sm text-zinc-400">Selbst entwickelt</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="flex items-center gap-2 bg-pink-500/20 text-pink-400 px-4 py-2 rounded-xl hover:bg-pink-500/30 transition-colors"
              >
                <FaInstagram />
                @dawidfaith
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:dawid.faith@gmail.com"
                className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl hover:bg-blue-500/30 transition-colors"
              >
                📧 Kontakt
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.dawidfaith.com"
                className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-xl hover:bg-green-500/30 transition-colors"
              >
                🌐 Website
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Expertise & Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-zinc-700/50 to-zinc-800/50 rounded-xl p-4 text-center border border-zinc-600 hover:border-zinc-500 transition-colors"
            >
              <div className="text-sm font-medium text-zinc-300">{skill}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Erreichte Meilensteine</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-6 border border-zinc-700"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-700/50 rounded-xl">
                  {achievement.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-zinc-400">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* One-Man-Team Advantages */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-2xl p-8 border border-amber-500/30"
      >
        <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">Vorteile des One-Man-Team Ansatzes</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
              <div>
                <h4 className="font-semibold text-white mb-1">Vollständige Kontrolle</h4>
                <p className="text-zinc-300 text-sm">Einheitliche Vision ohne Kompromisse oder Kommunikationsbarrieren</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
              <div>
                <h4 className="font-semibold text-white mb-1">Agile Entwicklung</h4>
                <p className="text-zinc-300 text-sm">Schnelle Entscheidungen und Implementierung ohne Team-Abstimmungen</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
              <div>
                <h4 className="font-semibold text-white mb-1">Authentizität</h4>
                <p className="text-zinc-300 text-sm">Direkte Verbindung zwischen Künstler und Technologie</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
              <div>
                <h4 className="font-semibold text-white mb-1">Kosteneffizienz</h4>
                <p className="text-zinc-300 text-sm">Keine externen Entwicklungskosten oder Team-Management</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
              <div>
                <h4 className="font-semibold text-white mb-1">Innovationsfreiheit</h4>
                <p className="text-zinc-300 text-sm">Experimentelle Features ohne Team-Konsens möglich</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-2" />
              <div>
                <h4 className="font-semibold text-white mb-1">Persönliche Motivation</h4>
                <p className="text-zinc-300 text-sm">Direkter Bezug zur eigenen Musik und Fan-Community</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TeamSection
