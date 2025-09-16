"use client";
import { FaRocket, FaChartLine, FaUsers, FaLock, FaWallet, FaShoppingCart, FaMusic, FaInstagram, FaTiktok, FaFacebook, FaSpotify, FaArrowRight } from "react-icons/fa";
import React from 'react'
import { motion } from 'framer-motion'
// Inhalte aus WebappShowcase (Features, Plattformen, Live-Daten)

const WebappShowcaseSection: React.FC = () => {
  return (
    <section id="webapp" className="relative w-full py-24 px-0 bg-gradient-to-tr from-blue-950 via-zinc-900 to-purple-950 overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-12">
        {/* Header mit Icon, Headline, Slogan */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-center">
          <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 via-pink-500 to-purple-500 shadow-lg">
            <FaRocket className="text-white text-4xl" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">D.FAITH Webapp</h2>
            <p className="text-lg md:text-xl text-zinc-200 font-medium">Alle Funktionen. Alle Plattformen. Deine Community.</p>
          </div>
        </div>
        {/* Feature-Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div className="rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-400/30 p-5 flex flex-col items-center text-center shadow">
            <FaWallet className="text-2xl text-amber-400 mb-2" />
            <span className="font-bold text-amber-300 mb-1">Wallet</span>
            <span className="text-xs text-zinc-200 mb-1">Token-Management & Staking</span>
            <span className="text-xs text-zinc-400">Kaufen, verkaufen, verdienen</span>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/10 border border-pink-400/30 p-5 flex flex-col items-center text-center shadow">
            <FaUsers className="text-2xl text-pink-400 mb-2" />
            <span className="font-bold text-pink-300 mb-1">Social Profiles</span>
            <span className="text-xs text-zinc-200 mb-1">Fan-Engagement & Leaderboard</span>
            <span className="text-xs text-zinc-400">Instagram, TikTok, Facebook</span>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 border border-emerald-400/30 p-5 flex flex-col items-center text-center shadow">
            <FaShoppingCart className="text-2xl text-emerald-400 mb-2" />
            <span className="font-bold text-emerald-300 mb-1">Exklusiv Shop</span>
            <span className="text-xs text-zinc-200 mb-1">Merch, Tickets, Musik</span>
            <span className="text-xs text-zinc-400">Nur mit D.FAITH Token</span>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-400/30 p-5 flex flex-col items-center text-center shadow">
            <FaMusic className="text-2xl text-blue-400 mb-2" />
            <span className="font-bold text-blue-300 mb-1">Live Konzerte</span>
            <span className="text-xs text-zinc-200 mb-1">Konzert-Integration & Codes</span>
            <span className="text-xs text-zinc-400">Belohnungen & NFT-Plan</span>
          </div>
        </div>
        {/* Plattform-Badges */}
        <div className="flex flex-wrap gap-3 justify-center items-center mt-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-semibold"><FaInstagram /> Instagram</span>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 text-white text-xs font-semibold"><FaTiktok /> TikTok</span>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold"><FaFacebook /> Facebook</span>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-semibold"><FaSpotify /> Spotify</span>
        </div>
        {/* Call-to-Action */}
        <div className="w-full flex justify-center mt-4">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform text-lg flex items-center gap-2 animate-pulse">
            Webapp entdecken <FaArrowRight className="text-base" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default WebappShowcaseSection
