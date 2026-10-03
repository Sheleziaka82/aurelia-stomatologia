import type { DoctorId, Lang, ServiceId } from "./data";

const pl = {
  meta: {
    homeTitle: "Aurelia Stomatologia · Warszawa",
    homeDesc:
      "Prywatna klinika stomatologiczna na Mokotowskiej. Estetyka, implanty, ortodoncja i spokojne leczenie bez pośpiechu.",
    servicesTitle: "Usługi · Aurelia Stomatologia",
    teamTitle: "Zespół · Aurelia Stomatologia",
    pricesTitle: "Cennik · Aurelia Stomatologia",
    bookTitle: "Umów wizytę · Aurelia Stomatologia",
    contactTitle: "Kontakt · Aurelia Stomatologia",
    rodoTitle: "Polityka prywatności · Aurelia Stomatologia",
  },
  nav: {
    home: "Start",
    services: "Usługi",
    team: "Zespół",
    prices: "Cennik",
    contact: "Kontakt",
    book: "Umów wizytę",
    skip: "Przejdź do treści",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    lang: "Język",
  },
  hero: {
    eyebrow: "Warszawa · Mokotowska 48",
    title: "Cicha klinika. Pewny uśmiech.",
    lead: "Prywatna stomatologia w Śródmieściu — estetyka, implanty, ortodoncja i opieka, której nie trzeba się bać.",
    cta: "Umów pierwszą wizytę",
    call: "Zadzwoń do recepcji",
    hours: "Pon–Pt 8:00–20:00 · Sob 9:00–14:00",
  },
  stats: [
    { value: "16 lat", label: "praktyki klinicznej" },
    { value: "4 lekarzy", label: "w jednym zespole" },
    { value: "45 min", label: "na spokojną wizytę" },
    { value: "4.9", label: "z 180 opinii pacjentów" },
  ],
  about: {
    eyebrow: "Filozofia",
    title: "Leczymy tak, jak chcielibyśmy być leczeni.",
    body: "Aurelia powstała, żeby stomatologia mogła być spokojna. Gabinety bez pośpiechu, znieczulenie, które naprawdę działa, i plan leczenia bez niespodzianek na fotelu. Pracujemy w Śródmieściu, w przestrzeni zaprojektowanej jak atelier, nie jak poczekalnia.",
    points: [
      { title: "Plan przed leczeniem", text: "Zawsze najpierw diagnostyka, wycena i czas — potem fotel." },
      { title: "Cisza w gabinecie", text: "Jedna wizyta, jeden pacjent. Bez równoległych foteli i pośpiechu." },
      { title: "Materiały, które zostają", text: "Ceramika, implanty i licówki od sprawdzonych europejskich laboratoriów." },
    ],
  },
  services: {
    eyebrow: "Zakres",
    title: "Od przeglądu po pełną rekonstrukcję.",
    lead: "Nie robimy wszystkiego naraz. Robimy to, co trzeba — dokładnie.",
    all: "Pełny zakres usług",
    items: {
      consult: {
        name: "Konsultacja i diagnostyka",
        short: "Spokojna rozmowa, przegląd i plan leczenia.",
        body: "Pierwsza wizyta to 45 minut: wywiad, badanie, zdjęcie pantomograficzne w klinice i jasny plan z wyceną. Bez zobowiązania do od razu rozpoczynanego leczenia.",
      },
      hygiene: {
        name: "Higiena i profilaktyka",
        short: "Piaskowanie, skaling i instruktaż, który zostaje.",
        body: "Higienizacja poddziąsłowa i naddziąsłowa, fluoryzacja, dobór pasty i szczoteczki. Zalecamy wizytę co 4–6 miesięcy — to najtańsze leczenie, jakie istnieje.",
      },
      conservative: {
        name: "Stomatologia zachowawcza",
        short: "Leczenie próchnicy w powiększeniu, bez zbędnego borowania.",
        body: "Pracujemy w lupach, z koferdamem i materiałami kompozytowymi najwyższej klasy. Znieczulenie komputerowe na życzenie. Celem jest ząb, który wygląda i pracuje jak własny.",
      },
      aesthetic: {
        name: "Estetyka i licówki",
        short: "Licówki ceramiczne, bonding, wybielanie.",
        body: "Projekt uśmiechu na podstawie zdjęć i mock-upu. Licówki E.max, bonding w jednym dniu albo wybielanie gabinetowe — zawsze z ochroną szkliwa i naturalnym efektem, nie „hollywoodzką maską”.",
      },
      implants: {
        name: "Implantologia",
        short: "Uzupełnienie braku zęba, które zostaje na lata.",
        body: "Implanty Straumann i Nobel Biocare, tomografia w partnerze diagnostycznym, szablony chirurgiczne. Od pojedynczego zęba po mosty na implantach. Gwarancja na pracę kliniki.",
      },
      ortho: {
        name: "Ortodoncja",
        short: "Alignery i aparaty dla dorosłych i młodzieży.",
        body: "Niewidoczne nakładki i klasyczne aparaty. Prowadzimy leczenie tak, żeby życie zawodowe nie musiało na nie czekać. Współpracujemy z chirurgią przy przypadkach zgryzu.",
      },
      prosthetics: {
        name: "Protetyka",
        short: "Korony, mosty i protezy z laboratorium, nie z katalogu.",
        body: "Korony pełnoceramiczne, mosty i protezy overdenture. Kolor i kształt dobieramy przy świetle dziennym. Każda praca wraca do kliniki na przymiarkę, zanim zostanie oddana.",
      },
      surgery: {
        name: "Chirurgia stomatologiczna",
        short: "Ekstrakcje, ósemki, periodontologia.",
        body: "Usuwanie zębów mądrości, resekcje, plastyka dziąseł. Znieczulenie, które działa, i dokładne zalecenia na dom. W trudniejszych przypadkach — sedacja we współpracy z anestezjologiem.",
      },
      pediatric: {
        name: "Stomatologia dziecięca",
        short: "Pierwsza wizyta bez dramatu, spokojna i adaptacyjna.",
        body: "Przyjmujemy dzieci od 3. roku życia. Wizyta adaptacyjna, lakierowanie, leczenie w znieczuleniu. Rodzic jest w gabinecie. Celem jest, żeby kolejne wizyty były nudne — w dobrym sensie.",
      },
    } satisfies Record<ServiceId, { name: string; short: string; body: string }>,
  },
  team: {
    eyebrow: "Lekarze",
    title: "Cztery osoby. Żadnych anonimowych foteli.",
    lead: "Zawsze wiecie, kto Was leczy — i kto odbierze telefon, gdy coś będzie niejasne.",
    all: "Poznaj zespół",
    years: "lat praktyki",
    speaks: "Języki",
    people: {
      anna: {
        name: "lek. dent. Anna Kowalska",
        role: "Stomatologia estetyczna i zachowawcza",
        bio: "Kieruje kliniką. Specjalizuje się w licówkach, bondingu i odbudowach, które nie krzyczą. Ukończyła WUM, regularnie szkolenia w Szwajcarii i we Włoszech. Pacjenci zostają z nią na lata — i polecają rodzinę.",
      },
      marek: {
        name: "lek. dent. Marek Wiśniewski",
        role: "Implantologia i protetyka",
        bio: "Ponad dwa tysiące wszczepionych implantów. Cichy, dokładny, nie obiecuje terminów, których nie dotrzyma. Prowadzi pełne rekonstrukcje uzębienia i współpracuje z naszym laboratorium ceramicznym.",
      },
      zofia: {
        name: "lek. dent. Zofia Nowak",
        role: "Ortodoncja",
        bio: "Leczy młodzież i dorosłych — alignerami i aparatami. Tłumaczy plan tak, że widać, po co każda nakładka. Przyjmuje też po rosyjsku i angielsku, często pacjentów, którzy trafili do Warszawy z całego świata.",
      },
      piotr: {
        name: "lek. dent. Piotr Lewandowski",
        role: "Chirurgia i periodontologia",
        bio: "Ósemki, resekcje, dziąsła. Ma opinię chirurga, po którym nie boli bardziej, niż musi. Wcześniej oddział chirurgii szczękowo-twarzowej; w Aurelii zostawił szpitalny pośpiech za drzwiami.",
      },
    } satisfies Record<DoctorId, { name: string; role: string; bio: string }>,
  },
  reviews: {
    eyebrow: "Opinie",
    title: "Nie reklamujemy się głośno. Pacjenci robią to za nas.",
    items: [
      {
        name: "Magdalena R.",
        place: "Warszawa",
        text: "Licówki u pani Anny — naturalne, nie „instagramowe”. Cały proces rozpisany z góry, zero niespodzianek w cenie. Gabinet pachnie drewnem, nie gabinetem.",
      },
      {
        name: "Tomasz K.",
        place: "Mokotów",
        text: "Implant po utracie szóstki. Pan Marek wytłumaczył każdy etap, a wizyta chirurgiczna trwała krócej niż obawiałem się czekania. Wróciłem na resztę leczenia.",
      },
      {
        name: "Olena S.",
        place: "Warszawa",
        text: "Pani Zofia prowadzi mój aparat i mówi po rosyjsku, co bardzo uspokaja. Recepcja odpisuje tego samego dnia. Wreszcie klinika, do której nie idę ze ściśniętym żołądkiem.",
      },
    ],
  },
  prices: {
    eyebrow: "Cennik",
    title: "Jasne kwoty, zanim usiądziecie.",
    lead: "Poniżej ceny orientacyjne. Ostateczna wycena zawsze po konsultacji — i zawsze na piśmie.",
    note: "Ceny w złotych. Nie rozliczamy NFZ. Akceptujemy karty, Blik i wybrane pakiety prywatne (PZU, Allianz, Signal Iduna) po wcześniejszym potwierdzeniu.",
    groups: [
      {
        name: "Diagnostyka i profilaktyka",
        rows: [
          { item: "Konsultacja stomatologiczna", price: "250 zł" },
          { item: "Konsultacja specjalistyczna (implanty / ortodoncja)", price: "350 zł" },
          { item: "Zdjęcie pantomograficzne", price: "180 zł" },
          { item: "Higienizacja (skaling + piaskowanie)", price: "420 zł" },
          { item: "Fluoryzacja", price: "120 zł" },
        ],
      },
      {
        name: "Leczenie i estetyka",
        rows: [
          { item: "Wypełnienie kompozytowe", price: "od 450 zł" },
          { item: "Leczenie kanałowe (zależnie od kanałów)", price: "od 900 zł" },
          { item: "Wybielanie gabinetowe", price: "1 600 zł" },
          { item: "Bonding (za ząb)", price: "od 700 zł" },
          { item: "Licówka ceramiczna", price: "od 2 800 zł" },
        ],
      },
      {
        name: "Implanty, protetyka, ortodoncja",
        rows: [
          { item: "Implant (wszczep)", price: "od 3 800 zł" },
          { item: "Korona na implancie", price: "od 2 900 zł" },
          { item: "Korona pełnoceramiczna", price: "od 2 400 zł" },
          { item: "Nakładki ortodontyczne (łuk)", price: "od 8 500 zł" },
          { item: "Aparat stały (łuk)", price: "od 3 200 zł" },
        ],
      },
      {
        name: "Chirurgia i dzieci",
        rows: [
          { item: "Ekstrakcja zęba", price: "od 350 zł" },
          { item: "Ekstrakcja ósemki", price: "od 650 zł" },
          { item: "Wizyta adaptacyjna dziecka", price: "180 zł" },
          { item: "Lakierowanie (łuk)", price: "160 zł" },
        ],
      },
    ],
  },
  book: {
    eyebrow: "Recepcja",
    title: "Umówcie wizytę, kiedy Wam wygodnie.",
    lead: "Wniosek trafia do recepcji. Oddzwonimy w godzinach otwarcia, żeby potwierdzić godzinę.",
    name: "Imię i nazwisko",
    phone: "Telefon",
    email: "E-mail",
    service: "Powód wizyty",
    doctor: "Lekarz",
    doctorAny: "Bez preferencji",
    date: "Dzień",
    time: "Godzina",
    message: "Wiadomość (opcjonalnie)",
    messagePh: "Np. ból od dwóch dni, licówki, pierwsza wizyta dziecka…",
    submit: "Wyślij zgłoszenie",
    submitting: "Wysyłanie…",
    successTitle: "Zgłoszenie przyjęte.",
    successBody: "Recepcja potwierdzi wizytę telefonicznie w ciągu dwóch godzin w godzinach otwarcia. Jeśli sprawa jest pilna — zadzwońcie.",
    another: "Złóż kolejne zgłoszenie",
    closedSunday: "W niedziele klinika jest nieczynna.",
    taken: "zajęta",
    pickDate: "Wybierz dzień, aby zobaczyć godziny",
    errors: {
      name: "Podaj imię i nazwisko.",
      phone: "Podaj numer telefonu.",
      email: "Podaj poprawny e-mail.",
      service: "Wybierz powód wizyty.",
      date: "Wybierz dzień.",
      time: "Wybierz godzinę.",
    },
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Jesteśmy na Mokotowskiej, trzy minuty od Placu Zbawiciela.",
    lead: "Recepcja odbiera od 8:00. Na wiadomości e-mail odpowiadamy tego samego dnia roboczego.",
    address: "Adres",
    hoursTitle: "Godziny",
    hours: [
      { day: "Poniedziałek – piątek", time: "8:00 – 20:00" },
      { day: "Sobota", time: "9:00 – 14:00" },
      { day: "Niedziela", time: "nieczynne" },
    ],
    parking: "Parking strzeżony przy ul. Mokotowskiej 52. Dojazd tramwajami 4, 15, 18 — przystanek Plac Zbawiciela.",
    map: "Mapa",
    openMap: "Otwórz w OpenStreetMap",
  },
  faq: {
    eyebrow: "Pytania",
    title: "Zanim zadzwonicie.",
    items: [
      {
        q: "Czy leczenie boli?",
        a: "Nie powinno. Stosujemy znieczulenie komputerowe i czekamy, aż naprawdę zadziała. Jeśli jesteście niespokojni — powiedzcie na recepcji, dobierzemy tempo wizyty.",
      },
      {
        q: "Czy przyjmujecie na NFZ?",
        a: "Nie. Aurelia jest kliniką prywatną. Wystawiamy faktury i pracujemy z wybranymi ubezpieczycielami po wcześniejszym potwierdzeniu.",
      },
      {
        q: "Jak wygląda pierwsza wizyta?",
        a: "45 minut: rozmowa, badanie, zdjęcie, plan i wycena. Nic nie robimy „przy okazji”, jeśli nie było to uzgodnione.",
      },
      {
        q: "Czy jest parking?",
        a: "Tak — strzeżony przy Mokotowskiej 52, dwa minuty piechotą. W okolicy też miejsca płatne.",
      },
      {
        q: "Czy przyjmujecie po angielsku i rosyjsku?",
        a: "Tak. Cały zespół mówi po angielsku, lek. dent. Zofia Nowak również po rosyjsku. Recepcja przełączy język bez problemu.",
      },
    ],
  },
  cta: {
    title: "Pierwsza wizyta bez pośpiechu.",
    body: "Napiszcie lub zadzwońcie. Recepcja znajdzie godzinę, która nie koliduje z Waszym dniem.",
    book: "Umów wizytę",
    call: "Zadzwoń",
  },
  footer: {
    blurb: "Prywatna klinika stomatologiczna w Śródmieściu Warszawy.",
    legal: "Aurelia Stomatologia sp. z o.o. · NIP 525-000-00-00",
    rodo: "Polityka prywatności",
    rights: "Wszelkie prawa zastrzeżone.",
  },
  rodo: {
    title: "Polityka prywatności",
    updated: "Aktualizacja: wrzesień 2026",
    body: [
      "Administratorem danych jest Aurelia Stomatologia sp. z o.o., ul. Mokotowska 48, 00-543 Warszawa.",
      "Dane z formularza wizyty (imię, telefon, e-mail, treść zgłoszenia) przetwarzamy wyłącznie w celu umówienia i potwierdzenia wizyty, na podstawie art. 6 ust. 1 lit. b RODO.",
      "Dane medyczne prowadzimy w dokumentacji zgodnie z ustawą o prawach pacjenta. Okres przechowywania — zgodnie z przepisami o dokumentacji medycznej.",
      "Mają Państwo prawo dostępu, sprostowania, ograniczenia przetwarzania i wniesienia skargi do Prezesa UODO.",
      "Kontakt w sprawach danych: recepcja@aurelia.waw.pl.",
      "Ta strona demo przechowuje zgłoszenia wyłącznie na Waszym urządzeniu (localStorage) — nic nie jest wysyłane na serwer.",
    ],
  },
  toast: {
    booked: "Zgłoszenie zapisane. Recepcja oddzwoni.",
  },
};

type Copy = {
  meta: { [K in keyof typeof pl.meta]: string };
  nav: { [K in keyof typeof pl.nav]: string };
  hero: { [K in keyof typeof pl.hero]: string };
  stats: { value: string; label: string }[];
  about: {
    eyebrow: string;
    title: string;
    body: string;
    points: { title: string; text: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    all: string;
    items: { [K in keyof typeof pl.services.items]: { name: string; short: string; body: string } };
  };
  team: {
    eyebrow: string;
    title: string;
    lead: string;
    all: string;
    years: string;
    speaks: string;
    people: { [K in keyof typeof pl.team.people]: { name: string; role: string; bio: string } };
  };
  reviews: {
    eyebrow: string;
    title: string;
    items: { name: string; place: string; text: string }[];
  };
  prices: {
    eyebrow: string;
    title: string;
    lead: string;
    note: string;
    groups: { name: string; rows: { item: string; price: string }[] }[];
  };
  book: {
    eyebrow: string;
    title: string;
    lead: string;
    name: string;
    phone: string;
    email: string;
    service: string;
    doctor: string;
    doctorAny: string;
    date: string;
    time: string;
    message: string;
    messagePh: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    another: string;
    closedSunday: string;
    taken: string;
    pickDate: string;
    errors: { [K in keyof typeof pl.book.errors]: string };
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    address: string;
    hoursTitle: string;
    hours: { day: string; time: string }[];
    parking: string;
    map: string;
    openMap: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  cta: { [K in keyof typeof pl.cta]: string };
  footer: { [K in keyof typeof pl.footer]: string };
  rodo: { title: string; updated: string; body: string[] };
  toast: { booked: string };
};

const en: Copy = {
  meta: {
    homeTitle: "Aurelia Dental · Warsaw",
    homeDesc:
      "Private dental clinic on Mokotowska Street. Aesthetic dentistry, implants, orthodontics — unhurried care in central Warsaw.",
    servicesTitle: "Services · Aurelia Dental",
    teamTitle: "Team · Aurelia Dental",
    pricesTitle: "Fees · Aurelia Dental",
    bookTitle: "Book a visit · Aurelia Dental",
    contactTitle: "Contact · Aurelia Dental",
    rodoTitle: "Privacy · Aurelia Dental",
  },
  nav: {
    home: "Home",
    services: "Services",
    team: "Team",
    prices: "Fees",
    contact: "Contact",
    book: "Book a visit",
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    lang: "Language",
  },
  hero: {
    eyebrow: "Warsaw · Mokotowska 48",
    title: "A quiet clinic. A sure smile.",
    lead: "Private dentistry in Śródmieście — veneers, implants, orthodontics, and care you do not have to brace for.",
    cta: "Book a first visit",
    call: "Call reception",
    hours: "Mon–Fri 8:00–20:00 · Sat 9:00–14:00",
  },
  stats: [
    { value: "16 years", label: "of clinical practice" },
    { value: "4 doctors", label: "in one team" },
    { value: "45 min", label: "for an unhurried visit" },
    { value: "4.9", label: "from 180 patient reviews" },
  ],
  about: {
    eyebrow: "Approach",
    title: "We treat the way we would want to be treated.",
    body: "Aurelia exists so dentistry can be calm. No double-booked chairs, anaesthesia that actually works, and a written plan before anything happens in the chair. The rooms were designed as a studio, not a waiting hall.",
    points: [
      { title: "A plan first", text: "Diagnostics, timing and a quote — then treatment. Never the other way around." },
      { title: "One chair, one patient", text: "Visits are 45 minutes. We do not run parallel rooms." },
      { title: "Materials that last", text: "Ceramics and implants from established European laboratories." },
    ],
  },
  services: {
    eyebrow: "Care",
    title: "From a check-up to a full reconstruction.",
    lead: "We do not do everything at once. We do what is needed — precisely.",
    all: "All services",
    items: {
      consult: {
        name: "Consultation & diagnostics",
        short: "A proper conversation, exam and a written plan.",
        body: "The first visit is 45 minutes: history, examination, panoramic X-ray in-clinic, and a clear plan with prices. No obligation to start treatment that day.",
      },
      hygiene: {
        name: "Hygiene & prevention",
        short: "Scaling, air-flow and advice that sticks.",
        body: "Sub- and supragingival cleaning, fluoride, and a home-care plan. Every 4–6 months — still the cheapest dentistry there is.",
      },
      conservative: {
        name: "Restorative dentistry",
        short: "Decay treated under magnification, without excess drilling.",
        body: "Loupes, rubber dam, high-end composites. Computer-controlled anaesthesia on request. The aim is a tooth that looks and works like your own.",
      },
      aesthetic: {
        name: "Aesthetics & veneers",
        short: "Ceramic veneers, bonding, in-chair whitening.",
        body: "Smile design from photos and a mock-up. E.max veneers, same-day bonding, or in-office whitening — always with enamel in mind, never a plastic-white mask.",
      },
      implants: {
        name: "Implants",
        short: "A missing tooth replaced for the long term.",
        body: "Straumann and Nobel Biocare implants, CBCT with our diagnostic partner, surgical guides. From a single tooth to implant bridges. Clinic warranty on our work.",
      },
      ortho: {
        name: "Orthodontics",
        short: "Aligners and braces for adults and teens.",
        body: "Clear aligners and fixed appliances. Treatment planned around work and travel. Surgical cases handled with our in-house surgeon.",
      },
      prosthetics: {
        name: "Prosthodontics",
        short: "Crowns, bridges and dentures from a real lab.",
        body: "Full-ceramic crowns, bridges and overdentures. Shade and shape taken in daylight. Every piece returns for a try-in before it is fitted.",
      },
      surgery: {
        name: "Oral surgery",
        short: "Extractions, wisdom teeth, periodontics.",
        body: "Wisdom-tooth removal, resections, gum surgery. Anaesthesia that works, and written aftercare. For complex cases — sedation with an anaesthetist.",
      },
      pediatric: {
        name: "Children’s dentistry",
        short: "A first visit without the drama.",
        body: "We see children from age 3. Acclimatisation visits, fluoride varnish, treatment under anaesthesia. A parent stays in the room. The goal is that the next visit is boring — in the best way.",
      },
    },
  },
  team: {
    eyebrow: "Doctors",
    title: "Four people. No anonymous chairs.",
    lead: "You always know who is treating you — and who will pick up the phone afterwards.",
    all: "Meet the team",
    years: "years in practice",
    speaks: "Languages",
    people: {
      anna: {
        name: "Anna Kowalska, DDS",
        role: "Aesthetic & restorative dentistry",
        bio: "Founder. Veneers, bonding and restorations that do not shout. Trained at the Medical University of Warsaw, with ongoing courses in Switzerland and Italy. Patients stay — and send their families.",
      },
      marek: {
        name: "Marek Wiśniewski, DDS",
        role: "Implants & prosthodontics",
        bio: "More than two thousand implants placed. Quiet, precise, never promises a date he will miss. Leads full-mouth reconstructions with our ceramic laboratory.",
      },
      zofia: {
        name: "Zofia Nowak, DDS",
        role: "Orthodontics",
        bio: "Treats teens and adults with aligners and braces. Explains every tray so you can see why it exists. Consults in Polish, English and Russian — often for people who arrived in Warsaw from elsewhere.",
      },
      piotr: {
        name: "Piotr Lewandowski, DDS",
        role: "Oral surgery & periodontics",
        bio: "Wisdom teeth, resections, gums. Known as the surgeon after whom it does not hurt more than it must. Previously maxillofacial surgery; at Aurelia he left hospital haste at the door.",
      },
    },
  },
  reviews: {
    eyebrow: "Reviews",
    title: "We do not advertise loudly. Patients do it for us.",
    items: [
      {
        name: "Magdalena R.",
        place: "Warsaw",
        text: "Veneers with Anna — natural, not Instagram-white. The whole plan and price were written down first. The rooms smell of wood, not clinic.",
      },
      {
        name: "Tomasz K.",
        place: "Mokotów",
        text: "An implant after losing a molar. Marek explained every step, and the surgery was shorter than the dread of waiting. I came back for the rest of the work.",
      },
      {
        name: "Olena S.",
        place: "Warsaw",
        text: "Zofia is running my braces and speaks Russian, which helps a lot. Reception replies the same day. Finally a clinic I do not walk into with a tight stomach.",
      },
    ],
  },
  prices: {
    eyebrow: "Fees",
    title: "Clear numbers before you sit down.",
    lead: "Guide prices. The final quote always follows a consultation — and always in writing.",
    note: "Prices in PLN. We do not bill the public NFZ system. We take cards, Blik, and selected private plans (PZU, Allianz, Signal Iduna) if confirmed in advance.",
    groups: [
      {
        name: "Diagnostics & prevention",
        rows: [
          { item: "Dental consultation", price: "250 zł" },
          { item: "Specialist consult (implants / ortho)", price: "350 zł" },
          { item: "Panoramic X-ray", price: "180 zł" },
          { item: "Hygiene (scaling + air-flow)", price: "420 zł" },
          { item: "Fluoride varnish", price: "120 zł" },
        ],
      },
      {
        name: "Treatment & aesthetics",
        rows: [
          { item: "Composite filling", price: "from 450 zł" },
          { item: "Root canal (per canals)", price: "from 900 zł" },
          { item: "In-office whitening", price: "1 600 zł" },
          { item: "Bonding (per tooth)", price: "from 700 zł" },
          { item: "Ceramic veneer", price: "from 2 800 zł" },
        ],
      },
      {
        name: "Implants, prosthetics, orthodontics",
        rows: [
          { item: "Implant fixture", price: "from 3 800 zł" },
          { item: "Crown on implant", price: "from 2 900 zł" },
          { item: "Full-ceramic crown", price: "from 2 400 zł" },
          { item: "Clear aligners (arch)", price: "from 8 500 zł" },
          { item: "Fixed brace (arch)", price: "from 3 200 zł" },
        ],
      },
      {
        name: "Surgery & children",
        rows: [
          { item: "Extraction", price: "from 350 zł" },
          { item: "Wisdom tooth extraction", price: "from 650 zł" },
          { item: "Child acclimatisation visit", price: "180 zł" },
          { item: "Varnish (arch)", price: "160 zł" },
        ],
      },
    ],
  },
  book: {
    eyebrow: "Reception",
    title: "Book a time that actually fits.",
    lead: "The request goes to reception. We call back during opening hours to confirm.",
    name: "Full name",
    phone: "Phone",
    email: "Email",
    service: "Reason for visit",
    doctor: "Doctor",
    doctorAny: "No preference",
    date: "Day",
    time: "Time",
    message: "Message (optional)",
    messagePh: "e.g. pain for two days, veneers, a child’s first visit…",
    submit: "Send request",
    submitting: "Sending…",
    successTitle: "Request received.",
    successBody: "Reception will confirm by phone within two hours during opening hours. If it is urgent — please call.",
    another: "Make another request",
    closedSunday: "The clinic is closed on Sundays.",
    taken: "taken",
    pickDate: "Choose a day to see times",
    errors: {
      name: "Please enter your name.",
      phone: "Please enter a phone number.",
      email: "Please enter a valid email.",
      service: "Please choose a reason.",
      date: "Please choose a day.",
      time: "Please choose a time.",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "On Mokotowska, three minutes from Plac Zbawiciela.",
    lead: "Reception answers from 8:00. Email is returned the same working day.",
    address: "Address",
    hoursTitle: "Hours",
    hours: [
      { day: "Monday – Friday", time: "8:00 – 20:00" },
      { day: "Saturday", time: "9:00 – 14:00" },
      { day: "Sunday", time: "closed" },
    ],
    parking: "Guarded parking at Mokotowska 52. Trams 4, 15, 18 — Plac Zbawiciela stop.",
    map: "Map",
    openMap: "Open in OpenStreetMap",
  },
  faq: {
    eyebrow: "Questions",
    title: "Before you call.",
    items: [
      {
        q: "Will treatment hurt?",
        a: "It should not. We use computer-controlled anaesthesia and wait until it has truly taken. If you are anxious, tell reception — we will slow the visit down.",
      },
      {
        q: "Do you take NFZ (public insurance)?",
        a: "No. Aurelia is a private clinic. We issue invoices and work with selected insurers if confirmed in advance.",
      },
      {
        q: "What is the first visit like?",
        a: "45 minutes: conversation, exam, X-ray, a plan and a quote. We do not treat “while we are here” unless that was agreed.",
      },
      {
        q: "Is there parking?",
        a: "Yes — guarded parking at Mokotowska 52, a two-minute walk. Paid street spots nearby.",
      },
      {
        q: "Do you speak English and Russian?",
        a: "Yes. The whole team speaks English; Dr Zofia Nowak also speaks Russian. Reception will switch language without fuss.",
      },
    ],
  },
  cta: {
    title: "A first visit without the rush.",
    body: "Write or call. Reception will find an hour that does not collide with your day.",
    book: "Book a visit",
    call: "Call",
  },
  footer: {
    blurb: "A private dental clinic in central Warsaw.",
    legal: "Aurelia Stomatologia sp. z o.o. · NIP 525-000-00-00",
    rodo: "Privacy policy",
    rights: "All rights reserved.",
  },
  rodo: {
    title: "Privacy policy",
    updated: "Updated: September 2026",
    body: [
      "The data controller is Aurelia Stomatologia sp. z o.o., ul. Mokotowska 48, 00-543 Warsaw.",
      "Visit-form data (name, phone, email, message) is processed only to arrange and confirm the appointment, under GDPR Art. 6(1)(b).",
      "Medical records are kept under Polish patient-rights law, for the statutory retention period.",
      "You may access, correct or restrict processing, and lodge a complaint with the Polish DPA (UODO).",
      "Privacy contact: recepcja@aurelia.waw.pl.",
      "This demo stores requests only on your device (localStorage) — nothing is sent to a server.",
    ],
  },
  toast: {
    booked: "Request saved. Reception will call back.",
  },
};

const ru: Copy = {
  meta: {
    homeTitle: "Aurelia Стоматология · Варшава",
    homeDesc:
      "Частная стоматологическая клиника на улице Мокотовской. Эстетика, импланты, ортодонтия и спокойный приём в центре Варшавы.",
    servicesTitle: "Услуги · Aurelia",
    teamTitle: "Врачи · Aurelia",
    pricesTitle: "Цены · Aurelia",
    bookTitle: "Запись · Aurelia",
    contactTitle: "Контакты · Aurelia",
    rodoTitle: "Конфиденциальность · Aurelia",
  },
  nav: {
    home: "Главная",
    services: "Услуги",
    team: "Врачи",
    prices: "Цены",
    contact: "Контакты",
    book: "Записаться",
    skip: "К содержанию",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    lang: "Язык",
  },
  hero: {
    eyebrow: "Варшава · Mokotowska 48",
    title: "Тихая клиника. Уверенная улыбка.",
    lead: "Частная стоматология в центре Варшавы — виниры, импланты, ортодонтия и приём, которого не нужно бояться.",
    cta: "Записаться на первый визит",
    call: "Позвонить на ресепшен",
    hours: "Пн–Пт 8:00–20:00 · Сб 9:00–14:00",
  },
  stats: [
    { value: "16 лет", label: "клинической практики" },
    { value: "4 врача", label: "в одной команде" },
    { value: "45 мин", label: "на спокойный приём" },
    { value: "4.9", label: "из 180 отзывов" },
  ],
  about: {
    eyebrow: "Подход",
    title: "Лечим так, как хотели бы, чтобы лечили нас.",
    body: "Aurelia создана, чтобы стоматология могла быть спокойной. Без спешки, с анестезией, которая действительно работает, и с планом лечения до того, как вы сядете в кресло. Интерьер — как ателье, а не как коридор поликлиники.",
    points: [
      { title: "Сначала план", text: "Диагностика, сроки и смета — потом лечение. Никогда наоборот." },
      { title: "Одно кресло, один пациент", text: "Приём 45 минут. Мы не ведём два кабинета параллельно." },
      { title: "Материалы, которые остаются", text: "Керамика и импланты европейских лабораторий." },
    ],
  },
  services: {
    eyebrow: "Направления",
    title: "От осмотра до полной реконструкции.",
    lead: "Мы не делаем всё сразу. Делаем то, что нужно — точно.",
    all: "Все услуги",
    items: {
      consult: {
        name: "Консультация и диагностика",
        short: "Разговор, осмотр и письменный план.",
        body: "Первый визит — 45 минут: анамнез, осмотр, панорамный снимок в клинике и понятный план с ценами. Без обязательства начать лечение в тот же день.",
      },
      hygiene: {
        name: "Гигиена и профилактика",
        short: "Скейлинг, Air Flow и рекомендации, которые работают.",
        body: "Над- и поддесневая чистка, фторирование, план домашней гигиены. Раз в 4–6 месяцев — самое недорогое лечение, которое существует.",
      },
      conservative: {
        name: "Терапия",
        short: "Кариес под увеличением, без лишнего сверления.",
        body: "Работаем в лупах, с коффердамом и композитами высокого класса. Компьютерная анестезия по желанию. Цель — зуб, который выглядит и служит как свой.",
      },
      aesthetic: {
        name: "Эстетика и виниры",
        short: "Керамические виниры, бондинг, отбеливание.",
        body: "Дизайн улыбки по фото и mock-up. Виниры E.max, бондинг за один визит или кабинетное отбеливание — всегда с заботой об эмали, без «голливудской маски».",
      },
      implants: {
        name: "Имплантация",
        short: "Замещение отсутствующего зуба на годы.",
        body: "Импланты Straumann и Nobel Biocare, КЛКТ у партнёра, хирургические шаблоны. От одного зуба до мостов на имплантах. Гарантия клиники на работу.",
      },
      ortho: {
        name: "Ортодонтия",
        short: "Элайнеры и брекеты для взрослых и подростков.",
        body: "Прозрачные капы и классические аппараты. План строится вокруг работы и поездок. Сложный прикус ведём вместе с хирургом клиники.",
      },
      prosthetics: {
        name: "Ортопедия",
        short: "Коронки, мосты и протезы из лаборатории.",
        body: "Цельнокерамические коронки, мосты, покрывные протезы. Цвет и форму подбираем при дневном свете. Каждая работа приходит на примерку.",
      },
      surgery: {
        name: "Хирургия",
        short: "Удаления, зубы мудрости, пародонтология.",
        body: "Удаление восьмёрок, резекции, пластика десны. Анестезия, которая действует, и письменные рекомендации. В сложных случаях — седация с анестезиологом.",
      },
      pediatric: {
        name: "Детская стоматология",
        short: "Первый визит без драмы.",
        body: "Принимаем детей с 3 лет. Адаптационный визит, фторирование, лечение в анестезии. Родитель в кабинете. Цель — чтобы следующий приём был скучным, в хорошем смысле.",
      },
    },
  },
  team: {
    eyebrow: "Врачи",
    title: "Четыре человека. Никаких анонимных кресел.",
    lead: "Вы всегда знаете, кто вас лечит — и кто снимет трубку, если что-то будет непонятно.",
    all: "Познакомиться с командой",
    years: "лет практики",
    speaks: "Языки",
    people: {
      anna: {
        name: "лек. стом. Анна Ковальская",
        role: "Эстетика и терапия",
        bio: "Руководит клиникой. Виниры, бондинг и реставрации, которые не кричат. Окончила Варшавский медицинский университет, регулярно учится в Швейцарии и Италии. Пациенты остаются на годы и приводят семью.",
      },
      marek: {
        name: "лек. стом. Марек Вишневский",
        role: "Имплантация и ортопедия",
        bio: "Более двух тысяч установленных имплантов. Тихий, точный, не обещает сроков, которых не сдержит. Ведёт полные реконструкции вместе с нашей керамической лабораторией.",
      },
      zofia: {
        name: "лек. стом. Зофья Новак",
        role: "Ортодонтия",
        bio: "Лечит подростков и взрослых — элайнерами и брекетами. Объясняет план так, что видно, зачем каждая капа. Принимает на польском, английском и русском — часто тех, кто приехал в Варшаву из других стран.",
      },
      piotr: {
        name: "лек. стом. Пётр Левандовский",
        role: "Хирургия и пародонтология",
        bio: "Восьмёрки, резекции, десны. О нём говорят: после него не болит сильнее, чем нужно. Раньше — челюстно-лицевая хирургия; в Aurelia больничную спешку оставил за дверью.",
      },
    },
  },
  reviews: {
    eyebrow: "Отзывы",
    title: "Мы не кричим в рекламе. Это делают пациенты.",
    items: [
      {
        name: "Магдалена Р.",
        place: "Варшава",
        text: "Виниры у Анны — естественные, не «инстаграмные». Весь процесс и цена были расписаны заранее. В кабинетах пахнет деревом, а не поликлиникой.",
      },
      {
        name: "Томаш К.",
        place: "Мокотув",
        text: "Имплант после потери шестёрки. Марек объяснил каждый этап, а операция заняла меньше, чем ожидание. Вернулся на остальное лечение.",
      },
      {
        name: "Елена С.",
        place: "Варшава",
        text: "Зофья ведёт мой аппарат и говорит по-русски — это очень успокаивает. Ресепшен отвечает в тот же день. Наконец клиника, в которую я не иду со сжатым животом.",
      },
    ],
  },
  prices: {
    eyebrow: "Цены",
    title: "Понятные суммы до того, как вы сядете.",
    lead: "Ориентировочные цены. Окончательная смета — всегда после консультации и всегда письменно.",
    note: "Цены в злотых. Не работаем с NFZ. Принимаем карты, Blik и отдельные страховые пакеты (PZU, Allianz, Signal Iduna) после подтверждения.",
    groups: [
      {
        name: "Диагностика и профилактика",
        rows: [
          { item: "Консультация стоматолога", price: "250 zł" },
          { item: "Консультация специалиста (импланты / ортодонтия)", price: "350 zł" },
          { item: "Панорамный снимок", price: "180 zł" },
          { item: "Гигиена (скейлинг + Air Flow)", price: "420 zł" },
          { item: "Фторирование", price: "120 zł" },
        ],
      },
      {
        name: "Лечение и эстетика",
        rows: [
          { item: "Композитная пломба", price: "от 450 zł" },
          { item: "Лечение каналов", price: "от 900 zł" },
          { item: "Кабинетное отбеливание", price: "1 600 zł" },
          { item: "Бондинг (зуб)", price: "от 700 zł" },
          { item: "Керамический винир", price: "от 2 800 zł" },
        ],
      },
      {
        name: "Импланты, ортопедия, ортодонтия",
        rows: [
          { item: "Имплант (установка)", price: "от 3 800 zł" },
          { item: "Коронка на импланте", price: "от 2 900 zł" },
          { item: "Цельнокерамическая коронка", price: "от 2 400 zł" },
          { item: "Элайнеры (дуга)", price: "от 8 500 zł" },
          { item: "Брекеты (дуга)", price: "от 3 200 zł" },
        ],
      },
      {
        name: "Хирургия и дети",
        rows: [
          { item: "Удаление зуба", price: "от 350 zł" },
          { item: "Удаление зуба мудрости", price: "от 650 zł" },
          { item: "Адаптационный визит ребёнка", price: "180 zł" },
          { item: "Покрытие лаком (дуга)", price: "160 zł" },
        ],
      },
    ],
  },
  book: {
    eyebrow: "Ресепшен",
    title: "Запишитесь, когда вам удобно.",
    lead: "Заявка уходит на ресепшен. Мы перезвоним в часы работы, чтобы подтвердить время.",
    name: "Имя и фамилия",
    phone: "Телефон",
    email: "Эл. почта",
    service: "Повод визита",
    doctor: "Врач",
    doctorAny: "Без предпочтений",
    date: "День",
    time: "Время",
    message: "Сообщение (необязательно)",
    messagePh: "Например: боль два дня, виниры, первый визит ребёнка…",
    submit: "Отправить заявку",
    submitting: "Отправка…",
    successTitle: "Заявка принята.",
    successBody: "Ресепшен подтвердит визит по телефону в течение двух часов в рабочее время. Если срочно — позвоните.",
    another: "Оставить ещё одну заявку",
    closedSunday: "По воскресеньям клиника закрыта.",
    taken: "занято",
    pickDate: "Выберите день, чтобы увидеть часы",
    errors: {
      name: "Укажите имя и фамилию.",
      phone: "Укажите телефон.",
      email: "Укажите корректный email.",
      service: "Выберите повод визита.",
      date: "Выберите день.",
      time: "Выберите время.",
    },
  },
  contact: {
    eyebrow: "Контакты",
    title: "На Мокотовской, три минуты от Plac Zbawiciela.",
    lead: "Ресепшен отвечает с 8:00. На письма — в тот же рабочий день.",
    address: "Адрес",
    hoursTitle: "Часы работы",
    hours: [
      { day: "Понедельник – пятница", time: "8:00 – 20:00" },
      { day: "Суббота", time: "9:00 – 14:00" },
      { day: "Воскресенье", time: "выходной" },
    ],
    parking: "Охраняемая парковка у Mokotowska 52. Трамваи 4, 15, 18 — остановка Plac Zbawiciela.",
    map: "Карта",
    openMap: "Открыть в OpenStreetMap",
  },
  faq: {
    eyebrow: "Вопросы",
    title: "Прежде чем звонить.",
    items: [
      {
        q: "Будет ли больно?",
        a: "Не должно. Используем компьютерную анестезию и ждём, пока она действительно подействует. Если вы тревожитесь — скажите на ресепшен, подстроим темп.",
      },
      {
        q: "Работаете ли вы с NFZ?",
        a: "Нет. Aurelia — частная клиника. Выставляем счета и работаем с отдельными страховками после подтверждения.",
      },
      {
        q: "Как проходит первый визит?",
        a: "45 минут: разговор, осмотр, снимок, план и смета. Мы не лечим «заодно», если это не было согласовано.",
      },
      {
        q: "Есть ли парковка?",
        a: "Да — охраняемая у Mokotowska 52, две минуты пешком. Рядом также платные места.",
      },
      {
        q: "Говорите ли по-английски и по-русски?",
        a: "Да. Вся команда говорит по-английски, доктор Зофья Новак — также по-русски. Ресепшен переключит язык без проблем.",
      },
    ],
  },
  cta: {
    title: "Первый визит без спешки.",
    body: "Напишите или позвоните. Ресепшен найдёт час, который не пересечётся с вашим днём.",
    book: "Записаться",
    call: "Позвонить",
  },
  footer: {
    blurb: "Частная стоматологическая клиника в центре Варшавы.",
    legal: "Aurelia Stomatologia sp. z o.o. · NIP 525-000-00-00",
    rodo: "Политика конфиденциальности",
    rights: "Все права защищены.",
  },
  rodo: {
    title: "Политика конфиденциальности",
    updated: "Обновлено: сентябрь 2026",
    body: [
      "Администратор данных: Aurelia Stomatologia sp. z o.o., ul. Mokotowska 48, 00-543 Warszawa.",
      "Данные формы записи (имя, телефон, email, сообщение) обрабатываются только для записи и подтверждения визита, ст. 6(1)(b) GDPR.",
      "Медицинские данные ведём согласно польскому закону о правах пациента, в установленные сроки хранения.",
      "Вы можете запросить доступ, исправление, ограничение обработки и подать жалобу в польский UODO.",
      "По вопросам данных: recepcja@aurelia.waw.pl.",
      "Эта демо-страница хранит заявки только на вашем устройстве (localStorage) — на сервер ничего не отправляется.",
    ],
  },
  toast: {
    booked: "Заявка сохранена. Ресепшен перезвонит.",
  },
};

export const copy: Record<Lang, Copy> = { pl, en, ru };
