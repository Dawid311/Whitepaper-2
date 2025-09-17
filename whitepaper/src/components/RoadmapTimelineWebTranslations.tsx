// Übersetzungen für RoadmapTimelineWeb (DE, EN)

export type RoadmapTimelineWebTranslations = {
  title: string;
  subtitle: string;
  milestonesLabel: string;
  showDetails: string;
  hideDetails: string;
  statusLabels: {
    completed: string;
    active: string;
    planned: string;
    future: string;
  };
  phases: Array<{
    title: string;
    description: string;
    milestones: Array<string>;
  }>;
};

export const roadmapTimelineWebTranslations: Record<'de' | 'en' | 'pl', RoadmapTimelineWebTranslations> = {
  de: {
    title: 'Strategische Roadmap',
    subtitle: 'Die wichtigsten Meilensteine und Visionen für das D.FAITH Ökosystem – transparent, ambitioniert und community-driven.',
    milestonesLabel: 'Meilensteine:',
    showDetails: 'Details anzeigen',
    hideDetails: 'Details ausblenden',
    statusLabels: {
      completed: '✅ ABGESCHLOSSEN',
      active: '🔄 IN BEARBEITUNG',
      planned: '📋 GEPLANT',
      future: '🔮 GEPLANT',
    },
    phases: [
      {
        title: 'Foundation',
        description: 'Vollständig funktionsfähige technische Infrastruktur mit allen Core-Features implementiert und live auf Base Chain.',
        milestones: [
          'Konzeptentwicklung und Whitepaper',
          'Smart Contract Entwicklung und Deployment',
          'Vollständige Dawid Faith Wallet Implementation',
          'D.INVEST und D.FAITH Token Launch auf Base Chain',
          'Advanced Staking System mit 6 Reward-Stufen',
          'Social Media Integration (Proprietary APIs)',
          'Live Testing und Security Audits',
        ],
      },
      {
        title: 'Community Building',
        description: 'Mit der vollständigen technischen Infrastruktur konzentrieren wir uns auf Community-Wachstum und Marketing-Expansion.',
        milestones: [
          'Live Webapp mit allen Features',
          'Instagram/TikTok Fan-Engagement System',
          'EXP-System und Real-time Leaderboards',
          'Live-Event-Integration bei Konzerten',
          'Erste groß angelegte Marketing-Kampagne',
          'Community-Wachstum von 774 auf 5.000+ Follower',
        ],
      },
      {
        title: 'Expansion',
        description: 'Ausbau der Plattform-Features und erste internationale Expansion.',
        milestones: [
          'Spotify API Integration für Stream-Rewards',
          'Partnerships mit anderen Künstlern',
          'NFT-Integration (Pilotprojekt)',
        ],
      },
      {
        title: 'Ecosystem',
        description: 'Transformation zu einer umfassenden Creator Economy Platform.',
        milestones: [
          'Multi-Artist Platform',
          'Eigene Streaming-Platform (Beta)',
          'Advanced Governance Features',
          'Internationale Expansion',
        ],
      },
    ],
  },
  en: {
    title: 'Strategic Roadmap',
    subtitle: 'The key milestones and visions for the D.FAITH ecosystem – transparent, ambitious and community-driven.',
    milestonesLabel: 'Milestones:',
    showDetails: 'Show details',
    hideDetails: 'Hide details',
    statusLabels: {
      completed: '✅ COMPLETED',
      active: '🔄 IN PROGRESS',
      planned: '📋 PLANNED',
      future: '🔮 PLANNED',
    },
    phases: [
      {
        title: 'Foundation',
        description: 'Fully functional technical infrastructure with all core features implemented and live on Base Chain.',
        milestones: [
          'Concept development and whitepaper',
          'Smart contract development and deployment',
          'Complete Dawid Faith wallet implementation',
          'D.INVEST and D.FAITH token launch on Base Chain',
          'Advanced staking system with 6 reward levels',
          'Social media integration (proprietary APIs)',
          'Live testing and security audits',
        ],
      },
      {
        title: 'Community Building',
        description: 'With complete technical infrastructure, we focus on community growth and marketing expansion.',
        milestones: [
          'Live webapp with all features',
          'Instagram/TikTok fan engagement system',
          'EXP system and real-time leaderboards',
          'Live event integration at concerts',
          'First large-scale marketing campaign',
          'Community growth from 774 to 5,000+ followers',
        ],
      },
      {
        title: 'Expansion',
        description: 'Platform feature expansion and initial international expansion.',
        milestones: [
          'Spotify API integration for stream rewards',
          'Partnerships with other artists',
          'NFT integration (pilot project)',
        ],
      },
      {
        title: 'Ecosystem',
        description: 'Transformation into a comprehensive creator economy platform.',
        milestones: [
          'Multi-artist platform',
          'Own streaming platform (beta)',
          'Advanced governance features',
          'International expansion',
        ],
      },
    ],
  },
  pl: {
    title: 'Strategiczna Mapa Drogowa',
    subtitle: 'Kluczowe kamienie milowe i wizje dla ekosystemu D.FAITH – przejrzyste, ambitne i kierowane przez społeczność.',
    milestonesLabel: 'Kamienie milowe:',
    showDetails: 'Pokaż szczegóły',
    hideDetails: 'Ukryj szczegóły',
    statusLabels: {
      completed: '✅ UKOŃCZONE',
      active: '🔄 W TRAKCIE',
      planned: '📋 PLANOWANE',
      future: '🔮 PLANOWANE',
    },
    phases: [
      {
        title: 'Fundamenty',
        description: 'W pełni funkcjonalna infrastruktura techniczna z wszystkimi podstawowymi funkcjami zaimplementowanymi i działającymi na Base Chain.',
        milestones: [
          'Rozwój koncepcji i whitepaper',
          'Rozwój i wdrożenie smart contractów',
          'Pełna implementacja portfela Dawid Faith',
          'Uruchomienie tokenów D.INVEST i D.FAITH na Base Chain',
          'Zaawansowany system stakingu z 6 poziomami nagród',
          'Integracja mediów społecznościowych (własne API)',
          'Testy na żywo i audyty bezpieczeństwa',
        ],
      },
      {
        title: 'Budowanie Społeczności',
        description: 'Z pełną infrastrukturą techniczną koncentrujemy się na rozwoju społeczności i ekspansji marketingowej.',
        milestones: [
          'Aplikacja internetowa na żywo ze wszystkimi funkcjami',
          'System zaangażowania fanów Instagram/TikTok',
          'System EXP i rankingi w czasie rzeczywistym',
          'Integracja wydarzeń na żywo podczas koncertów',
          'Pierwsza duża kampania marketingowa',
          'Wzrost społeczności z 774 do 5 000+ obserwujących',
        ],
      },
      {
        title: 'Ekspansja',
        description: 'Rozszerzenie funkcji platformy i początkowa ekspansja międzynarodowa.',
        milestones: [
          'Integracja API Spotify dla nagród za streaming',
          'Partnerstwa z innymi artystami',
          'Integracja NFT (projekt pilotażowy)',
        ],
      },
      {
        title: 'Ekosystem',
        description: 'Transformacja w kompleksową platformę ekonomii twórców.',
        milestones: [
          'Platforma wieloartystyczna',
          'Własna platforma streamingowa (beta)',
          'Zaawansowane funkcje zarządzania',
          'Ekspansja międzynarodowa',
        ],
      },
    ],
  },
};