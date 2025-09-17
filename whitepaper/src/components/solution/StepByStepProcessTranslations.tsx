// Liefert alle Übersetzungs-Texte für StepByStepProcess
type Step = {
  id: number;
  title: string;
  description: string;
  details: string[];
};
type StepByStepProcessTranslation = {
  title: string;
  subtitle: string;
  mainCycle: string;
  marketCycle: string;
  profitable: string;
  profitableInfo: string;
  halving: string;
  halvingInfo: string;
  nextStep: string;
  close: string;
  mainCycleSteps: Step[];
  extraStep: Step;
  marketCycleSteps: Step[];
};

export function StepByStepProcessTranslations(language: 'de' | 'en' | 'pl'): StepByStepProcessTranslation {
  const content: Record<'de'|'en'|'pl', StepByStepProcessTranslation> = {
    de: {
      mainCycleSteps: [
        {
          id: 1,
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
          id: 2,
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
          id: 3,
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
          id: 4,
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
          id: 5,
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
          id: 6,
          title: "Kreislauf wiederholt sich",
          description: "System verstärkt sich automatisch bei jedem neuen Post",
          details: [
            "Jeder Post kann das System weiter verbessern",
            "System lernt aus jedem Durchlauf und wird effizienter",
            "Fans erwarten bereits Belohnungen → Mehr Engagement",
            "D.FAITH kann bei jedem Zyklus wertvoller werden"
          ]
        }
      ],
      extraStep: {
        id: 3.1,
        title: "Fans claimen Tokens basierend auf Level",
        description: "Fans können ihre verdienten D.FAITH Tokens über die Webapp abholen",
        details: [
          "Level-basierte Token-Mengen automatisch zugewiesen",
          "Einfacher Claim-Prozess über die D.FAITH Webapp",
          "Transparente Anzeige aller verfügbaren Rewards",
          "→ Mehr zur Webapp-Funktionalität im entsprechenden Abschnitt"
        ]
      },
      marketCycleSteps: [
        {
          id: 1,
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
          id: 2,
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
          id: 3,
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
          id: 4,
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
          id: 5,
          title: "D.FAITH Preis steigt",
          description: "D.FAITH Preis steigt durch Halving auf neue Hochs",
          details: [
            "Reduzierte Token-Ausgabe führt zu natürlicher Verknappung",
            "D.FAITH Preis steigt durch verringerte Staking-Rewards",
            "Höhere D.FAITH Preise machen D.INVEST trotz Halving wieder profitabel",
            "System ist bereit für den nächsten profitablen Zyklus bei höherem Preisniveau"
          ]
        }
      ],
      title: 'Der D.FAITH Kreislauf',
      subtitle: 'Schritt-für-Schritt Prozesse - von Fan-Interaktion bis zur Wertsteigerung',
      mainCycle: 'Haupt-Zyklus (6 Schritte)',
      marketCycle: 'Markt-Zyklus',
      profitable: '💰 Was passiert wenn D.INVEST profitabel wird?',
      profitableInfo: 'Bei hohen D.FAITH Preisen wird D.INVEST Staking besonders attraktiv. Investoren erhalten mehr Rewards, was neue Investoren anzieht und den Kreislauf verstärkt.',
      halving: '🏆 Warum 6 Halving Stufen?',
      halvingInfo: 'Das Halving-System sorgt für eine nachhaltige Token-Ökonomie und verhindert eine Überflutung des Marktes. Mit jeder Stufe wird die Ausgaberate halbiert.',
  nextStep: 'Nächster Schritt',
  close: 'Schließen',
      // Die Schritte und Details müssten ggf. auch übersetzt werden!
    },
    en: {
      title: 'The D.FAITH Cycle',
      subtitle: 'Step-by-step processes – from fan interaction to value increase',
      mainCycle: 'Main cycle (6 steps)',
      marketCycle: 'Market cycle',
      profitable: '💰 What happens when D.INVEST becomes profitable?',
      profitableInfo: 'When D.FAITH prices are high, D.INVEST staking becomes especially attractive. Investors receive more rewards, attracting new investors and reinforcing the cycle.',
      halving: '🏆 Why 6 halving stages?',
      halvingInfo: 'The halving system ensures a sustainable token economy and prevents market flooding. With each stage, the payout rate is halved.',
  nextStep: 'Next step',
  close: 'Close',
      mainCycleSteps: [
        { id: 1, title: 'Dawid posts new content', description: 'Song, video or update on Instagram, TikTok & Facebook', details: ['€1,000 provided for 20,000 D.FAITH tokens', '€1,500 reserved for specific campaign', '80,000 D.FAITH remain locked in smart contract', 'Simultaneous posting on all platforms'] },
        { id: 2, title: 'Fan interaction detected', description: 'Fans like, comment, share – automatically tracked', details: ['10 EXP per like → level-based D.FAITH rewards', "Comment with 'D.FAITH' → automatic link to webapp", '10-20 EXP for shares & stories → higher rewards', 'Automatic profile creation and cross-platform tracking'] },
        { id: 3, title: 'Automatic token purchases', description: 'System buys D.FAITH tokens based on engagement', details: ['Marketing budget used for token purchases', 'Level system determines token amount per fan', '50% of purchased tokens go directly to fans', '50% locked in smart contract for staking'] },
        { id: 4, title: 'Smart contract collects tokens', description: '50% of purchased tokens go to smart contract', details: ['50% of purchased tokens go automatically to smart contract', '6 reward levels with halving effect implemented', 'Start rate: 0.1 D.FAITH per D.INVEST per week (initial)', 'Each level halves the payout rate automatically', 'Tokens only unlockable via D.INVEST staking'] },
        { id: 5, title: 'Price increase through scarcity', description: 'D.FAITH becomes more valuable, D.INVEST more attractive', details: ['Continuous purchases reduce available tokens', 'Price rises with increasing scarcity', 'D.INVEST staking becomes more profitable', 'Attractive ROI attracts new investors'] },
        { id: 6, title: 'Cycle repeats', description: 'System reinforces itself with every new post', details: ['Each post can further improve the system', 'System learns from each cycle and becomes more efficient', 'Fans expect rewards → more engagement', 'D.FAITH can become more valuable with each cycle'] }
      ],
      extraStep: { id: 3.1, title: 'Fans claim tokens based on level', description: 'Fans can claim their earned D.FAITH tokens via the webapp', details: ['Level-based token amounts automatically assigned', 'Easy claim process via the D.FAITH webapp', 'Transparent display of all available rewards', '→ More about the webapp functionality in the relevant section'] },
      marketCycleSteps: [
        { id: 1, title: 'D.INVEST becomes profitable', description: 'High D.FAITH prices make staking profitable', details: ['At higher D.FAITH prices, attractive ROI on D.INVEST is possible', 'Investors notice potential returns', '0.1 D.FAITH per D.INVEST per week becomes more valuable', '104% ROI possible under optimal conditions'] },
        { id: 2, title: 'Investors buy D.INVEST', description: 'New D.INVEST purchases lead to increased D.FAITH rewards', details: ['More investors buy D.INVEST for €5/token', 'More staking rewards are distributed → temporary price drop', 'New capital flows into better music production and marketing', 'Price correction is part of the natural growth cycle'] },
        { id: 3, title: 'Investors sell D.FAITH rewards', description: 'Crash -80%: Massive sales lead to drastic price drop', details: ['Investors sell their D.FAITH rewards for immediate profit', 'Market flooded with D.FAITH → price crash -80%', 'Panic selling amplifies the downward trend', 'D.INVEST staking becomes temporarily unattractive'] },
        { id: 4, title: 'Halving activates', description: 'Smart contract automatically reduces payout rate', details: ['Staking rate drops from 0.1 to 0.05 D.FAITH per week', 'Halving prevents further market flooding', 'New cycle starts at a higher price level', 'Proven halving concept from the crypto world'] },
        { id: 5, title: 'D.FAITH price rises', description: 'D.FAITH price rises to new highs through halving', details: ['Reduced token issuance leads to natural scarcity', 'D.FAITH price rises due to reduced staking rewards', 'Higher D.FAITH prices make D.INVEST profitable again despite halving', 'System is ready for the next profitable cycle at a higher price level'] }
      ]
    },
    pl: {
      title: 'Cykl D.FAITH',
      subtitle: 'Proces krok po kroku – od interakcji fana do wzrostu wartości',
      mainCycle: 'Główny cykl (6 kroków)',
      marketCycle: 'Cykl rynkowy',
      profitable: '💰 Co się dzieje, gdy D.INVEST staje się opłacalny?',
      profitableInfo: 'Przy wysokich cenach D.FAITH staking D.INVEST staje się szczególnie atrakcyjny. Inwestorzy otrzymują więcej nagród, co przyciąga nowych inwestorów i wzmacnia cykl.',
      halving: '🏆 Dlaczego 6 etapów halvingu?',
      halvingInfo: 'System halvingu zapewnia zrównoważoną ekonomię tokena i zapobiega zalaniu rynku. Z każdą fazą tempo wypłat jest dzielone na pół.',
  nextStep: 'Następny krok',
  close: 'Zamknij',
      mainCycleSteps: [
        { id: 1, title: 'Dawid publikuje nową treść', description: 'Piosenka, wideo lub aktualizacja na Instagramie, TikToku i Facebooku', details: ['1 000 € na 20 000 tokenów D.FAITH', '1 500 € zarezerwowane na konkretną kampanię', '80 000 D.FAITH pozostaje zablokowanych w smart kontrakcie', 'Jednoczesna publikacja na wszystkich platformach'] },
        { id: 2, title: 'Wykryto interakcję fana', description: 'Fani lajkują, komentują, udostępniają – automatycznie wykrywane', details: ['10 EXP za lajka → nagrody D.FAITH według poziomu', "Komentarz z 'D.FAITH' → automatyczny link do webapp", '10-20 EXP za udostępnienia i relacje → wyższe nagrody', 'Automatyczne tworzenie profilu i śledzenie cross-platformowe'] },
        { id: 3, title: 'Automatyczne zakupy tokenów', description: 'System kupuje tokeny D.FAITH na podstawie zaangażowania', details: ['Budżet marketingowy przeznaczony na zakupy tokenów', 'System poziomów określa liczbę tokenów na fana', '50% zakupionych tokenów trafia bezpośrednio do fanów', '50% blokowane w smart kontrakcie na staking'] },
        { id: 4, title: 'Smart contract zbiera tokeny', description: '50% zakupionych tokenów trafia do smart contractu', details: ['50% zakupionych tokenów trafia automatycznie do smart contractu', '6 poziomów nagród z efektem halvingu', 'Stawka początkowa: 0,1 D.FAITH na D.INVEST na tydzień (start)', 'Każdy poziom automatycznie zmniejsza stawkę o połowę', 'Tokeny odblokowywane tylko przez staking D.INVEST'] },
        { id: 5, title: 'Wzrost ceny przez niedobór', description: 'D.FAITH staje się cenniejszy, D.INVEST bardziej atrakcyjny', details: ['Ciągłe zakupy zmniejszają dostępne tokeny', 'Cena rośnie wraz z niedoborem', 'Staking D.INVEST staje się bardziej opłacalny', 'Atrakcyjny ROI przyciąga nowych inwestorów'] },
        { id: 6, title: 'Cykl się powtarza', description: 'System wzmacnia się przy każdym nowym poście', details: ['Każdy post może dalej ulepszać system', 'System uczy się z każdego cyklu i staje się wydajniejszy', 'Fani oczekują nagród → większe zaangażowanie', 'D.FAITH może zyskiwać na wartości z każdym cyklem'] }
      ],
  extraStep: { id: 3.1, title: 'Fani odbierają tokeny na podstawie poziomu', description: 'Fani mogą odebrać swoje zdobyte tokeny D.FAITH przez webapp', details: ['Tokeny przydzielane automatycznie według poziomu', 'Prosty proces odbioru przez aplikację D.FAITH', 'Przejrzysty widok wszystkich dostępnych nagród', '→ Więcej o funkcjonalności webapp w odpowiedniej sekcji'] },
      marketCycleSteps: [
        { id: 1, title: 'D.INVEST staje się opłacalny', description: 'Wysokie ceny D.FAITH sprawiają, że staking jest opłacalny', details: ['Przy wyższych cenach D.FAITH możliwy atrakcyjny ROI na D.INVEST', 'Inwestorzy zauważają potencjalne zyski', '0,1 D.FAITH na D.INVEST na tydzień staje się cenniejsze', '104% ROI możliwe w optymalnych warunkach'] },
        { id: 2, title: 'Inwestorzy kupują D.INVEST', description: 'Nowe zakupy D.INVEST prowadzą do zwiększonych nagród D.FAITH', details: ['Więcej inwestorów kupuje D.INVEST za 5€/token', 'Więcej nagród stakingowych → tymczasowy spadek ceny', 'Nowy kapitał trafia na lepszą produkcję muzyki i marketing', 'Korekta ceny to część naturalnego cyklu wzrostu'] },
        { id: 3, title: 'Inwestorzy sprzedają nagrody D.FAITH', description: 'Krach -80%: masowa sprzedaż prowadzi do drastycznego spadku ceny', details: ['Inwestorzy sprzedają nagrody D.FAITH dla natychmiastowego zysku', 'Rynek zalany D.FAITH → krach cenowy -80%', 'Panika pogłębia trend spadkowy', 'Staking D.INVEST staje się tymczasowo nieopłacalny'] },
        { id: 4, title: 'Aktywuje się halving', description: 'Smart contract automatycznie zmniejsza tempo wypłat', details: ['Stawka stakingu spada z 0,1 do 0,05 D.FAITH na tydzień', 'Halving zapobiega dalszemu zalewaniu rynku', 'Nowy cykl zaczyna się na wyższym poziomie cenowym', 'Sprawdzony koncept halvingu ze świata krypto'] },
        { id: 5, title: 'Cena D.FAITH rośnie', description: 'Cena D.FAITH rośnie do nowych szczytów dzięki halvingowi', details: ['Zmniejszona emisja tokenów prowadzi do naturalnego niedoboru', 'Cena D.FAITH rośnie przez niższe nagrody stakingowe', 'Wyższe ceny D.FAITH sprawiają, że D.INVEST znów jest opłacalny mimo halvingu', 'System gotowy na kolejny opłacalny cykl na wyższym poziomie cenowym'] }
      ]
    }
  };
  return content[language];
}
