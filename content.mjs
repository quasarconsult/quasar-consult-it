/* Veridian (brand provvisorio) — sito italiano. Copy + mappa immagini.
   Apostrofi tipografici (’) per non rompere le stringhe JS. */

const U = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const IMG = {
  hero: U('1717386255773-1e3037c81788'),
  engineering: U('1581091212991-8891c7d4bd9b'),
  leadership: U('1517048676732-d65bc937f952'),
  meeting: U('1573164574572-cb89e39749b4'),
  welding: 'assets/weld.webp',
  steel: 'assets/steel.webp',
  manufacturing: U('1567789884554-0b844b597180'),
  constructionFrame: U('1587582423116-ec07293f0395'),
  construction: U('1541888946425-d81bb19240f5'),
  warehouse: U('1644079446600-219068676743'),
  healthcare: U('1598257923770-c6b0727fd5d2'),
  datacentre: U('1584169417032-d34e8d805e8b'),
  food: U('1652211955967-99c892925469'),
  energy: U('1762381157166-f51ac99ab412'),
  environment: U('1603705502222-4356c929be57'),
  plans: U('1608303588026-884930af2559'),
  lab: U('1518152006812-edab29b069ac'),
  abstract: U('1454117096348-e4abbeba002c'),
};

export const SITE = {
  brand: 'Quasar',
  brandMark: ['Q', 'uasar'],
  tagline: 'Conformità, Certificazione e Crescita Aziendale',
  lang: 'it',
  nav: [
    { label: 'Certificazioni', href: 'services.html' },
    { label: 'Settori', href: 'industries.html' },
    { label: 'Come lavoriamo', href: 'method.html' },
    { label: 'Chi siamo', href: 'about.html' },
    { label: 'Contatti', href: 'contact.html' },
  ],
  standards: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001', 'EN 1090', 'ISO 3834', 'Marcatura CE', 'FPC'],
  contact: { email: null, phone: null, address: null, piva: null },
  ui: {
    navCta: 'Richiedi una valutazione',
    standardsLabel: 'Le norme che seguiamo',
    explore: 'Scopri',
    step: 'FASE',
    crumbHome: 'Home',
    crumbCerts: 'Certificazioni',
    certIntroCtaPre: 'Parliamo di ',
    certCtaTitlePre: 'Pronti a ottenere ',
    certCtaText: 'Richiedi una valutazione gratuita: ti diciamo con precisione cosa serve per la certificazione, i gap da colmare, i tempi e i costi.',
    ctaPrimary: 'Prenota la valutazione',
    ctaSecondary: 'Tutte le certificazioni',
    beyondClause: 'Oltre la certificazione',
    beyondTitle: 'Il lavoro che sta sotto al certificato.',
    talkCtaPre: 'Parliamo di ',
    footer: {
      certs: 'Certificazioni', company: 'Azienda', start: 'Inizia',
      bookAssessment: 'Richiedi una valutazione gratuita',
      readiness: 'Check di idoneità alle gare',
      allServices: 'Tutti i servizi',
      rights: 'Tutti i diritti riservati.',
      workingName: '(nome provvisorio)',
      demoNote: 'Demo · contenuti e brand soggetti a modifiche',
      tagSuffix: 'Trasformiamo le norme che i tuoi clienti richiedono in un’azienda più forte.',
    },
    contactForm: {
      name: 'Nome e cognome', company: 'Azienda', email: 'Email', phone: 'Telefono (facoltativo)',
      message: 'Di cosa hai bisogno?', submit: 'Invia la richiesta',
      ok: 'Grazie. La tua richiesta è stata inviata correttamente. Ti risponderemo nel più breve tempo possibile.',
      asideTitle: 'Preferisci parlarne?',
      aside: ['Valutazione gratuita e senza impegno', 'Un quadro chiaro di gap, tempi e costi', 'Consigli da chi le aziende le ha gestite davvero'],
      detailsNote: 'Rispondiamo rapidamente a ogni richiesta.',
    },
    industriesSplit: {
      clause: 'Un solo metodo, ogni settore',
      title: 'Cambia la norma, non il metodo.',
      body: 'Che si tratti di carpenteria metallica, RSA, data center, logistica, produzione alimentare o servizi professionali, il metodo resta lo stesso: comprendere l’organizzazione, individuare i requisiti applicabili, costruire un sistema proporzionato e dimostrare con evidenze oggettive che funziona.',
      cta: 'Trova il tuo percorso',
    },
  },
};

export const HOME = {
  hero: {
    clause: 'Italia · Ogni settore',
    title: ['Certificazioni che fanno ', 'crescere l’impresa', '.'],
    sub: 'Dalla ISO 9001 alla EN 1090, trasformiamo le norme che i tuoi clienti richiedono in sistemi che rendono l’azienda più competitiva: pronta per le gare, conforme e meglio organizzata.',
    proof: [
      { n: '40+', l: 'Anni di esperienza industriale del fondatore' },
      { n: '8', l: 'Standard, dalla A alla Z' },
      { n: 'Ogni', l: 'Settore, non solo l’industria' },
    ],
    tag: 'Pronti all’audit prima dell’auditor.',
  },
  outcomes: {
    clause: 'Perché ci scelgono',
    title: 'La certificazione è il risultato visibile. L’obiettivo è costruire un’azienda più organizzata, controllata e competitiva.',
    items: [
      { code: '01', icon: 'contract', h: 'Qualificati per più gare', p: 'Ottieni le certificazioni richieste oggi da bandi, clienti e filiere, così non resti escluso da lavori per cui sei già qualificato.' },
      { code: '02', icon: 'shield', h: 'Riduci i rischi', p: 'Meno non conformità, incidenti e rilievi in audit, grazie a controlli costruiti su come lavori davvero.' },
      { code: '03', icon: 'gauge', h: 'Migliora l’organizzazione', p: 'Sistemi di gestione che fanno funzionare meglio l’azienda, non carta destinata a un cassetto.' },
      { code: '04', icon: 'growth', h: 'Crea valore nel tempo', p: 'Sistemi progettati per affrontare con solidità la prima verifica, le successive visite di sorveglianza e l’evoluzione dell’azienda.' },
    ],
  },
  method: {
    clause: 'Come lavoriamo',
    title: 'Un percorso chiaro: dalla situazione attuale alla certificazione.',
    sub: 'Sei fasi, responsabilità definite, nessuna sorpresa. Sai sempre cosa succede dopo e quanto costa.',
    steps: [
      { h: 'Sopralluogo iniziale', p: 'Conosciamo l’azienda, i tuoi clienti e le certificazioni che ti servono davvero, con sopralluogo in sede quando necessario.' },
      { h: 'Analisi dei gap', p: 'Misuriamo i processi attuali rispetto alla norma e ti diciamo con precisione cosa manca.' },
      { h: 'Progettazione del sistema', p: 'Costruiamo un sistema di gestione attorno al tuo modo di lavorare: snello, pratico, pronto per l’audit.' },
      { h: 'Implementazione', p: 'Lo mettiamo in pratica con il tuo team: procedure, registrazioni, responsabilità e formazione che restano.' },
      { h: 'Audit interno', p: 'Mettiamo alla prova il sistema prima dell’ente di certificazione e correggiamo per tempo i punti deboli.' },
      { h: 'Supporto alla certificazione', p: 'Ti affianchiamo durante la verifica dell’organismo di certificazione e nelle successive visite di sorveglianza.' },
    ],
  },
  different: {
    clause: 'Perché siamo diversi',
    title: 'Operativi, non solo consulenti.',
    body: 'La maggior parte dei consulenti viene dagli audit. Noi veniamo dalla gestione: oltre quarant’anni a fondare, dirigere e risanare aziende industriali e di ingegneria in tre continenti, tra produzione, carpenteria, cantieri e conti economici. Per questo non ti consegniamo solo un manuale: costruiamo sistemi che rendono l’azienda concretamente migliore, e la certificazione arriva di conseguenza.',
    points: [
      'Aziende e joint venture fondate e gestite a livello internazionale',
      'Esperienza reale in produzione, carpenteria e saldatura',
      'Gestione di progetti e ristrutturazioni industriali',
      'Miglioramento e controllo dei costi, non solo conformità',
    ],
  },
  stats: {
    clause: 'Il percorso',
    items: [
      { n: 40, u: '+', l: 'Anni di esperienza operativa del fondatore' },
      { n: 3, u: '', l: 'Continenti in cui abbiamo lavorato' },
      { n: 8, u: '', l: 'Standard coperti, end-to-end' },
      { n: 6, u: '', l: 'Fasi del metodo di certificazione' },
    ],
  },
  industries: {
    clause: 'Chi aiutiamo',
    title: 'Pensato per ogni settore, non solo per l’industria pesante.',
    sub: 'Siamo nati nell’ingegneria e nella produzione. Oggi lo stesso metodo certifica imprese in tutta l’economia.',
    list: [
      'Manifatturiero', 'Edilizia e costruzioni', 'Ingegneria', 'Carpenteria metallica',
      'Logistica e magazzini', 'Food & beverage', 'Sanità', 'IT e software',
      'Servizi professionali', 'Energia e utility', 'Facility management', 'Formazione',
    ],
  },
  certsIntro: {
    clause: 'Certificazioni',
    title: 'Le norme richieste dal tuo mercato, implementate con metodo e competenza.',
    sub: 'Sistemi di gestione universali e certificazioni tecniche specialistiche, ognuna seguita da chi quel lavoro lo ha fatto davvero.',
  },
  cta: {
    title: 'Non sai quali certificazioni ti servono davvero?',
    p: 'Prenota un check gratuito di idoneità alle gare. Guardiamo i contratti che vuoi vincere, i requisiti che li accompagnano e i gap da colmare, poi ti diciamo esattamente cosa serve.',
  },
};

/* ---------- Pagine certificazioni ---------- */
export const CERTS = [
  {
    slug: 'iso-9001', code: 'ISO 9001:2015', name: 'ISO 9001 — Sistemi di Gestione Qualità',
    image: IMG.meeting,
    promise: 'Qualificati per più gare dimostrando continuità, affidabilità e controllo dei processi.',
    intro: 'La ISO 9001 è lo standard di gestione più riconosciuto al mondo, e sempre più spesso la condizione minima per gare e filiere. Fatta bene, va oltre l’apertura di porte: significa meno errori, responsabilità più chiare e clienti che si fidano della tua consegna.',
    tags: ['Tutti i settori', 'Gare e qualifiche', 'Filiera'],
    sections: [
      { h: 'Che cos’è', p: 'Un quadro per un Sistema di Gestione della Qualità (SGQ) basato sull’approccio per processi, sul pensiero basato sul rischio e sul miglioramento continuo. Vale per qualsiasi organizzazione, di ogni dimensione e settore, da una carpenteria a una software house.' },
      { h: 'Che cosa richiede', list: [
        'Comprensione del contesto, dei clienti e delle parti interessate',
        'Impegno della direzione, politica per la qualità e obiettivi misurabili',
        'Gestione di rischi e opportunità lungo i processi',
        'Processi documentati e registrazioni che ne provano il funzionamento',
        'Indicatori di prestazione, audit interni e riesame della direzione',
        'Gestione delle non conformità, azioni correttive e miglioramento continuo',
      ] },
      { h: 'Come la realizziamo', p: 'Costruiamo il sistema attorno al modo in cui l’azienda lavora realmente, definiamo indicatori utili alla gestione, formiamo le persone, conduciamo l’audit interno e ti affianchiamo durante la verifica di certificazione. La documentazione è essenziale, proporzionata e realmente utilizzabile dal team.' },
    ],
    aside: { title: 'Che cosa ottieni', items: [
      'Ammissibilità alle gare che richiedono la ISO 9001',
      'Meno errori, rilavorazioni e reclami',
      'Ruoli, processi e responsabilità chiari',
      'Un vero motore di miglioramento, non carta da archiviare',
    ] },
  },
  {
    slug: 'iso-14001', code: 'ISO 14001:2015', name: 'ISO 14001 — Gestione Ambientale',
    image: IMG.environment,
    promise: 'Dimostra a clienti ed enti che gestisci il tuo impatto.',
    intro: 'Le credenziali ambientali sono ormai un requisito di gara tanto quanto una scelta etica. La ISO 14001 prova che conosci il tuo impatto ambientale, rispetti gli obblighi di legge e riduci sprechi e costi mentre lo fai.',
    tags: ['Manifatturiero', 'Costruzioni', 'Logistica', 'Gare ESG'],
    sections: [
      { h: 'Che cos’è', p: 'Uno standard per un Sistema di Gestione Ambientale (SGA) fondato sul ciclo di vita: individuare i modi in cui le attività incidono sull’ambiente e tenerli sotto controllo in modo sistematico.' },
      { h: 'Che cosa richiede', list: [
        'Individuazione degli aspetti ambientali e dei relativi impatti',
        'Registro degli obblighi di conformità e dei requisiti legali',
        'Obiettivi ambientali e controlli operativi',
        'Preparazione e risposta alle emergenze',
        'Monitoraggio, misurazione, audit interni e riesame',
      ] },
      { h: 'Come la realizziamo', p: 'Mappiamo gli aspetti e gli impatti reali, costruiamo controlli aderenti alle tue attività e li integriamo con la ISO 9001 e la 45001 dove le hai: un solo sistema, non tre sistemi separati, ridondanti o difficili da mantenere.' },
    ],
    aside: { title: 'Che cosa ottieni', items: [
      'Requisiti ESG e ambientali soddisfatti nelle gare',
      'Meno costi di energia, sprechi e smaltimento',
      'Sicurezza sulla conformità ambientale',
      'Una storia di sostenibilità credibile e documentata',
    ] },
  },
  {
    slug: 'iso-45001', code: 'ISO 45001:2018', name: 'ISO 45001 — Salute e Sicurezza sul Lavoro',
    image: IMG.construction,
    promise: 'Proteggi le persone, e il diritto a partecipare alle gare.',
    intro: 'Per edilizia, manifattura e facility, una certificazione sulla salute e sicurezza è spesso obbligatoria per superare le qualifiche. La ISO 45001 dimostra che governi in modo sistematico i rischi per la salute e sicurezza sul lavoro, migliorando prevenzione, controllo operativo e capacità di dimostrare la conformità.',
    tags: ['Costruzioni', 'Manifatturiero', 'Facility', 'Qualifiche e SOA'],
    sections: [
      { h: 'Che cos’è', p: 'Uno standard di gestione per la salute e sicurezza sul lavoro (SSL), fondato su identificazione dei pericoli, partecipazione dei lavoratori e gerarchia dei controlli del rischio.' },
      { h: 'Che cosa richiede', list: [
        'Identificazione sistematica dei pericoli e valutazione dei rischi',
        'Obblighi di conformità legali e di altro tipo',
        'Consultazione e partecipazione dei lavoratori',
        'Controlli operativi e procedure di lavoro sicure',
        'Indagine sugli incidenti, gestione delle emergenze e riesame',
      ] },
      { h: 'Come la realizziamo', p: 'Costruiamo controlli pratici che i team seguono in cantiere e in officina, allineiamo il sistema ai requisiti di qualifica e ti prepariamo a dimostrarlo con sicurezza in sede di audit.' },
    ],
    aside: { title: 'Che cosa ottieni', items: [
      'Allineamento ai requisiti di qualifica e gara',
      'Migliore prevenzione di infortuni e fermi',
      'Minore esposizione assicurativa e di responsabilità',
      'Ammissibilità ai contratti che la richiedono',
    ] },
  },
  {
    slug: 'iso-27001', code: 'ISO/IEC 27001:2022', name: 'ISO 27001 — Sicurezza delle Informazioni',
    image: IMG.datacentre,
    promise: 'Dimostra che la tua organizzazione protegge le informazioni in modo strutturato, verificabile e proporzionato al rischio.',
    intro: 'I clienti enterprise e la pubblica amministrazione richiedono sempre più spesso evidenze strutturate di sicurezza delle informazioni. La ISO 27001 dimostra che gestisci la sicurezza delle informazioni in base al rischio, proteggendo i dati dei clienti e i tuoi, e facilitando il superamento delle verifiche richieste da clienti, pubbliche amministrazioni e grandi organizzazioni.',
    tags: ['IT e software', 'Servizi professionali', 'Sanità', 'PA ed enterprise'],
    sections: [
      { h: 'Che cos’è', p: 'Uno standard per un Sistema di Gestione della Sicurezza delle Informazioni (SGSI) che protegge riservatezza, integrità e disponibilità delle informazioni con un insieme di controlli basato sul rischio.' },
      { h: 'Che cosa richiede', list: [
        'Un perimetro del SGSI definito e una politica per la sicurezza',
        'Valutazione del rischio e piano di trattamento',
        'Dichiarazione di Applicabilità rispetto ai controlli dell’Annex A (set 2022)',
        'Controllo degli accessi, crittografia e sicurezza operativa',
        'Gestione degli incidenti e continuità operativa',
        'Audit interni, riesame della direzione e miglioramento',
      ] },
      { h: 'Come la realizziamo', p: 'Definiamo un perimetro del SGSI stretto e raggiungibile, conduciamo la valutazione del rischio, selezioniamo controlli proporzionati e ti portiamo pronto all’audit senza sommergere il team di policy fini a se stesse.' },
    ],
    aside: { title: 'Che cosa ottieni', items: [
      'Superi le verifiche di enterprise e PA',
      'Qualificati per le gare che richiedono la ISO 27001',
      'Resilienza a violazioni e fermi',
      'Una postura di sicurezza che i clienti possono verificare',
    ] },
  },
  {
    slug: 'en-1090', code: 'UNI EN 1090-1 / -2', name: 'EN 1090 — Strutture in Acciaio e Alluminio',
    image: IMG.steel,
    promise: 'Produci carpenteria strutturale che puoi immettere legalmente sul mercato.',
    intro: 'Se fabbrichi componenti strutturali in acciaio o alluminio destinati al mercato delle costruzioni, la EN 1090 è il riferimento essenziale per il Controllo di Produzione di Fabbrica e per la corretta Marcatura CE dei prodotti coperti dalla norma. È un ambito in cui abbiamo esperienza diretta: abbiamo gestito officine di carpenteria, quindi costruiamo un Controllo di Produzione di Fabbrica che supera l’audit e funziona in reparto.',
    tags: ['Carpenteria metallica', 'Forniture per costruzioni', 'Marcatura CE'],
    sections: [
      { h: 'Che cos’è', p: 'La EN 1090-1 governa la valutazione di conformità e la Marcatura CE dei componenti strutturali in acciaio e alluminio; la EN 1090-2 ne stabilisce i requisiti tecnici di esecuzione. Insieme permettono di dichiarare legalmente la prestazione dei prodotti strutturali immessi sul mercato.' },
      { h: 'Che cosa richiede', p: 'È una certificazione tecnica, e il dettaglio è dove la maggior parte delle carpenterie fatica. Comprende:', list: [
        'Un sistema documentato di Controllo di Produzione di Fabbrica (FPC)',
        'Un Coordinatore di Saldatura responsabile (RWC) qualificato',
        'Procedure di saldatura qualificate (WPS / WPQR) e saldatori qualificati',
        'Tracciabilità dei materiali dall’accettazione alla spedizione',
        'La corretta classe di esecuzione (EXC1–EXC4) per ogni prodotto',
        'Controlli non distruttivi (CND), controllo dimensionale e ispezioni',
        'Una Dichiarazione di Prestazione e la corretta Marcatura CE',
      ] },
      { h: 'Come la realizziamo', p: 'Costruiamo l’FPC, nominiamo e affianchiamo il coordinatore di saldatura, qualifichiamo procedure e saldatori, mettiamo in piedi una tracciabilità reale e ti accompagniamo alla valutazione dell’organismo notificato. Poiché conosciamo l’officina, il sistema è costruito sul modo in cui materiali, lavorazioni e controlli si muovono realmente in officina.' },
    ],
    aside: { title: 'Che cosa ottieni', items: [
      'Marcatura CE legale dei prodotti strutturali',
      'Gare di carpenteria che oggi non puoi affrontare',
      'Qualifica come fornitore del general contractor',
      'Un FPC che funziona in reparto, non solo sulla carta',
    ] },
  },
  {
    slug: 'iso-3834', code: 'UNI EN ISO 3834', name: 'ISO 3834 — Qualità nella Saldatura',
    image: IMG.welding,
    promise: 'Dimostra una saldatura su cui puoi metterci la firma.',
    intro: 'La saldatura è un “processo speciale”: non puoi verificarla del tutto ispezionando il pezzo finito, quindi la qualità va costruita dentro. La ISO 3834 prova che la tieni sotto controllo, ed è la base della EN 1090 e della EN 15085. Pochi consulenti conoscono davvero questo mondo: noi abbiamo esperienza diretta in questo ambito.',
    tags: ['Carpenteria', 'Attrezzature a pressione', 'Ferroviario (EN 15085)'],
    sections: [
      { h: 'Che cos’è', p: 'La ISO 3834 definisce i requisiti di qualità per la saldatura per fusione dei materiali metallici, su tre livelli (completi, normali, elementari) commisurati al rischio di ciò che produci.' },
      { h: 'Che cosa richiede', list: [
        'Personale di coordinamento della saldatura qualificato',
        'Specifiche di procedura di saldatura (WPS) e loro qualificazione (WPQR)',
        'Qualificazione di saldatori e operatori',
        'Controllo e stoccaggio di materiali base e materiali d’apporto',
        'Manutenzione e taratura delle attrezzature',
        'Tracciabilità, ispezione, prove e controlli non distruttivi (CND)',
        'Gestione delle non conformità e registrazioni di qualità',
      ] },
      { h: 'Come la realizziamo', p: 'Valutiamo il livello giusto per i tuoi prodotti, mettiamo in piedi coordinamento e qualificazione delle procedure, sistemiamo il controllo dei consumabili e la tracciabilità e prepariamo le registrazioni che lo provano: la base su cui poggia la tua EN 1090 o EN 15085.' },
    ],
    aside: { title: 'Che cosa ottieni', items: [
      'La base di qualità sotto EN 1090 / EN 15085',
      'Meno difetti di saldatura, scarti e rilavorazioni',
      'Fiducia di clienti e ispettori',
      'Qualità della saldatura costruita da chi conosce officina, procedimenti e controlli',
    ] },
  },
  {
    slug: 'marcatura-ce', code: 'Marcatura CE', name: 'Marcatura CE', ctaTitle: 'Pronti a costruire le evidenze dietro la tua marcatura?',
    image: IMG.manufacturing,
    promise: 'La marcatura la apponi tu. Noi costruiamo il sistema che la rende difendibile.',
    intro: 'Per la maggior parte dei prodotti regolamentati la Marcatura CE è una condizione legale di vendita nell’Unione Europea — e la responsabilità di dichiarare la conformità e apporre la marcatura è del fabbricante. Il nostro ruolo è rendere quella responsabilità difendibile. Individuiamo la legislazione applicabile, costruiamo il fascicolo tecnico e i sistemi che gli stanno sotto, e ti prepariamo all’eventuale organismo notificato: così la marcatura che apponi poggia su evidenze reali e verificabili, non su presunzioni.',
    tags: ['Fabbricanti', 'Importatori', 'Prodotti regolamentati'],
    sections: [
      { h: 'Che cos’è', p: 'La Marcatura CE è la dichiarazione con cui il fabbricante stesso attesta che un prodotto soddisfa i requisiti essenziali della legislazione che lo riguarda (macchine, prodotti da costruzione, apparecchiature elettriche, DPI e altro) e può essere legalmente immesso sul mercato UE.' },
      { h: 'Che cosa richiede', list: [
        'Individuazione di tutte le direttive e i regolamenti applicabili',
        'Soddisfacimento dei requisiti essenziali di salute, sicurezza e prestazione',
        'Uso delle norme armonizzate dove esistono',
        'Una valutazione del rischio e un fascicolo tecnico',
        'Il corretto percorso di valutazione di conformità (autodichiarazione o organismo notificato)',
        'Una Dichiarazione di Conformità e la corretta apposizione della marcatura',
      ] },
      { h: 'Come la realizziamo', p: 'La marcatura non la apponiamo noi: la apponi tu. Il nostro lavoro è tutto ciò che deve essere vero prima. Individuiamo la legislazione applicabile, costruiamo il fascicolo tecnico, mettiamo in piedi i sistemi che gli stanno sotto (per la carpenteria in acciaio, il Controllo di Produzione di Fabbrica secondo la EN 1090) e coordiniamo l’eventuale organismo notificato. Arrivi pronto a emettere la tua Dichiarazione di Conformità e ad apporre la marcatura, con tutto il peso delle evidenze alle spalle.' },
    ],
    aside: { title: 'Che cosa ottieni', items: [
      'Accesso legale al mercato dell’Unione Europea',
      'Un fascicolo tecnico e una DoC difendibili',
      'Meno problemi doganali e di vigilanza',
      'Minore esposizione alla responsabilità da prodotto',
    ] },
  },
  {
    slug: 'controllo-produzione-fabbrica', code: 'FPC / AVCP', name: 'Controllo di Produzione di Fabbrica', ctaTitle: 'Pronti a implementare un Controllo di Produzione di Fabbrica efficace e verificabile?',
    image: IMG.warehouse,
    promise: 'Governa la produzione perché ogni prodotto sia conforme, e dimostralo.',
    intro: 'Il Controllo di Produzione di Fabbrica è il sistema documentato che mantiene costante la produzione e rende la marcatura coerente, tracciabile e difendibile. È alla base della Marcatura CE dei prodotti da costruzione e l’ossatura della EN 1090. Costruiamo FPC che reggono in audit perché rispecchiano la produzione reale.',
    tags: ['Prodotti da costruzione', 'Carpenteria metallica', 'Fabbricanti'],
    sections: [
      { h: 'Che cos’è', p: 'Un sistema permanente e documentato di controllo della produzione, richiesto dal Regolamento Prodotti da Costruzione e da norme come la EN 1090, che assicura prodotti costantemente conformi alla prestazione dichiarata.' },
      { h: 'Che cosa richiede', list: [
        'Procedure documentate per ogni fase della produzione',
        'Controllo delle materie prime e valutazione dei fornitori',
        'Manutenzione e taratura delle attrezzature',
        'Ispezioni e prove in linea e finali',
        'Tracciabilità lungo tutto il flusso produttivo',
        'Gestione del prodotto non conforme e azioni correttive',
        'Registrazioni collegate alle relative prove di tipo iniziali',
      ] },
      { h: 'Come la realizziamo', p: 'Progettiamo l’FPC attorno al tuo processo reale, definiamo il regime di ispezione e tracciabilità, mettiamo in ordine le registrazioni e allineiamo il sistema al corretto sistema AVCP, poi ti prepariamo all’audit dell’organismo di certificazione.' },
    ],
    aside: { title: 'Che cosa ottieni', items: [
      'Marcatura CE dei prodotti da costruzione',
      'Conformità al corretto sistema AVCP',
      'Produzione costante, tracciabile e difendibile',
      'Un sistema pronto per l’audit e calzato sul reparto',
    ] },
  },
];

/* ---------- Pagine statiche ---------- */
export const ABOUT = {
  clause: 'Chi è Quasar',
  title: 'Esperienza industriale vera dietro ogni certificazione.',
  lead: 'Siamo una società di consulenza per la certificazione e la crescita aziendale con un background insolito: le aziende che aiutiamo le abbiamo gestite davvero.',
  image: IMG.leadership,
  body: [
    'Quasar nasce da oltre quarant’anni di esperienza internazionale nell’ingegneria, nella produzione industriale, nella gestione e nello sviluppo di imprese. Abbiamo fondato, diretto e fatto crescere aziende e joint venture in Europa, Asia e Sud America.',
    'Questo è un elemento distintivo, perché la maggior parte dei consulenti per la certificazione viene dagli audit. Noi veniamo dalle operazioni: linee di produzione, officine di carpenteria, cantieri e conto economico. I problemi che la certificazione dovrebbe risolvere li abbiamo vissuti.',
    'Per questo non ci limitiamo a consegnare documentazione formale: costruiamo sistemi di gestione realmente utilizzabili dall’organizzazione e ti portiamo alla certificazione come prova naturale di tutto questo.',
  ],
  values: [
    { h: 'Competenza', p: 'Esperienza pratica e profonda, maturata in reparto, non solo sulla norma.' },
    { h: 'Integrità', p: 'Risposte chiare su ciò che ti serve e su ciò che non ti serve.' },
    { h: 'Partnership', p: 'Lavoriamo accanto al tuo team, non sopra di esso.' },
    { h: 'Risultati', p: 'Una certificazione che migliora l’organizzazione, non un adempimento formale da esibire.' },
  ],
  founder: {
    clause: 'Chi guida Quasar',
    heading: 'La guida operativa di Quasar.',
    name: 'Gianni Silvestrini',
    role: 'Ingegnere meccanico · Consulente di direzione, operations e certificazione',
    bio: 'Ingegnere meccanico · Consulente di direzione, operations e certificazione',
    photo: 'assets/founder.webp',
  },
};

export const METHOD_PAGE = {
  clause: 'Come lavoriamo',
  title: 'Un metodo che toglie l’incertezza.',
  lead: 'La certificazione fallisce quando è «appiccicata» all’azienda. Il nostro metodo in sei fasi la costruisce dentro al tuo modo di lavorare, con responsabilità chiare e nessuna sorpresa su tempi e costi.',
  image: IMG.plans,
};

export const SERVICES_PAGE = {
  clause: 'Cosa facciamo',
  title: 'Dal singolo requisito certificativo a un sistema di gestione integrato, operativo e sostenibile.',
  lead: 'La certificazione è il risultato finale. Il vero valore è il lavoro organizzativo che rende l’azienda più solida, controllata e competitiva.',
  image: IMG.abstract,
  families: [
    { h: 'Certificazione', p: 'Norme ISO ed EN, Marcatura CE e FPC: analizziamo i requisiti, costruiamo il sistema, accompagniamo l’azienda fino alla verifica e la supportiamo anche dopo la certificazione.' },
    { h: 'Audit e conformità', p: 'Analisi dei gap, audit interni, audit ai fornitori e gestione delle non conformità che mantiene il sistema aderente alla realtà operativa.' },
    { h: 'Crescita aziendale', p: 'Ottimizzazione dei processi, produttività, riduzione degli sprechi e organizzazione: competenze operative applicate alla gestione reale dell’azienda.' },
    { h: 'Formazione', p: 'Formazione pratica e sensibilizzazione, perché le persone gestiscano il sistema con sicurezza quando ci facciamo da parte.' },
  ],
};

export const CONTACT_PAGE = {
  clause: 'Scrivici',
  title: 'Raccontaci l’obiettivo che vuoi raggiungere.',
  lead: 'Inviaci il contratto, il requisito di gara o la certificazione che intendi ottenere. Ti forniremo un primo quadro chiaro dei requisiti, dei gap da colmare, dei tempi e dei costi indicativi.',
  image: IMG.engineering,
};

// NOTA: aggiornare data, email privacy, periodo di conservazione e confermare il titolare per ciascun sito.
export const LEGAL = {
  updated: '28 giugno 2026',
  controller: {
    name: 'GS Consulting Management Engineering S.r.l.',
    brand: 'Quasar',
    address: 'Str. Gheorghe Lazăr 60, Șimleu Silvaniei, Provincia di Sălaj, Romania',
    vat: 'RO40625190',
    registry: 'J2019000428314',
    pec: 'gs.consulting.management.engineering@pec.it',
    email: 'info@gs-consultingmanagement.com',
  },
  privacy: {
    title: 'Informativa sulla Privacy',
    lead: 'Questa informativa spiega come raccogliamo e utilizziamo i dati personali tramite questo sito, in conformità al Regolamento generale sulla protezione dei dati (GDPR) e alla normativa italiana applicabile.',
    sections: [
      { h: 'Chi siamo (Titolare del trattamento)', p: ['Il titolare del trattamento per questo sito è GS Consulting Management Engineering S.r.l., che opera con il marchio “Quasar”. Sede legale e dati identificativi sono riportati in fondo a questa pagina. Per qualsiasi richiesta in materia di privacy puoi scriverci all’indirizzo indicato.'] },
      { h: 'Quali dati raccogliamo', p: ['Quando utilizzi il modulo di contatto raccogliamo i dati che scegli di fornire: nome, azienda, indirizzo email, numero di telefono (facoltativo) e il tuo messaggio.', 'Come nella maggior parte dei siti, il nostro fornitore di hosting e sicurezza tratta inoltre dati tecnici limitati (come l’indirizzo IP e il tipo di browser) per erogare e proteggere il sito.'] },
      { h: 'Perché li usiamo e base giuridica', ul: ['Per rispondere alla tua richiesta ed eseguire misure precontrattuali su tua richiesta (art. 6, par. 1, lett. b, GDPR), oltre al nostro legittimo interesse a rispondere ai potenziali clienti (art. 6, par. 1, lett. f);', 'Per mantenere il sito sicuro e funzionante (legittimo interesse);', 'Per comprendere, in forma aggregata e anonima, come viene utilizzato il sito (legittimo interesse). Le nostre statistiche sono prive di cookie e non ti identificano.'] },
      { h: 'Con chi li condividiamo', p: ['Non vendiamo i tuoi dati. Ci affidiamo a pochi fornitori selezionati (responsabili del trattamento) per gestire il sito e le richieste:'], ul: ['Cloudflare — hosting del sito, distribuzione dei contenuti e sicurezza;', 'Web3Forms — recapito delle richieste inviate dal modulo di contatto alla nostra casella;', 'Hostinger — fornitore di email e domini, che riceve la tua richiesta;', 'Cloudflare Web Analytics — statistiche d’uso prive di cookie e rispettose della privacy.'] },
      { h: 'Trasferimenti internazionali', p: ['Alcuni fornitori (come Cloudflare e Web3Forms) possono trattare i dati al di fuori dell’UE/SEE, anche negli Stati Uniti. In tal caso, il trasferimento è protetto da garanzie adeguate, come le Clausole Contrattuali Standard dell’UE.'] },
      { h: 'Per quanto tempo li conserviamo', p: ['Conserviamo i dati della richiesta solo per il tempo necessario a gestirla e per un periodo ragionevole successivo (fino a 24 mesi), dopodiché vengono cancellati.'] },
      { h: 'I tuoi diritti', p: ['Hai il diritto di accedere, rettificare, cancellare, limitare od opporti al trattamento dei tuoi dati personali, nonché alla portabilità dei dati. Per esercitarli, contattaci ai recapiti indicati di seguito.', 'Hai inoltre il diritto di proporre reclamo a un’autorità di controllo, ad esempio il Garante per la protezione dei dati personali (Italia), l’ANSPDCP (Romania) o l’ICO (Regno Unito).'] },
      { h: 'Cookie', p: ['Questo sito utilizza esclusivamente cookie strettamente necessari insieme a statistiche prive di cookie. Per i dettagli consulta la Cookie Policy.'] },
      { h: 'Contatti', p: ['Per qualsiasi domanda su questa informativa o sui tuoi dati scrivi a contatti@quasar-consulting.com.'] },
      { h: 'Modifiche', p: ['Possiamo aggiornare questa informativa di tanto in tanto. La versione aggiornata è sempre pubblicata in questa pagina.'] },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    lead: 'Questa pagina spiega i cookie e le tecnologie simili utilizzati su questo sito.',
    sections: [
      { h: 'Cosa sono i cookie', p: ['I cookie sono piccoli file di testo che un sito salva sul tuo dispositivo. Possono essere strettamente necessari (indispensabili per il funzionamento e la sicurezza del sito) oppure servire per statistiche, preferenze o pubblicità.'] },
      { h: 'I cookie che usiamo', p: ['Li manteniamo al minimo. Questo sito non utilizza cookie pubblicitari o di tracciamento tra siti.'], ul: ['Strettamente necessari — sicurezza: il nostro fornitore Cloudflare può impostare cookie di protezione come __cf_bm e cf_clearance per mantenere il sito sicuro e distinguere gli utenti dai bot. Sono esenti da consenso.', 'Statistiche: utilizziamo Cloudflare Web Analytics, prive di cookie, che non salvano cookie né identificatori personali sul tuo dispositivo.'] },
      { h: 'Perché non c’è un banner dei cookie', p: ['Poiché utilizziamo solo cookie strettamente necessari e statistiche prive di cookie, non è richiesto alcun consenso preventivo ai sensi del GDPR e delle norme ePrivacy: per questo non mostriamo un banner di consenso. Se in futuro aggiungeremo cookie statistici o di marketing, introdurremo prima un banner di consenso.'] },
      { h: 'Gestire i cookie', p: ['Puoi bloccare o eliminare i cookie in qualsiasi momento dalle impostazioni del browser. Il blocco dei cookie strettamente necessari può compromettere il funzionamento del sito.'] },
      { h: 'Modifiche', p: ['Possiamo aggiornare questa Cookie Policy; la versione attuale è sempre indicata qui.'] },
    ],
  },
};
