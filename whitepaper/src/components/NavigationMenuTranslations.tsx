// Übersetzungen für NavigationMenu (DE, EN, PL)

export type NavigationMenuTranslations = {
  navItems: {
    hero: string;
    solution: string;
    tokenomics: string;
    webapp: string;
    tech: string;
    roadmap: string;
    team: string;
  };
  languageLabel: string;
  whitepaper: string;
};

export const navigationMenuTranslations: Record<'de' | 'en' | 'pl', NavigationMenuTranslations> = {
  de: {
    navItems: {
      hero: 'Start',
      solution: 'Problem & Lösung',
      tokenomics: 'Tokenomics',
      webapp: 'Webapp',
      tech: 'Technik',
      roadmap: 'Roadmap',
      team: 'Team'
    },
    languageLabel: 'Sprache wählen',
    whitepaper: 'Whitepaper'
  },
  en: {
    navItems: {
      hero: 'Home',
      solution: 'Problem & Solution',
      tokenomics: 'Tokenomics',
      webapp: 'Webapp',
      tech: 'Technology',
      roadmap: 'Roadmap',
      team: 'Team'
    },
    languageLabel: 'Select Language',
    whitepaper: 'Whitepaper'
  },
  pl: {
    navItems: {
      hero: 'Główna',
      solution: 'Problem i Rozwiązanie',
      tokenomics: 'Tokenomika',
      webapp: 'Aplikacja',
      tech: 'Technologia',
      roadmap: 'Mapa Drogowa',
      team: 'Zespół'
    },
    languageLabel: 'Wybierz Język',
    whitepaper: 'Biała Księga'
  }
};