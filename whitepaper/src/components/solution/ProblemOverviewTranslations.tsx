// Liefert alle Übersetzungs-Texte für ProblemOverview
export function ProblemOverviewTranslations(language: 'de' | 'en' | 'pl') {
  const content = {
    de: {
      author: 'Dawid Faith',
      authorRole: 'Künstler & D.FAITH Entwickler',
      quote: 'Als unabhängiger Künstler stehe ich vor den gleichen Problemen wie viele andere: Mein Content bekommt nicht die Reichweite, die er verdient. Bezahlte Werbung ist teuer und zeitintensiv - und das Geld habe ich nicht. Außerdem fehlt mir das Kapital für Musikproduktion. Deshalb entwickelte ich D.FAITH: um Fans direkt für ihr Engagement zu belohnen und gleichzeitig Kapital für meine Musik zu generieren.',
      painLabel: 'Schmerzgrad:',
      centralProblem: '⚠️ Das zentrale Problem',
      teufelskreis: 'TEUFELSKREIS',
      endlessLoop: 'Endlose Schleife',
      summary: 'Jeder Punkt verstärkt den nächsten in einem endlosen Kreislauf der Stagnation.',
      breakLoop: 'D.FAITH durchbricht diesen Kreislauf!',
      problems: [
        {
          title: 'Geringe Reichweite',
          description: 'Qualitätsvoller Content erreicht nicht genug Menschen organisch',
          pain: '🔴 HOCH',
          impact: 'Wenige neue Follower trotz gutem Content'
        },
        {
          title: 'Teure Werbung',
          description: 'Paid Ads kosten viel, bringen aber nicht nachhaltige Fans',
          pain: '🔴 HOCH',
          impact: 'Hohe Kosten ohne garantierte ROI'
        },
        {
          title: 'Fehlendes Kapital',
          description: 'Keine Mittel für Musikproduktion und professionelle Videos',
          pain: '🟠 MITTEL',
          impact: 'Limitierte Produktionsqualität'
        },
        {
          title: 'Schwaches Engagement',
          description: 'Fan-Interaktionen bringen keinen direkten Mehrwert',
          pain: '🟡 NIEDRIG',
          impact: 'Oberflächliche Fan-Beziehungen'
        }
      ],
      nodes: [
        'Geringe\nReichweite',
        'Schwaches\nEngagement',
        'Keine\nneuen Fans',
        'Kein\nEinkommen',
        'Keine\nInvestition',
        'Schlechter\nContent'
      ]
    },
    en: {
      author: 'Dawid Faith',
      authorRole: 'Artist & D.FAITH Developer',
      quote: 'As an independent artist, I face the same problems as many others: My content does not get the reach it deserves. Paid advertising is expensive and time-consuming - and I do not have the money. I also lack the capital for music production. That is why I developed D.FAITH: to reward fans directly for their engagement and at the same time generate capital for my music.',
      painLabel: 'Pain level:',
      centralProblem: '⚠️ The central problem',
      teufelskreis: 'DEVIL\'S CIRCLE',
      endlessLoop: 'Endless loop',
      summary: 'Each point reinforces the next in an endless cycle of stagnation.',
      breakLoop: 'D.FAITH breaks this cycle!',
      problems: [
        {
          title: 'Low reach',
          description: 'High-quality content does not reach enough people organically',
          pain: '🔴 HIGH',
          impact: 'Few new followers despite good content'
        },
        {
          title: 'Expensive advertising',
          description: 'Paid ads are expensive but do not bring sustainable fans',
          pain: '🔴 HIGH',
          impact: 'High costs without guaranteed ROI'
        },
        {
          title: 'Lack of capital',
          description: 'No funds for music production and professional videos',
          pain: '🟠 MEDIUM',
          impact: 'Limited production quality'
        },
        {
          title: 'Weak engagement',
          description: 'Fan interactions bring no direct added value',
          pain: '🟡 LOW',
          impact: 'Superficial fan relationships'
        }
      ],
      nodes: [
        'Low\nreach',
        'Weak\nengagement',
        'No\nnew fans',
        'No\nincome',
        'No\ninvestment',
        'Poor\ncontent'
      ]
    },
    pl: {
      author: 'Dawid Faith',
      authorRole: 'Artysta i twórca D.FAITH',
      quote: 'Jako niezależny artysta stoję przed tymi samymi problemami co wielu innych: Mój content nie dociera do tylu osób, na ile zasługuje. Płatna reklama jest droga i czasochłonna – a nie mam na to pieniędzy. Brakuje mi też kapitału na produkcję muzyki. Dlatego stworzyłem D.FAITH: aby nagradzać fanów bezpośrednio za ich zaangażowanie i jednocześnie generować kapitał na moją muzykę.',
      painLabel: 'Poziom bólu:',
      centralProblem: '⚠️ Główny problem',
      teufelskreis: 'BŁĘDNE KOŁO',
      endlessLoop: 'Niekończąca się pętla',
      summary: 'Każdy punkt wzmacnia kolejny w niekończącym się cyklu stagnacji.',
      breakLoop: 'D.FAITH przerywa to błędne koło!',
      problems: [
        {
          title: 'Niski zasięg',
          description: 'Wysokiej jakości treści nie docierają organicznie do wystarczającej liczby osób',
          pain: '🔴 WYSOKI',
          impact: 'Mało nowych obserwujących mimo dobrego contentu'
        },
        {
          title: 'Droga reklama',
          description: 'Płatne reklamy są drogie, ale nie przynoszą lojalnych fanów',
          pain: '🔴 WYSOKI',
          impact: 'Wysokie koszty bez gwarantowanego zwrotu'
        },
        {
          title: 'Brak kapitału',
          description: 'Brak środków na produkcję muzyki i profesjonalne teledyski',
          pain: '🟠 ŚREDNI',
          impact: 'Ograniczona jakość produkcji'
        },
        {
          title: 'Słabe zaangażowanie',
          description: 'Interakcje fanów nie przynoszą bezpośredniej wartości',
          pain: '🟡 NISKI',
          impact: 'Powierzchowne relacje z fanami'
        }
      ],
      nodes: [
        'Niski\nzasięg',
        'Słabe\nzaangażowanie',
        'Brak\nnowych fanów',
        'Brak\ndocho\dów',
        'Brak\ninwestycji',
        'Słaba\ntreść'
      ]
    }
  };
  return content[language];
}
