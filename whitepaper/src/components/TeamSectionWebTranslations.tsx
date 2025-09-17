// Übersetzungen für TeamSectionWeb (DE, EN)

export type TeamSectionWebTranslations = {
  title: string;
  subtitle: string;
  member: {
    name: string;
    role: string;
    description: string;
    skills: Array<string>;
  };
  visionTitle: string;
  visionQuote: {
    title: string;
    quote: string;
    author: string;
  };
  visionAuthor: string;
};

export const teamSectionWebTranslations: Record<'de' | 'en' | 'pl', TeamSectionWebTranslations> = {
  de: {
    title: 'Das Team',
    subtitle: 'Die Visionäre hinter der D.FAITH Revolution',
    member: {
      name: 'Dawid Faith',
      role: 'Gründer, Entwickler & Künstler',
      description: 'Visionär und Vollzeit-Entwickler des D.FAITH Ökosystems',
      skills: [
        'Blockchain',
        'Musik & Kreativität',
        'Business Strategy',
        'Full-Stack',
      ],
    },
    visionTitle: '💡 Vision & Mission',
    visionQuote: {
      title: 'Vision & Mission',
      quote: 'Ich glaube daran, dass Technologie die Creator Economy revolutionieren kann. Durch D.FAITH schaffen wir eine Welt, in der Fans direkt von ihrem Engagement profitieren und Künstler nachhaltig finanziert werden können. Das ist erst der Anfang einer größeren Bewegung.',
      author: 'Dawid Faith'
    },
    visionAuthor: 'Dawid Faith',
  },
  en: {
    title: 'The Team',
    subtitle: 'The visionaries behind the D.FAITH revolution',
    member: {
      name: 'Dawid Faith',
      role: 'Founder, Developer & Artist',
      description: 'Visionary and full-time developer of the D.FAITH ecosystem',
      skills: [
        'Blockchain',
        'Music & Creativity',
        'Business Strategy',
        'Full-Stack',
      ],
    },
    visionTitle: '💡 Vision & Mission',
    visionQuote: {
      title: 'Vision & Mission',
      quote: 'I believe that technology can revolutionize the creator economy. Through D.FAITH, we create a world where fans directly benefit from their engagement and artists can be sustainably funded. This is just the beginning of a larger movement.',
      author: 'Dawid Faith'
    },
    visionAuthor: 'Dawid Faith',
  },
  pl: {
    title: 'Zespół',
    subtitle: 'Wizjonerzy rewolucji D.FAITH',
    member: {
      name: 'Dawid Faith',
      role: 'Założyciel, Deweloper i Artysta',
      description: 'Wizjoner i pełnoetatowy deweloper ekosystemu D.FAITH',
      skills: [
        'Blockchain',
        'Muzyka i Kreatywność',
        'Strategia Biznesowa',
        'Full-Stack',
      ],
    },
    visionTitle: '💡 Wizja i Misja',
    visionQuote: {
      title: 'Wizja i Misja',
      quote: 'Wierzę, że technologia może zrewolucjonizować ekonomię twórców. Dzięki D.FAITH tworzymy świat, w którym fani bezpośrednio korzystają ze swojego zaangażowania, a artyści mogą być zrównoważenie finansowani. To dopiero początek większego ruchu.',
      author: 'Dawid Faith'
    },
    visionAuthor: 'Dawid Faith',
  },
};