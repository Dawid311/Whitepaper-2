// Liefert alle Übersetzungs-Texte für HeroSection
export function HeroSectionTranslations({ language }: { language: 'de' | 'en' | 'pl' }) {
  const content = {
    de: {
      live: 'Live auf Base Chain',
      title1: 'D.FAITH',
      title2: 'Ökosystem',
      subtitle: 'Revolutionäres Fan-Engagement durch ',
      subtitleHighlight: 'Blockchain-Technologie',
      dfaithPrice: 'D.FAITH Preis',
      dinvestPrice: 'D.INVEST Preis',
      dfaithSupply: 'D.FAITH Supply',
      activeUsers: 'Aktive Nutzer',
      cta1: 'Jetzt mitmachen',
      cta2: 'Mehr erfahren',
      scroll: 'Scroll für mehr',
    },
    en: {
      live: 'Live on Base Chain',
      title1: 'D.FAITH',
      title2: 'Ecosystem',
      subtitle: 'Revolutionary fan engagement through ',
      subtitleHighlight: 'blockchain technology',
      dfaithPrice: 'D.FAITH price',
      dinvestPrice: 'D.INVEST price',
      dfaithSupply: 'D.FAITH supply',
      activeUsers: 'Active users',
      cta1: 'Join now',
      cta2: 'Learn more',
      scroll: 'Scroll for more',
    },
    pl: {
      live: 'Na żywo na Base Chain',
      title1: 'D.FAITH',
      title2: 'Ekosystem',
      subtitle: 'Rewolucyjne zaangażowanie fanów dzięki ',
      subtitleHighlight: 'technologii blockchain',
      dfaithPrice: 'Cena D.FAITH',
      dinvestPrice: 'Cena D.INVEST',
      dfaithSupply: 'Podaż D.FAITH',
      activeUsers: 'Aktywni użytkownicy',
      cta1: 'Dołącz teraz',
      cta2: 'Dowiedz się więcej',
      scroll: 'Przewiń, aby zobaczyć więcej',
    },
  };
  return content[language];
}
