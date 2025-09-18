'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useSpring, animated, config } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../context/LanguageContext'
import Confetti from 'react-confetti'
import { 
  FaRocket, 
  FaCoins, 
  FaLightbulb,
  FaUsers,
  FaCog,
  FaChartLine,
  FaMusic,
  FaHeart,
  FaBolt,
  FaArrowRight,
  FaMobileAlt
} from 'react-icons/fa'
import Image from 'next/image'

// Flag components
const DEFlag = () => (
  <div className="inline-flex w-6 h-4 bg-gradient-to-b from-black via-red-600 to-yellow-400 rounded border border-gray-300 shadow-sm"></div>
);

const ENFlag = () => (
  <div className="inline-flex w-6 h-4 relative bg-red-600 rounded border border-gray-300 overflow-hidden shadow-sm">
    {/* Red and white stripes */}
    <div className="absolute inset-0">
      <div className="w-full h-0.5 bg-red-600 absolute top-0"></div>
      <div className="w-full h-0.5 bg-white absolute top-0.5"></div>
      <div className="w-full h-0.5 bg-red-600 absolute top-1"></div>
      <div className="w-full h-0.5 bg-white absolute top-1.5"></div>
      <div className="w-full h-0.5 bg-red-600 absolute top-2"></div>
      <div className="w-full h-0.5 bg-white absolute top-2.5"></div>
      <div className="w-full h-0.5 bg-red-600 absolute top-3"></div>
      <div className="w-full h-0.5 bg-white absolute bottom-0"></div>
    </div>
    {/* Blue canton */}
    <div className="absolute top-0 left-0 w-2.5 h-2 bg-blue-800"></div>
    {/* Stars (simplified as small white dots) */}
    <div className="absolute top-0 left-0 w-2.5 h-2">
      <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
      <div className="absolute top-0.5 left-1.5 w-0.5 h-0.5 bg-white rounded-full"></div>
      <div className="absolute top-1.5 left-1 w-0.5 h-0.5 bg-white rounded-full"></div>
    </div>
  </div>
);

const PLFlag = () => (
  <div className="inline-flex w-6 h-4 relative rounded border border-gray-300 overflow-hidden shadow-sm">
    <div className="absolute top-0 left-0 w-full h-2 bg-white"></div>
    <div className="absolute bottom-0 left-0 w-full h-2 bg-red-600"></div>
  </div>
);

// Enhanced Mobile Components (to be created)
import EnhancedHeroSection from './mobile-v2/EnhancedHeroSection'
import InteractiveTimeline from './mobile-v2/InteractiveTimeline'
import GlassmorphismTokenomics from './mobile-v2/GlassmorphismTokenomics'
import WebappShowcase from './mobile-v2/WebappShowcase'
import BottomNavigation from './mobile-v2/BottomNavigation'
import TeamSectionV3 from './mobile-v2/TeamSectionV3'
import RoadmapTimelineV2 from './mobile-v2/RoadmapTimelineV2'

interface MobileWhitepaperV2Props {
  tokenPrices: {
    dfaith: number
    dinvest: number
  }
  activeUsers: number
  isLoading: boolean
}

const MobileWhitepaperV2: React.FC<MobileWhitepaperV2Props> = ({ 
  tokenPrices, 
  activeUsers, 
  isLoading
}) => {
  const { language, setLanguage } = useLanguage()
  const [currentSection, setCurrentSection] = useState('hero')
  const [showConfetti, setShowConfetti] = useState(false)
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Glasmorphismus Background Animation
  const backgroundSpring = useSpring({
    background: currentSection === 'hero' 
      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))' 
      : currentSection === 'solution'
      ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))'
      : currentSection === 'tokenomics'
      ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))'
      : 'linear-gradient(135deg, rgba(251, 146, 60, 0.1), rgba(239, 68, 68, 0.1))',
    config: config.gentle
  })

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])

  const sections = [
    {
      id: 'hero',
      title: 'D.FAITH Ökosystem',
      icon: <FaRocket className="text-blue-400" />,
      gradient: 'from-blue-500 to-purple-600',
      component: <EnhancedHeroSection 
        tokenPrices={tokenPrices} 
        activeUsers={activeUsers} 
        isLoading={isLoading}
        language={language} 
      />
    },
    {
      id: 'problem',
      title: 'Das Problem',
      icon: <FaBolt className="text-red-400" />,
      gradient: 'from-red-500 to-orange-500',
      component: <ProblemSectionV2 language={language} />
    },
    {
      id: 'solution',
      title: 'Die Lösung',
      icon: <FaLightbulb className="text-green-400" />,
      gradient: 'from-green-500 to-emerald-500',
      component: <SolutionSectionV2 language={language} />
    },
    {
      id: 'process',
      title: 'Prozess',
      icon: <FaCog className="text-blue-400" />,
      gradient: 'from-blue-500 to-cyan-500',
      component: <InteractiveTimeline />
    },
    {
      id: 'tokenomics',
      title: 'Tokenomics',
      icon: <FaCoins className="text-purple-400" />,
      gradient: 'from-purple-500 to-pink-500',
      component: <GlassmorphismTokenomics tokenPrices={tokenPrices} />
    },
    {
      id: 'webapp',
      title: 'Webapp',
      icon: <FaMobileAlt className="text-cyan-400" />,
      gradient: 'from-cyan-500 to-blue-500',
      component: <WebappShowcase />
    },
    {
      id: 'team',
      title: 'Team',
      icon: <FaUsers className="text-amber-400" />,
      gradient: 'from-amber-500 to-orange-500',
      component: <TeamSectionV3 />
    },
    {
      id: 'roadmap',
      title: 'Roadmap',
      icon: <FaChartLine className="text-cyan-400" />,
      gradient: 'from-cyan-500 to-purple-500',
      component: <RoadmapTimelineV2 />
    }
  ]

  // Intersection Observer für Section Detection
  const [heroRef, heroInView] = useInView({ threshold: 0.5 })
  const [problemRef, problemInView] = useInView({ threshold: 0.5 })
  const [solutionRef, solutionInView] = useInView({ threshold: 0.5 })
  const [processRef, processInView] = useInView({ threshold: 0.5 })
  const [tokenomicsRef, tokenomicsInView] = useInView({ threshold: 0.5 })
  const [webappRef, webappInView] = useInView({ threshold: 0.5 })
  const [teamRef, teamInView] = useInView({ threshold: 0.5 })
  const [roadmapRef, roadmapInView] = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (heroInView) setCurrentSection('hero')
    else if (problemInView) setCurrentSection('problem')
    else if (solutionInView) setCurrentSection('solution')
    else if (processInView) setCurrentSection('process')
    else if (tokenomicsInView) setCurrentSection('tokenomics')
    else if (webappInView) setCurrentSection('webapp')
    else if (teamInView) setCurrentSection('team')
    else if (roadmapInView) setCurrentSection('roadmap')
  }, [heroInView, problemInView, solutionInView, processInView, tokenomicsInView, webappInView, teamInView, roadmapInView])

  // Confetti Trigger
  useEffect(() => {
    if (currentSection === 'tokenomics') {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }, [currentSection])

  return (
    <animated.div 
      ref={containerRef}
      style={backgroundSpring}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.1}
        />
      )}

      {/* Mobile Language Switcher - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="p-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/20 hover:bg-black/70 transition-colors flex items-center gap-2"
            aria-label="Sprache wechseln"
          >
            {language === 'de' && <DEFlag />}
            {language === 'en' && <ENFlag />}
            {language === 'pl' && <PLFlag />}
            <span className="text-white text-xs">▼</span>
          </button>
          
          <AnimatePresence>
            {showLanguageDropdown && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full right-0 mt-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg shadow-xl overflow-hidden"
              >
                <button
                  onClick={() => { setLanguage('de'); setShowLanguageDropdown(false); }}
                  className="w-full px-3 py-2 text-left hover:bg-white/10 transition-colors flex items-center gap-2 text-white"
                >
                  <DEFlag />
                  <span className="text-xs">Deutsch</span>
                </button>
                <button
                  onClick={() => { setLanguage('en'); setShowLanguageDropdown(false); }}
                  className="w-full px-3 py-2 text-left hover:bg-white/10 transition-colors flex items-center gap-2 text-white"
                >
                  <ENFlag />
                  <span className="text-xs">English</span>
                </button>
                <button
                  onClick={() => { setLanguage('pl'); setShowLanguageDropdown(false); }}
                  className="w-full px-3 py-2 text-left hover:bg-white/10 transition-colors flex items-center gap-2 text-white"
                >
                  <PLFlag />
                  <span className="text-xs">Polski</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/2 -left-40 w-60 h-60 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Main Content */}
      <div className="relative z-10 pb-20">
        {/* Hero Section */}
        <section ref={heroRef} data-section="hero" className="min-h-screen">
          {sections[0].component}
        </section>

        {/* Problem Section */}
        <section ref={problemRef} data-section="problem" className="min-h-screen">
          {sections[1].component}
        </section>

        {/* Solution Section */}
        <section ref={solutionRef} data-section="solution" className="min-h-screen">
          {sections[2].component}
        </section>

        {/* Process Section */}
        <section ref={processRef} data-section="process" className="min-h-screen">
          {sections[3].component}
        </section>

        {/* Tokenomics Section */}
        <section ref={tokenomicsRef} data-section="tokenomics" className="min-h-screen">
          {sections[4].component}
        </section>

        {/* Webapp Section */}
        <section ref={webappRef} data-section="webapp" className="min-h-screen">
          {sections[5].component}
        </section>

        {/* Team Section */}
        <section ref={teamRef} data-section="team" className="min-h-screen">
          {sections[6].component}
        </section>

        {/* Roadmap Section */}
        <section ref={roadmapRef} data-section="roadmap" className="min-h-screen">
          {sections[7].component}
        </section>
      </div>

      {/* Navigation entfernt: keine BottomNavigation mehr */}
    </animated.div>
  )
}

// Problem Section Translations
const ProblemSectionTranslations = (language: 'de' | 'en' | 'pl') => {
  const content = {
    de: {
      title: 'Das Problem',
      subtitle: 'Zentrale Herausforderungen für unabhängige Künstler',
      founderTitle: 'Gründer & Künstler',
      quote: 'Als unabhängiger Künstler stehe ich vor den gleichen Problemen wie viele andere: Mein Content bekommt nicht die Reichweite, die er verdient. Bezahlte Werbung ist teuer und zeitintensiv - und das Geld habe ich nicht. Außerdem fehlt mir das Kapital für Musikproduktion. Deshalb entwickelte ich D.FAITH: um Fans direkt für ihr Engagement zu belohnen und gleichzeitig Kapital für meine Musik zu generieren.',
      problems: [
        {
          title: "Geringe Reichweite",
          level: "HOCH",
          description: "Qualitätsvoller Content erreicht nicht genug Menschen organisch",
          impact: "Wenige neue Follower trotz gutem Content"
        },
        {
          title: "Teure Werbung",
          level: "HOCH",
          description: "Paid Ads kosten viel, bringen aber nicht nachhaltige Fans",
          impact: "Hohe Kosten ohne garantierte ROI"
        },
        {
          title: "Fehlendes Kapital",
          level: "MITTEL",
          description: "Keine Mittel für Musikproduktion und professionelle Videos",
          impact: "Limitierte Produktionsqualität"
        },
        {
          title: "Schwaches Engagement",
          level: "NIEDRIG",
          description: "Fan-Interaktionen bringen keinen direkten Mehrwert",
          impact: "Oberflächliche Fan-Beziehungen"
        }
      ],
      viciouscircle: {
        title: 'Der Teufelskreis',
        centerText: 'TEUFELSKREIS',
        centerSubtext: 'Endlose Schleife',
        explanation: 'Jeder Punkt verstärkt den nächsten in einem endlosen Kreislauf der Stagnation.',
        solution: 'D.FAITH durchbricht diesen Kreislauf!',
        nodes: [
          'Geringe\nReichweite',
          'Schwaches\nEngagement',
          'Keine\nneuen Fans',
          'Kein\nEinkommen',
          'Keine\nInvestition',
          'Schlechter\nContent'
        ]
      },
      impact: 'Impact'
    },
    en: {
      title: 'The Problem',
      subtitle: 'Core challenges for independent artists',
      founderTitle: 'Founder & Artist',
      quote: 'As an independent artist, I face the same problems as many others: My content doesn\'t get the reach it deserves. Paid advertising is expensive and time-consuming - and I don\'t have the money. I also lack the capital for music production. That\'s why I developed D.FAITH: to reward fans directly for their engagement while generating capital for my music.',
      problems: [
        {
          title: "Low Reach",
          level: "HIGH",
          description: "Quality content doesn't reach enough people organically",
          impact: "Few new followers despite good content"
        },
        {
          title: "Expensive Advertising",
          level: "HIGH",
          description: "Paid ads cost a lot but don't bring sustainable fans",
          impact: "High costs without guaranteed ROI"
        },
        {
          title: "Missing Capital",
          level: "MEDIUM",
          description: "No funds for music production and professional videos",
          impact: "Limited production quality"
        },
        {
          title: "Weak Engagement",
          level: "LOW",
          description: "Fan interactions don't bring direct added value",
          impact: "Superficial fan relationships"
        }
      ],
      viciouscircle: {
        title: 'The Vicious Cycle',
        centerText: 'VICIOUS CYCLE',
        centerSubtext: 'Endless Loop',
        explanation: 'Each point reinforces the next in an endless cycle of stagnation.',
        solution: 'D.FAITH breaks this cycle!',
        nodes: [
          'Low\nReach',
          'Weak\nEngagement',
          'No new\nFans',
          'No\nIncome',
          'No\nInvestment',
          'Poor\nContent'
        ]
      },
      impact: 'Impact'
    },
    pl: {
      title: 'Problem',
      subtitle: 'Główne wyzwania dla niezależnych artystów',
      founderTitle: 'Założyciel i Artysta',
      quote: 'Jako niezależny artysta stoję przed tymi samymi problemami co wielu innych: Moja treść nie dostaje zasięgu, na który zasługuje. Płatne reklamy są drogie i czasochłonne - a nie mam pieniędzy. Brakuje mi także kapitału na produkcję muzyczną. Dlatego stworzyłem D.FAITH: aby nagradzać fanów bezpośrednio za ich zaangażowanie, jednocześnie generując kapitał na moją muzykę.',
      problems: [
        {
          title: "Niski Zasięg",
          level: "WYSOKI",
          description: "Jakościowe treści nie docierają organicznie do wystarczającej liczby osób",
          impact: "Mało nowych obserwujących pomimo dobrej treści"
        },
        {
          title: "Droga Reklama",
          level: "WYSOKI",
          description: "Płatne reklamy kosztują dużo, ale nie przynoszą trwałych fanów",
          impact: "Wysokie koszty bez gwarantowanego zwrotu"
        },
        {
          title: "Brakujący Kapitał",
          level: "ŚREDNI",
          description: "Brak środków na produkcję muzyczną i profesjonalne wideo",
          impact: "Ograniczona jakość produkcji"
        },
        {
          title: "Słabe Zaangażowanie",
          level: "NISKI",
          description: "Interakcje z fanami nie przynoszą bezpośredniej wartości dodanej",
          impact: "Powierzchowne relacje z fanami"
        }
      ],
      viciouscircle: {
        title: 'Błędne Koło',
        centerText: 'BŁĘDNE KOŁO',
        centerSubtext: 'Niekończąca się Pętla',
        explanation: 'Każdy punkt wzmacnia następny w niekończącym się cyklu stagnacji.',
        solution: 'D.FAITH przerywa ten cykl!',
        nodes: [
          'Niski\nZasięg',
          'Słabe\nZaangażowanie',
          'Brak nowych\nFanów',
          'Brak\nDochodu',
          'Brak\nInwestycji',
          'Słaba\nTreść'
        ]
      },
      impact: 'Wpływ'
    }
  };
  return content[language];
};

// Solution Section Translations
const SolutionSectionTranslations = (language: 'de' | 'en' | 'pl') => {
  const content = {
    de: {
      title: 'Die D.FAITH Revolution',
      subtitle: 'Ein intelligentes Dual-Token-System, das den Teufelskreis durchbricht und eine Win-Win-Situation für Künstler und Fans schafft',
      dfaith: {
        name: 'D.FAITH',
        subtitle: 'Fan-Belohnungstoken',
        features: [
          'Belohnt treue Fans für ihr Engagement',
          'Kann in ETH getauscht oder im Shop verwendet werden',
          'Wertsteigerung durch Verknappung'
        ]
      },
      dinvest: {
        name: 'D.INVEST',
        subtitle: 'Investitions-Token',
        features: [
          'Ermöglicht Kapitalbeschaffung für Musikproduktion',
          'Entsperrt gesperrte D.FAITH Token durch Staking',
          'Investoren profitieren von steigenden D.FAITH Preisen'
        ]
      },
      coreIdea: {
        title: '💡 Die Kernidee',
        description: 'investiert Dawid Faith direkt in',
        highlight1: 'Statt Geld für Werbung auszugeben',
        highlight2: 'Fan-Belohnungen',
        highlight3: 'selbstverstärkenden Kreislauf',
        continuation: '. Das motiviert Fans zu mehr Engagement, was zu besserer Reichweite und einem',
        end: 'führt.',
        beforeLabel: 'VORHER',
        beforeText: 'Geld für Werbung ohne Garantie',
        afterLabel: 'NACHHER',
        afterText: 'Direkter Fan-Nutzen + Kapital'
      }
    },
    en: {
      title: 'The D.FAITH Revolution',
      subtitle: 'An intelligent dual-token system that breaks the vicious cycle and creates a win-win situation for artists and fans',
      dfaith: {
        name: 'D.FAITH',
        subtitle: 'Fan Reward Token',
        features: [
          'Rewards loyal fans for their engagement',
          'Can be exchanged for ETH or used in the shop',
          'Value increase through scarcity'
        ]
      },
      dinvest: {
        name: 'D.INVEST',
        subtitle: 'Investment Token',
        features: [
          'Enables capital raising for music production',
          'Unlocks locked D.FAITH tokens through staking',
          'Investors profit from rising D.FAITH prices'
        ]
      },
      coreIdea: {
        title: '💡 The Core Idea',
        description: ', Dawid Faith invests directly in',
        highlight1: 'Instead of spending money on advertising',
        highlight2: 'fan rewards',
        highlight3: 'self-reinforcing cycle',
        continuation: '. This motivates fans to engage more, leading to better reach and a',
        end: '.',
        beforeLabel: 'BEFORE',
        beforeText: 'Money for ads without guarantee',
        afterLabel: 'AFTER',
        afterText: 'Direct fan benefit + capital'
      }
    },
    pl: {
      title: 'Rewolucja D.FAITH',
      subtitle: 'Inteligentny system podwójnych tokenów, który przerywa błędne koło i tworzy sytuację korzystną dla artystów i fanów',
      dfaith: {
        name: 'D.FAITH',
        subtitle: 'Token Nagrody dla Fanów',
        features: [
          'Nagradza lojalnych fanów za ich zaangażowanie',
          'Może być wymieniony na ETH lub używany w sklepie',
          'Wzrost wartości przez rzadkość'
        ]
      },
      dinvest: {
        name: 'D.INVEST',
        subtitle: 'Token Inwestycyjny',
        features: [
          'Umożliwia pozyskiwanie kapitału na produkcję muzyczną',
          'Odblokowuje zablokowane tokeny D.FAITH przez staking',
          'Inwestorzy zyskują na rosnących cenach D.FAITH'
        ]
      },
      coreIdea: {
        title: '💡 Główna Idea',
        description: ', Dawid Faith inwestuje bezpośrednio w',
        highlight1: 'Zamiast wydawać pieniądze na reklamę',
        highlight2: 'nagrody dla fanów',
        highlight3: 'samonapędzający się cykl',
        continuation: '. To motywuje fanów do większego zaangażowania, co prowadzi do lepszego zasięgu i',
        end: '.',
        beforeLabel: 'WCZEŚNIEJ',
        beforeText: 'Pieniądze na reklamy bez gwarancji',
        afterLabel: 'TERAZ',
        afterText: 'Bezpośrednie korzyści dla fanów + kapitał'
      }
    }
  };
  return content[language];
};

// Enhanced Problem Section Component
const ProblemSectionV2: React.FC<{ language?: 'de' | 'en' | 'pl' }> = ({ language = 'de' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const t = ProblemSectionTranslations(language)

  // Use component types instead of an array of JSX elements to avoid jsx-key lint errors
  const problemIconComponents = [FaBolt, FaCoins, FaChartLine, FaHeart] as const
  const problems = t.problems.map((problem, index) => ({
    ...problem,
    color: index < 2 ? 'red' : index === 2 ? 'orange' : 'yellow',
    icon: problemIconComponents[index]
  }))

  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
          {t.title}
        </h2>
        <p className="text-gray-300 text-lg">
          {t.subtitle}
        </p>
      </motion.div>

      {/* Dawid Faith Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 mb-8 border border-white/20"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <Image
              src="/dawid-faith-photo.jpg"
              alt="Dawid Faith"
              width={60}
              height={60}
              className="rounded-full border-2 border-red-500/50"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <FaMusic className="text-white text-xs" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-red-400 text-lg">Dawid Faith</h4>
            <p className="text-gray-400 text-sm">{t.founderTitle}</p>
          </div>
        </div>
        <p className="text-white leading-relaxed italic">
          &quot;{t.quote}&quot;
        </p>
      </motion.div>

      {/* Problems Grid */}
      <div className="space-y-4">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className="backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {(() => {
                  const IconComp = problem.icon
                  const iconClass = problem.color === 'red'
                    ? 'text-red-500'
                    : problem.color === 'orange'
                    ? 'text-orange-500'
                    : 'text-yellow-500'
                  return <IconComp className={iconClass} />
                })()}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h5 className="font-bold text-white">{problem.title}</h5>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    problem.color === 'red' ? 'bg-red-500/20 text-red-300' :
                    problem.color === 'orange' ? 'bg-orange-500/20 text-orange-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {problem.level}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-2">{problem.description}</p>
                <p className="text-gray-400 text-xs">{t.impact}: {problem.impact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Teufelskreis */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-8 backdrop-blur-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-6 border border-red-500/20"
      >
        <h4 className="text-lg font-bold text-red-400 mb-6 text-center">{t.viciouscircle.title}</h4>
        
        {/* Circular Visualization */}
        <div className="relative w-80 h-80 mx-auto mb-4">
          <svg viewBox="0 0 320 320" className="w-full h-full">
            {/* Background Circle */}
            <circle
              cx="160"
              cy="160"
              r="120"
              fill="none"
              stroke="rgba(239, 68, 68, 0.2)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            
            {/* Animated Circle Path */}
            <motion.circle
              cx="160"
              cy="160"
              r="120"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 3, delay: 1.2 }}
            />
            
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="25%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="75%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            
            {/* Problem Nodes */}
            {[
              { x: 160, y: 40, color: '#ef4444', angle: 0 },
              { x: 264, y: 104, color: '#f97316', angle: 72 },
              { x: 264, y: 216, color: '#eab308', angle: 144 },
              { x: 160, y: 280, color: '#22c55e', angle: 216 },
              { x: 56, y: 216, color: '#3b82f6', angle: 288 },
              { x: 56, y: 104, color: '#8b5cf6', angle: 360 }
            ].map((node, index) => (
              <g key={index}>
                <motion.rect
                  x={node.x - 35}
                  y={node.y - 18}
                  width="70"
                  height="36"
                  rx="8"
                  fill={node.color}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 0.9 } : {}}
                  transition={{ duration: 0.6, delay: 1.5 + index * 0.2 }}
                />
                <motion.text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-white text-xs font-bold"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                >
                  {t.viciouscircle.nodes[index].split('\n').map((line, lineIndex) => (
                    <tspan key={lineIndex} x={node.x} dy={lineIndex === 0 ? -4 : 10}>
                      {line}
                    </tspan>
                  ))}
                </motion.text>
              </g>
            ))}
            
          </svg>
          
          {/* Center Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center bg-black/40 backdrop-blur-sm rounded-full p-4 border border-red-500/30">
              <div className="text-red-400 font-bold text-sm">{t.viciouscircle.centerText}</div>
              <div className="text-gray-300 text-xs">{t.viciouscircle.centerSubtext}</div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom explanation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="text-center text-sm text-gray-400 leading-relaxed"
        >
          {t.viciouscircle.explanation}
          <br />
          <span className="text-red-300 font-semibold">{t.viciouscircle.solution}</span>
        </motion.p>
      </motion.div>
    </div>
  )
}

// Enhanced Solution Section Component
const SolutionSectionV2: React.FC<{ language?: 'de' | 'en' | 'pl' }> = ({ language = 'de' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const t = SolutionSectionTranslations(language)
  
  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
            <FaLightbulb className="text-2xl text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-4">
          {t.title}
        </h2>
        <p className="text-gray-300 text-lg">
          {t.subtitle}
        </p>
      </motion.div>

      {/* Token Cards */}
      <div className="space-y-6 mb-8">
        {/* D.FAITH Token */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl p-6 border border-amber-500/30"
        >
          <div className="flex items-center gap-4 mb-6">
            <Image src="/d-faith-logo.png" alt="D.FAITH Logo" width={60} height={60} className="rounded-xl" />
            <div>
              <h3 className="text-2xl font-bold text-amber-400">{t.dfaith.name}</h3>
              <p className="text-amber-300">{t.dfaith.subtitle}</p>
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            {t.dfaith.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                {index === 0 && <FaUsers className="text-amber-400" />}
                {index === 1 && <FaCoins className="text-amber-400" />}
                {index === 2 && <FaChartLine className="text-amber-400" />}
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* D.INVEST Token */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-6 border border-blue-500/30"
        >
          <div className="flex items-center gap-4 mb-6">
            <Image src="/d-invest-logo.png" alt="D.INVEST Logo" width={60} height={60} className="rounded-xl" />
            <div>
              <h3 className="text-2xl font-bold text-blue-400">{t.dinvest.name}</h3>
              <p className="text-blue-300">{t.dinvest.subtitle}</p>
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            {t.dinvest.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                {index === 0 && <FaCoins className="text-blue-400" />}
                {index === 1 && <FaChartLine className="text-blue-400" />}
                {index === 2 && <FaUsers className="text-blue-400" />}
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Kernidee */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="backdrop-blur-xl bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-6 border border-green-500/30"
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            {t.coreIdea.title}
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <span className="font-bold text-red-300">{t.coreIdea.highlight1}</span>
            {t.coreIdea.description} <span className="font-bold text-green-300">{t.coreIdea.highlight2}</span>
            {t.coreIdea.continuation} <span className="font-bold text-purple-300">{t.coreIdea.highlight3}</span>
            {t.coreIdea.end}
          </p>
          
          <div className="flex justify-center items-center space-x-3">
            <div className="text-center">
              <div className="bg-red-500/20 rounded-lg p-2 mb-1">
                <span className="text-xs font-bold text-red-400">{t.coreIdea.beforeLabel}</span>
              </div>
              <p className="text-xs text-gray-400">{t.coreIdea.beforeText}</p>
            </div>
            <FaArrowRight className="text-green-400 text-lg" />
            <div className="text-center">
              <div className="bg-green-500/20 rounded-lg p-2 mb-1">
                <span className="text-xs font-bold text-green-400">{t.coreIdea.afterLabel}</span>
              </div>
              <p className="text-xs text-gray-400">{t.coreIdea.afterText}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MobileWhitepaperV2