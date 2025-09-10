"use client"
import React, { useState } from 'react'
import { FaUsers, FaExchangeAlt, FaCoins, FaLock, FaTrophy, FaTiktok, FaInstagram, FaFacebook, FaDollarSign, FaMusic, FaChartLine, FaHeart, FaComment, FaShare, FaSave, FaUser, FaRobot, FaShieldAlt, FaRocket, FaUnlock, FaClock, FaInfoCircle, FaTimes, FaMobileAlt, FaCheckCircle, FaShoppingCart, FaChartBar, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

const SolutionSection = () => {
  const [selectedBranch, setSelectedBranch] = useState<'contract' | 'rewards' | null>(null)
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const renderModalContent = () => {
    switch(activeModal) {
      case 'level-system':
        return (
          <>
            {/* Modal Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                  <FaTrophy className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent mb-4">
                D.FAITH Level System
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Sammle EXP durch Interaktionen und steige auf, um höhere Token-Rewards zu erhalten
              </p>
            </div>

            {/* Token-Reward Formel */}
            <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-6 mb-8 border border-green-500/30">
              <h4 className="text-green-400 font-bold text-2xl mb-4 flex items-center">
                <FaDollarSign className="mr-3" />
                Token-Reward Formel
              </h4>
              <div className="bg-slate-800/60 rounded-xl p-6 text-center">
                <div className="text-green-300 text-2xl font-mono mb-3">
                  <span className="text-blue-400">Marketing Budget</span> × <span className="text-purple-400">User Level</span>
                </div>
                <div className="text-gray-400">
                  Beispiel: 0.50€ × Level 5 = <span className="text-green-400 font-bold">2.50€ in D.FAITH Token</span>
                </div>
              </div>
            </div>

            {/* EXP Quellen Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Social Media EXP */}
              <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50">
                <h4 className="text-purple-400 font-bold text-xl mb-4 flex items-center">
                  <FaUsers className="mr-3" />
                  Social Media EXP
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-slate-700/50 rounded-lg p-3">
                    <div className="flex items-center">
                      <FaHeart className="text-red-500 mr-3 text-lg" />
                      <span className="text-gray-300">Like</span>
                    </div>
                    <span className="text-green-400 font-bold text-lg">+10 EXP</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/50 rounded-lg p-3">
                    <div className="flex items-center">
                      <FaComment className="text-blue-400 mr-3 text-lg" />
                      <span className="text-gray-300">Kommentar</span>
                    </div>
                    <span className="text-green-400 font-bold text-lg">+10 EXP</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/50 rounded-lg p-3">
                    <div className="flex items-center">
                      <FaShare className="text-green-500 mr-3 text-lg" />
                      <span className="text-gray-300">Story Share</span>
                    </div>
                    <span className="text-green-400 font-bold text-lg">+20 EXP</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-700/50 rounded-lg p-3">
                    <div className="flex items-center">
                      <FaSave className="text-yellow-500 mr-3 text-lg" />
                      <span className="text-gray-300">Save Post</span>
                    </div>
                    <span className="text-green-400 font-bold text-lg">+10 EXP</span>
                  </div>
                </div>
              </div>

              {/* Special Events */}
              <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50">
                <h4 className="text-yellow-400 font-bold text-xl mb-4 flex items-center">
                  <FaMusic className="mr-3" />
                  Special Events
                </h4>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 rounded-lg p-4 border border-yellow-500/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-yellow-300 font-semibold">Live Concert Code</span>
                      <span className="text-yellow-400 font-bold text-lg">+150 EXP</span>
                    </div>
                    <code className="text-yellow-400 font-mono text-sm bg-slate-900/50 px-2 py-1 rounded">
                      DF12345656
                    </code>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4 opacity-75">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300 font-semibold">Spotify Streams</span>
                      <span className="text-yellow-500 text-sm">Coming Soon</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">EXP für Dawid Faith Streams</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Leaderboard */}
            <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 rounded-2xl p-6 border border-yellow-500/30">
              <h4 className="text-yellow-400 font-bold text-2xl mb-4 flex items-center">
                <FaTrophy className="mr-3" />
                Global Leaderboard
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h5 className="text-orange-400 font-semibold mb-2">Plattformübergreifend</h5>
                  <p className="text-gray-300 text-sm">Alle Social Media Aktivitäten werden zusammengerechnet</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h5 className="text-yellow-400 font-semibold mb-2">Fair & Transparent</h5>
                  <p className="text-gray-300 text-sm">Jeder kann teilnehmen und sich hocharbeiten</p>
                </div>
              </div>
            </div>
          </>
        )

      case 'auto-registrierung':
        return (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-2xl relative">
                <FaUser className="text-3xl text-white" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>
            </div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Auto-Registrierung
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Vom ersten Kommentar zur D.FAITH Wallet - komplett automatisch
            </p>
            
            {/* Visueller Prozess-Flow */}
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 mb-8 border border-purple-500/30">
              <h4 className="text-purple-400 font-bold text-xl mb-6">Der automatische Prozess:</h4>
              
              <div className="relative">
                {/* Flow Steps */}
                <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
                  
                  {/* Step 1 */}
                  <div className="flex flex-col items-center text-center relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg animate-pulse">
                      <FaComment className="text-2xl text-white" />
                    </div>
                    <h5 className="text-red-400 font-bold mb-2">1. Erster Kommentar</h5>
                    <p className="text-gray-300 text-sm max-w-32">Fan kommentiert auf Social Media</p>
                  </div>
                  
                  {/* Arrow 1 */}
                  <div className="hidden md:block">
                    <div className="flex items-center text-purple-400">
                      <div className="w-8 h-0.5 bg-purple-400"></div>
                      <FaRocket className="text-lg ml-1 animate-bounce" />
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex flex-col items-center text-center relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg">
                      <FaUser className="text-2xl text-white animate-pulse" />
                    </div>
                    <h5 className="text-blue-400 font-bold mb-2">2. User-Erkennung</h5>
                    <p className="text-gray-300 text-sm max-w-32">System erkennt neuen User automatisch</p>
                  </div>
                  
                  {/* Arrow 2 */}
                  <div className="hidden md:block">
                    <div className="flex items-center text-purple-400">
                      <div className="w-8 h-0.5 bg-purple-400"></div>
                      <FaRocket className="text-lg ml-1 animate-bounce" style={{animationDelay: '0.5s'}} />
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex flex-col items-center text-center relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 shadow-lg">
                      <FaUser className="text-2xl text-white" />
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full animate-pulse"></div>
                    </div>
                    <h5 className="text-green-400 font-bold mb-2">3. Profil-Erstellung</h5>
                    <p className="text-gray-300 text-sm max-w-32">D.FAITH Profil wird automatisch angelegt</p>
                  </div>
                  
                  {/* Arrow 3 */}
                  <div className="hidden md:block">
                    <div className="flex items-center text-purple-400">
                      <div className="w-8 h-0.5 bg-purple-400"></div>
                      <FaRocket className="text-lg ml-1 animate-bounce" style={{animationDelay: '1s'}} />
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="flex flex-col items-center text-center relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-4 shadow-lg animate-pulse">
                      <FaCoins className="text-2xl text-white" />
                    </div>
                    <h5 className="text-yellow-400 font-bold mb-2">4. Wallet-Link</h5>
                    <p className="text-gray-300 text-sm max-w-32">Verknüpfung mit Dawid Faith Wallet</p>
                  </div>
                </div>
                
                {/* Success Banner */}
                <div className="mt-8 bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-xl p-4 border border-green-500/30">
                  <div className="flex items-center justify-center">
                    <FaTrophy className="text-green-400 text-xl mr-3 animate-bounce" />
                    <span className="text-green-300 font-semibold">Fertig! User startet sofort mit Level 1 und ersten Token-Rewards</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vorteile für User */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-2xl p-6 border border-blue-500/30">
                <h4 className="text-blue-400 font-bold text-lg mb-4 flex items-center">
                  <FaUser className="mr-3" />
                  Für den Fan
                </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                    <span className="text-gray-300">Null Aufwand - alles automatisch</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                    <span className="text-gray-300">Sofort Token-Rewards erhalten</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                    <span className="text-gray-300">Persönliches D.FAITH Profil</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                    <span className="text-gray-300">Level-System ab Tag 1</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-6 border border-purple-500/30">
                <h4 className="text-purple-400 font-bold text-lg mb-4 flex items-center">
                  <FaMusic className="mr-3" />
                  Für Dawid Faith
                </h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                    <span className="text-gray-300">Maximale Fan-Konversion</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                    <span className="text-gray-300">Keine Barrieren für Teilnahme</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                    <span className="text-gray-300">Sofortiges Engagement</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                    <span className="text-gray-300">Automatische Community-Bildung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )

      case 'exklusiver-shop':
        return (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                <FaMusic className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Exklusiver D.FAITH Shop
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Alle Produkte früher und günstiger - vor dem offiziellen Release
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/40 rounded-2xl p-6">
                <h4 className="text-purple-400 font-bold text-xl mb-4">Pre-Release Vorteile:</h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <FaMusic className="text-purple-400 mr-3" />
                    <span className="text-gray-300">Singles vor offiziellem Release</span>
                  </li>
                  <li className="flex items-center">
                    <FaMusic className="text-purple-400 mr-3" />
                    <span className="text-gray-300">Exklusive Remixes vorab</span>
                  </li>
                  <li className="flex items-center">
                    <FaMusic className="text-purple-400 mr-3" />
                    <span className="text-gray-300">Günstiger als normale Preise</span>
                  </li>
                  <li className="flex items-center">
                    <FaMusic className="text-purple-400 mr-3" />
                    <span className="text-gray-300">Limitierte Fan-Editionen</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/40 rounded-2xl p-6">
                <h4 className="text-pink-400 font-bold text-xl mb-4">Kommende Features:</h4>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <FaTrophy className="text-pink-400 mr-3" />
                    <span className="text-gray-300">VIP Konzert-Tickets</span>
                  </li>
                  <li className="flex items-center">
                    <FaTrophy className="text-pink-400 mr-3" />
                    <span className="text-gray-300">Meet & Greet Sessions</span>
                  </li>
                  <li className="flex items-center">
                    <FaTrophy className="text-pink-400 mr-3" />
                    <span className="text-gray-300">Exklusives Merchandise</span>
                  </li>
                  <li className="flex items-center">
                    <FaTrophy className="text-pink-400 mr-3" />
                    <span className="text-gray-300">Behind-the-Scenes Content</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )

      case 'sofort-verkauf':
        return (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl relative">
                <FaDollarSign className="text-3xl text-white animate-pulse" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-white text-xs font-bold">₫</span>
                </div>
              </div>
            </div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              D.FAITH Token verkaufen
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Verkaufe deine D.FAITH Token einfach über die Dawid Faith Wallet
            </p>
            
            {/* Verkaufsprozess kompakt */}
            <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-6 mb-6 border border-green-500/30">
              <h4 className="text-green-400 font-bold text-xl mb-4 flex items-center justify-center">
                <FaMobileAlt className="mr-3" />
                So verkaufst du deine Token
              </h4>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h5 className="text-blue-400 font-semibold mb-2">Wallet öffnen</h5>
                  <p className="text-gray-300 text-sm">Dawid Faith Wallet starten</p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h5 className="text-purple-400 font-semibold mb-2">"Verkaufen" wählen</h5>
                  <p className="text-gray-300 text-sm">Verkaufs-Tab öffnen</p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-3 animate-pulse">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h5 className="text-green-400 font-semibold mb-2">Token verkaufen</h5>
                  <p className="text-gray-300 text-sm">Menge eingeben & bestätigen</p>
                </div>
              </div>
            </div>

            {/* Verkaufs-Example */}
            <div className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-2xl p-6 mb-6 border border-amber-500/30">
              <h4 className="text-amber-400 font-bold text-lg mb-3 flex items-center justify-center">
                <FaCoins className="mr-2" />
                Verkaufs-Beispiel
              </h4>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">1.000 D.FAITH verkaufen</span>
                  <span className="text-green-400 font-bold">≈ $149.55</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">Gebühr (0.3%):</span>
                  <span className="text-amber-400 text-sm">-$0.45</span>
                </div>
                <div className="flex justify-between items-center border-t border-slate-600 pt-2">
                  <span className="text-gray-300 font-semibold">Du erhältst:</span>
                  <span className="text-green-400 font-bold">≈ 0.060 ETH</span>
                </div>
              </div>
            </div>

          </div>
        )

      case 'token-sammlung':
        return (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl">
                <FaCoins className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Token Sammlung
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              50% aller D.FAITH Käufe werden dauerhaft im Smart Contract gesperrt - mit wichtigen Auswirkungen für zukünftige Token
            </p>
            
            {/* Ausbalanciertes Grid Layout */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              
              {/* Linke Seite: Aktuelle Situation */}
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-6 border border-green-500/30">
                <h4 className="text-green-400 font-bold text-xl mb-4 flex items-center">
                  <FaTrophy className="mr-3" />
                  Jetzt einsteigen
                </h4>
                <div className="text-center mb-4">
                  <div className="text-green-400 font-bold text-3xl mb-2">10.00%</div>
                  <div className="text-green-300 text-lg">Aktuelle Rate (Stufe 1)</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                  <h5 className="text-green-400 font-semibold mb-2">Beispiel: 1.000 D.INVEST</h5>
                  <div className="text-green-300">= <strong>100 D.FAITH/Woche</strong></div>
                </div>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold">
                    <FaRocket className="mr-2" />
                    Beste Zeit zum Einsteigen!
                  </span>
                </div>
              </div>

              {/* Rechte Seite: Zukünftige Situation */}
              <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl p-6 border border-amber-500/30">
                <h4 className="text-amber-400 font-bold text-xl mb-4 flex items-center">
                  <FaClock className="mr-3" />
                  Zukünftige Token
                </h4>
                <div className="text-center mb-4">
                  <div className="text-amber-400 font-bold text-3xl mb-2">0.31%</div>
                  <div className="text-amber-300 text-lg">Finale Rate (Stufe 6+)</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                  <h5 className="text-amber-400 font-semibold mb-2">Beispiel: 1.000 D.INVEST</h5>
                  <div className="text-amber-300">= <strong>3.1 D.FAITH/Woche</strong></div>
                </div>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-semibold">
                    <FaExchangeAlt className="mr-2" />
                    Alle automatischen Käufe
                  </span>
                </div>
              </div>
            </div>

            {/* Vergleichssektion */}
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-6 mb-8 border border-purple-500/30">
              <h4 className="text-purple-400 font-bold text-xl mb-4 flex items-center justify-center">
                <FaChartLine className="mr-3" />
                Der Unterschied ist dramatisch
              </h4>
              <div className="text-center">
                <div className="text-purple-400 font-bold text-2xl mb-2">32x weniger Rewards</div>
                <p className="text-purple-300 mb-4">
                  Alle D.FAITH Token, die durch automatische Käufe hinzugefügt werden, 
                  stehen nur mit der minimalen 0.31% Rate zur Verfügung.
                </p>
                <div className="bg-purple-800/30 rounded-lg p-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-green-400 font-bold">Früh einsteigen</div>
                      <div className="text-green-300 text-sm">100 D.FAITH/Woche</div>
                    </div>
                    <div className="text-center">
                      <div className="text-amber-400 font-bold">Später einsteigen</div>
                      <div className="text-amber-300 text-sm">3.1 D.FAITH/Woche</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'halving-mechanismus':
        return (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-2xl">
                <FaChartLine className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Halving-Mechanismus
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Automatische Verknappung durch 6-Stufen Halving-System - wie bei Bitcoin
            </p>
            
            {/* Beispiel-Berechnung */}
            <div className="bg-gradient-to-r from-amber-900/40 to-yellow-900/40 rounded-2xl p-6 mb-8 border border-amber-500/30">
              <h4 className="text-amber-400 font-bold text-xl mb-4 flex items-center">
                <FaCoins className="mr-3" />
                Beispiel: 100 D.INVEST Token gestaked
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-green-400 font-bold text-2xl">10</div>
                  <div className="text-green-300 text-sm">D.FAITH/Woche</div>
                  <div className="text-green-200 text-xs">in Stufe 1</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-blue-400 font-bold text-2xl">5</div>
                  <div className="text-blue-300 text-sm">D.FAITH/Woche</div>
                  <div className="text-blue-200 text-xs">in Stufe 2</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-red-400 font-bold text-2xl">0.31</div>
                  <div className="text-red-300 text-sm">D.FAITH/Woche</div>
                  <div className="text-red-200 text-xs">in Stufe 6+</div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-amber-300 text-sm">
                  <strong>32x weniger Rewards</strong> zwischen Stufe 1 und Stufe 6+ → Frühe Unterstützer erhalten deutlich mehr!
                </p>
              </div>
            </div>
            
            {/* Reward-Stufen aus dem Staking Code */}
            <div className="bg-slate-800/40 rounded-2xl p-6 mb-8">
              <h4 className="text-cyan-400 font-bold text-xl mb-4">6-Stufen Halving-Schedule:</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gradient-to-r from-green-800/30 to-green-700/30 rounded-lg p-4 border border-green-500/30">
                  <div className="text-left">
                    <span className="text-green-300 font-semibold">Stufe 1 (Start)</span>
                    <div className="text-green-400 text-sm">0 - 10k D.FAITH verteilt</div>
                  </div>
                  <span className="text-green-400 font-bold text-xl">10.00%</span>
                  <div className="text-right text-xs text-green-300">
                    <div>1000 Basis-Punkte</div>
                    <div>Beste Rate!</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between bg-gradient-to-r from-blue-800/30 to-blue-700/30 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-left">
                    <span className="text-blue-300 font-semibold">Stufe 2</span>
                    <div className="text-blue-400 text-sm">10k - 20k D.FAITH</div>
                  </div>
                  <span className="text-blue-400 font-bold text-xl">5.00%</span>
                  <div className="text-right text-xs text-blue-300">
                    <div>500 Basis-Punkte</div>
                    <div>Erste Halbierung</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between bg-gradient-to-r from-purple-800/30 to-purple-700/30 rounded-lg p-4 border border-purple-500/30">
                  <div className="text-left">
                    <span className="text-purple-300 font-semibold">Stufe 3</span>
                    <div className="text-purple-400 text-sm">20k - 40k D.FAITH</div>
                  </div>
                  <span className="text-purple-400 font-bold text-xl">2.50%</span>
                  <div className="text-right text-xs text-purple-300">
                    <div>250 Basis-Punkte</div>
                    <div>Zweite Halbierung</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between bg-gradient-to-r from-orange-800/30 to-orange-700/30 rounded-lg p-4 border border-orange-500/30">
                  <div className="text-left">
                    <span className="text-orange-300 font-semibold">Stufe 4</span>
                    <div className="text-orange-400 text-sm">40k - 60k D.FAITH</div>
                  </div>
                  <span className="text-orange-400 font-bold text-xl">1.25%</span>
                  <div className="text-right text-xs text-orange-300">
                    <div>125 Basis-Punkte</div>
                    <div>Dritte Halbierung</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between bg-gradient-to-r from-yellow-800/30 to-yellow-700/30 rounded-lg p-4 border border-yellow-500/30">
                  <div className="text-left">
                    <span className="text-yellow-300 font-semibold">Stufe 5</span>
                    <div className="text-yellow-400 text-sm">60k - 80k D.FAITH</div>
                  </div>
                  <span className="text-yellow-400 font-bold text-xl">0.63%</span>
                  <div className="text-right text-xs text-yellow-300">
                    <div>63 Basis-Punkte</div>
                    <div>Vierte Halbierung</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between bg-gradient-to-r from-red-800/30 to-red-700/30 rounded-lg p-4 border border-red-500/30">
                  <div className="text-left">
                    <span className="text-red-300 font-semibold">Stufe 6+</span>
                    <div className="text-red-400 text-sm">ab 80k D.FAITH</div>
                  </div>
                  <span className="text-red-400 font-bold text-xl">0.31%</span>
                  <div className="text-right text-xs text-red-300">
                    <div>31 Basis-Punkte</div>
                    <div>Finale Rate</div>
                  </div>
                </div>
              </div>
            </div>


            
            {/* Wichtiger Hinweis */}
            <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-xl p-6 border border-red-500/30">
              <h5 className="text-red-400 font-bold mb-3 flex items-center">
                <FaExchangeAlt className="mr-2" />
                Warum jetzt einsteigen?
              </h5>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h6 className="text-orange-400 font-semibold mb-2">Frühe Adopter Vorteile:</h6>
                  <ul className="space-y-1 text-left">
                    <li className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">32x höhere Rewards als in Stufe 6+</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">Kontinuierliche D.FAITH Verdienste</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">Beste Rate: 10% pro Woche</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-red-400 font-semibold mb-2">Staking Vorteile:</h6>
                  <ul className="space-y-1 text-left">
                    <li className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">Jederzeit Ein- und Aussteigen</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">Automatische Reward-Berechnung</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">Sichere Smart Contract Basis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )

      case 'wertsteigerung':
        return (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-2xl">
                <FaChartLine className="text-3xl text-white" />
              </div>
            </div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              💰 Wie wird D.FAITH immer wertvoller?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Einfach erklärt: Je mehr Leute mitmachen, desto weniger Token gibt es → Preis steigt automatisch!
            </p>
            
            {/* Kompakte Start-Info */}
            <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-4 mb-6 border border-blue-500/30">
              <div className="grid md:grid-cols-3 gap-3 text-center">
                <div className="bg-slate-800/60 rounded-xl p-3">
                  <div className="text-green-400 text-xl font-bold">1.000€</div>
                  <div className="text-gray-300 text-sm">💰 Startkapital</div>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-3">
                  <div className="text-purple-400 text-xl font-bold">20.000</div>
                  <div className="text-gray-300 text-sm">🪙 D.FAITH Token</div>
                </div>
                <div className="bg-slate-800/60 rounded-xl p-3">
                  <div className="text-cyan-400 text-xl font-bold">0.05€</div>
                  <div className="text-gray-300 text-sm">💎 Startpreis</div>
                </div>
              </div>
            </div>
            
            {/* Einfacher Preis Chart */}
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl p-8 mb-8 border border-slate-700/50">
              <h4 className="text-green-400 font-bold text-xl mb-4 flex items-center justify-center">
                <FaChartLine className="mr-3" />
                📈 So entwickelt sich der D.FAITH Preis
              </h4>
              
              {/* Kompakte Uniswap Mathematik */}
              <div className="bg-slate-800/60 rounded-xl p-3 mb-4">
                <div className="text-cyan-300 text-lg mb-3 text-center font-bold">
                  🧮 Nur 2.162€ → 10x Preissteigerung
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs text-center">
                  <div className="bg-blue-900/30 rounded p-2">
                    <div className="text-blue-400 font-bold">Start</div>
                    <div className="text-white">0.05€</div>
                  </div>
                  <div className="bg-orange-900/30 rounded p-2">
                    <div className="text-orange-400 font-bold">+2.162€</div>
                    <div className="text-gray-300">benötigt</div>
                  </div>
                  <div className="bg-green-900/30 rounded p-2">
                    <div className="text-green-400 font-bold">Ziel</div>
                    <div className="text-white">0.50€</div>
                  </div>
                </div>
              </div>
              
              {/* Exponentieller Chart */}
              <div className="relative h-80 bg-slate-800/30 rounded-xl p-6 mb-6 overflow-hidden">
                {/* Grid Lines */}
                <div className="absolute inset-6 opacity-20">
                  {/* Horizontal Grid Lines */}
                  <div className="absolute w-full border-t border-gray-600" style={{top: '0%'}}></div>
                  <div className="absolute w-full border-t border-gray-600" style={{top: '20%'}}></div>
                  <div className="absolute w-full border-t border-gray-600" style={{top: '40%'}}></div>
                  <div className="absolute w-full border-t border-gray-600" style={{top: '60%'}}></div>
                  <div className="absolute w-full border-t border-gray-600" style={{top: '80%'}}></div>
                  <div className="absolute w-full border-t border-gray-600" style={{top: '100%'}}></div>
                  
                  {/* Vertical Grid Lines */}
                  <div className="absolute h-full border-l border-gray-600" style={{left: '0%'}}></div>
                  <div className="absolute h-full border-l border-gray-600" style={{left: '20%'}}></div>
                  <div className="absolute h-full border-l border-gray-600" style={{left: '40%'}}></div>
                  <div className="absolute h-full border-l border-gray-600" style={{left: '60%'}}></div>
                  <div className="absolute h-full border-l border-gray-600" style={{left: '80%'}}></div>
                  <div className="absolute h-full border-l border-gray-600" style={{left: '100%'}}></div>
                </div>

                {/* Y-Achse Labels (einfache Preise) */}
                <div className="absolute left-0 top-6 h-64 flex flex-col justify-between text-xs text-gray-400">
                  <span className="text-pink-400 font-bold">💎 5.00€</span>
                  <span className="text-purple-400">🚀 2.00€</span>
                  <span className="text-red-400">⭐ 1.00€</span>
                  <span className="text-orange-400">🔥 0.50€</span>
                  <span className="text-yellow-400">✨ 0.25€</span>
                  <span className="text-green-400">📈 0.10€</span>
                  <span className="text-blue-400">🌱 0.05€</span>
                </div>

                {/* Exponential Curve basierend auf AMM-Formel */}
                <div className="absolute inset-6">
                  <svg className="w-full h-64" viewBox="0 0 400 200" preserveAspectRatio="none">
                    {/* Exponential AMM Curve - steiler Anstieg durch Verknappung */}
                    <path
                      d="M 0 195 L 80 185 L 160 165 L 240 130 L 280 90 L 320 45 L 360 15 L 400 0"
                      stroke="url(#ammGradient)"
                      strokeWidth="4"
                      fill="none"
                      className="drop-shadow-lg"
                    />
                    
                    {/* Gradient für AMM-Kurve */}
                    <defs>
                      <linearGradient id="ammGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="20%" stopColor="#10B981" />
                        <stop offset="40%" stopColor="#F59E0B" />
                        <stop offset="60%" stopColor="#F97316" />
                        <stop offset="80%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                    
                    {/* Glow Effect unter der AMM-Kurve */}
                    <path
                      d="M 0 195 L 80 185 L 160 165 L 240 130 L 280 90 L 320 45 L 360 15 L 400 0 L 400 200 L 0 200 Z"
                      fill="url(#ammGlowGradient)"
                      opacity="0.15"
                    />
                    
                    <defs>
                      <linearGradient id="ammGlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="50%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                    
                    {/* Halving Event Markers */}
                    <line x1="160" y1="165" x2="160" y2="200" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />
                    <line x1="280" y1="90" x2="280" y2="200" stroke="#F97316" strokeWidth="2" strokeDasharray="5,5" opacity="0.7" />
                    
                    {/* Datenpunkte mit Uniswap-berechneten Preisen */}
                    <circle cx="0" cy="195" r="4" fill="#3B82F6" className="animate-pulse">
                      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="80" cy="185" r="4" fill="#10B981" className="animate-pulse">
                      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="0.4s" />
                    </circle>
                    <circle cx="160" cy="165" r="5" fill="#F59E0B" className="animate-pulse">
                      <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite" begin="0.8s" />
                    </circle>
                    <circle cx="240" cy="130" r="5" fill="#F97316" className="animate-pulse">
                      <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite" begin="1.2s" />
                    </circle>
                    <circle cx="320" cy="45" r="6" fill="#8B5CF6" className="animate-pulse">
                      <animate attributeName="r" values="6;9;6" dur="1s" repeatCount="indefinite" begin="1.6s" />
                    </circle>
                    <circle cx="400" cy="0" r="7" fill="#EC4899" className="animate-pulse">
                      <animate attributeName="r" values="7;12;7" dur="0.8s" repeatCount="indefinite" begin="2s" />
                    </circle>
                  </svg>
                </div>

                {/* X-Achse Labels (verständliche Zeitrahmen) */}
                <div className="absolute bottom-0 left-6 right-6 flex justify-between text-xs text-gray-400">
                  <span className="text-blue-400 font-bold">🌱 Start<br/>0.05€</span>
                  <span className="text-green-400 font-bold">📈 6 Monate<br/>0.10€</span>
                  <span className="text-yellow-400 font-bold">✨ 1 Jahr<br/>0.25€</span>
                  <span className="text-orange-400 font-bold">🔥 2 Jahre<br/>0.50€</span>
                  <span className="text-purple-400 font-bold">🚀 3 Jahre<br/>2.00€</span>
                  <span className="text-pink-400 font-bold animate-pulse">💎 5 Jahre<br/>5.00€+</span>
                </div>
                
                {/* Verknappungs-Indicator */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center text-green-400">
                    <FaCoins className="mr-2 animate-bounce" />
                    <span className="text-sm font-bold">Uniswap AMM</span>
                  </div>
                </div>

                {/* Verknappungs-Events (einfach erklärt) */}
                <div className="absolute" style={{top: '30%', left: '35%'}}>
                  <div className="bg-yellow-900/80 text-yellow-300 px-3 py-2 rounded-lg text-xs text-center border border-yellow-600/50">
                    <div className="font-bold">⚡ 1. Verknappung</div>
                    <div>Weniger neue Token!</div>
                  </div>
                </div>
                
                <div className="absolute" style={{top: '15%', left: '65%'}}>
                  <div className="bg-orange-900/80 text-orange-300 px-3 py-2 rounded-lg text-xs text-center border border-orange-600/50">
                    <div className="font-bold">⚡ 2. Verknappung</div>
                    <div>Noch seltener!</div>
                  </div>
                </div>
              </div>
              
              {/* Einfache Key Facts */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/30">
                  <div className="text-green-400 font-bold text-2xl mb-1">💰 100x</div>
                  <div className="text-green-300 text-sm">Möglicher Gewinn</div>
                  <div className="text-green-200 text-xs">0.05€ → 5.00€+</div>
                </div>
                <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-blue-400 font-bold text-2xl mb-1">🔒 50%</div>
                  <div className="text-blue-300 text-sm">Token weggesperrt</div>
                  <div className="text-blue-200 text-xs">bei jedem Kauf</div>
                </div>
                <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/30">
                  <div className="text-purple-400 font-bold text-2xl mb-1">📈 Auto</div>
                  <div className="text-purple-300 text-sm">Preisanstieg</div>
                  <div className="text-purple-200 text-xs">garantiert durch System</div>
                </div>
                <div className="bg-orange-900/30 rounded-lg p-4 border border-orange-500/30">
                  <div className="text-orange-400 font-bold text-2xl mb-1">⚡ Weniger</div>
                  <div className="text-orange-300 text-sm">Neue Token</div>
                  <div className="text-orange-200 text-xs">mit der Zeit</div>
                </div>
              </div>
            </div>

            {/* Einfach erklärt: Warum steigt der Preis? */}
            <div className="bg-slate-800/40 rounded-2xl p-6">
              <h4 className="text-emerald-400 font-bold text-xl mb-4 flex items-center">
                <FaRocket className="mr-3" />
                🤔 Warum wird D.FAITH immer wertvoller?
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">💰</span>
                      <span className="text-cyan-300 font-semibold">Automatische Token-Käufe</span>
                    </div>
                    <div className="text-gray-300 text-sm">Jeder Euro für Werbung kauft automatisch D.FAITH Token</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">🔒</span>
                      <span className="text-purple-300 font-semibold">Token werden weggesperrt</span>
                    </div>
                    <div className="text-gray-300 text-sm">50% aller gekauften Token verschwinden für immer aus dem Markt</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">📈</span>
                      <span className="text-green-300 font-semibold">Weniger = Teurer</span>
                    </div>
                    <div className="text-gray-300 text-sm">Je weniger Token verfügbar sind, desto höher wird der Preis</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">⚡</span>
                      <span className="text-orange-300 font-semibold">Immer weniger neue Token</span>
                    </div>
                    <div className="text-gray-300 text-sm">Mit der Zeit gibt es immer weniger neue D.FAITH Token</div>
                  </div>
                </div>
              </div>
              
              {/* Kompakte Zusammenfassung */}
              <div className="mt-4 bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-lg p-4 border border-green-500/30">
                <div className="text-center">
                  <div className="text-green-300 text-lg mb-2">
                    � Käufe → 🔒 Weniger Token → 📈 Höherer Preis
                  </div>
                  <div className="text-gray-300 text-sm">
                    Das System arbeitet automatisch für alle Beteiligten!
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'dinvest-staking':
        return (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-2xl relative">
                <FaUnlock className="text-3xl text-white animate-pulse" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                  <FaCoins className="text-white text-sm" />
                </div>
              </div>
            </div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              💎 D.INVEST Staking
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Der einzige Weg zu gesperrten D.FAITH Token + unterstützt Musikproduktion! 🎵
            </p>
            
            {/* Rentabilitäts-Rechnung für 1 D.INVEST Token */}
            <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-6 mb-8 border border-green-500/30">
              <h4 className="text-amber-400 font-bold text-xl mb-4 flex items-center justify-center">
                <FaChartLine className="mr-3" />
                � Wann wird's profitabel?
              </h4>
              
              {/* Kern-Botschaft mit konkreten Zahlen */}
              <div className="bg-slate-800/60 rounded-xl p-4 mb-6">
                <div className="text-cyan-300 font-bold text-lg mb-3 text-center">🎯 Die einfache Formel</div>
                <div className="text-center mb-4">
                  <div className="text-gray-300">1 D.INVEST (5€) → 0.1 D.FAITH pro Woche (10% Rate in Stufe 1)</div>
                  <div className="text-green-400 font-bold mt-2">
                    ✨ Je höher D.FAITH Preis steigt, desto schneller wird D.INVEST rentabel! ✨
                  </div>
                </div>
                
                {/* Konkrete Pool-Mathematik */}
                <div className="bg-slate-700/50 rounded-lg p-3">
                  <div className="text-cyan-300 font-bold text-sm mb-2 text-center">🧮 Realistische Pool-Entwicklung</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="text-blue-400 font-bold">Start</div>
                      <div className="text-gray-300">1.000€ + 20k Token</div>
                      <div className="text-blue-300">= 0.05€</div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-400 font-bold">+2.162€</div>
                      <div className="text-gray-300">Fan-Käufe</div>
                      <div className="text-orange-300">Uniswap AMM</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-bold">Ziel</div>
                      <div className="text-gray-300">3.162€ + 6k Token</div>
                      <div className="text-green-300">= 0.50€</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Zwei Szenarien */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30">
                  <h5 className="text-red-400 font-bold mb-2">❌ Ohne Fan-Käufe (unrealistisch)</h5>
                  <div className="text-gray-300 text-sm">Break-even: 1000 Wochen</div>
                  <div className="text-red-300 text-xs mt-1">Aber: Schon 2.162€ Fan-Engagement reicht! �</div>
                </div>

                <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/30">
                  <h5 className="text-green-400 font-bold mb-2">✅ Mit 2.162€ Fan-Käufen</h5>
                  <div className="text-gray-300 text-sm">D.FAITH → 0.50€, Break-even: 100 Wochen (~2 Jahre)</div>
                  <div className="text-green-300 text-xs mt-1">Sehr realistisch erreichbar! 🚀</div>
                </div>
              </div>
              
              {/* Früh-Einsteiger Vorteil */}
              <div className="bg-purple-900/30 rounded-xl p-4 mt-4 border border-purple-500/30">
                <div className="text-center">
                  <div className="text-purple-400 font-bold mb-2">🔥 Früh-Einsteiger Bonus</div>
                  <div className="text-gray-300 text-sm">
                    Stufe 1: 10% Rate • Stufe 3: 2.5% Rate • Stufe 6+: 0.31% Rate
                  </div>
                  <div className="text-purple-300 text-sm font-bold mt-1">
                    💡 Jetzt einsteigen = Dauerhaft bessere Konditionen!
                  </div>
                </div>
              </div>
            </div>
            
            {/* Wie das Entsperren funktioniert */}
            <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-2xl p-6 mb-8 border border-cyan-500/30">
              <h4 className="text-cyan-400 font-bold text-xl mb-6 flex items-center justify-center">
                <FaUnlock className="mr-3" />
                🔓 So funktioniert's
              </h4>
              
              {/* Vereinfachter 3-Schritt Prozess */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-800/40 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-3">
                    <FaDollarSign className="text-white text-xl" />
                  </div>
                  <h5 className="text-blue-400 font-bold">1. D.INVEST kaufen</h5>
                  <p className="text-gray-300 text-sm mt-2">Unterstütze Musik-produktion</p>
                </div>

                <div className="bg-slate-800/40 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-3">
                    <FaLock className="text-white text-xl" />
                  </div>
                  <h5 className="text-purple-400 font-bold">2. Token staken</h5>
                  <p className="text-gray-300 text-sm mt-2">In den Pool einsetzen</p>
                </div>

                <div className="bg-slate-800/40 rounded-xl p-4 text-center border border-green-500/30">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-3 animate-pulse">
                    <FaCoins className="text-white text-xl" />
                  </div>
                  <h5 className="text-green-400 font-bold">3. D.FAITH erhalten</h5>
                  <p className="text-gray-300 text-sm mt-2">Wöchentlich entsperren</p>
                </div>
              </div>
            </div>

            
            {/* Warum es wertvoll ist */}
            <div className="bg-slate-800/40 rounded-2xl p-6">
              <h4 className="text-cyan-400 font-bold text-xl mb-4 text-center">🎯 Warum D.INVEST Staking wertvoll ist</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span className="text-gray-300">Einziger Weg zu gesperrten D.FAITH</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span className="text-gray-300">Unterstützt echte Musikproduktion</span>
                  </div>
                </div>
                <div className="space-y-3 text-left">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span className="text-gray-300">Profitiert von D.FAITH Wertsteigerung</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span className="text-gray-300">Frühe Investoren = bessere Raten</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Die D.FAITH Lösung
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
            Belohnung des Fan-Engagements durch das duale Token-System
          </p>
          
          {/* Vorher vs. Nachher Comparison */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent mb-4">
                🔄 Von Problem zur Revolution
              </h3>
              <p className="text-gray-400 text-lg">
                Wie D.FAITH die traditionelle Musikindustrie komplett umkrempelt
              </p>
            </div>

            {/* Vorher vs. Nachher Karten */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              
              {/* VORHER - Traditionell */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-red-900/50 to-gray-900/50 rounded-3xl p-8 border-2 border-red-500/40 hover:border-red-400/60 transition-all duration-500">
                  {/* Header */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-xl mr-4">
                      <span className="text-2xl text-white">😔</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-red-400">VORHER</h4>
                      <p className="text-red-300 text-sm">Traditionelle Musikindustrie</p>
                    </div>
                  </div>

                  {/* Probleme */}
                  <div className="space-y-4">
                    <div className="bg-red-900/30 rounded-xl p-4 border border-red-500/30">
                      <div className="flex items-center mb-2">
                        <FaUsers className="text-red-400 mr-3" />
                        <span className="text-red-300 font-semibold">Fans</span>
                      </div>
                      <p className="text-gray-300 text-sm">• Konsumieren nur passiv</p>
                      <p className="text-gray-300 text-sm">• Bekommen nichts zurück</p>
                      <p className="text-gray-300 text-sm">• Keine echte Verbindung</p>
                    </div>

                    <div className="bg-red-900/30 rounded-xl p-4 border border-red-500/30">
                      <div className="flex items-center mb-2">
                        <FaMusic className="text-red-400 mr-3" />
                        <span className="text-red-300 font-semibold">Künstler (Dawid)</span>
                      </div>
                      <p className="text-gray-300 text-sm">• Wenig Reichweite</p>
                      <p className="text-gray-300 text-sm">• Teure Werbung nötig</p>
                      <p className="text-gray-300 text-sm">• Kein Kapital für Produktion</p>
                    </div>

                    <div className="bg-red-900/30 rounded-xl p-4 border border-red-500/30">
                      <div className="flex items-center mb-2">
                        <FaDollarSign className="text-red-400 mr-3" />
                        <span className="text-red-300 font-semibold">Investoren</span>
                      </div>
                      <p className="text-gray-300 text-sm">• Schwer in Musik zu investieren</p>
                      <p className="text-gray-300 text-sm">• Keine direkten Beteiligungen</p>
                      <p className="text-gray-300 text-sm">• Komplizierte Verträge</p>
                    </div>
                  </div>

                  <div className="mt-6 text-center bg-red-800/20 rounded-lg p-3">
                    <span className="text-red-300 font-bold">❌ Alle verlieren</span>
                  </div>
                </div>
              </div>

              {/* NACHHER - Mit D.FAITH */}
              <div className="relative group">
                <div className="bg-gradient-to-br from-green-900/50 to-blue-900/50 rounded-3xl p-8 border-2 border-green-500/40 hover:border-green-400/60 transition-all duration-500 hover:scale-102">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-xl mr-4 animate-pulse">
                        <span className="text-2xl text-white">🚀</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-green-400">NACHHER</h4>
                        <p className="text-green-300 text-sm">Mit D.FAITH Ökosystem</p>
                      </div>
                    </div>

                    {/* Lösungen */}
                    <div className="space-y-4">
                      <div className="bg-green-900/30 rounded-xl p-4 border border-green-500/30 hover:border-green-400/50 transition-colors duration-300">
                        <div className="flex items-center mb-2">
                          <FaCoins className="text-green-400 mr-3 animate-bounce" />
                          <span className="text-green-300 font-semibold">Fans</span>
                        </div>
                        <p className="text-gray-300 text-sm">• Bekommen D.FAITH Token für Likes</p>
                        <p className="text-gray-300 text-sm">• Können Token verkaufen (ETH)</p>
                        <p className="text-gray-300 text-sm">• Exklusive Musik & Shop</p>
                      </div>

                      <div className="bg-blue-900/30 rounded-xl p-4 border border-blue-500/30 hover:border-blue-400/50 transition-colors duration-300">
                        <div className="flex items-center mb-2">
                          <FaChartLine className="text-blue-400 mr-3" />
                          <span className="text-blue-300 font-semibold">Künstler (Dawid)</span>
                        </div>
                        <p className="text-gray-300 text-sm">• Automatisch mehr Engagement</p>
                        <p className="text-gray-300 text-sm">• Kapital durch D.INVEST (5€/Token)</p>
                        <p className="text-gray-300 text-sm">• Loyale Fan-Community</p>
                      </div>

                      <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300">
                        <div className="flex items-center mb-2">
                          <FaTrophy className="text-purple-400 mr-3" />
                          <span className="text-purple-300 font-semibold">Investoren</span>
                        </div>
                        <p className="text-gray-300 text-sm">• Einfach D.INVEST kaufen</p>
                        <p className="text-gray-300 text-sm">• Token-Wertsteigerung durch Burns</p>
                        <p className="text-gray-300 text-sm">• Staking-Rewards (D.FAITH)</p>
                      </div>
                    </div>

                    <div className="mt-6 text-center bg-green-800/20 rounded-lg p-3 border border-green-500/30">
                      <span className="text-green-300 font-bold">✅ Alle gewinnen!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Der Zauber: Wie funktioniert's? */}
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-xl">
              <div className="text-center mb-8">
                <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-4">
                  ✨ Der Zauber dahinter
                </h4>
                <p className="text-gray-400">Wie ein einfacher Kommentar eine ganze Ökonomie antreibt</p>
              </div>

              {/* Magic Flow */}
              <div className="relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-6">
                  
                  {/* Schritt 1: Fan Engagement */}
                  <div className="flex-1 group relative">
                    <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 rounded-2xl p-6 border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 hover:scale-105 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse">
                        <FaHeart className="text-2xl text-white" />
                      </div>
                      <h5 className="text-pink-400 font-bold mb-2">1. Fan liked Post</h5>
                      <p className="text-gray-300 text-sm">Mit Keyword "D.FAITH"</p>
                      <div className="mt-3 bg-slate-800/50 rounded-lg p-2">
                        <span className="text-pink-300 text-xs font-mono">"D.FAITH 🔥❤️"</span>
                      </div>
                    </div>
                  </div>

                  {/* Pfeil */}
                  <div className="hidden lg:block">
                    <FaArrowRight className="text-2xl text-yellow-400 animate-pulse" />
                  </div>

                  {/* Schritt 2: Auto-System */}
                  <div className="flex-1 group relative">
                    <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 rounded-2xl p-6 border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
                        <FaRobot className="text-2xl text-white animate-bounce" />
                      </div>
                      <h5 className="text-yellow-400 font-bold mb-2">2. System aktiviert</h5>
                      <p className="text-gray-300 text-sm">Marketing-Budget kauft Token</p>
                      <div className="mt-3 bg-slate-800/50 rounded-lg p-2">
                        <span className="text-yellow-300 text-xs">0.50€ × Level 3 = 1.50€</span>
                      </div>
                    </div>
                  </div>

                  {/* Pfeil */}
                  <div className="hidden lg:block">
                    <FaArrowRight className="text-2xl text-green-400 animate-pulse" style={{animationDelay: '0.5s'}} />
                  </div>

                  {/* Schritt 3: Token Magic */}
                  <div className="flex-1 group relative">
                    <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-2xl p-6 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                        <FaCoins className="text-2xl text-white animate-spin" style={{animationDuration: '2s'}} />
                      </div>
                      <h5 className="text-green-400 font-bold mb-2">3. Token Magie</h5>
                      <p className="text-gray-300 text-sm">50% für Fan, 50% geburnt</p>
                      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-green-800/30 rounded p-2">
                          <span className="text-green-300">Fan: 0.75€</span>
                        </div>
                        <div className="bg-red-800/30 rounded p-2">
                          <span className="text-red-300">🔥 Burn: 0.75€</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Magic Result */}
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-6 border border-purple-500/30">
                    <FaRocket className="text-3xl text-purple-400 mr-4 animate-bounce" />
                    <div className="text-left">
                      <h6 className="text-purple-300 font-bold text-lg">Resultat: Alle gewinnen sofort!</h6>
                      <p className="text-gray-400">Fan bekommt Token, Dawid bekommt Engagement, Token wird seltener → Preis steigt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
            Navigieren Sie durch den gesamten Prozess und lernen Sie, wie jede Interaktion automatisch Token-Wert schafft
          </p>
          
          {/* Dawid Faith's persönliche Motivation */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/dawid-faith-photo.jpg"
                alt="Dawid Faith"
                width={60}
                height={60}
                className="rounded-full border-2 border-purple-500"
              />
              <div>
                <h4 className="text-lg font-semibold text-white">Dawid Faith</h4>
                <p className="text-purple-400 text-sm">Künstler & Token-Entwickler</p>
              </div>
            </div>
            <blockquote className="text-gray-300 italic text-base leading-relaxed">
              "Ich hatte das Problem, dass mein Content nicht die Reichweite bekommen hat, die er verdient. 
              Bezahlte Werbung ist teuer und zeitintensiv. Außerdem habe ich kein Kapital für Musikproduktion oder Videos. 
              Also entwickelte ich D.FAITH - um Fans direkt für ihr Engagement zu belohnen und gleichzeitig Kapital für meine Musik zu generieren."
            </blockquote>
          </div>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Horizontale 3 Schritte */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
            {steps.map((step, index) => {
              return (
                <div key={step.id} className="flex items-center">
                  {/* Step */}
                  <div className="flex flex-col items-center text-center max-w-xs bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Fan Interaktion - Social Media Icons */}
                    {step.id === 1 && (
                      <div className="flex space-x-4 mb-4">
                        <div className="p-2 rounded-full bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-500/30">
                          <FaInstagram className="text-2xl text-pink-400" />
                        </div>
                        <div className="p-2 rounded-full bg-gradient-to-br from-slate-700/20 to-slate-800/20 border border-slate-600/30">
                          <FaTiktok className="text-2xl text-white" />
                        </div>
                        <div className="p-2 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                          <FaFacebook className="text-2xl text-blue-400" />
                        </div>
                      </div>
                    )}
                    
                    {/* Automatische Käufe - Chart Icon */}
                    {step.id === 2 && (
                      <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30">
                        <FaChartLine className="text-3xl text-green-400" />
                      </div>
                    )}
                    
                    {/* Token Verteilung - Münzen Symbol */}
                    {step.id === 3 && (
                      <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-600/20 border border-yellow-500/30">
                        <FaCoins className="text-3xl text-yellow-400" />
                      </div>
                    )}
                    
                    <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                    {step.id === 1 ? (
                      <div className="text-gray-300 text-sm space-y-2">
                        <p className="font-semibold text-purple-400">Keyword "D.FAITH" im Kommentar</p>
                        <div className="flex flex-wrap items-center justify-center gap-2">
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
                        <p className="text-xs text-gray-400">→ Automatische Profilerstellung</p>
                      </div>
                    ) : step.id === 2 ? (
                      <div className="text-gray-300 text-sm space-y-1">
                        <p>Marketing-Budget wird aktiviert</p>
                        <p className="text-green-400">Token-Käufe je nach User Level</p>
                        <p className="text-xs text-gray-400">→ Feeds Smart Contract</p>
                      </div>
                    ) : step.id === 3 ? (
                      <div className="text-gray-300 text-sm space-y-1">
                        <p>50% → Smart Contract (gesperrt)</p>
                        <p>50% → Fan Rewards (Level-System)</p>
                        <p className="text-xs text-gray-400">→ Verknappung & Wertsteigerung</p>
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

        {/* Verzweigungslinie */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            {/* Hauptlinie nach unten */}
            <div className="w-1 h-16 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-400 mx-auto rounded-full shadow-lg shadow-blue-500/20"></div>
            
            {/* Token Verteilung Text */}
            <div className="text-center mb-6 mt-4">
              <span className="text-white font-semibold text-sm bg-gradient-to-r from-blue-600/80 to-purple-600/80 px-3 py-1 rounded-full border border-white/20 shadow-lg">
                Token Verteilung
              </span>
            </div>
            
            {/* Verzweigungslinien */}
            <div className="relative flex justify-center">
              {/* Linke Linie */}
              <div className="absolute -left-28 top-0">
                <div className="w-28 h-1 bg-gradient-to-r from-blue-400 to-blue-500 transform -rotate-12 rounded-full shadow-md shadow-blue-500/20"></div>
              </div>
              
              {/* Rechte Linie */}
              <div className="absolute -right-28 top-0">
                <div className="w-28 h-1 bg-gradient-to-r from-purple-500 to-purple-400 transform rotate-12 rounded-full shadow-md shadow-purple-500/20"></div>
              </div>
            </div>
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
                className={`relative bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 cursor-pointer transition-all duration-500 border group ${
                  isSelected 
                    ? 'border-white/40 bg-slate-800/60 shadow-2xl shadow-blue-500/10 scale-105 ring-1 ring-white/20' 
                    : 'border-slate-700/30 hover:border-slate-600/40 hover:bg-slate-800/50 hover:shadow-xl hover:shadow-purple-500/5 hover:scale-102'
                }`}
                onClick={() => setSelectedBranch(prev => prev === branch.key ? null : branch.key)}
              >

                {/* Branch Header */}
                <div className="relative flex flex-col items-center text-center mb-6">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${branch.color} flex items-center justify-center shadow-2xl mb-6 transition-transform duration-300 group-hover:scale-110 border border-white/10`}>
                    <IconComponent className="text-3xl text-white drop-shadow-lg" />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${branch.color} opacity-20 blur-lg`}></div>
                  </div>
                  <h4 className={`text-3xl font-bold mb-3 bg-gradient-to-r ${branch.color} bg-clip-text text-transparent drop-shadow-sm`}>
                    {branch.title}
                  </h4>
                  <p className="text-gray-400 text-lg leading-relaxed">{branch.subtitle}</p>
                </div>

                {/* Branch Details */}
                {isSelected && (
                  <div className="pt-6 border-t border-slate-600">
                    <h5 className="text-lg font-semibold text-white mb-4">Features:</h5>
                    
                    {/* Clickable Step Cards with Icons */}
                    <div className="grid gap-4">
                      {branch.steps.map((step, index) => {
                        const StepIcon = step.icon
                        return (
                          <div key={index} className="group">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setActiveModal(step.id)
                              }}
                              className="w-full flex items-start space-x-4 bg-slate-700/30 hover:bg-slate-700/50 rounded-xl p-4 transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 cursor-pointer hover:scale-105"
                            >
                              {/* Step Icon */}
                              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${branch.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                <StepIcon className="text-white text-lg" />
                              </div>
                              
                              {/* Step Content */}
                              <div className="flex-1 text-left">
                                <h6 className={`font-semibold mb-1 ${step.color} group-hover:text-white transition-colors duration-300`}>
                                  {step.title}
                                </h6>
                                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                  {step.description}
                                </p>
                              </div>
                              
                              {/* Click Hint */}
                              <div className="flex items-center text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                                <span className="text-xs mr-2">Details</span>
                                <FaRocket className="text-sm" />
                              </div>
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

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

        {/* Die D.FAITH Ökosystem Webapp */}
        <div className="mb-16 bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/30">
          <h4 className="text-3xl font-bold text-center text-white mb-4">Die D.FAITH Ökosystem Webapp</h4>
          <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
            Alle Features aus beiden Branches (Smart Contract & Token Rewards) vereint in einer einzigen, 
            benutzerfreundlichen Web-Anwendung - komplett live und funktionsfähig!
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Dawid Faith Wallet Screenshot */}
            <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl p-6 border border-purple-500/30">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  <FaMobileAlt className="text-3xl text-purple-400 mr-3" />
                  <h5 className="text-2xl font-bold text-purple-400">Dawid Faith Wallet</h5>
                </div>
                <p className="text-gray-400">Die zentrale Webapp für das gesamte D.FAITH Ökosystem</p>
              </div>
              
              {/* Screenshot Container */}
              <div className="relative group">
                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                  <Image
                    src="/Dawid Faith Wallet3.jpg"
                    alt="Dawid Faith Wallet Interface"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Features */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-gray-300">
                  <FaCoins className="text-purple-400 mr-3 text-lg" />
                  <span>Token kaufen, verkaufen & tauschen</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <FaChartLine className="text-purple-400 mr-3 text-lg" />
                  <span>Live Staking mit 6-Stufen Halving-System</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <FaTrophy className="text-purple-400 mr-3 text-lg" />
                  <span>User Profile, Level-System & Leaderboards</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <FaShoppingCart className="text-purple-400 mr-3 text-lg" />
                  <span>Exklusiver D.FAITH Shop</span>
                </div>
              </div>
            </div>

            {/* Social Media Integration Screenshot */}
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-2xl p-6 border border-green-500/30">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  <FaUsers className="text-3xl text-green-400 mr-3" />
                  <h5 className="text-2xl font-bold text-green-400">Social Media Hub</h5>
                </div>
                <p className="text-gray-400">Cross-Platform Integration & Fan-Engagement</p>
              </div>
              
              {/* Screenshot Container */}
              <div className="relative group">
                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-600/30 hover:border-green-500/50 transition-all duration-300">
                  <Image
                    src="/Social Media.jpg"
                    alt="Social Media Integration Interface"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Features */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-gray-300">
                  <FaInstagram className="text-green-400 mr-3 text-lg" />
                  <span>Instagram, TikTok, Facebook Integration</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <FaRocket className="text-green-400 mr-3 text-lg" />
                  <span>Automatische Engagement-Erkennung</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <FaChartBar className="text-green-400 mr-3 text-lg" />
                  <span>Globales EXP-System & Statistiken</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <FaMusic className="text-green-400 mr-3 text-lg" />
                  <span>Live-Event Codes & Spotify (geplant)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-amber-900/40 to-yellow-900/40 rounded-xl p-6 border border-amber-500/30">
              <h6 className="text-xl font-bold text-amber-400 mb-3">
                🚀 Komplett Live & Funktionsfähig!
              </h6>
              <p className="text-gray-300 mb-4">
                Die D.FAITH Webapp ist bereits vollständig entwickelt und operational. 
                Alle Features aus dem Whitepaper sind implementiert und können sofort genutzt werden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center text-sm">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  <span className="text-gray-300">Smart Contracts deployed</span>
                </div>
                <div className="flex items-center justify-center text-sm">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  <span className="text-gray-300">Social Media APIs aktiv</span>
                </div>
                <div className="flex items-center justify-center text-sm">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  <span className="text-gray-300">Token-System funktional</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zusammenfassung - Das Ergebnis */}
        <div className="relative text-center bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/30 shadow-2xl shadow-blue-500/5">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10 rounded-3xl"></div>
          
          <div className="relative">
            {/* Main Results Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 flex items-center justify-center shadow-2xl animate-pulse">
                  <FaTrophy className="text-4xl text-white" />
                </div>
              </div>
              <h4 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                Das Ergebnis
              </h4>
              <p className="text-xl text-gray-300 mb-2">Ein revolutionäres Ökosystem mit messbaren Vorteilen</p>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
            </div>



            {/* Win-Win-Win Cards */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Fans Card */}
              <div className="group relative bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-3xl p-8 border border-green-500/30 hover:border-green-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-xl mr-4">
                      <FaUsers className="text-2xl text-white" />
                    </div>
                    <div>
                      <h5 className="text-2xl font-bold text-green-400">Fans</h5>
                      <p className="text-green-300 text-sm">Die Community gewinnt</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaCoins className="text-green-400 mt-1 mr-3 text-lg" />
                      <div className="text-left">
                        <p className="text-white font-semibold">Echte Token-Belohnungen</p>
                        <p className="text-gray-300 text-sm">Je nach Level unterschiedlich</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaMusic className="text-green-400 mt-1 mr-3 text-lg" />
                      <div className="text-left">
                        <p className="text-white font-semibold">Exklusive Musik früher</p>
                        <p className="text-gray-300 text-sm">VIP-Zugang zu neuen Releases</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaExchangeAlt className="text-green-400 mt-1 mr-3 text-lg" />
                      <div className="text-left">
                        <p className="text-white font-semibold">ETH-Umtausch möglich</p>
                        <p className="text-gray-300 text-sm">Jederzeit liquide verfügbar</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaTrophy className="text-green-400 mt-1 mr-3 text-lg" />
                      <div className="text-left">
                        <p className="text-white font-semibold">Level-System</p>
                        <p className="text-gray-300 text-sm">Höhere Level = Mehr Rewards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dawid Faith Card */}
              <div className="group relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl mr-4">
                      <FaMusic className="text-2xl text-white" />
                    </div>
                    <div>
                      <h5 className="text-2xl font-bold text-purple-400">Dawid Faith</h5>
                      <p className="text-purple-300 text-sm">Der Künstler gewinnt</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaChartLine className="text-purple-400 mt-1 mr-3 text-lg" />
                      <div className="text-left">
                        <p className="text-white font-semibold">Mehr Organische Reichweite</p>
                        <p className="text-gray-300 text-sm">Keine Werbung nötig</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaDollarSign className="text-purple-400 mt-1 mr-3 text-lg" />
                      <div className="text-left">
                        <p className="text-white font-semibold">Kapital für Musikproduktion</p>
                        <p className="text-gray-300 text-sm">Direkte Monetarisierung</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaHeart className="text-purple-400 mt-1 mr-3 text-lg" />
                      <div className="text-left">
                        <p className="text-white font-semibold">Loyale Community</p>
                        <p className="text-gray-300 text-sm">Echte Fans, nicht Bots</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaRocket className="text-purple-400 mt-1 mr-3 text-lg" />
                      <div className="text-left">
                        <p className="text-white font-semibold">Globale Expansion</p>
                        <p className="text-gray-300 text-sm">Internationale Reichweite</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investoren Card */}
              <div className="group relative bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-3xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-xl mr-4">
                      <FaChartBar className="text-2xl text-white" />
                    </div>
                    <div>
                      <h5 className="text-2xl font-bold text-cyan-400">Investoren</h5>
                      <p className="text-cyan-300 text-sm">Das Kapital gewinnt</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaRocket className="text-cyan-400 mt-1 mr-3 text-lg" />
                      <div className="text-left">
                        <p className="text-white font-semibold">D.INVEST Wertsteigerung</p>
                        <p className="text-gray-300 text-sm">Kontinuierlicher Token-Burn</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaCoins className="text-cyan-400 mt-1 mr-3 text-lg" />
                      <div className="text-left">
                        <p className="text-white font-semibold">D.FAITH Staking-Rewards</p>
                        <p className="text-gray-300 text-sm">Passive Income Generation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaChartLine className="text-cyan-400 mt-1 mr-3 text-lg" />
                      <div className="text-left">
                        <p className="text-white font-semibold">"Moon-Effekt" Potenzial</p>
                        <p className="text-gray-300 text-sm">Exponentielles Wachstum</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaShieldAlt className="text-cyan-400 mt-1 mr-3 text-lg" />
                      <div className="text-left">
                        <p className="text-white font-semibold">Sicheres Investment</p>
                        <p className="text-gray-300 text-sm">Reale Anwendung & Nutzen</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-3xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-slate-700/50 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
            >
              ✕
            </button>

            {/* Render Modal Content Based on Active Modal */}
            {renderModalContent()}

            {/* Close Button Bottom - für alle Modals */}
            <div className="text-center mt-8">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Verstanden
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default SolutionSection
