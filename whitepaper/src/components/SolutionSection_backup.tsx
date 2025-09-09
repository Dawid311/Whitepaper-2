"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { 
  FaTrophy, FaUsers, FaMusic, FaDollarSign, FaCoins, 
  FaChartLine, FaLock, FaUnlock, FaUser, FaTiktok, 
  FaInstagram, FaFacebook, FaHeart, FaComment, FaShare, 
  FaSave, FaRocket, FaShieldAlt, FaClock, FaExchangeAlt,
  FaMobileAlt
} from 'react-icons/fa'

const SolutionSection = () => {
  const [selectedBranch, setSelectedBranch] = useState<'contract' | 'rewards' | null>(null)
  const [activeModal, setActiveModal] = useState<string | null>(null)

  // Modal content und andere Funktionen hier...
  // (Alle aktuellen Modal-Inhalte beibehalten)

  const steps = [
    {
      id: 1,
      title: 'Fan Interaktion',
      description: 'Fans liken, kommentieren, teilen und speichern',
      icons: [FaTiktok, FaInstagram, FaFacebook],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Automatische Käufe von D.FAITH',
      description: '',
      icons: [FaDollarSign, FaMusic],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Token Verteilung',
      description: '',
      iconType: 'dfaith',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const branches = [
    {
      key: 'contract' as const,
      title: 'Smart Contract',
      subtitle: 'Extreme Verknappung durch Halving-Mechanismus',
      icon: FaLock,
      color: 'from-blue-500 to-cyan-500',
      steps: [
        {
          id: 'token-sammlung',
          icon: FaCoins,
          title: 'Token Sammlung',
          description: '50% aller D.FAITH Käufe werden dauerhaft gesperrt',
          color: 'text-blue-400'
        },
        {
          id: 'halving-mechanismus',
          icon: FaChartLine,
          title: 'Halving-Mechanismus',
          description: 'Reward-Rate halbiert sich automatisch bei steigender Verteilung',
          color: 'text-cyan-400'
        },
        {
          id: 'wertsteigerung',
          icon: FaShieldAlt,
          title: 'Wertsteigerung',
          description: 'D.FAITH wird kontinuierlich seltener und wertvoller',
          color: 'text-blue-300'
        },
        {
          id: 'dinvest-staking',
          icon: FaUnlock,
          title: 'D.INVEST Staking',
          description: 'Entsperrt die gesperrten D.FAITH Token aus dem Smart Contract',
          color: 'text-cyan-300'
        }
      ]
    },
    {
      key: 'rewards' as const,
      title: 'Token Rewards',
      subtitle: 'Globales EXP-System mit direkten Belohnungen',
      icon: FaTrophy,
      color: 'from-purple-500 to-pink-500',
      steps: [
        {
          id: 'auto-registrierung',
          icon: FaUser,
          title: 'Auto-Registrierung',
          description: 'Profil wird automatisch erstellt und mit Dawid Faith Wallet verknüpft',
          color: 'text-purple-400'
        },
        {
          id: 'level-system',
          icon: FaTrophy,
          title: 'Level-basierte Rewards',
          description: 'Token-Rewards steigen mit deinem EXP-Level',
          color: 'text-pink-400'
        },
        {
          id: 'exklusiver-shop',
          icon: FaMusic,
          title: 'Exklusiver Shop',
          description: 'Tausche Token gegen limitierte Musikprodukte ein',
          color: 'text-purple-300'
        },
        {
          id: 'sofort-verkauf',
          icon: FaDollarSign,
          title: 'D.FAITH Token verkaufen',
          description: 'Verkaufe D.FAITH über die Dawid Faith Wallet',
          color: 'text-pink-300'
        }
      ]
    }
  ]

  return (
    <section id="solution" className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/10 overflow-hidden">
      {/* Backup der aktuellen Version */}
    </section>
  )
}

export default SolutionSection
