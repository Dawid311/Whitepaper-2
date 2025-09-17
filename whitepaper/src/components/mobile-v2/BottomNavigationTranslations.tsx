export interface BottomNavigationTexts {
  sections: Array<{
    id: string;
    title: string;
  }>;
}

export const bottomNavigationTexts: Record<string, BottomNavigationTexts> = {
  de: {
    sections: [
      { id: 'hero', title: 'D.FAITH Ökosystem' },
      { id: 'problem', title: 'Das Problem' },
      { id: 'solution', title: 'Die Lösung' },
      { id: 'process', title: 'Prozess' },
      { id: 'tokenomics', title: 'Tokenomics' },
      { id: 'webapp', title: 'Webapp' },
      { id: 'team', title: 'Team' },
      { id: 'roadmap', title: 'Roadmap' }
    ]
  },
  en: {
    sections: [
      { id: 'hero', title: 'D.FAITH Ecosystem' },
      { id: 'problem', title: 'The Problem' },
      { id: 'solution', title: 'The Solution' },
      { id: 'process', title: 'Process' },
      { id: 'tokenomics', title: 'Tokenomics' },
      { id: 'webapp', title: 'Webapp' },
      { id: 'team', title: 'Team' },
      { id: 'roadmap', title: 'Roadmap' }
    ]
  },
  pl: {
    sections: [
      { id: 'hero', title: 'Ekosystem D.FAITH' },
      { id: 'problem', title: 'Problem' },
      { id: 'solution', title: 'Rozwiązanie' },
      { id: 'process', title: 'Proces' },
      { id: 'tokenomics', title: 'Tokenomika' },
      { id: 'webapp', title: 'Aplikacja' },
      { id: 'team', title: 'Zespół' },
      { id: 'roadmap', title: 'Mapa Drogowa' }
    ]
  }
};

// Helper function to get translated section title
export const getTranslatedSectionTitle = (
  sectionId: string, 
  language: string, 
  fallbackTitle?: string
): string => {
  const texts = bottomNavigationTexts[language] || bottomNavigationTexts['de'];
  const section = texts.sections.find(s => s.id === sectionId);
  return section?.title || fallbackTitle || sectionId;
};