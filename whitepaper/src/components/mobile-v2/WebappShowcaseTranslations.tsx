export interface WebappShowcaseTexts {
  header: {
    title: string;
    subtitle: string;
  };
  features: Array<{
    title: string;
    description: string;
    details: string[];
    shortDesc: string;
    briefDesc: string;
  }>;
  platforms: Array<{
    name: string;
  }>;
  callToAction: {
    buttonText: string;
  };
}

export const webappShowcaseTexts: Record<string, WebappShowcaseTexts> = {
  de: {
    header: {
      title: "D.FAITH Webapp",
      subtitle: "Alle Funktionen. Alle Plattformen. Deine Community."
    },
    features: [
      {
        title: "Dawid Faith Wallet",
        description: "Vollständiges Token-Management",
        shortDesc: "Token-Management & Staking",
        briefDesc: "Kaufen, verkaufen, verdienen",
        details: [
          "D.FAITH Token kaufen/verkaufen gegen ETH",
          "D.INVEST Token kaufen für 5€ pro Token",
          "D.INVEST Staking mit 0,1 D.FAITH pro Woche",
          "Wallet-zu-Wallet Transfers",
          "Live Transaction History & Analytics"
        ]
      },
      {
        title: "Social Media Profile",
        description: "Cross-Platform Fan-Engagement",
        shortDesc: "Fan-Engagement & Leaderboard",
        briefDesc: "Instagram, TikTok, Facebook",
        details: [
          "Automatische Erkennung von Fan-Engagement",
          "Instagram, TikTok, Facebook Integration",
          "Globales Leaderboard-System",
          "Automatische Profilerstellung beim ersten Claim",
          "Level-System mit steigenden Rewards"
        ]
      },
      {
        title: "D.FAITH Exklusiv Shop",
        description: "Exklusive Inhalte & Merchandise",
        shortDesc: "Merch, Tickets, Musik",
        briefDesc: "Nur mit D.FAITH Token",
        details: [
          "Neue Songs früher erhältlich",
          "Limitierte Merchandise (T-Shirts, Hoodies)",
          "Signierte CD/Vinyl Editionen",
          "Exklusive Konzert-Tickets",
          "Nur mit D.FAITH Token bezahlbar (20-50% günstiger)"
        ]
      },
      {
        title: "Live Konzerte",
        description: "Konzert-Integration & Live Codes",
        shortDesc: "Konzert-Integration & Codes",
        briefDesc: "Belohnungen & NFT-Plan",
        details: [
          "Liste aller kommenden Dawid Faith Konzerte",
          "Live Code Eingabe während Konzerten",
          "+150 EXP pro gültigem Live Code (höchste Belohnung)",
          "Exklusive Konzert-NFTs (zukünftig geplant)"
        ]
      }
    ],
    platforms: [
      { name: "Instagram" },
      { name: "TikTok" },
      { name: "Facebook" },
      { name: "Spotify" }
    ],
    callToAction: {
      buttonText: "Webapp entdecken"
    }
  },
  en: {
    header: {
      title: "D.FAITH Webapp",
      subtitle: "All features. All platforms. Your community."
    },
    features: [
      {
        title: "Dawid Faith Wallet",
        description: "Complete token management",
        shortDesc: "Token management & staking",
        briefDesc: "Buy, sell, earn",
        details: [
          "Buy/sell D.FAITH tokens for ETH",
          "Buy D.INVEST tokens for €5 per token",
          "D.INVEST staking with 0.1 D.FAITH per week",
          "Wallet-to-wallet transfers",
          "Live transaction history & analytics"
        ]
      },
      {
        title: "Social Media Profiles",
        description: "Cross-platform fan engagement",
        shortDesc: "Fan engagement & leaderboard",
        briefDesc: "Instagram, TikTok, Facebook",
        details: [
          "Automatic fan engagement detection",
          "Instagram, TikTok, Facebook integration",
          "Global leaderboard system",
          "Automatic profile creation on first claim",
          "Level system with increasing rewards"
        ]
      },
      {
        title: "D.FAITH Exclusive Shop",
        description: "Exclusive content & merchandise",
        shortDesc: "Merch, tickets, music",
        briefDesc: "Only with D.FAITH tokens",
        details: [
          "New songs available earlier",
          "Limited merchandise (T-shirts, hoodies)",
          "Signed CD/vinyl editions",
          "Exclusive concert tickets",
          "Only payable with D.FAITH tokens (20-50% cheaper)"
        ]
      },
      {
        title: "Live Concerts",
        description: "Concert integration & live codes",
        shortDesc: "Concert integration & codes",
        briefDesc: "Rewards & NFT plans",
        details: [
          "List of all upcoming Dawid Faith concerts",
          "Live code entry during concerts",
          "+150 EXP per valid live code (highest reward)",
          "Exclusive concert NFTs (planned for future)"
        ]
      }
    ],
    platforms: [
      { name: "Instagram" },
      { name: "TikTok" },
      { name: "Facebook" },
      { name: "Spotify" }
    ],
    callToAction: {
      buttonText: "Discover webapp"
    }
  },
  pl: {
    header: {
      title: "Aplikacja D.FAITH",
      subtitle: "Wszystkie funkcje. Wszystkie platformy. Twoja społeczność."
    },
    features: [
      {
        title: "Portfel Dawid Faith",
        description: "Kompleksowe zarządzanie tokenami",
        shortDesc: "Zarządzanie tokenami i staking",
        briefDesc: "Kupuj, sprzedawaj, zarabiaj",
        details: [
          "Kupuj/sprzedawaj tokeny D.FAITH za ETH",
          "Kupuj tokeny D.INVEST za 5€ za token",
          "Staking D.INVEST z 0,1 D.FAITH tygodniowo",
          "Transfery między portfelami",
          "Historia transakcji na żywo i analityka"
        ]
      },
      {
        title: "Profile Mediów Społecznościowych",
        description: "Zaangażowanie fanów między platformami",
        shortDesc: "Zaangażowanie fanów i ranking",
        briefDesc: "Instagram, TikTok, Facebook",
        details: [
          "Automatyczne wykrywanie zaangażowania fanów",
          "Integracja Instagram, TikTok, Facebook",
          "Globalny system rankingowy",
          "Automatyczne tworzenie profilu przy pierwszym odebraniu",
          "System poziomów z rosnącymi nagrodami"
        ]
      },
      {
        title: "Ekskluzywny Sklep D.FAITH",
        description: "Ekskluzywne treści i merchandise",
        shortDesc: "Merch, bilety, muzyka",
        briefDesc: "Tylko za tokeny D.FAITH",
        details: [
          "Nowe piosenki dostępne wcześniej",
          "Limitowany merchandise (koszulki, bluzy)",
          "Podpisane edycje CD/winyl",
          "Ekskluzywne bilety na koncerty",
          "Płatne tylko tokenami D.FAITH (20-50% taniej)"
        ]
      },
      {
        title: "Koncerty na Żywo",
        description: "Integracja koncertów i kody na żywo",
        shortDesc: "Integracja koncertów i kody",
        briefDesc: "Nagrody i plany NFT",
        details: [
          "Lista wszystkich nadchodzących koncertów Dawid Faith",
          "Wprowadzanie kodów na żywo podczas koncertów",
          "+150 EXP za każdy ważny kod na żywo (najwyższa nagroda)",
          "Ekskluzywne NFT koncertowe (planowane na przyszłość)"
        ]
      }
    ],
    platforms: [
      { name: "Instagram" },
      { name: "TikTok" },
      { name: "Facebook" },
      { name: "Spotify" }
    ],
    callToAction: {
      buttonText: "Odkryj aplikację"
    }
  }
};