// Übersetzungen für TokenomicsChart (DE, EN, PL)

export type TokenomicsChartTranslations = {
  title: string;
  subtitle: string;
  tabs: {
    overview: string;
    calculator: string;
    halving: string;
    tech: string;
  };
  dfaith: {
    name: string;
    description: string;
    halvingStage: string;
    contract: string;
    price: string;
    dexLiquidity: string;
    community: string;
    liveData: string;
  };
  dinvest: {
    name: string;
    description: string;
    price: string;
    sold: string;
    available: string;
    stage: string;
    liveData: string;
  };
  calculator: {
    title: string;
    tokenAmount: string;
    dfaithPrice: string;
    halvingStage: string;
    annualReward: string;
    annualRoi: string;
    investment: string;
  };
  halving: {
    title: string;
    description: string;
    live: string;
    rewardRate: string;
    multiplier: string;
    status: string;
    stage: string;
    range: string;
    final: string;
  };
  tech: {
    blockchain: string;
    blockchainDesc: string;
    baseChain: string;
    baseChainDesc: string;
    dfaithContract: string;
    dinvestContract: string;
    stakingContract: string;
    contractBtn: string;
    tokenSpecs: string;
    dfaith: string;
    dinvest: string;
    standard: string;
    decimals: string;
    supply: string;
    type: string;
    utility: string;
    investment: string;
  };
  chart: {
    smartContract: string;
    dexLiquidity: string;
    communityCirculation: string;
    sold: string;
    available: string;
  };
  tooltip: {
    tokens: string;
    percent: string;
    liveData: string;
  };
};

export const tokenomicsChartTranslations: Record<'de' | 'en' | 'pl', TokenomicsChartTranslations> = {
  de: {
    title: 'Tokenomics',
    subtitle: 'Dual-Token Ökonomie mit intelligenter Verknappung',
    tabs: {
      overview: 'Überblick',
      calculator: 'Rentabilitäts-Rechner',
      halving: 'Halving',
      tech: 'Tech',
    },
    dfaith: {
      name: 'D.FAITH',
      description: 'Fan-Reward Token',
      halvingStage: 'Aktuelle Halving-Stufe',
      contract: 'Smart Contract',
      price: 'Aktueller Preis',
      dexLiquidity: 'DEX Liquidität',
      community: 'Community',
      liveData: 'Live Daten',
    },
    dinvest: {
      name: 'D.INVEST',
      description: 'Investment Token',
      price: 'Fester Preis',
      sold: 'Verkauft',
      available: 'Verfügbar',
      stage: 'Aktuelle Stufe',
      liveData: 'Live Daten',
    },
    calculator: {
      title: 'ROI Rechner',
      tokenAmount: 'D.INVEST Token Anzahl',
      dfaithPrice: 'D.FAITH Preis (€)',
      halvingStage: 'Halving-Stufe',
      annualReward: 'Jährliche Reward-Rate',
      annualRoi: 'Jährlicher ROI',
      investment: 'Investition (D.INVEST x 5€)',
    },
    halving: {
      title: '6-Stufen Halving System',
      description: 'Systematische Verknappung für nachhaltiges Wachstum',
      live: '🔴 Live: Stufe {stage} aktiv',
      rewardRate: 'Reward-Rate',
      multiplier: 'Multiplikator',
      status: 'Status',
      stage: 'Stufe',
      range: 'Bereich',
      final: 'Final',
    },
    tech: {
      blockchain: 'Blockchain',
      blockchainDesc: 'Layer-2, schnell & günstig, optimiert für DeFi, voll Ethereum-kompatibel.',
      baseChain: 'Base (Layer 2)',
      baseChainDesc: 'Niedrige Gebühren, schnelle Verarbeitung, Ethereum-kompatibel.',
      dfaithContract: 'D.FAITH Contract',
      dinvestContract: 'D.INVEST Contract',
      stakingContract: 'Staking Contract',
      contractBtn: '↗',
      tokenSpecs: 'Token-Spezifikationen',
      dfaith: 'D.FAITH Token',
      dinvest: 'D.INVEST Token',
      standard: 'Standard',
      decimals: 'Decimals',
      supply: 'Supply',
      type: 'Typ',
      utility: 'Utility',
      investment: 'Investment',
    },
    chart: {
      smartContract: 'Smart Contract',
      dexLiquidity: 'DEX Liquidität',
      communityCirculation: 'Community Umlauf',
      sold: 'Verkauft',
      available: 'Verfügbar',
    },
    tooltip: {
      tokens: 'Token',
      percent: '%',
      liveData: 'Live Daten',
    },
  },
  en: {
    title: 'Tokenomics',
    subtitle: 'Dual-token economy with intelligent scarcity',
    tabs: {
      overview: 'Overview',
      calculator: 'ROI Calculator',
      halving: 'Halving',
      tech: 'Tech',
    },
    dfaith: {
      name: 'D.FAITH',
      description: 'Fan reward token',
      halvingStage: 'Current halving stage',
      contract: 'Smart contract',
      price: 'Current price',
      dexLiquidity: 'DEX liquidity',
      community: 'Community',
      liveData: 'Live data',
    },
    dinvest: {
      name: 'D.INVEST',
      description: 'Investment token',
      price: 'Fixed price',
      sold: 'Sold',
      available: 'Available',
      stage: 'Current stage',
      liveData: 'Live data',
    },
    calculator: {
      title: 'ROI Calculator',
      tokenAmount: 'D.INVEST token amount',
      dfaithPrice: 'D.FAITH price (€)',
      halvingStage: 'Halving stage',
      annualReward: 'Annual reward rate',
      annualRoi: 'Annual ROI',
      investment: 'Investment (D.INVEST x €5)',
    },
    halving: {
      title: '6-stage halving system',
      description: 'Systematic scarcity for sustainable growth',
      live: '🔴 Live: Stage {stage} active',
      rewardRate: 'Reward rate',
      multiplier: 'Multiplier',
      status: 'Status',
      stage: 'Stage',
      range: 'Range',
      final: 'Final',
    },
    tech: {
      blockchain: 'Blockchain',
      blockchainDesc: 'Layer 2, fast & cheap, DeFi-optimized, fully Ethereum-compatible.',
      baseChain: 'Base (Layer 2)',
      baseChainDesc: 'Low fees, fast processing, Ethereum-compatible.',
      dfaithContract: 'D.FAITH contract',
      dinvestContract: 'D.INVEST contract',
      stakingContract: 'Staking contract',
      contractBtn: '↗',
      tokenSpecs: 'Token specifications',
      dfaith: 'D.FAITH token',
      dinvest: 'D.INVEST token',
      standard: 'Standard',
      decimals: 'Decimals',
      supply: 'Supply',
      type: 'Type',
      utility: 'Utility',
      investment: 'Investment',
    },
    chart: {
      smartContract: 'Smart contract',
      dexLiquidity: 'DEX liquidity',
      communityCirculation: 'Community circulation',
      sold: 'Sold',
      available: 'Available',
    },
    tooltip: {
      tokens: 'Token',
      percent: '%',
      liveData: 'Live data',
    },
  },
  pl: {
    title: 'Tokenomika',
    subtitle: 'Ekonomia dwóch tokenów z inteligentnym ograniczeniem',
    tabs: {
      overview: 'Przegląd',
      calculator: 'Kalkulator ROI',
      halving: 'Halving',
      tech: 'Technologia',
    },
    dfaith: {
      name: 'D.FAITH',
      description: 'Token nagród dla fanów',
      halvingStage: 'Aktualny etap halvingu',
      contract: 'Smart contract',
      price: 'Aktualna cena',
      dexLiquidity: 'Płynność DEX',
      community: 'Społeczność',
      liveData: 'Dane na żywo',
    },
    dinvest: {
      name: 'D.INVEST',
      description: 'Token inwestycyjny',
      price: 'Stała cena',
      sold: 'Sprzedane',
      available: 'Dostępne',
      stage: 'Aktualny etap',
      liveData: 'Dane na żywo',
    },
    calculator: {
      title: 'Kalkulator ROI',
      tokenAmount: 'Liczba tokenów D.INVEST',
      dfaithPrice: 'Cena D.FAITH (€)',
      halvingStage: 'Etap halvingu',
      annualReward: 'Roczna stopa nagrody',
      annualRoi: 'Roczny ROI',
      investment: 'Inwestycja (D.INVEST x 5€)',
    },
    halving: {
      title: 'System halvingu 6-etapowego',
      description: 'Systematyczne ograniczanie dla zrównoważonego wzrostu',
      live: '🔴 Na żywo: etap {stage} aktywny',
      rewardRate: 'Stopa nagrody',
      multiplier: 'Mnożnik',
      status: 'Status',
      stage: 'Etap',
      range: 'Zakres',
      final: 'Finał',
    },
    tech: {
      blockchain: 'Blockchain',
      blockchainDesc: 'Layer 2, szybka i tania, zoptymalizowana pod DeFi, kompatybilna z Ethereum.',
      baseChain: 'Base (Layer 2)',
      baseChainDesc: 'Niskie opłaty, szybkie przetwarzanie, kompatybilność z Ethereum.',
      dfaithContract: 'Kontrakt D.FAITH',
      dinvestContract: 'Kontrakt D.INVEST',
      stakingContract: 'Kontrakt stakingowy',
      contractBtn: '↗',
      tokenSpecs: 'Specyfikacje tokenów',
      dfaith: 'Token D.FAITH',
      dinvest: 'Token D.INVEST',
      standard: 'Standard',
      decimals: 'Miejsca po przecinku',
      supply: 'Podaż',
      type: 'Typ',
      utility: 'Użytkowy',
      investment: 'Inwestycyjny',
    },
    chart: {
      smartContract: 'Smart contract',
      dexLiquidity: 'Płynność DEX',
      communityCirculation: 'Obieg społeczności',
      sold: 'Sprzedane',
      available: 'Dostępne',
    },
    tooltip: {
      tokens: 'Token',
      percent: '%',
      liveData: 'Dane na żywo',
    },
  },
};
