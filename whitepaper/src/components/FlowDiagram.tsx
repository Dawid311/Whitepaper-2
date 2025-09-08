"use client"
import React, { useState } from 'react'
import { FaUsers, FaExchangeAlt, FaCoins, FaLock, FaTrophy } from 'react-icons/fa'

export const FlowDiagram: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<'contract' | 'rewards' | null>(null)

  const steps = [
    {
      id: 1,
      title: 'Fan Interaktion',
      description: 'Fans liken, kommentieren und streamen',
      icon: FaUsers,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Automatische Käufe',
      description: 'Werbebudget kauft D.FAITH Token',
      icon: FaExchangeAlt,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Token Verteilung',
      description: 'Gekaufte Tokens werden aufgeteilt',
      icon: FaCoins,
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
    <div className="w-full max-w-7xl mx-auto px-6">
      {/* Titel */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-white mb-4">Der D.FAITH Flow</h3>
        <p className="text-gray-300 text-lg">Von Fan-Interaktion zur Token-Verzweigung</p>
      </div>

      {/* Gemeinsame Schritte */}
      <div className="flex flex-col items-center space-y-12 mb-20">
        {steps.map((step, index) => {
          const IconComponent = step.icon
          return (
            <div key={step.id} className="flex flex-col items-center">
              {/* Step */}
              <div className="flex flex-col items-center space-y-4">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-xl`}>
                  <IconComponent className="text-3xl text-white" />
                </div>
                <div className="text-center max-w-md">
                  <div className="text-sm font-semibold text-gray-400 tracking-wider mb-2">
                    SCHRITT {step.id.toString().padStart(2, '0')}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>

              {/* Verbindungslinie */}
              {index < steps.length - 1 && (
                <div className="flex flex-col items-center mt-8">
                  <div className="w-1 h-16 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
                </div>
              )}

              {/* Verweis auf 2 Wege nach letztem Schritt */}
              {index === steps.length - 1 && (
                <div className="flex flex-col items-center mt-12">
                  {/* Vertikale Linie */}
                  <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></div>
                  
                  {/* Verweis Box */}
                  <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-600/30 max-w-md text-center">
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Tokens teilen sich in</span>
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                    <h5 className="text-xl font-bold text-white mb-2">2 Parallele Wege</h5>
                    <p className="text-gray-400 text-sm">
                      Jeder Weg verstärkt das D.FAITH Ecosystem auf seine eigene Art
                    </p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
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
  )
}
