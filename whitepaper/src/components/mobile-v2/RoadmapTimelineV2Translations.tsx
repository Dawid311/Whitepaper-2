export interface RoadmapTimelineTexts {
  header: {
    title: string;
    subtitle: string;
    statusLegend: {
      completed: string;
      active: string;
      planned: string;
      future: string;
    };
  };
  phases: Array<{
    title: string;
    description: string;
    milestones: string[];
  }>;
  statusTexts: {
    completed: string;
    active: string;
    planned: string;
    future: string;
  };
  currentFocus: {
    title: string;
    priorities: string[];
  };
  longTermVision: {
    title: string;
    subtitle: string;
    description: string;
  };
  ui: {
    showDetails: string;
    hideDetails: string;
    milestones: string;
  };
}

export const roadmapTimelineTexts: Record<string, RoadmapTimelineTexts> = {
  de: {
    header: {
      title: "Strategische Roadmap",
      subtitle: "Entwicklungsplan des D.FAITH Ökosystems mit klaren Meilensteinen",
      statusLegend: {
        completed: "Abgeschlossen",
        active: "Aktiv",
        planned: "Geplant",
        future: "Zukunft"
      }
    },
    phases: [
      {
        title: "Foundation",
        description: "Vollständig funktionsfähige technische Infrastruktur mit allen Core-Features implementiert und live auf Base Chain.",
        milestones: [
          "Konzeptentwicklung und Whitepaper",
          "Smart Contract Entwicklung und Deployment",
          "Vollständige Dawid Faith Wallet Implementation",
          "D.INVEST und D.FAITH Token Launch auf Base Chain",
          "Advanced Staking System mit 6 Reward-Stufen",
          "Social Media Integration (Proprietary APIs)",
          "Live Testing und Security Audits"
        ]
      },
      {
        title: "Community Building",
        description: "Mit der vollständigen technischen Infrastruktur konzentrieren wir uns auf Community-Wachstum und Marketing-Expansion.",
        milestones: [
          "Live Webapp mit allen Features",
          "Instagram/TikTok Fan-Engagement System",
          "EXP-System und Real-time Leaderboards",
          "Live-Event-Integration bei Konzerten",
          "Erste groß angelegte Marketing-Kampagne",
          "Community-Wachstum von 774 auf 5.000+ Follower"
        ]
      },
      {
        title: "Expansion",
        description: "Ausbau der Plattform-Features und erste internationale Expansion.",
        milestones: [
          "Spotify API Integration für Stream-Rewards",
          "Partnerships mit anderen Künstlern",
          "NFT-Integration (Pilotprojekt)"
        ]
      },
      {
        title: "Ecosystem",
        description: "Transformation zu einer umfassenden Creator Economy Platform.",
        milestones: [
          "Multi-Artist Platform",
          "Eigene Streaming-Platform (Beta)",
          "Advanced Governance Features",
          "Internationale Expansion"
        ]
      }
    ],
    statusTexts: {
      completed: "✅ ABGESCHLOSSEN",
      active: "🔄 IN BEARBEITUNG",
      planned: "📋 GEPLANT",
      future: "🔮 GEPLANT"
    },
    currentFocus: {
      title: "Aktueller Fokus: Community Building",
      priorities: [
        "Große Kampagne startet",
        "Budget fließt in Fan-Belohnungen",
        "Viral-Marketing durch Token-Incentives"
      ]
    },
    longTermVision: {
      title: "Langfristige Vision",
      subtitle: "Das ultimative Ziel",
      description: "Eine revolutionäre Creator Economy Platform, die das Verhältnis zwischen Künstlern, Fans und Investoren fundamental verändert und nachhaltiges Wachstum für alle Beteiligten ermöglicht."
    },
    ui: {
      showDetails: "Details anzeigen",
      hideDetails: "Details ausblenden",
      milestones: "Meilensteine:"
    }
  },
  en: {
    header: {
      title: "Strategic Roadmap",
      subtitle: "Development plan of the D.FAITH ecosystem with clear milestones",
      statusLegend: {
        completed: "Completed",
        active: "Active",
        planned: "Planned",
        future: "Future"
      }
    },
    phases: [
      {
        title: "Foundation",
        description: "Fully functional technical infrastructure with all core features implemented and live on Base Chain.",
        milestones: [
          "Concept development and whitepaper",
          "Smart contract development and deployment",
          "Complete Dawid Faith Wallet implementation",
          "D.INVEST and D.FAITH token launch on Base Chain",
          "Advanced staking system with 6 reward levels",
          "Social media integration (proprietary APIs)",
          "Live testing and security audits"
        ]
      },
      {
        title: "Community Building",
        description: "With the complete technical infrastructure, we focus on community growth and marketing expansion.",
        milestones: [
          "Live webapp with all features",
          "Instagram/TikTok fan engagement system",
          "EXP system and real-time leaderboards",
          "Live event integration at concerts",
          "First large-scale marketing campaign",
          "Community growth from 774 to 5,000+ followers"
        ]
      },
      {
        title: "Expansion",
        description: "Expansion of platform features and first international expansion.",
        milestones: [
          "Spotify API integration for streaming rewards",
          "Partnerships with other artists",
          "NFT integration (pilot project)"
        ]
      },
      {
        title: "Ecosystem",
        description: "Transformation into a comprehensive creator economy platform.",
        milestones: [
          "Multi-artist platform",
          "Own streaming platform (beta)",
          "Advanced governance features",
          "International expansion"
        ]
      }
    ],
    statusTexts: {
      completed: "✅ COMPLETED",
      active: "🔄 IN PROGRESS",
      planned: "📋 PLANNED",
      future: "🔮 PLANNED"
    },
    currentFocus: {
      title: "Current Focus: Community Building",
      priorities: [
        "Major campaign launching",
        "Budget flows into fan rewards",
        "Viral marketing through token incentives"
      ]
    },
    longTermVision: {
      title: "Long-term Vision",
      subtitle: "The ultimate goal",
      description: "A revolutionary creator economy platform that fundamentally changes the relationship between artists, fans and investors and enables sustainable growth for all participants."
    },
    ui: {
      showDetails: "Show details",
      hideDetails: "Hide details",
      milestones: "Milestones:"
    }
  },
  pl: {
    header: {
      title: "Strategiczna Mapa Drogowa",
      subtitle: "Plan rozwoju ekosystemu D.FAITH z jasnymi kamieniami milowymi",
      statusLegend: {
        completed: "Ukończone",
        active: "Aktywne",
        planned: "Planowane",
        future: "Przyszłość"
      }
    },
    phases: [
      {
        title: "Fundament",
        description: "W pełni funkcjonalna infrastruktura techniczna ze wszystkimi podstawowymi funkcjami zaimplementowanymi i działającymi na Base Chain.",
        milestones: [
          "Rozwój koncepcji i whitepaper",
          "Rozwój i wdrożenie smart contractu",
          "Pełna implementacja Dawid Faith Wallet",
          "Launch tokenów D.INVEST i D.FAITH na Base Chain",
          "Zaawansowany system stakingu z 6 poziomami nagród",
          "Integracja z mediami społecznościowymi (własne API)",
          "Testy na żywo i audyty bezpieczeństwa"
        ]
      },
      {
        title: "Budowanie Społeczności",
        description: "Z pełną infrastrukturą techniczną koncentrujemy się na wzroście społeczności i ekspansji marketingowej.",
        milestones: [
          "Aplikacja na żywo ze wszystkimi funkcjami",
          "System zaangażowania fanów Instagram/TikTok",
          "System EXP i tabele wyników w czasie rzeczywistym",
          "Integracja wydarzeń na żywo na koncertach",
          "Pierwsza duża kampania marketingowa",
          "Wzrost społeczności z 774 do 5,000+ obserwujących"
        ]
      },
      {
        title: "Ekspansja",
        description: "Rozszerzenie funkcji platformy i pierwsza ekspansja międzynarodowa.",
        milestones: [
          "Integracja API Spotify dla nagród za streaming",
          "Partnerstwa z innymi artystami",
          "Integracja NFT (projekt pilotażowy)"
        ]
      },
      {
        title: "Ekosystem",
        description: "Transformacja w kompleksową platformę ekonomii twórców.",
        milestones: [
          "Platforma wieloartystyczna",
          "Własna platforma streamingowa (beta)",
          "Zaawansowane funkcje zarządzania",
          "Ekspansja międzynarodowa"
        ]
      }
    ],
    statusTexts: {
      completed: "✅ UKOŃCZONE",
      active: "🔄 W TRAKCIE",
      planned: "📋 PLANOWANE",
      future: "🔮 PLANOWANE"
    },
    currentFocus: {
      title: "Obecny Fokus: Budowanie Społeczności",
      priorities: [
        "Rozpoczyna się duża kampania",
        "Budżet płynie w nagrody dla fanów",
        "Marketing wirusowy przez zachęty tokenowe"
      ]
    },
    longTermVision: {
      title: "Długoterminowa Wizja",
      subtitle: "Ostateczny cel",
      description: "Rewolucyjna platforma ekonomii twórców, która fundamentalnie zmienia relacje między artystami, fanami i inwestorami oraz umożliwia zrównoważony wzrost dla wszystkich uczestników."
    },
    ui: {
      showDetails: "Pokaż szczegóły",
      hideDetails: "Ukryj szczegóły",
      milestones: "Kamienie milowe:"
    }
  }
};