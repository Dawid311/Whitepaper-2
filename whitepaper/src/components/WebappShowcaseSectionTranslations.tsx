// Übersetzungen für WebappShowcaseSection (DE, EN)

export type WebappShowcaseSectionTranslations = {
  headline: string;
  slogan: string;
  features: Array<{
    icon: string;
    title: string;
    subtitle: string;
    detail: string;
  }>;
  platforms: Array<{
    icon: string;
    label: string;
  }>;
  cta: string;
};

export const webappShowcaseSectionTranslations: Record<'de' | 'en' | 'pl', WebappShowcaseSectionTranslations> = {
  de: {
    headline: 'D.FAITH Webapp',
    slogan: 'Alle Funktionen. Alle Plattformen. Deine Community.',
    features: [
      {
        icon: 'FaWallet',
        title: 'Wallet',
        subtitle: 'Token-Management & Staking',
        detail: 'Kaufen, verkaufen, verdienen',
      },
      {
        icon: 'FaUsers',
        title: 'Social Profiles',
        subtitle: 'Fan-Engagement & Leaderboard',
        detail: 'Instagram, TikTok, Facebook',
      },
      {
        icon: 'FaShoppingCart',
        title: 'Exklusiv Shop',
        subtitle: 'Merch, Tickets, Musik',
        detail: 'Nur mit D.FAITH Token',
      },
      {
        icon: 'FaMusic',
        title: 'Live Konzerte',
        subtitle: 'Konzert-Integration & Codes',
        detail: 'Belohnungen & NFT-Plan',
      },
    ],
    platforms: [
      { icon: 'FaInstagram', label: 'Instagram' },
      { icon: 'FaTiktok', label: 'TikTok' },
      { icon: 'FaFacebook', label: 'Facebook' },
      { icon: 'FaSpotify', label: 'Spotify' },
    ],
    cta: 'Webapp entdecken',
  },
  en: {
    headline: 'D.FAITH Webapp',
    slogan: 'All features. All platforms. Your community.',
    features: [
      {
        icon: 'FaWallet',
        title: 'Wallet',
        subtitle: 'Token management & staking',
        detail: 'Buy, sell, earn',
      },
      {
        icon: 'FaUsers',
        title: 'Social profiles',
        subtitle: 'Fan engagement & leaderboard',
        detail: 'Instagram, TikTok, Facebook',
      },
      {
        icon: 'FaShoppingCart',
        title: 'Exclusive shop',
        subtitle: 'Merch, tickets, music',
        detail: 'Only with D.FAITH token',
      },
      {
        icon: 'FaMusic',
        title: 'Live concerts',
        subtitle: 'Concert integration & codes',
        detail: 'Rewards & NFT plan',
      },
    ],
    platforms: [
      { icon: 'FaInstagram', label: 'Instagram' },
      { icon: 'FaTiktok', label: 'TikTok' },
      { icon: 'FaFacebook', label: 'Facebook' },
      { icon: 'FaSpotify', label: 'Spotify' },
    ],
    cta: 'Discover webapp'
  },
  pl: {
    headline: 'D.FAITH Webapp',
    slogan: 'Wszystkie funkcje. Wszystkie platformy. Twoja społeczność.',
    features: [
      {
        icon: 'FaWallet',
        title: 'Portfel',
        subtitle: 'Zarządzanie tokenami i staking',
        detail: 'Kupuj, sprzedawaj, zarabiaj',
      },
      {
        icon: 'FaUsers',
        title: 'Profile społecznościowe',
        subtitle: 'Zaangażowanie fanów i ranking',
        detail: 'Instagram, TikTok, Facebook',
      },
      {
        icon: 'FaShoppingCart',
        title: 'Sklep Ekskluzywny',
        subtitle: 'Merch, bilety, muzyka',
        detail: 'Tylko za tokeny D.FAITH',
      },
      {
        icon: 'FaMusic',
        title: 'Koncerty na żywo',
        subtitle: 'Integracja koncertów i kody',
        detail: 'Nagrody i plan NFT',
      },
    ],
    platforms: [
      { icon: 'FaInstagram', label: 'Instagram' },
      { icon: 'FaTiktok', label: 'TikTok' },
      { icon: 'FaFacebook', label: 'Facebook' },
      { icon: 'FaSpotify', label: 'Spotify' },
    ],
    cta: 'Odkryj webapp'
  }
};
