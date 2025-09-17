// Übersetzungen für LiveStatsFixed (DE, EN, PL)

export type LiveStatsTranslations = {
  liveData: string;
  min: string;
  more: string;
  totalStaked: string;
  rewardsDistributed: string;
  halvingStage: string;
  stage: string;
  toHalving: string;
  activeUsers: string;
  network: string;
  updateInterval: string;
  stable: string;
};

export const liveStatsTranslations: Record<'de' | 'en' | 'pl', LiveStatsTranslations> = {
  de: {
    liveData: 'Live Daten',
    min: 'Min',
    more: 'Mehr',
    totalStaked: 'Total Staked',
    rewardsDistributed: 'Rewards verteilt',
    halvingStage: 'Halving Stufe',
    stage: 'Stufe',
    toHalving: 'Bis Halving',
    activeUsers: 'Active Users',
    network: 'Netzwerk',
    updateInterval: 'Update alle 30s',
    stable: 'Stabil'
  },
  en: {
    liveData: 'Live Data',
    min: 'Min',
    more: 'More',
    totalStaked: 'Total Staked',
    rewardsDistributed: 'Rewards Distributed',
    halvingStage: 'Halving Stage',
    stage: 'Stage',
    toHalving: 'To Halving',
    activeUsers: 'Active Users',
    network: 'Network',
    updateInterval: 'Update every 30s',
    stable: 'Stable'
  },
  pl: {
    liveData: 'Dane na Żywo',
    min: 'Min',
    more: 'Więcej',
    totalStaked: 'Łącznie Zestakowane',
    rewardsDistributed: 'Rozdane Nagrody',
    halvingStage: 'Etap Halvingu',
    stage: 'Etap',
    toHalving: 'Do Halvingu',
    activeUsers: 'Aktywni Użytkownicy',
    network: 'Sieć',
    updateInterval: 'Aktualizacja co 30s',
    stable: 'Stabilne'
  }
};