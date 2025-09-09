"use client"
import React, { useState } from 'react'
import { 
  FaUsers, FaExchangeAlt, FaCoins, FaLock, FaTrophy, FaTiktok, 
  FaInstagram, FaFacebook, FaDollarSign, FaMusic, FaChartLine, 
  FaHeart, FaComment, FaShare, FaSave, FaUser, FaRocket, 
  FaUnlock, FaClock, FaArrowRight, FaCheckCircle, FaTimesCircle,
  FaPlay, FaGift, FaShoppingCart, FaMobileAlt, FaChartBar
} from 'react-icons/fa'
import Image from 'next/image'

const SolutionSectionNew = () => {
  const [activeStep, setActiveStep] = useState<number>(1)
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null)

  // Die 4 Hauptprobleme und ihre Lösungen
  const problemSolutions = [
    {
      id: 1,
      problem: {
        title: "Geringe Reichweite",
        description: "Trotz gutem Content wenig organische Sichtbarkeit",
        icon: FaUsers,
        color: "text-red-500"
      },
      solution: {
        title: "Automatische Fan-Belohnung",
        description: "Fans werden direkt für Likes, Kommentare & Shares belohnt",
        icon: FaGift,
        color: "text-green-500",
        benefit: "Mehr Engagement = Mehr Reichweite"
      }
    },
    {
      id: 2,
      problem: {
        title: "Teure Werbung",
        description: "Paid Ads sind kostspielig und nicht nachhaltig",
        icon: FaDollarSign,
        color: "text-red-500"
      },
      solution: {
        title: "Community-finanziertes Marketing",
        description: "D.INVEST Token generieren automatisch Marketing-Budget",
        icon: FaRocket,
        color: "text-green-500",
        benefit: "Fans investieren = Mehr Marketing-Budget"
      }
    },
    {
      id: 3,
      problem: {
        title: "Fehlendes Kapital",
        description: "Keine Mittel für Musikproduktion und Vermarktung",
        icon: FaMusic,
        color: "text-red-500"
      },
      solution: {
        title: "Token-basierte Finanzierung",
        description: "Direkter Kapitalzufluss durch Token-Verkäufe",
        icon: FaCoins,
        color: "text-green-500",
        benefit: "5€ pro D.INVEST Token = Sofortiges Kapital"
      }
    },
    {
      id: 4,
      problem: {
        title: "Schwaches Fan-Engagement",
        description: "Interaktionen bringen keinen Mehrwert für Fans",
        icon: FaChartBar,
        color: "text-red-500"
      },
      solution: {
        title: "Gamifiziertes Belohnungssystem",
        description: "EXP-Level, Leaderboards und exklusive Belohnungen",
        icon: FaTrophy,
        color: "text-green-500",
        benefit: "Mehr Interaktion = Höhere Belohnungen"
      }
    }
  ]

  // Der 3-Schritte Prozess - vereinfacht erklärt
  const processSteps = [
    {
      id: 1,
      title: "Fan macht mit",
      subtitle: "Like, Kommentar, Share oder Save",
      description: "Fan interagiert normal auf Social Media - nichts Neues lernen!",
      icon: FaHeart,
      color: "from-pink-500 to-red-500",
      details: [
        "✅ Funktioniert auf Instagram, TikTok, Facebook",
        "✅ Keine App-Installation nötig", 
        "✅ Automatische Erkennung der Interaktion"
      ]
    },
    {
      id: 2,
      title: "System reagiert automatisch",
      subtitle: "D.FAITH Käufe werden getätigt",
      description: "Marketing-Budget fließt automatisch in D.FAITH Token-Käufe",
      icon: FaRocket,
      color: "from-green-500 to-emerald-500",
      details: [
        "💰 Marketing-Budget wird in Token umgewandelt",
        "🤖 Vollautomatischer Prozess",
        "📈 Steigert D.FAITH Token-Wert"
      ]
    },
    {
      id: 3,
      title: "Alle profitieren",
      subtitle: "Token werden verteilt",
      description: "50% gehen an Fans, 50% werden dauerhaft gesperrt (Wertsteigerung)",
      icon: FaCoins,
      color: "from-yellow-500 to-orange-500",
      details: [
        "🎁 Fans erhalten sofort D.FAITH Token",
        "🔒 50% werden im Smart Contract gesperrt",
        "📊 Verknappung führt zu Wertsteigerung"
      ]
    }
  ]

  return (
    <section id="solution" className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Die D.FAITH Lösung
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            Belohnung des Fan-Engagements durch das duale Token-System
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Einfach erklärt: Wie jedes Problem eine konkrete Lösung bekommt
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Problem → Lösung Mapping */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Vom Problem zur Lösung
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {problemSolutions.map((item) => {
              const ProblemIcon = item.problem.icon
              const SolutionIcon = item.solution.icon
              const isSelected = selectedProblem === item.id
              
              return (
                <div
                  key={item.id}
                  className={`relative bg-slate-800/40 backdrop-blur-xl rounded-2xl p-6 cursor-pointer transition-all duration-300 border ${
                    isSelected 
                      ? 'border-blue-500/50 bg-slate-800/60 scale-105 shadow-2xl shadow-blue-500/20' 
                      : 'border-slate-700/30 hover:border-slate-600/40 hover:bg-slate-800/50'
                  }`}
                  onClick={() => setSelectedProblem(isSelected ? null : item.id)}
                >
                  <div className="flex items-center justify-between">
                    
                    {/* Problem Seite */}
                    <div className="flex-1 pr-4">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-full bg-red-900/30 border border-red-500/30 mr-3">
                          <ProblemIcon className="text-xl text-red-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-red-400 text-sm">PROBLEM</h4>
                          <p className="text-white font-semibold">{item.problem.title}</p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{item.problem.description}</p>
                    </div>

                    {/* Pfeil */}
                    <div className="px-4">
                      <FaArrowRight className="text-2xl text-blue-400" />
                    </div>

                    {/* Lösung Seite */}
                    <div className="flex-1 pl-4">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-full bg-green-900/30 border border-green-500/30 mr-3">
                          <SolutionIcon className="text-xl text-green-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-green-400 text-sm">LÖSUNG</h4>
                          <p className="text-white font-semibold">{item.solution.title}</p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{item.solution.description}</p>
                    </div>
                  </div>

                  {/* Expandierter Bereich */}
                  {isSelected && (
                    <div className="mt-6 pt-6 border-t border-slate-600">
                      <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-lg p-4 border border-green-500/30">
                        <p className="text-green-300 font-semibold text-center">
                          💡 {item.solution.benefit}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Der Prozess - Schritt für Schritt */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center text-white mb-4">
            So funktioniert es - Schritt für Schritt
          </h3>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Klicken Sie auf jeden Schritt, um zu verstehen, was genau passiert
          </p>

          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon
              const isActive = activeStep === step.id
              
              return (
                <div key={step.id} className="relative">
                  
                  {/* Verbindungslinie zum nächsten Schritt */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-blue-400 to-purple-500 z-10"></div>
                  )}

                  <div
                    className={`relative bg-slate-800/40 backdrop-blur-xl rounded-2xl p-8 cursor-pointer transition-all duration-500 border ${
                      isActive 
                        ? 'border-blue-500/50 bg-slate-800/60 shadow-2xl shadow-blue-500/20' 
                        : 'border-slate-700/30 hover:border-slate-600/40'
                    }`}
                    onClick={() => setActiveStep(isActive ? 0 : step.id)}
                  >
                    <div className="flex items-start">
                      
                      {/* Schritt Nummer & Icon */}
                      <div className="flex-shrink-0 mr-6">
                        <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl relative`}>
                          <StepIcon className="text-2xl text-white" />
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-gray-900 font-bold text-sm">{step.id}</span>
                          </div>
                        </div>
                      </div>

                      {/* Schritt Inhalt */}
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                        <p className="text-lg text-blue-400 font-semibold mb-3">{step.subtitle}</p>
                        <p className="text-gray-300 text-base leading-relaxed">{step.description}</p>
                        
                        {/* Expandierte Details */}
                        {isActive && (
                          <div className="mt-6 bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                            <div className="grid md:grid-cols-3 gap-3">
                              {step.details.map((detail, idx) => (
                                <div key={idx} className="text-sm text-gray-300 bg-slate-600/20 rounded p-3">
                                  {detail}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Expand Indicator */}
                      <div className={`ml-4 transform transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`}>
                        <FaArrowRight className="text-blue-400" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Das Ergebnis - Win-Win */}
        <div className="relative text-center bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/30 shadow-2xl shadow-blue-500/5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10 rounded-3xl"></div>
          
          <div className="relative">
            <h4 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-6 drop-shadow-lg">
              Das Ergebnis: Win-Win für alle
            </h4>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              
              {/* Für Fans */}
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaUsers className="text-3xl text-green-400 mr-3" />
                  <h5 className="text-xl font-bold text-green-400">Für Fans</h5>
                </div>
                <ul className="text-left space-y-2 text-sm text-gray-300">
                  <li>✅ Echte Belohnungen für Support</li>
                  <li>✅ Token können verkauft werden</li>
                  <li>✅ Exklusive Musik & Merchandise</li>
                  <li>✅ Gamification & Leaderboards</li>
                </ul>
              </div>
              
              {/* Für Dawid Faith */}
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaMusic className="text-3xl text-purple-400 mr-3" />
                  <h5 className="text-xl font-bold text-purple-400">Für Dawid Faith</h5>
                </div>
                <ul className="text-left space-y-2 text-sm text-gray-300">
                  <li>✅ Mehr organische Reichweite</li>
                  <li>✅ Direktes Kapital für Projekte</li>
                  <li>✅ Loyale Fan-Community</li>
                  <li>✅ Nachhaltiges Wachstum</li>
                </ul>
              </div>
              
              {/* Für Investoren */}
              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaCoins className="text-3xl text-cyan-400 mr-3" />
                  <h5 className="text-xl font-bold text-cyan-400">Für Investoren</h5>
                </div>
                <ul className="text-left space-y-2 text-sm text-gray-300">
                  <li>✅ D.INVEST Token-Wertsteigerung</li>
                  <li>✅ D.FAITH Staking-Rewards</li>
                  <li>✅ Halving-Mechanismus</li>
                  <li>✅ Community-Wachstum</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-900/40 to-yellow-900/40 rounded-lg p-6 border border-amber-500/30">
              <p className="text-amber-300 text-lg font-semibold mb-2">
                🚀 Das ist Innovation in der Musikindustrie!
              </p>
              <p className="text-gray-300">
                Erstmals werden alle Beteiligten - Fans, Künstler und Investoren - durch ein System gleichzeitig belohnt.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SolutionSectionNew
