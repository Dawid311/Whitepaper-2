"use client"
import React, { useState } from 'react'
import { FaUsers, FaExchangeAlt, FaCoins, FaLock, FaTrophy, FaTiktok, FaInstagram, FaFacebook, FaDollarSign, FaMusic, FaChartLine, FaHeart, FaComment, FaShare, FaSave } from 'react-icons/fa'
import Image from 'next/image'

const SolutionSection = () => {
  const [selectedBranch, setSelectedBranch] = useState<'contract' | 'rewards' | null>(null)

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
      title: 'Automatische Käufe',
      description: 'Werbebudget und Musikeinnahmen als Quelle',
      icons: [FaDollarSign, FaMusic],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Token Verteilung',
      description: 'D.FAITH Tokens werden aufgeteilt',
      iconType: 'dfaith',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const branches = [
    {
      key: 'contract' as const,
      title: 'Smart Contract Pfad',
      subtitle: 'Wertsteigerung durch Verknappung',
      icon: FaLock,
      color: 'from-blue-500 to-cyan-500',
      details: [
        'Teil der Tokens fließt zurück in Smart Contract',
        'Halving-System reduziert verfügbare Supply',
        'D.FAITH Preis steigt durch Verknappung'
      ]
    },
    {
      key: 'rewards' as const,
      title: 'Token Rewards Pfad',
      subtitle: 'Direkte Fan-Belohnungen',
      icon: FaTrophy,
      color: 'from-purple-500 to-pink-500',
      details: [
        'Fan-Aktivitäten werden in EXP umgewandelt',
        'Level-basierte Token-Verteilung an Fans',
        'Zugang zu Shop, ETH-Tausch und VIP Benefits'
      ]
    }
  ]

  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Die D.FAITH Lösung
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Drei Schritte - Zwei Wege: Der Weg von Fan-Interaktion zur Token-Verteilung
          </p>
        </div>

        {/* Horizontale 3 Schritte */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
            {steps.map((step, index) => {
              return (
                <div key={step.id} className="flex items-center">
                  {/* Step */}
                  <div className="flex flex-col items-center text-center max-w-xs">
                    {/* Fan Interaktion - Social Media Icons */}
                    {step.id === 1 && (
                      <div className="flex space-x-4 mb-4">
                        <FaInstagram className="text-3xl text-pink-500" />
                        <FaTiktok className="text-3xl text-black" />
                        <FaFacebook className="text-3xl text-blue-600" />
                      </div>
                    )}
                    
                    {/* Automatische Käufe - Chart Icon */}
                    {step.id === 2 && (
                      <div className="mb-4">
                        <FaChartLine className="text-4xl text-green-500" />
                      </div>
                    )}
                    
                    {/* Token Verteilung - Münzen Symbol */}
                    {step.id === 3 && (
                      <div className="mb-4">
                        <FaCoins className="text-4xl text-yellow-500" />
                      </div>
                    )}
                    
                    <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                    {step.id === 1 ? (
                      <div className="text-gray-300 text-sm flex flex-wrap items-center justify-center gap-2">
                        <span className="flex items-center gap-1">
                          <FaHeart className="text-red-500" /> Liken
                        </span>
                        <span className="flex items-center gap-1">
                          <FaComment className="text-blue-400" /> Kommentieren
                        </span>
                        <span className="flex items-center gap-1">
                          <FaShare className="text-green-500" /> Share
                        </span>
                        <span className="flex items-center gap-1">
                          <FaSave className="text-yellow-500" /> Save
                        </span>
                      </div>
                    ) : (
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    )}
                  </div>

                  {/* Pfeil zwischen Schritten */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex items-center mx-8">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600"></div>
                      <div className="w-0 h-0 border-l-4 border-l-gray-500 border-y-4 border-y-transparent ml-1"></div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Verweis auf 2 Wege */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-600/30 max-w-lg text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
              <span className="text-gray-300">Tokens verzweigen sich in</span>
              <div className="w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">2 Parallele Pfade</h4>
            <p className="text-gray-400">
              Jeder Pfad verstärkt das D.FAITH Ecosystem auf seine eigene Art und trägt zum Gesamterfolg bei
            </p>
          </div>
        </div>

        {/* Branch Auswahl */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {branches.map((branch) => {
            const IconComponent = branch.icon
            const isSelected = selectedBranch === branch.key
            
            return (
              <div
                key={branch.key}
                className={`bg-slate-800/50 backdrop-blur rounded-2xl p-8 cursor-pointer transition-all duration-300 border-2 ${
                  isSelected 
                    ? 'border-white/30 bg-slate-800/70 shadow-2xl scale-105' 
                    : 'border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/60'
                }`}
                onClick={() => setSelectedBranch(prev => prev === branch.key ? null : branch.key)}
              >
                {/* Branch Header */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${branch.color} flex items-center justify-center shadow-lg mb-4`}>
                    <IconComponent className="text-2xl text-white" />
                  </div>
                  <h4 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${branch.color} bg-clip-text text-transparent`}>
                    {branch.title}
                  </h4>
                  <p className="text-gray-400">{branch.subtitle}</p>
                </div>

                {/* Branch Details */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  isSelected ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-6 border-t border-slate-600">
                    <h5 className="text-lg font-semibold text-white mb-4">Wie es funktioniert:</h5>
                    <ul className="space-y-3">
                      {branch.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${branch.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed">{detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Expand Hint */}
                {!isSelected && (
                  <div className="text-center mt-4">
                    <span className="text-sm text-gray-500">Klicken für Details</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Zusammenfassung */}
        <div className="text-center bg-slate-800/30 rounded-2xl p-8">
          <h4 className="text-2xl font-bold text-white mb-4">
            Das Ergebnis: Beide Wege verstärken sich gegenseitig
          </h4>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            Während der Smart Contract Pfad den Token-Wert durch Verknappung steigert, 
            sorgt der Rewards Pfad für mehr Fan-Engagement und Ecosystem-Wachstum.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection