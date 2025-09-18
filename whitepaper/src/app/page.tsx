"use client";
import TeamSectionWeb from '../components/TeamSectionWeb'
import RoadmapTimelineWeb from '../components/RoadmapTimelineWeb'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  FaRocket, 
  FaInstagram,
  FaExternalLinkAlt
} from 'react-icons/fa'

// Komponenten
import NavigationMenu from '../components/NavigationMenu'
import HeroSection from '../components/HeroSection'
import SolutionSection from '../components/SolutionSection'
import TokenomicsChart from '../components/TokenomicsChart'
import WebappShowcaseSection from '../components/WebappShowcaseSection'
import LiveStatsFixed from '../components/LiveStatsFixed'
import MobileWhitepaperV2 from '../components/MobileWhitepaperV2'
import useDeviceDetection from '../hooks/useDeviceDetection'
import { useLanguage } from '../context/LanguageContext';

const WhitepaperPage = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isMobile } = useDeviceDetection();
  const [tokenPrices, setTokenPrices] = useState({ dfaith: 0.05, dinvest: 5.00 });
  const [activeUsers, setActiveUsers] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lade die Live-Daten
    const fetchData = async () => {
      try {
        // Token Preise laden
        const pricesResponse = await fetch('/api/token-prices');
        if (pricesResponse.ok) {
          const pricesData = await pricesResponse.json();
          setTokenPrices({
            dfaith: pricesData.dfaith || 0.05,
            dinvest: pricesData.dinvest || 5.00
          });
        }
        // Aktive User laden
        const leaderboardResponse = await fetch('/api/leaderboard');
        if (leaderboardResponse.ok) {
          const leaderboardData = await leaderboardResponse.json();
          setActiveUsers(leaderboardData.totalUsers || 0);
        }
      } catch (error) {
        console.error('Fehler beim Laden der Daten:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isMobile) {
    return (
      <MobileWhitepaperV2 
        tokenPrices={tokenPrices}
        activeUsers={activeUsers}
        isLoading={isLoading}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      <NavigationMenu 
        activeSection={activeSection}
        onSectionChange={() => {}}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <HeroSection onScrollToNext={() => {}} language={language} />
      </section>
      <div className="fixed top-20 right-4 z-40 hidden lg:block">
        <LiveStatsFixed />
      </div>
      <SolutionSection language={language} />
      <section id="tokenomics" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <TokenomicsChart language={language} />
        </div>
      </section>
      <WebappShowcaseSection language={language} />
      <section id="roadmap" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <RoadmapTimelineWeb language={language} />
        </div>
      </section>
      <section id="team" className="py-20 px-4">
        <TeamSectionWeb language={language} />
      </section>
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              {language === 'de' && 'Werden Sie Teil der Revolution'}
              {language === 'en' && 'Join the Revolution'}
              {language === 'pl' && 'Dołącz do rewolucji'}
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              {language === 'de' && 'Investieren Sie in die Zukunft des Fan-Engagements und profitieren Sie von innovativer Blockchain-Technologie'}
              {language === 'en' && 'Invest in the future of fan engagement and benefit from innovative blockchain technology'}
              {language === 'pl' && 'Zainwestuj w przyszłość zaangażowania fanów i skorzystaj z innowacyjnej technologii blockchain'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity"
              >
                <FaRocket className="text-xl" />
                {language === 'de' && 'D.INVEST Token kaufen'}
                {language === 'en' && 'Buy D.INVEST Token'}
                {language === 'pl' && 'Kup token D.INVEST'}
                <FaExternalLinkAlt className="text-sm" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-amber-400 text-amber-400 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 hover:bg-amber-400/10 transition-colors"
              >
                <FaInstagram className="text-xl" />
                @dawidfaith {language === 'pl' && 'obserwuj'}{language === 'en' && 'follow'}{language === 'de' && 'folgen'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <footer className="py-12 px-4 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Image 
                src="/d-faith-logo.png" 
                alt="D.FAITH Logo" 
                width={40} 
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">D.FAITH Ökosystem</h3>
                <p className="text-zinc-400 text-sm">Revolutionäres Fan-Engagement</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://www.dawidfaith.com" className="text-zinc-400 hover:text-white transition-colors">
                Website
              </a>
              <a href="mailto:dawid.faith@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                Kontakt
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500 text-sm">
            <p>&copy; 2025 D.FAITH Ökosystem. Alle Rechte vorbehalten.</p>
            <p className="mt-2">Dieses Whitepaper dient als lebendiges Dokument und wird regelmäßig aktualisiert.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default WhitepaperPage
