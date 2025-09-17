"use client";
import { FaRocket, FaChartLine, FaUsers, FaLock, FaWallet, FaShoppingCart, FaMusic, FaInstagram, FaTiktok, FaFacebook, FaSpotify, FaArrowRight } from "react-icons/fa";
import { webappShowcaseSectionTranslations } from './WebappShowcaseSectionTranslations';
import React from 'react'
import { motion } from 'framer-motion'
// Inhalte aus WebappShowcase (Features, Plattformen, Live-Daten)

interface WebappShowcaseSectionProps {
  language: 'de' | 'en' | 'pl';
}

const WebappShowcaseSection: React.FC<WebappShowcaseSectionProps> = ({ language }) => {
  const t = webappShowcaseSectionTranslations[language];

  // Hilfsfunktion für Icons
  const iconMap: Record<string, React.ReactNode> = {
    FaWallet: <FaWallet className="text-2xl text-amber-400 mb-2" />,
    FaUsers: <FaUsers className="text-2xl text-pink-400 mb-2" />,
    FaShoppingCart: <FaShoppingCart className="text-2xl text-emerald-400 mb-2" />,
    FaMusic: <FaMusic className="text-2xl text-blue-400 mb-2" />,
    FaInstagram: <FaInstagram />,
    FaTiktok: <FaTiktok />,
    FaFacebook: <FaFacebook />,
    FaSpotify: <FaSpotify />,
  };

  return (
    <section id="webapp" className="relative w-full py-24 px-0 bg-gradient-to-tr from-blue-950 via-zinc-900 to-purple-950 overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-12">
        {/* Header mit Icon, Headline, Slogan */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-center">
          <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 via-pink-500 to-purple-500 shadow-lg">
            <FaRocket className="text-white text-4xl" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">{t.headline}</h2>
            <p className="text-lg md:text-xl text-zinc-200 font-medium">{t.slogan}</p>
          </div>
        </div>
        {/* Feature-Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {t.features.map((feature, i) => (
            <div key={feature.title + i} className={`rounded-2xl bg-gradient-to-br ${i === 0 ? 'from-amber-500/20 to-yellow-500/10 border-amber-400/30' : i === 1 ? 'from-pink-500/20 to-purple-500/10 border-pink-400/30' : i === 2 ? 'from-emerald-500/20 to-green-500/10 border-emerald-400/30' : 'from-blue-500/20 to-cyan-500/10 border-blue-400/30'} p-5 flex flex-col items-center text-center shadow`}>
              {iconMap[feature.icon]}
              <span className={`font-bold mb-1 ${i === 0 ? 'text-amber-300' : i === 1 ? 'text-pink-300' : i === 2 ? 'text-emerald-300' : 'text-blue-300'}`}>{feature.title}</span>
              <span className="text-xs text-zinc-200 mb-1">{feature.subtitle}</span>
              <span className="text-xs text-zinc-400">{feature.detail}</span>
            </div>
          ))}
        </div>
        {/* Plattform-Badges */}
        <div className="flex flex-wrap gap-3 justify-center items-center mt-2">
          {t.platforms.map((platform, i) => (
            <span key={platform.label + i} className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${platform.icon === 'FaInstagram' ? 'bg-pink-500/20 text-pink-300' : platform.icon === 'FaTiktok' ? 'bg-black/40 text-white' : platform.icon === 'FaFacebook' ? 'bg-blue-500/20 text-blue-300' : 'bg-green-500/20 text-green-300'} text-xs font-semibold`}>
              {iconMap[platform.icon]}
              {platform.label}
            </span>
          ))}
        </div>
        {/* Call-to-Action */}
        <div className="w-full flex justify-center mt-4">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform text-lg flex items-center gap-2 animate-pulse">
            {t.cta} <FaArrowRight className="text-base" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default WebappShowcaseSection
