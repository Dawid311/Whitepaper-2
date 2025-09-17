// Liefert alle Übersetzungs-Texte für EnhancedHeroSection (Mobile)
export function EnhancedHeroSectionTranslations(language: 'de' | 'en' | 'pl') {
  const content = {
    de: {
      title1: 'D.FAITH',
      title2: 'Ökosystem',
      subtitle: 'Revolutionäres Fan-Engagement durch ',
      subtitleHighlight: 'Blockchain-Technologie',
      activeUsers: 'Aktive Nutzer',
      dfaith: 'D.FAITH',
      dinvest: 'D.INVEST',
      cta1: 'Jetzt mitmachen',
      cta2: 'Mehr erfahren',
      scroll: 'Scroll für mehr',
    },
    en: {
      title1: 'D.FAITH',
      title2: 'Ecosystem',
      subtitle: 'Revolutionary fan engagement through ',
      subtitleHighlight: 'blockchain technology',
      activeUsers: 'Active users',
      dfaith: 'D.FAITH',
      dinvest: 'D.INVEST',
      cta1: 'Join now',
      cta2: 'Learn more',
      scroll: 'Scroll for more',
    },
    pl: {
      title1: 'D.FAITH',
      title2: 'Ekosystem',
      subtitle: 'Rewolucyjne zaangażowanie fanów dzięki ',
      subtitleHighlight: 'technologii blockchain',
      activeUsers: 'Aktywni użytkownicy',
      dfaith: 'D.FAITH',
      dinvest: 'D.INVEST',
      cta1: 'Dołącz teraz',
      cta2: 'Dowiedz się więcej',
      scroll: 'Przewiń, aby zobaczyć więcej',
    },
  };
  return content[language];
}
