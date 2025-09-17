// Liefert alle Übersetzungs-Texte für SolutionConcept
export function SolutionConceptTranslations(language: 'de' | 'en' | 'pl') {
  const content = {
    de: {
      revolution: 'Die D.FAITH Revolution',
      subtitle: 'Ein intelligentes Dual-Token-System, das den Teufelskreis durchbricht und eine Win-Win-Situation für Künstler und Fans schafft',
      dfaith: 'D.FAITH',
      dfaithDesc: 'Fan-Belohnungstoken',
      dfaithFeatures: [
        'Belohnt treue Fans für ihr Engagement',
        'Kann in ETH getauscht oder im Shop verwendet werden',
        'Wertsteigerung durch Verknappung'
      ],
      dinvest: 'D.INVEST',
      dinvestDesc: 'Investitions-Token',
      dinvestFeatures: [
        'Ermöglicht Kapitalbeschaffung für Musikproduktion',
        'Entsperrt gesperrte D.FAITH Token durch Staking',
        'Investoren profitieren von steigenden D.FAITH Preisen'
      ],
      coreIdea: '💡 Die Kernidee',
      coreText: 'Statt Geld für Werbung auszugeben, investiert Dawid Faith direkt in Fan-Belohnungen. Fans werden für ihr Engagement bezahlt, wodurch sie motivierter sind zu interagieren. Mehr Engagement = bessere Reichweite = mehr neue Fans = selbstverstärkender Kreislauf. Gleichzeitig generiert das System Kapital für Musikproduktion durch D.INVEST.',
      before: 'VORHER',
      beforeDesc: 'Geld für Werbung ohne Garantie',
      after: 'NACHHER',
      afterDesc: 'Direkter Fan-Nutzen + Kapital'
    },
    en: {
      revolution: 'The D.FAITH Revolution',
      subtitle: 'An intelligent dual-token system that breaks the vicious cycle and creates a win-win situation for artists and fans',
      dfaith: 'D.FAITH',
      dfaithDesc: 'Fan reward token',
      dfaithFeatures: [
        'Rewards loyal fans for their engagement',
        'Can be exchanged for ETH or used in the shop',
        'Value increases through scarcity'
      ],
      dinvest: 'D.INVEST',
      dinvestDesc: 'Investment token',
      dinvestFeatures: [
        'Enables capital raising for music production',
        'Unlocks locked D.FAITH tokens through staking',
        'Investors benefit from rising D.FAITH prices'
      ],
      coreIdea: '💡 The core idea',
      coreText: 'Instead of spending money on advertising, Dawid Faith invests directly in fan rewards. Fans are paid for their engagement, making them more motivated to interact. More engagement = better reach = more new fans = self-reinforcing cycle. At the same time, the system generates capital for music production through D.INVEST.',
      before: 'BEFORE',
      beforeDesc: 'Money for advertising without guarantee',
      after: 'AFTER',
      afterDesc: 'Direct fan benefit + capital'
    },
    pl: {
      revolution: 'Rewolucja D.FAITH',
      subtitle: 'Inteligentny system dwóch tokenów, który przełamuje błędne koło i tworzy sytuację win-win dla artystów i fanów',
      dfaith: 'D.FAITH',
      dfaithDesc: 'Token nagród dla fanów',
      dfaithFeatures: [
        'Nagradza lojalnych fanów za zaangażowanie',
        'Można wymienić na ETH lub użyć w sklepie',
        'Wzrost wartości dzięki ograniczonej podaży'
      ],
      dinvest: 'D.INVEST',
      dinvestDesc: 'Token inwestycyjny',
      dinvestFeatures: [
        'Umożliwia pozyskiwanie kapitału na produkcję muzyki',
        'Odblokowuje zablokowane tokeny D.FAITH przez staking',
        'Inwestorzy korzystają ze wzrostu cen D.FAITH'
      ],
      coreIdea: '💡 Główna idea',
      coreText: 'Zamiast wydawać pieniądze na reklamę, Dawid Faith inwestuje bezpośrednio w nagrody dla fanów. Fani są wynagradzani za zaangażowanie, co motywuje ich do interakcji. Więcej zaangażowania = większy zasięg = więcej nowych fanów = samonapędzający się cykl. Jednocześnie system generuje kapitał na produkcję muzyki dzięki D.INVEST.',
      before: 'PRZED',
      beforeDesc: 'Pieniądze na reklamę bez gwarancji',
      after: 'PO',
      afterDesc: 'Bezpośrednia korzyść dla fana + kapitał'
    }
  };
  return content[language];
}
