export interface InteractiveTimelineTexts {
  header: {
    title: string;
    subtitle: string;
    mainCycleButton: string;
    marketCycleButton: string;
  };
  mainCycle: {
    steps: Array<{
      title: string;
      description: string;
      details: string[];
    }>;
  };
  extraStep: {
    title: string;
    description: string;
    details: string[];
  };
  marketCycle: {
    steps: Array<{
      title: string;
      description: string;
      details: string[];
    }>;
  };
  expandableInfo: {
    profitableTitle: string;
    profitableContent: string;
    halvingTitle: string;
    halvingContent: {
      description: string;
      success: string;
      longTerm: string;
    };
  };
  ui: {
    showDetails: string;
    hideDetails: string;
  };
}

export const interactiveTimelineTexts: Record<string, InteractiveTimelineTexts> = {
  de: {
    header: {
      title: "Wie das D.FAITH Ökosystem funktioniert",
      subtitle: "Schritt-für-Schritt Prozesse",
      mainCycleButton: "Haupt-Zyklus (6 Schritte)",
      marketCycleButton: "Markt-Zyklus (5 Schritte)"
    },
    mainCycle: {
      steps: [
        {
          title: "Dawid postet neuen Content",
          description: "Song, Video oder Update auf Instagram, TikTok & Facebook",
          details: [
            "1.000€ für 20.000 D.FAITH Token bereitgestellt",
            "1.500€ für spezifische Kampagne reserviert", 
            "80.000 D.FAITH bleiben im Smart Contract gesperrt",
            "Gleichzeitiges Posting auf allen Plattformen"
          ]
        },
        {
          title: "Fan Interaktion wird erkannt",
          description: "Fans liken, kommentieren, teilen - automatisch erfasst",
          details: [
            "10 EXP pro Like → Level-basierte D.FAITH Rewards",
            "Kommentar mit 'D.FAITH' → Automatischer Link zur Webapp",
            "10-20 EXP für Shares & Stories → Höhere Rewards",
            "Automatische Profilerstellung und Cross-Platform Tracking"
          ]
        },
        {
          title: "Automatische Token-Käufe",
          description: "System kauft D.FAITH Token basierend auf Engagement",
          details: [
            "Marketing Budget wird für Token-Käufe verwendet",
            "Level-System bestimmt Token-Anzahl pro Fan",
            "50% der gekauften Token gehen direkt an Fans",
            "50% werden im Smart Contract für Staking gesperrt"
          ]
        },
        {
          title: "Smart Contract sammelt Token",
          description: "50% der gekauften Token gehen an Smart Contract",
          details: [
            "50% der gekauften Token gehen automatisch an Smart Contract",
            "6 Reward-Stufen mit Halving-Effekt implementiert",
            "Startrate: 0,1 D.FAITH pro D.INVEST pro Woche (Initial)",
            "Jede Stufe halbiert die Ausgaberate automatisch",
            "Token nur durch D.INVEST Staking entsperrbar"
          ]
        },
        {
          title: "Preissteigerung durch Verknappung",
          description: "D.FAITH wird wertvoller, D.INVEST wird attraktiver",
          details: [
            "Kontinuierliche Käufe reduzieren verfügbare Token",
            "Preis steigt bei zunehmender Verknappung",
            "D.INVEST Staking wird profitabler",
            "Attraktive ROI lockt neue Investoren an"
          ]
        },
        {
          title: "Kreislauf wiederholt sich",
          description: "System verstärkt sich automatisch bei jedem neuen Post",
          details: [
            "Jeder Post kann das System weiter verbessern",
            "System lernt aus jedem Durchlauf und wird effizienter",
            "Fans erwarten bereits Belohnungen → Mehr Engagement",
            "D.FAITH kann bei jedem Zyklus wertvoller werden"
          ]
        }
      ]
    },
    extraStep: {
      title: "Fans claimen Tokens basierend auf Level",
      description: "Fans können ihre verdienten D.FAITH Tokens über die Webapp abholen",
      details: [
        "Level-basierte Token-Mengen automatisch zugewiesen",
        "Einfacher Claim-Prozess über die D.FAITH Webapp",
        "Transparente Anzeige aller verfügbaren Rewards",
        "→ Mehr zur Webapp-Funktionalität im entsprechenden Abschnitt"
      ]
    },
    marketCycle: {
      steps: [
        {
          title: "D.INVEST wird profitabel",
          description: "Hohe D.FAITH Preise machen Staking profitabel",
          details: [
            "Bei höheren D.FAITH Preisen kann attraktiver ROI auf D.INVEST entstehen",
            "Investoren werden auf potentielle Renditen aufmerksam",
            "0,1 D.FAITH pro D.INVEST pro Woche wird wertvoller",
            "104% ROI möglich bei optimalen Bedingungen"
          ]
        },
        {
          title: "Investoren kaufen D.INVEST",
          description: "Neue D.INVEST Käufe führen zu erhöhten D.FAITH Rewards",
          details: [
            "Weitere Investoren kaufen D.INVEST für 5€/Token",
            "Mehr Staking-Rewards werden ausgegeben → temporärer Preisrückgang",
            "Neues Kapital fließt in bessere Musikproduktion und Marketing",
            "Preiskorrektur ist Teil des natürlichen Wachstumszyklus"
          ]
        },
        {
          title: "Investoren verkaufen D.FAITH Rewards",
          description: "Crash -80%: Massive Verkäufe führen zu drastischem Preisverfall",
          details: [
            "Investoren verkaufen ihre D.FAITH Rewards für sofortige Gewinne",
            "Markt wird mit D.FAITH überflutet → Preiscrash -80%",
            "Panikverkäufe verstärken den Abwärtstrend",
            "D.INVEST Staking wird vorübergehend unattraktiv"
          ]
        },
        {
          title: "Halving aktiviert sich",
          description: "Smart Contract reduziert Ausgaberate automatisch",
          details: [
            "Staking-Rate sinkt von 0,1 auf 0,05 D.FAITH pro Woche",
            "Halving verhindert weitere Marktüberflutung",
            "Neuer Zyklus startet auf höherem Preisniveau",
            "Bewährtes Halving-Konzept aus der Krypto-Welt"
          ]
        },
        {
          title: "D.FAITH Preis steigt",
          description: "D.FAITH Preis steigt durch Halving auf neue Hochs",
          details: [
            "Reduzierte Token-Ausgabe führt zu natürlicher Verknappung",
            "D.FAITH Preis steigt durch verringerte Staking-Rewards",
            "Höhere D.FAITH Preise machen D.INVEST trotz Halving wieder profitabel",
            "System ist bereit für den nächsten profitablen Zyklus bei höherem Preisniveau"
          ]
        }
      ]
    },
    expandableInfo: {
      profitableTitle: "Was passiert wenn D.INVEST profitabel wird?",
      profitableContent: "Wenn D.INVEST die Break-Even-Phase erreicht und Gewinne erwirtschaftet, fließen 100% der Profits zusätzlich in den Hauptzyklus: D.FAITH Token werden weiterhin gekauft → Preise steigen → D.INVEST Staking wird noch profitabler → Mehr Menschen kaufen D.INVEST → Dawid kann größere Marketing-Kampagnen finanzieren → Noch stärkerer Wachstumszyklus entsteht. Ein sich selbst verstärkender Kreislauf der Profitabilität.",
      halvingTitle: "Warum 6 Halving Stufen?",
      halvingContent: {
        description: "Dieser Mechanismus ist darauf ausgelegt sicherzustellen, dass Kapital in Zyklen zum Projekt fließt und es sich entwickeln und eigene Einnahmen generieren kann.",
        success: "Sobald alle D.INVEST verkauft sind und das Projekt erfolgreich ist, werden D.FAITH Token weiterhin aus den Einnahmen während des Marketings gekauft.",
        longTerm: "Langzeit-Investoren profitieren am meisten davon"
      }
    },
    ui: {
      showDetails: "Details anzeigen",
      hideDetails: "Details ausblenden"
    }
  },
  en: {
    header: {
      title: "How the D.FAITH Ecosystem Works",
      subtitle: "Step-by-Step Processes",
      mainCycleButton: "Main Cycle (6 Steps)",
      marketCycleButton: "Market Cycle (5 Steps)"
    },
    mainCycle: {
      steps: [
        {
          title: "Dawid posts new content",
          description: "Song, video or update on Instagram, TikTok & Facebook",
          details: [
            "€1,000 allocated for 20,000 D.FAITH tokens",
            "€1,500 reserved for specific campaign", 
            "80,000 D.FAITH remain locked in smart contract",
            "Simultaneous posting across all platforms"
          ]
        },
        {
          title: "Fan interaction is detected",
          description: "Fans like, comment, share - automatically tracked",
          details: [
            "10 EXP per like → Level-based D.FAITH rewards",
            "Comment with 'D.FAITH' → Automatic link to webapp",
            "10-20 EXP for shares & stories → Higher rewards",
            "Automatic profile creation and cross-platform tracking"
          ]
        },
        {
          title: "Automatic token purchases",
          description: "System buys D.FAITH tokens based on engagement",
          details: [
            "Marketing budget is used for token purchases",
            "Level system determines token amount per fan",
            "50% of purchased tokens go directly to fans",
            "50% are locked in smart contract for staking"
          ]
        },
        {
          title: "Smart contract collects tokens",
          description: "50% of purchased tokens go to smart contract",
          details: [
            "50% of purchased tokens automatically go to smart contract",
            "6 reward levels with halving effect implemented",
            "Starting rate: 0.1 D.FAITH per D.INVEST per week (Initial)",
            "Each level automatically halves the distribution rate",
            "Tokens only unlockable through D.INVEST staking"
          ]
        },
        {
          title: "Price increase through scarcity",
          description: "D.FAITH becomes more valuable, D.INVEST becomes more attractive",
          details: [
            "Continuous purchases reduce available tokens",
            "Price rises with increasing scarcity",
            "D.INVEST staking becomes more profitable",
            "Attractive ROI attracts new investors"
          ]
        },
        {
          title: "Cycle repeats itself",
          description: "System strengthens automatically with each new post",
          details: [
            "Each post can further improve the system",
            "System learns from each cycle and becomes more efficient",
            "Fans already expect rewards → More engagement",
            "D.FAITH can become more valuable with each cycle"
          ]
        }
      ]
    },
    extraStep: {
      title: "Fans claim tokens based on level",
      description: "Fans can collect their earned D.FAITH tokens via the webapp",
      details: [
        "Level-based token amounts automatically assigned",
        "Simple claim process via the D.FAITH webapp",
        "Transparent display of all available rewards",
        "→ More about webapp functionality in the corresponding section"
      ]
    },
    marketCycle: {
      steps: [
        {
          title: "D.INVEST becomes profitable",
          description: "High D.FAITH prices make staking profitable",
          details: [
            "Higher D.FAITH prices can create attractive ROI on D.INVEST",
            "Investors become aware of potential returns",
            "0.1 D.FAITH per D.INVEST per week becomes more valuable",
            "104% ROI possible under optimal conditions"
          ]
        },
        {
          title: "Investors buy D.INVEST",
          description: "New D.INVEST purchases lead to increased D.FAITH rewards",
          details: [
            "More investors buy D.INVEST for €5/token",
            "More staking rewards are distributed → temporary price decline",
            "New capital flows into better music production and marketing",
            "Price correction is part of the natural growth cycle"
          ]
        },
        {
          title: "Investors sell D.FAITH rewards",
          description: "Crash -80%: Massive sales lead to drastic price drop",
          details: [
            "Investors sell their D.FAITH rewards for immediate profits",
            "Market is flooded with D.FAITH → price crash -80%",
            "Panic selling amplifies the downward trend",
            "D.INVEST staking becomes temporarily unattractive"
          ]
        },
        {
          title: "Halving activates",
          description: "Smart contract automatically reduces distribution rate",
          details: [
            "Staking rate drops from 0.1 to 0.05 D.FAITH per week",
            "Halving prevents further market flooding",
            "New cycle starts at higher price level",
            "Proven halving concept from the crypto world"
          ]
        },
        {
          title: "D.FAITH price rises",
          description: "D.FAITH price rises to new highs through halving",
          details: [
            "Reduced token distribution leads to natural scarcity",
            "D.FAITH price rises due to reduced staking rewards",
            "Higher D.FAITH prices make D.INVEST profitable again despite halving",
            "System is ready for the next profitable cycle at higher price level"
          ]
        }
      ]
    },
    expandableInfo: {
      profitableTitle: "What happens when D.INVEST becomes profitable?",
      profitableContent: "When D.INVEST becomes profitable, investors increasingly buy D.INVEST tokens. This leads to more D.FAITH rewards being distributed, causing falling D.FAITH prices. This cycle repeats until automatic halving occurs and the distribution rate is halved to stabilize the market.",
      halvingTitle: "Why 6 halving levels?",
      halvingContent: {
        description: "This mechanism is designed to ensure that capital flows to the project in cycles, allowing it to develop and generate its own revenue.",
        success: "Once all D.INVEST are sold and the project is successful, D.FAITH tokens will continue to be purchased from revenue during marketing.",
        longTerm: "Long-term investors benefit the most from this"
      }
    },
    ui: {
      showDetails: "Show details",
      hideDetails: "Hide details"
    }
  },
  pl: {
    header: {
      title: "Jak działa ekosystem D.FAITH",
      subtitle: "Procesy krok po kroku",
      mainCycleButton: "Główny cykl (6 kroków)",
      marketCycleButton: "Cykl rynkowy (5 kroków)"
    },
    mainCycle: {
      steps: [
        {
          title: "Dawid publikuje nową treść",
          description: "Piosenka, wideo lub aktualizacja na Instagram, TikTok i Facebook",
          details: [
            "1.000€ przeznaczone na 20.000 tokenów D.FAITH",
            "1.500€ zarezerwowane na konkretną kampanię", 
            "80.000 D.FAITH pozostaje zablokowane w smart contract",
            "Jednoczesne publikowanie na wszystkich platformach"
          ]
        },
        {
          title: "Interakcja fanów jest wykrywana",
          description: "Fani lubią, komentują, udostępniają - automatycznie śledzone",
          details: [
            "10 EXP za like → Nagrody D.FAITH oparte na poziomie",
            "Komentarz z 'D.FAITH' → Automatyczny link do aplikacji",
            "10-20 EXP za udostępnienia i historie → Wyższe nagrody",
            "Automatyczne tworzenie profilu i śledzenie międzyplatformowe"
          ]
        },
        {
          title: "Automatyczne zakupy tokenów",
          description: "System kupuje tokeny D.FAITH na podstawie zaangażowania",
          details: [
            "Budżet marketingowy jest używany do zakupu tokenów",
            "System poziomów określa ilość tokenów na fana",
            "50% zakupionych tokenów trafia bezpośrednio do fanów",
            "50% jest blokowane w smart contract do stakingu"
          ]
        },
        {
          title: "Smart contract zbiera tokeny",
          description: "50% zakupionych tokenów trafia do smart contract",
          details: [
            "50% zakupionych tokenów automatycznie trafia do smart contract",
            "Zaimplementowano 6 poziomów nagród z efektem halving",
            "Stawka początkowa: 0,1 D.FAITH na D.INVEST tygodniowo (początkowa)",
            "Każdy poziom automatycznie zmniejsza o połowę stopę dystrybucji",
            "Tokeny można odblokować tylko przez staking D.INVEST"
          ]
        },
        {
          title: "Wzrost ceny przez niedobór",
          description: "D.FAITH staje się bardziej wartościowy, D.INVEST bardziej atrakcyjny",
          details: [
            "Ciągłe zakupy zmniejszają dostępne tokeny",
            "Cena rośnie wraz ze wzrostem niedoboru",
            "Staking D.INVEST staje się bardziej opłacalny",
            "Atrakcyjny ROI przyciąga nowych inwestorów"
          ]
        },
        {
          title: "Cykl się powtarza",
          description: "System wzmacnia się automatycznie z każdym nowym postem",
          details: [
            "Każdy post może dalej poprawić system",
            "System uczy się z każdego cyklu i staje się bardziej efektywny",
            "Fani już oczekują nagród → Więcej zaangażowania",
            "D.FAITH może stać się bardziej wartościowy z każdym cyklem"
          ]
        }
      ]
    },
    extraStep: {
      title: "Fani odbierają tokeny na podstawie poziomu",
      description: "Fani mogą odebrać swoje zarobione tokeny D.FAITH przez aplikację",
      details: [
        "Ilości tokenów oparte na poziomie automatycznie przypisane",
        "Prosty proces odbioru przez aplikację D.FAITH",
        "Przejrzyste wyświetlanie wszystkich dostępnych nagród",
        "→ Więcej o funkcjonalności aplikacji w odpowiedniej sekcji"
      ]
    },
    marketCycle: {
      steps: [
        {
          title: "D.INVEST staje się opłacalny",
          description: "Wysokie ceny D.FAITH czynią staking opłacalnym",
          details: [
            "Wyższe ceny D.FAITH mogą stworzyć atrakcyjny ROI na D.INVEST",
            "Inwestorzy dostrzegają potencjalne zwroty",
            "0,1 D.FAITH na D.INVEST tygodniowo staje się bardziej wartościowe",
            "104% ROI możliwe w optymalnych warunkach"
          ]
        },
        {
          title: "Inwestorzy kupują D.INVEST",
          description: "Nowe zakupy D.INVEST prowadzą do zwiększonych nagród D.FAITH",
          details: [
            "Więcej inwestorów kupuje D.INVEST za 5€/token",
            "Więcej nagród za staking jest dystrybuowanych → tymczasowy spadek ceny",
            "Nowy kapitał płynie w lepszą produkcję muzyczną i marketing",
            "Korekta cenowa jest częścią naturalnego cyklu wzrostu"
          ]
        },
        {
          title: "Inwestorzy sprzedają nagrody D.FAITH",
          description: "Krach -80%: Masowe sprzedaże prowadzą do drastycznego spadku cen",
          details: [
            "Inwestorzy sprzedają swoje nagrody D.FAITH dla natychmiastowych zysków",
            "Rynek jest zalany D.FAITH → krach cenowy -80%",
            "Panikowa sprzedaż wzmacnia trend spadkowy",
            "Staking D.INVEST staje się tymczasowo nieatrakcyjny"
          ]
        },
        {
          title: "Halving się aktywuje",
          description: "Smart contract automatycznie zmniejsza stopę dystrybucji",
          details: [
            "Stopa stakingu spada z 0,1 do 0,05 D.FAITH tygodniowo",
            "Halving zapobiega dalszemu zalewaniu rynku",
            "Nowy cykl zaczyna się na wyższym poziomie cenowym",
            "Sprawdzona koncepcja halving ze świata krypto"
          ]
        },
        {
          title: "Cena D.FAITH rośnie",
          description: "Cena D.FAITH rośnie do nowych szczytów przez halving",
          details: [
            "Zmniejszona dystrybucja tokenów prowadzi do naturalnego niedoboru",
            "Cena D.FAITH rośnie z powodu zmniejszonych nagród za staking",
            "Wyższe ceny D.FAITH sprawiają, że D.INVEST jest znów opłacalny pomimo halving",
            "System jest gotowy na kolejny opłacalny cykl na wyższym poziomie cenowym"
          ]
        }
      ]
    },
    expandableInfo: {
      profitableTitle: "Co się dzieje, gdy D.INVEST staje się opłacalny?",
      profitableContent: "Gdy D.INVEST staje się opłacalny, inwestorzy coraz częściej kupują tokeny D.INVEST. Prowadzi to do dystrybucji większej ilości nagród D.FAITH, powodując spadek cen D.FAITH. Ten cykl powtarza się do momentu wystąpienia automatycznego halving i zmniejszenia o połowę stopy dystrybucji w celu stabilizacji rynku.",
      halvingTitle: "Dlaczego 6 poziomów halving?",
      halvingContent: {
        description: "Ten mechanizm ma na celu zapewnienie, że kapitał płynie do projektu w cyklach, pozwalając mu się rozwijać i generować własne przychody.",
        success: "Gdy wszystkie D.INVEST zostaną sprzedane, a projekt będzie udany, tokeny D.FAITH będą nadal kupowane z przychodów podczas marketingu.",
        longTerm: "Długoterminowi inwestorzy zyskują na tym najbardziej"
      }
    },
    ui: {
      showDetails: "Pokaż szczegóły",
      hideDetails: "Ukryj szczegóły"
    }
  }
};