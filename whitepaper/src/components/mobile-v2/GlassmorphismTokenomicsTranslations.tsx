// Übersetzungen für GlassmorphismTokenomics Mobile (DE, EN, PL)

export type GlassmorphismTokenomicsTranslations = {
  title: string;
  subtitle: string;
  liveData: string;
  tabs: {
    overview: string;
    halving: string;
    roi: string;
    tech: string;
  };
  dfaith: {
    title: string;
    subtitle: string;
    smartContract: string;
    currentPrice: string;
    dexLiquidity: string;
    community: string;
    totalSupply: string;
    marketCap: string;
  };
  dinvest: {
    title: string;
    subtitle: string;
    fixedPrice: string;
    sold: string;
    available: string;
    currentStage: string;
    stage: string;
    totalValue: string;
  };
  halving: {
    title: string;
    subtitle: string;
    liveStage: string;
    active: string;
    soon: string;
    future: string;
    final: string;
    status: string;
    weeklyRate: string;
    vsFinal: string;
    halvingSystemTitle: string;
    halvingSystemSubtitle: string;
    livePrefix: string;
    activeStatus: string;
  };
  roi: {
    title: string;
    tokenAmount: string;
    priceLabel: string;
    halvingStage: string;
    investment: string;
    yearlyROI: string;
    yearlyProfit: string;
    roiCalculatorTitle: string;
  };
  tech: {
    blockchainTitle: string;
    blockchainSubtitle: string;
    baseChainDesc: string;
    tokenSpecs: string;
    standard: string;
    decimals: string;
    supply: string;
    type: string;
    utility: string;
    investmentType: string;
    blockchainInfraTitle: string;
    tokenSpecsTitle: string;
    security: string;
    decentralized: string;
    crosschain: string;
    securityDesc: string;
    decentralizedDesc: string;
    crosschainDesc: string;
  };
};

export const glassmorphismTokenomicsTranslations: Record<'de' | 'en' | 'pl', GlassmorphismTokenomicsTranslations> = {
  de: {
    title: 'Tokenomics',
    subtitle: 'Dual-Token Ökonomie mit intelligenter Verknappung',
    liveData: 'Live Daten',
    tabs: {
      overview: 'Übersicht',
      halving: 'Halving',
      roi: 'ROI',
      tech: 'Tech'
    },
    dfaith: {
      title: 'D.FAITH Token',
      subtitle: 'Fan-Reward Token',
      smartContract: 'Smart Contract',
      currentPrice: 'Aktueller Preis',
      dexLiquidity: 'DEX Liquidität',
      community: 'Community',
      totalSupply: 'Gesamtversorgung',
      marketCap: 'Marktkapitalisierung'
    },
    dinvest: {
      title: 'D.INVEST Token',
      subtitle: 'Investment Token',
      fixedPrice: 'Fester Preis',
      sold: 'Verkauft',
      available: 'Verfügbar',
      currentStage: 'Aktuelle Stufe',
      stage: 'Stufe',
      totalValue: 'Gesamtwert'
    },
    halving: {
      title: '6-Stufen Halving System',
      subtitle: 'Systematische Verknappung für nachhaltiges Wachstum',
      liveStage: 'Live: Stufe',
      active: 'AKTIV',
      soon: 'Bald',
      future: 'Zukunft',
      final: 'Final',
      status: 'Status',
      weeklyRate: 'Wöchentliche Rate',
      vsFinal: 'vs. Final',
      halvingSystemTitle: '6-Stufen Halving System',
      halvingSystemSubtitle: 'Systematische Verknappung für nachhaltiges Wachstum',
      livePrefix: '🔴 Live: Stufe',
      activeStatus: 'aktiv'
    },
    roi: {
      title: 'ROI Rechner',
      tokenAmount: 'D.INVEST Token Anzahl',
      priceLabel: 'D.FAITH Preis (€)',
      halvingStage: 'Halving-Stufe',
      investment: 'Investment',
      yearlyROI: 'Jährlicher ROI',
      yearlyProfit: 'Jährlicher Gewinn',
      roiCalculatorTitle: 'ROI Rechner'
    },
    tech: {
      blockchainTitle: 'Blockchain-Infrastruktur',
      blockchainSubtitle: 'Base Chain (Layer 2)',
      baseChainDesc: 'Niedrige Transaction-Fees, schnelle Verarbeitung und vollständig Ethereum-kompatibel. Optimiert für DeFi-Anwendungen mit enterprise-level Security.',
      tokenSpecs: 'Token-Spezifikationen',
      standard: 'Standard:',
      decimals: 'Decimals:',
      supply: 'Supply:',
      type: 'Type:',
      utility: 'Utility',
      investmentType: 'Investment',
      blockchainInfraTitle: 'Blockchain-Infrastruktur',
      tokenSpecsTitle: 'Token-Spezifikationen',
      security: 'Sicherheit',
      decentralized: 'Dezentralisiert',
      crosschain: 'Cross-Chain',
      securityDesc: 'Multi-Sig Wallets, audited Smart Contracts',
      decentralizedDesc: 'Community-driven, transparente Governance',
      crosschainDesc: 'Ethereum & Base Chain kompatibel'
    }
  },
  en: {
    title: 'Tokenomics',
    subtitle: 'Dual-Token Economy with Intelligent Scarcity',
    liveData: 'Live Data',
    tabs: {
      overview: 'Overview',
      halving: 'Halving',
      roi: 'ROI',
      tech: 'Tech'
    },
    dfaith: {
      title: 'D.FAITH Token',
      subtitle: 'Fan-Reward Token',
      smartContract: 'Smart Contract',
      currentPrice: 'Current Price',
      dexLiquidity: 'DEX Liquidity',
      community: 'Community',
      totalSupply: 'Total Supply',
      marketCap: 'Market Cap'
    },
    dinvest: {
      title: 'D.INVEST Token',
      subtitle: 'Investment Token',
      fixedPrice: 'Fixed Price',
      sold: 'Sold',
      available: 'Available',
      currentStage: 'Current Stage',
      stage: 'Stage',
      totalValue: 'Total Value'
    },
    halving: {
      title: '6-Stage Halving System',
      subtitle: 'Systematic Scarcity for Sustainable Growth',
      liveStage: 'Live: Stage',
      active: 'ACTIVE',
      soon: 'Soon',
      future: 'Future',
      final: 'Final',
      status: 'Status',
      weeklyRate: 'Weekly Rate',
      vsFinal: 'vs. Final',
      halvingSystemTitle: '6-Stage Halving System',
      halvingSystemSubtitle: 'Systematic Scarcity for Sustainable Growth',
      livePrefix: '🔴 Live: Stage',
      activeStatus: 'active'
    },
    roi: {
      title: 'ROI Calculator',
      tokenAmount: 'D.INVEST Token Amount',
      priceLabel: 'D.FAITH Price (€)',
      halvingStage: 'Halving Stage',
      investment: 'Investment',
      yearlyROI: 'Yearly ROI',
      yearlyProfit: 'Yearly Profit',
      roiCalculatorTitle: 'ROI Calculator'
    },
    tech: {
      blockchainTitle: 'Blockchain Infrastructure',
      blockchainSubtitle: 'Base Chain (Layer 2)',
      baseChainDesc: 'Low transaction fees, fast processing and fully Ethereum-compatible. Optimized for DeFi applications with enterprise-level security.',
      tokenSpecs: 'Token Specifications',
      standard: 'Standard:',
      decimals: 'Decimals:',
      supply: 'Supply:',
      type: 'Type:',
      utility: 'Utility',
      investmentType: 'Investment',
      blockchainInfraTitle: 'Blockchain Infrastructure',
      tokenSpecsTitle: 'Token Specifications',
      security: 'Security',
      decentralized: 'Decentralized',
      crosschain: 'Cross-Chain',
      securityDesc: 'Multi-Sig Wallets, audited Smart Contracts',
      decentralizedDesc: 'Community-driven, transparent Governance',
      crosschainDesc: 'Ethereum & Base Chain compatible'
    }
  },
  pl: {
    title: 'Tokenomika',
    subtitle: 'Ekonomia Dwóch Tokenów z Inteligentnym Niedoborem',
    liveData: 'Dane na Żywo',
    tabs: {
      overview: 'Przegląd',
      halving: 'Halving',
      roi: 'ROI',
      tech: 'Tech'
    },
    dfaith: {
      title: 'Token D.FAITH',
      subtitle: 'Token Nagród dla Fanów',
      smartContract: 'Smart Contract',
      currentPrice: 'Aktualna Cena',
      dexLiquidity: 'Płynność DEX',
      community: 'Społeczność',
      totalSupply: 'Całkowita Podaż',
      marketCap: 'Kapitalizacja Rynkowa'
    },
    dinvest: {
      title: 'Token D.INVEST',
      subtitle: 'Token Inwestycyjny',
      fixedPrice: 'Stała Cena',
      sold: 'Sprzedane',
      available: 'Dostępne',
      currentStage: 'Aktualny Etap',
      stage: 'Etap',
      totalValue: 'Całkowita Wartość'
    },
    halving: {
      title: '6-Etapowy System Halvingu',
      subtitle: 'Systematyczny Niedobór dla Zrównoważonego Wzrostu',
      liveStage: 'Na Żywo: Etap',
      active: 'AKTYWNY',
      soon: 'Wkrótce',
      future: 'Przyszłość',
      final: 'Końcowy',
      status: 'Status',
      weeklyRate: 'Tygodniowa Stopa',
      vsFinal: 'vs. Końcowy',
      halvingSystemTitle: '6-Etapowy System Halvingu',
      halvingSystemSubtitle: 'Systematyczny Niedobór dla Zrównoważonego Wzrostu',
      livePrefix: '🔴 Na Żywo: Etap',
      activeStatus: 'aktywny'
    },
    roi: {
      title: 'Kalkulator ROI',
      tokenAmount: 'Ilość Tokenów D.INVEST',
      priceLabel: 'Cena D.FAITH (€)',
      halvingStage: 'Etap Halvingu',
      investment: 'Inwestycja',
      yearlyROI: 'Roczny ROI',
      yearlyProfit: 'Roczny Zysk',
      roiCalculatorTitle: 'Kalkulator ROI'
    },
    tech: {
      blockchainTitle: 'Infrastruktura Blockchain',
      blockchainSubtitle: 'Base Chain (Layer 2)',
      baseChainDesc: 'Niskie opłaty transakcyjne, szybkie przetwarzanie i pełna kompatybilność z Ethereum. Zoptymalizowane dla aplikacji DeFi z bezpieczeństwem na poziomie korporacyjnym.',
      tokenSpecs: 'Specyfikacje Tokenów',
      standard: 'Standard:',
      decimals: 'Miejsca:',
      supply: 'Podaż:',
      type: 'Typ:',
      utility: 'Użytkowy',
      investmentType: 'Inwestycyjny',
      blockchainInfraTitle: 'Infrastruktura Blockchain',
      tokenSpecsTitle: 'Specyfikacje Tokenów',
      security: 'Bezpieczeństwo',
      decentralized: 'Zdecentralizowany',
      crosschain: 'Cross-Chain',
      securityDesc: 'Portfele Multi-Sig, audytowane Smart Contracts',
      decentralizedDesc: 'Kierowany przez społeczność, przejrzyste zarządzanie',
      crosschainDesc: 'Kompatybilny z Ethereum i Base Chain'
    }
  }
};