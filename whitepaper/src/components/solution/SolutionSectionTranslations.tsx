// Übersetzungen für SolutionSection (DE, EN, PL)

export type SolutionSectionTranslations = {
  resultTitle: string;
  resultDescription: string;
  fans: {
    title: string;
    description: string;
  };
  creator: {
    title: string;
    description: string;
  };
  investors: {
    title: string;
    description: string;
  };
  ctaTitle: string;
  fanButton: string;
  investButton: string;
};

export const solutionSectionTranslations: Record<'de' | 'en' | 'pl', SolutionSectionTranslations> = {
  de: {
    resultTitle: 'DAS ERGEBNIS',
    resultDescription: 'Alle gewinnen im D.FAITH Ökosystem',
    fans: {
      title: 'Fans',
      description: 'Verdienen durch Engagement',
    },
    creator: {
      title: 'Dawid Faith',
      description: 'Nachhaltige Finanzierung',
    },
    investors: {
      title: 'Investoren',
      description: 'Hohe Renditen',
    },
    ctaTitle: 'Bereit für die Revolution? 🚀',
    fanButton: 'Fan werden',
    investButton: 'Investieren',
  },
  en: {
    resultTitle: 'THE RESULT',
    resultDescription: 'Everyone wins in the D.FAITH ecosystem',
    fans: {
      title: 'Fans',
      description: 'Earn through engagement',
    },
    creator: {
      title: 'Dawid Faith',
      description: 'Sustainable funding',
    },
    investors: {
      title: 'Investors',
      description: 'High returns',
    },
    ctaTitle: 'Ready for the revolution? 🚀',
    fanButton: 'Become a fan',
    investButton: 'Invest',
  },
  pl: {
    resultTitle: 'REZULTAT',
    resultDescription: 'Wszyscy wygrywają w ekosystemie D.FAITH',
    fans: {
      title: 'Fani',
      description: 'Zarabiaj dzięki zaangażowaniu',
    },
    creator: {
      title: 'Dawid Faith',
      description: 'Zrównoważone finansowanie',
    },
    investors: {
      title: 'Inwestorzy',
      description: 'Wysokie zyski',
    },
    ctaTitle: 'Gotowy na rewolucję? 🚀',
    fanButton: 'Zostań fanem',
    investButton: 'Zainwestuj',
  },
};
