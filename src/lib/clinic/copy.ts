import type { DoctorId, Lang, ServiceId } from "./data";

const pl = {
  meta: {
    homeTitle: "MiDental · Stomatologia Stara Iwiczna",
    homeDesc:
      "Prywatny gabinet stomatologiczny przy ul. Tukanów 12 w Starej Iwicznej. Przegląd, leczenie, higiena, endodoncja, chirurgia i protetyka. Pierwszy przegląd w roku bezpłatny.",
    servicesTitle: "Usługi · MiDental",
    teamTitle: "Gabinet · MiDental",
    pricesTitle: "Cennik · MiDental",
    bookTitle: "Umów wizytę · MiDental",
    contactTitle: "Kontakt · MiDental",
    rodoTitle: "Polityka prywatności · MiDental",
  },
  nav: {
    home: "Start",
    services: "Usługi",
    team: "Gabinet",
    prices: "Cennik",
    contact: "Kontakt",
    book: "Umów wizytę",
    skip: "Przejdź do treści",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    lang: "Język",
  },
  hero: {
    eyebrow: "Stara Iwiczna · Tukanów 12",
    title: "Jesteśmy już otwarci.",
    lead: "Prywatna stomatologia blisko domu — od bezpłatnego przeglądu po implant. Znieczulenie w cenie zabiegów chirurgicznych.",
    cta: "Umów wizytę",
    call: "Zadzwoń",
    hours: "Pon–Pt 8:00–20:00 · Sob 9:00–15:00",
  },
  stats: [
    { value: "0 zł", label: "pierwszy przegląd w roku" },
    { value: "2×", label: "adaptacja dziecka bezpłatnie" },
    { value: "8–20", label: "poniedziałek–piątek" },
    { value: "WhatsApp", label: "szybki kontakt z gabinetem" },
  ],
  about: {
    eyebrow: "Gabinet",
    title: "Nowy gabinet. Spokojne leczenie.",
    body: "MiDental to prywatna stomatologia w Starej Iwicznej, przy Tukanów 12. Nowoczesny fotel, jasna poczekalnia i lekarz, który prowadzi leczenie osobiście. Wolimy zapobiegać niż leczyć — mniej bólu, mniejsze koszty.",
    points: [
      { title: "Pierwszy przegląd w roku za darmo", text: "Regularna kontrola jest tańsza niż leczenie. Dlatego pierwszy przegląd w danym roku nic nie kosztuje." },
      { title: "Jasny cennik", text: "Kwoty z gabinetu — bez „od” i bez niespodzianek na fotelu. Implant 3000 zł, pakiet higieny 330 zł." },
      { title: "Dzieci bez stresu", text: "Dwie pierwsze wizyty adaptacyjne są bezpłatne. Rodzic jest w gabinecie." },
    ],
  },
  services: {
    eyebrow: "Zakres",
    title: "Od przeglądu po implant.",
    lead: "Leczymy to, co trzeba — zachowawczo, kanałowo, chirurgicznie i protetycznie. Bez pośpiechu.",
    all: "Pełny zakres usług",
    items: {
      consult: {
        name: "Przegląd i diagnostyka",
        short: "Pierwszy przegląd w roku bezpłatny. RTG na miejscu.",
        body: "Przegląd to 100 zł, a pierwszy w danym roku — za darmo. Zdjęcie RTG 50 zł. Po badaniu dostajecie jasny plan i wycenę, zanim cokolwiek zrobimy na fotelu.",
      },
      hygiene: {
        name: "Higienizacja",
        short: "Skaling, piaskowanie, fluor. Pakiet 330 zł.",
        body: "Skaling 150 zł, piaskowanie 150 zł, fluor 80 zł. Pakiet wszystkich trzech — 330 zł. Leczenie nadwrażliwości 50 zł za wizytę. Wybielanie nakładkowe (góra i dół + 2 strzykawki żelu) — 1000 zł.",
      },
      conservative: {
        name: "Stomatologia zachowawcza",
        short: "Wypełnienia, odbudowy, znieczulenie.",
        body: "Wypełnienie 250–350 zł w zależności od wielkości. Odbudowa zęba 350–450 zł, znieczulenie 50 zł, opatrunek 80 zł, płukanie kieszonki 80 zł. Cement szkło-jonomerowy 180 zł, odbudowa na włóknie szklanym 500 zł.",
      },
      endo: {
        name: "Leczenie kanałowe",
        short: "Od jednego do czterech kanałów, pomoc doraźna.",
        body: "Pierwsza wizyta / pomoc doraźna 250–350 zł (znieczulenie + RTG + opatrunek do kanału). 1 kanał 700 zł, 2 kanały 800 zł, 3 kanały 1000 zł, 4 kanały 1200 zł. Powtórne leczenie — dopłata 200 zł. Usunięcie wkładu / ankier 400–500 zł.",
      },
      aesthetic: {
        name: "Estetyka uśmiechu",
        short: "Wybielanie nakładkowe i licówki kompozytowe.",
        body: "Wybielanie metodą nakładkową 1000 zł. Licówka kompozytowa wykonana w gabinecie 400–500 zł. Nakład kompozytowy przez technika 1000 zł, ceramiczny 1500 zł. Naturalny efekt, bez przesady.",
      },
      implants: {
        name: "Implanty",
        short: "Implant 3000 zł. Korona na implancie 2500–3500 zł.",
        body: "Wszczepienie implantu 3000 zł. Korona na implancie 2500–3500 zł. Augmentacja kości — koszt po obejrzeniu tomografii CBCT. Plan i wycena zawsze przed zabiegiem.",
      },
      prosthetics: {
        name: "Protetyka",
        short: "Korony, licówki, protezy — z gabinetu i laboratorium.",
        body: "Korona tymczasowa w gabinecie 250 zł, u technika 300 zł. Korona ceramiczna na metalu 1200 zł, cyrkonowa (bez metalu) 2200 zł. Proteza całkowita i szkieletowa 2000 zł, szynoproteza 2200 zł. Naprawy i podścielenia na miejscu.",
      },
      surgery: {
        name: "Chirurgia",
        short: "Ekstrakcje i implanty. Znieczulenie w cenie zabiegów.",
        body: "Konsultacja chirurgiczna 200 zł. Ekstrakcja 300–500 zł, ząb zatrzymany (dłutowanie) 500–800 zł. Usunięcie odłamu, suchy zębodół, nacięcie i drenaż ropnia. Znieczulenie jest w cenie zabiegów chirurgicznych.",
      },
      pediatric: {
        name: "Stomatologia dziecięca",
        short: "Dwie pierwsze wizyty adaptacyjne bezpłatne.",
        body: "Wizyta adaptacyjna: dwa razy za darmo, potem 50 zł (do 15 minut). Czyszczenie zębów mlecznych 150 zł, fluoryzacja i lakowanie po 80 zł, wypełnienie 200 zł. Ekstrakcja z żelami 150 zł, ze znieczuleniem nasiękowym 200 zł. Leczenie kanałowe zębów mlecznych 150 zł za wizytę.",
      },
    } satisfies Record<ServiceId, { name: string; short: string; body: string }>,
  },
  team: {
    eyebrow: "Lekarz",
    title: "Gabinet prowadzony osobiście.",
    lead: "Leczenie, plan i rozmowa z pacjentem — w jednym miejscu, bez anonimowego fotela.",
    all: "Poznaj gabinet",
    years: "lat praktyki",
    speaks: "Języki",
    people: {
      lekarz: {
        name: "Lekarz prowadzący",
        role: "Stomatologia ogólna, chirurgia i protetyka",
        bio: "Prowadzi gabinet MiDental w Starej Iwicznej. Przyjmuje dorosłych i dzieci — od przeglądu i higieny, przez leczenie kanałowe, po ekstrakcje, implanty i protezy.",
      },
    } satisfies Record<DoctorId, { name: string; role: string; bio: string }>,
  },
  reviews: {
    eyebrow: "Z okolicy",
    title: "Gabinet, do którego wraca się bez ściśniętego żołądka.",
    items: [
      {
        name: "Anna",
        place: "Stara Iwiczna",
        text: "Nowy gabinet tuż przy osiedlu. Spokojnie, bez pośpiechu, dziecko wyszło z adaptacji uśmiechnięte. Wreszcie stomatolog pod nosem, a nie w Warszawie.",
      },
      {
        name: "Piotr",
        place: "Lesznowola",
        text: "Ekstrakcja z znieczuleniem w cenie. Wszystko wytłumaczone z góry, kwota z cennika, zero dopłat na fotelu.",
      },
      {
        name: "Kasia",
        place: "Nowa Iwiczna",
        text: "Pierwszy przegląd w roku bezpłatny — przyszłam „sprawdzić” i dostałam konkretny plan. Cennik na stronie zgadza się z tym, co usłyszałam w gabinecie.",
      },
    ],
  },
  prices: {
    eyebrow: "Cennik",
    title: "Ceny z gabinetu, nie „od”.",
    lead: "Poniżej aktualny cennik MiDental. Ostateczna wycena po obejrzeniu — zawsze zanim zaczynamy leczenie.",
    note: "Ceny w złotych. Gabinet prywatny, nie rozliczamy NFZ. Akceptujemy gotówkę i kartę. Znieczulenie w cenie zabiegów chirurgicznych. Augmentacja kości — po tomografii CBCT.",
    groups: [
      {
        name: "Przegląd",
        rows: [
          { item: "Pierwszy przegląd w roku", price: "bezpłatny" },
          { item: "Przegląd", price: "100 zł" },
        ],
      },
      {
        name: "Stomatologia zachowawcza",
        rows: [
          { item: "Wypełnienie (zależnie od wielkości)", price: "250–350 zł" },
          { item: "Odbudowa zęba", price: "350–450 zł" },
          { item: "Znieczulenie", price: "50 zł" },
          { item: "Opatrunek", price: "80 zł" },
          { item: "RTG", price: "50 zł" },
          { item: "Płukanie kieszonki zębodołowej", price: "80 zł" },
          { item: "Wypełnienie z cementu szkło-jonomerowego", price: "180 zł" },
          { item: "Odbudowa na włóknie szklanym", price: "500 zł" },
        ],
      },
      {
        name: "Higienizacja",
        rows: [
          { item: "Scaling (usunięcie kamienia)", price: "150 zł" },
          { item: "Piaskowanie (usunięcie osadu)", price: "150 zł" },
          { item: "Fluor", price: "80 zł" },
          { item: "Leczenie nadwrażliwości zębów", price: "50 zł / wizyta" },
          { item: "Pakiet: scaling + piaskowanie + fluor", price: "330 zł" },
          { item: "Wybielanie nakładkowe (góra i dół + 2 strzykawki żelu)", price: "1000 zł" },
        ],
      },
      {
        name: "Leczenie endodontyczne",
        rows: [
          { item: "Pierwsza wizyta / pomoc doraźna (znieczulenie + RTG + opatrunek)", price: "250–350 zł" },
          { item: "Leczenie 1 kanału", price: "700 zł" },
          { item: "Leczenie 2 kanałów", price: "800 zł" },
          { item: "Leczenie 3 kanałów", price: "1000 zł" },
          { item: "Leczenie 4 kanałów", price: "1200 zł" },
          { item: "Powtórne leczenie endodontyczne", price: "dopłata 200 zł" },
          { item: "Usunięcie wkładu koronowo-korzeniowego / ankier", price: "400–500 zł" },
        ],
      },
      {
        name: "Stomatologia dziecięca",
        rows: [
          { item: "Wizyta adaptacyjna (max 15 min)", price: "2× bezpłatna, dalej 50 zł" },
          { item: "Czyszczenie zębów mlecznych", price: "150 zł" },
          { item: "Fluoryzacja", price: "80 zł" },
          { item: "Wypełnienie w zębie mlecznym", price: "200 zł" },
          { item: "Ekstrakcja zęba mlecznego + żel", price: "150 zł" },
          { item: "Ekstrakcja zęba mlecznego + znieczulenie nasiękowe", price: "200 zł" },
          { item: "Lakowanie bruzd", price: "80 zł" },
          { item: "Leczenie endodontyczne zębów mlecznych", price: "150 zł / wizyta" },
        ],
      },
      {
        name: "Chirurgia (znieczulenie w cenie zabiegów)",
        rows: [
          { item: "Konsultacja chirurgiczna", price: "200 zł" },
          { item: "Ekstrakcja zęba", price: "300–500 zł" },
          { item: "Ekstrakcja zęba zatrzymanego (dłutowanie)", price: "500–800 zł" },
          { item: "Usunięcie odłamu zęba", price: "150 zł" },
          { item: "Leczenie suchego zębodołu", price: "150 zł" },
          { item: "Nacięcie i drenaż ropnia", price: "300 zł" },
          { item: "Płukanie ropnia", price: "100 zł" },
          { item: "Implant", price: "3000 zł" },
          { item: "Augmentacja kości", price: "po CBCT" },
          { item: "Korona na implancie", price: "2500–3500 zł" },
        ],
      },
      {
        name: "Protetyka",
        rows: [
          { item: "Korona tymczasowa wykonana w gabinecie", price: "250 zł" },
          { item: "Korona tymczasowa wykonana przez technika", price: "300 zł" },
          { item: "Korona ceramiczna na metalu", price: "1200 zł" },
          { item: "Korona cyrkonowa (bez metalu)", price: "2200 zł" },
          { item: "Licówka kompozytowa (w gabinecie)", price: "400–500 zł" },
          { item: "Wkład koronowo-korzeniowy", price: "600 zł" },
          { item: "Wkład z kulą", price: "900 zł" },
          { item: "Nakład kompozytowy przez technika", price: "1000 zł" },
          { item: "Nakład ceramiczny przez technika", price: "1500 zł" },
          { item: "Zacementowanie korony / wkładu spoza gabinetu", price: "150 zł" },
          { item: "Mikroproteza (do 3 punktów)", price: "600 zł" },
          { item: "Proteza częściowa (powyżej 3 punktów)", price: "150 zł / punkt" },
          { item: "Proteza całkowita", price: "2000 zł" },
          { item: "Proteza szkieletowa", price: "2000 zł" },
          { item: "Szynoproteza / proteza na zatrzaski", price: "2200 zł" },
          { item: "Naprawa protezy / dostawienie zęba", price: "250 zł" },
          { item: "Kolejny punkt w naprawie", price: "100 zł" },
          { item: "Podścielenie protezy", price: "300 zł" },
          { item: "Modele diagnostyczne", price: "300 zł" },
        ],
      },
    ],
  },
  book: {
    eyebrow: "Recepcja",
    title: "Umówcie wizytę, kiedy Wam wygodnie.",
    lead: "Zgłoszenie trafia do gabinetu. Oddzwonimy lub odpiszemy na WhatsApp w godzinach otwarcia.",
    name: "Imię i nazwisko",
    phone: "Telefon",
    email: "E-mail",
    service: "Powód wizyty",
    doctor: "Lekarz",
    doctorAny: "Bez preferencji",
    date: "Dzień",
    time: "Godzina",
    message: "Wiadomość (opcjonalnie)",
    messagePh: "Np. ból od dwóch dni, przegląd, wizyta dziecka…",
    submit: "Wyślij zgłoszenie",
    submitting: "Wysyłanie…",
    successTitle: "Zgłoszenie przyjęte.",
    successBody: "Potwierdzimy wizytę telefonicznie lub na WhatsApp w godzinach otwarcia. Jeśli sprawa jest pilna — zadzwońcie: 578 302 502.",
    another: "Złóż kolejne zgłoszenie",
    closedSunday: "W niedziele gabinet jest nieczynny.",
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
    title: "Tukanów 12, Stara Iwiczna.",
    lead: "Gabinet na parterze nowego osiedla. Zadzwońcie, napiszcie e-mail albo WhatsApp.",
    address: "Adres",
    hoursTitle: "Godziny",
    hours: [
      { day: "Poniedziałek – piątek", time: "8:00 – 20:00" },
      { day: "Sobota", time: "9:00 – 15:00" },
      { day: "Niedziela", time: "nieczynne" },
    ],
    parking: "Lok. U3, parter. Parking przy budynku. Dojazd z Piaseczna, Lesznowoli i Nowej Iwicznej.",
    map: "Mapa",
    openMap: "Otwórz w Google Maps",
  },
  faq: {
    eyebrow: "Pytania",
    title: "Zanim zadzwonicie.",
    items: [
      {
        q: "Czy pierwszy przegląd naprawdę nic nie kosztuje?",
        a: "Tak — pierwszy przegląd w danym roku kalendarzowym jest bezpłatny. Kolejny przegląd to 100 zł.",
      },
      {
        q: "Czy przyjmujecie na NFZ?",
        a: "Nie. MiDental jest gabinetem prywatnym. Płatność gotówką lub kartą.",
      },
      {
        q: "Czy leczenie boli?",
        a: "Nie powinno. Przy zabiegach chirurgicznych znieczulenie jest w cenie. Przy zachowawczych — 50 zł. Zawsze czekamy, aż zadziała.",
      },
      {
        q: "Jak umówić dziecko?",
        a: "Dwie pierwsze wizyty adaptacyjne (do 15 minut) są bezpłatne. Potem 50 zł. Rodzic zostaje w gabinecie.",
      },
      {
        q: "Jak dojechać?",
        a: "ul. Tukanów 12 lok. U3, 05-500 Stara Iwiczna. Gabinet na parterze, z szyldem MiDental Stomatologia. Parking przy budynku.",
      },
    ],
  },
  cta: {
    title: "Umówcie się jeszcze dziś.",
    body: "Zadzwońcie, napiszcie na WhatsApp albo zostawcie zgłoszenie — oddzwonimy w godzinach otwarcia.",
    book: "Umów wizytę",
    call: "Zadzwoń",
  },
  footer: {
    blurb: "Prywatny gabinet stomatologiczny w Starej Iwicznej.",
    legal: "MiDental · Tukanów 12 lok. U3, 05-500 Stara Iwiczna",
    rodo: "Polityka prywatności",
    rights: "Wszelkie prawa zastrzeżone.",
  },
  rodo: {
    title: "Polityka prywatności",
    updated: "Aktualizacja: październik 2026",
    body: [
      "Administratorem danych jest MiDental, ul. Tukanów 12 lok. U3, 05-500 Stara Iwiczna.",
      "Dane z formularza wizyty (imię, telefon, e-mail, treść zgłoszenia) przetwarzamy wyłącznie w celu umówienia i potwierdzenia wizyty, na podstawie art. 6 ust. 1 lit. b RODO.",
      "Dane medyczne prowadzimy w dokumentacji zgodnie z ustawą o prawach pacjenta. Okres przechowywania — zgodnie z przepisami o dokumentacji medycznej.",
      "Mają Państwo prawo dostępu, sprostowania, ograniczenia przetwarzania i wniesienia skargi do Prezesa UODO.",
      "Kontakt w sprawach danych: midentalstomatologia@gmail.com.",
      "Ta strona przechowuje zgłoszenia z formularza wyłącznie na Waszym urządzeniu (localStorage) — nic nie jest wysyłane na serwer.",
    ],
  },
  toast: {
    booked: "Zgłoszenie zapisane. Gabinet się odezwie.",
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
    homeTitle: "MiDental · Dentist in Stara Iwiczna",
    homeDesc:
      "Private dental practice at Tukanów 12, Stara Iwiczna. Check-ups, fillings, hygiene, root canals, surgery and prosthetics. First check-up of the year is free.",
    servicesTitle: "Services · MiDental",
    teamTitle: "Practice · MiDental",
    pricesTitle: "Fees · MiDental",
    bookTitle: "Book a visit · MiDental",
    contactTitle: "Contact · MiDental",
    rodoTitle: "Privacy · MiDental",
  },
  nav: {
    home: "Home",
    services: "Services",
    team: "Practice",
    prices: "Fees",
    contact: "Contact",
    book: "Book a visit",
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    lang: "Language",
  },
  hero: {
    eyebrow: "Stara Iwiczna · Tukanów 12",
    title: "We are open.",
    lead: "Private dentistry close to home — from a free yearly check-up to an implant. Anaesthesia included with surgical procedures.",
    cta: "Book a visit",
    call: "Call",
    hours: "Mon–Fri 8:00–20:00 · Sat 9:00–15:00",
  },
  stats: [
    { value: "0 zł", label: "first check-up of the year" },
    { value: "2×", label: "free child acclimatisation" },
    { value: "8–20", label: "Monday to Friday" },
    { value: "WhatsApp", label: "a quick line to the practice" },
  ],
  about: {
    eyebrow: "The practice",
    title: "A new surgery. Unhurried care.",
    body: "MiDental is a private dental practice in Stara Iwiczna, at Tukanów 12. A modern chair, a bright waiting room, and a dentist who treats you in person. We would rather prevent than repair — less pain, lower cost.",
    points: [
      { title: "First check-up of the year is free", text: "A regular exam is cheaper than treatment. That is why the first check-up each year costs nothing." },
      { title: "A clear price list", text: "The numbers from the practice — not “from”. Implant 3000 zł, hygiene package 330 zł." },
      { title: "Children without the drama", text: "The first two acclimatisation visits are free. A parent stays in the room." },
    ],
  },
  services: {
    eyebrow: "Care",
    title: "From a check-up to an implant.",
    lead: "Restorative, root-canal, surgical and prosthetic work — done properly, without rushing.",
    all: "All services",
    items: {
      consult: {
        name: "Check-up & diagnostics",
        short: "First check-up of the year is free. X-ray on site.",
        body: "A check-up is 100 zł; the first one in a calendar year is free. X-ray 50 zł. You leave with a plan and a quote before anything happens in the chair.",
      },
      hygiene: {
        name: "Hygiene",
        short: "Scaling, air-flow, fluoride. Package 330 zł.",
        body: "Scaling 150 zł, air-flow 150 zł, fluoride 80 zł. All three as a package — 330 zł. Sensitivity treatment 50 zł per visit. Tray whitening (upper and lower + 2 gel syringes) — 1000 zł.",
      },
      conservative: {
        name: "Restorative dentistry",
        short: "Fillings, rebuilds, anaesthesia.",
        body: "Filling 250–350 zł depending on size. Rebuild 350–450 zł, anaesthesia 50 zł, dressing 80 zł, socket irrigation 80 zł. Glass-ionomer filling 180 zł, fibre-post rebuild 500 zł.",
      },
      endo: {
        name: "Root-canal treatment",
        short: "One to four canals, and same-day emergency care.",
        body: "First visit / emergency 250–350 zł (anaesthesia + X-ray + canal dressing). 1 canal 700 zł, 2 canals 800 zł, 3 canals 1000 zł, 4 canals 1200 zł. Retreatment +200 zł. Post/core removal 400–500 zł.",
      },
      aesthetic: {
        name: "Smile aesthetics",
        short: "Tray whitening and composite veneers.",
        body: "Tray whitening 1000 zł. In-chair composite veneer 400–500 zł. Technician composite overlay 1000 zł, ceramic 1500 zł. Natural, not overdone.",
      },
      implants: {
        name: "Implants",
        short: "Implant 3000 zł. Crown on implant 2500–3500 zł.",
        body: "Implant fixture 3000 zł. Crown on implant 2500–3500 zł. Bone grafting priced after a CBCT scan. Plan and quote always before surgery.",
      },
      prosthetics: {
        name: "Prosthetics",
        short: "Crowns, veneers, dentures — in-house and lab.",
        body: "Temporary crown in-chair 250 zł, lab 300 zł. Metal-ceramic crown 1200 zł, zirconia 2200 zł. Full and skeletal dentures 2000 zł, precision-attachment denture 2200 zł. Repairs on site.",
      },
      surgery: {
        name: "Oral surgery",
        short: "Extractions and implants. Anaesthesia included.",
        body: "Surgical consult 200 zł. Extraction 300–500 zł, impacted tooth 500–800 zł. Fragment removal, dry socket, abscess drainage. Anaesthesia is included with surgical procedures.",
      },
      pediatric: {
        name: "Children’s dentistry",
        short: "The first two acclimatisation visits are free.",
        body: "Acclimatisation: twice free, then 50 zł (up to 15 minutes). Baby-tooth cleaning 150 zł, fluoride and fissure seal 80 zł, filling 200 zł. Extraction with gel 150 zł, with infiltration 200 zł. Baby-tooth root canal 150 zł per visit.",
      },
    },
  },
  team: {
    eyebrow: "Dentist",
    title: "A practice run in person.",
    lead: "Treatment, the plan and the conversation — one dentist, no anonymous chair.",
    all: "Meet the practice",
    years: "years in practice",
    speaks: "Languages",
    people: {
      lekarz: {
        name: "Lead dentist",
        role: "General dentistry, surgery and prosthetics",
        bio: "Runs MiDental in Stara Iwiczna. Sees adults and children — from check-ups and hygiene through root canals to extractions, implants and dentures.",
      },
    },
  },
  reviews: {
    eyebrow: "Nearby",
    title: "A surgery you walk into without a tight stomach.",
    items: [
      {
        name: "Anna",
        place: "Stara Iwiczna",
        text: "A new practice right on the estate. Calm, no rush — my child left the acclimatisation visit smiling. A dentist round the corner, not in Warsaw.",
      },
      {
        name: "Piotr",
        place: "Lesznowola",
        text: "Extraction with anaesthesia included. Everything explained first, the price from the list, no extras in the chair.",
      },
      {
        name: "Kasia",
        place: "Nowa Iwiczna",
        text: "First check-up of the year free — I came “just to check” and left with a real plan. The website prices matched what I heard in the room.",
      },
    ],
  },
  prices: {
    eyebrow: "Fees",
    title: "Practice prices, not “from”.",
    lead: "Current MiDental fees. The final quote follows an exam — always before treatment starts.",
    note: "Prices in PLN. Private practice, no NFZ. Cash and card. Anaesthesia included with surgical procedures. Bone grafting priced after CBCT.",
    groups: [
      {
        name: "Check-up",
        rows: [
          { item: "First check-up of the year", price: "free" },
          { item: "Check-up", price: "100 zł" },
        ],
      },
      {
        name: "Restorative dentistry",
        rows: [
          { item: "Filling (depends on size)", price: "250–350 zł" },
          { item: "Tooth rebuild", price: "350–450 zł" },
          { item: "Anaesthesia", price: "50 zł" },
          { item: "Dressing", price: "80 zł" },
          { item: "X-ray", price: "50 zł" },
          { item: "Socket irrigation", price: "80 zł" },
          { item: "Glass-ionomer filling", price: "180 zł" },
          { item: "Fibre-post rebuild", price: "500 zł" },
        ],
      },
      {
        name: "Hygiene",
        rows: [
          { item: "Scaling", price: "150 zł" },
          { item: "Air-flow", price: "150 zł" },
          { item: "Fluoride", price: "80 zł" },
          { item: "Sensitivity treatment", price: "50 zł / visit" },
          { item: "Package: scaling + air-flow + fluoride", price: "330 zł" },
          { item: "Tray whitening (upper & lower + 2 gel syringes)", price: "1000 zł" },
        ],
      },
      {
        name: "Root-canal treatment",
        rows: [
          { item: "First visit / emergency (anaesthesia + X-ray + dressing)", price: "250–350 zł" },
          { item: "1 canal", price: "700 zł" },
          { item: "2 canals", price: "800 zł" },
          { item: "3 canals", price: "1000 zł" },
          { item: "4 canals", price: "1200 zł" },
          { item: "Retreatment", price: "+200 zł" },
          { item: "Post / core / anchor removal", price: "400–500 zł" },
        ],
      },
      {
        name: "Children’s dentistry",
        rows: [
          { item: "Acclimatisation visit (max 15 min)", price: "2× free, then 50 zł" },
          { item: "Baby-tooth cleaning", price: "150 zł" },
          { item: "Fluoride varnish", price: "80 zł" },
          { item: "Baby-tooth filling", price: "200 zł" },
          { item: "Baby-tooth extraction + gel", price: "150 zł" },
          { item: "Baby-tooth extraction + infiltration", price: "200 zł" },
          { item: "Fissure seal", price: "80 zł" },
          { item: "Baby-tooth root canal", price: "150 zł / visit" },
        ],
      },
      {
        name: "Surgery (anaesthesia included)",
        rows: [
          { item: "Surgical consultation", price: "200 zł" },
          { item: "Extraction", price: "300–500 zł" },
          { item: "Impacted tooth (with bone removal)", price: "500–800 zł" },
          { item: "Tooth-fragment removal", price: "150 zł" },
          { item: "Dry-socket treatment", price: "150 zł" },
          { item: "Abscess incision and drainage", price: "300 zł" },
          { item: "Abscess irrigation", price: "100 zł" },
          { item: "Implant", price: "3000 zł" },
          { item: "Bone grafting", price: "after CBCT" },
          { item: "Crown on implant", price: "2500–3500 zł" },
        ],
      },
      {
        name: "Prosthetics",
        rows: [
          { item: "Temporary crown in-chair", price: "250 zł" },
          { item: "Temporary crown by technician", price: "300 zł" },
          { item: "Metal-ceramic crown", price: "1200 zł" },
          { item: "Zirconia crown (metal-free)", price: "2200 zł" },
          { item: "Composite veneer (in-chair)", price: "400–500 zł" },
          { item: "Post and core", price: "600 zł" },
          { item: "Ball attachment", price: "900 zł" },
          { item: "Composite overlay by technician", price: "1000 zł" },
          { item: "Ceramic overlay by technician", price: "1500 zł" },
          { item: "Cementing a crown / post made elsewhere", price: "150 zł" },
          { item: "Micro-denture (up to 3 units)", price: "600 zł" },
          { item: "Partial denture (over 3 units)", price: "150 zł / unit" },
          { item: "Complete denture", price: "2000 zł" },
          { item: "Skeletal denture", price: "2000 zł" },
          { item: "Precision-attachment denture", price: "2200 zł" },
          { item: "Denture repair / adding a tooth", price: "250 zł" },
          { item: "Extra unit in a repair", price: "100 zł" },
          { item: "Denture reline", price: "300 zł" },
          { item: "Diagnostic models", price: "300 zł" },
        ],
      },
    ],
  },
  book: {
    eyebrow: "Reception",
    title: "Book a time that actually fits.",
    lead: "The request goes to the practice. We call back or reply on WhatsApp during opening hours.",
    name: "Full name",
    phone: "Phone",
    email: "Email",
    service: "Reason for visit",
    doctor: "Doctor",
    doctorAny: "No preference",
    date: "Day",
    time: "Time",
    message: "Message (optional)",
    messagePh: "e.g. pain for two days, a check-up, a child’s visit…",
    submit: "Send request",
    submitting: "Sending…",
    successTitle: "Request received.",
    successBody: "We will confirm by phone or WhatsApp during opening hours. If it is urgent, call 578 302 502.",
    another: "Make another request",
    closedSunday: "The practice is closed on Sundays.",
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
    title: "Tukanów 12, Stara Iwiczna.",
    lead: "Ground-floor practice on a new estate. Call, email or WhatsApp.",
    address: "Address",
    hoursTitle: "Hours",
    hours: [
      { day: "Monday – Friday", time: "8:00 – 20:00" },
      { day: "Saturday", time: "9:00 – 15:00" },
      { day: "Sunday", time: "closed" },
    ],
    parking: "Unit U3, ground floor. Parking at the building. Easy from Piaseczno, Lesznowola and Nowa Iwiczna.",
    map: "Map",
    openMap: "Open in Google Maps",
  },
  faq: {
    eyebrow: "Questions",
    title: "Before you call.",
    items: [
      {
        q: "Is the first check-up really free?",
        a: "Yes — the first check-up in a calendar year is free. A later check-up is 100 zł.",
      },
      {
        q: "Do you take NFZ (public insurance)?",
        a: "No. MiDental is a private practice. Cash or card.",
      },
      {
        q: "Will treatment hurt?",
        a: "It should not. Anaesthesia is included with surgical procedures; for restorative work it is 50 zł. We wait until it has taken.",
      },
      {
        q: "How do I book a child?",
        a: "The first two acclimatisation visits (up to 15 minutes) are free, then 50 zł. A parent stays in the room.",
      },
      {
        q: "How do I get there?",
        a: "Tukanów 12 lok. U3, 05-500 Stara Iwiczna. Ground floor, MiDental Stomatologia sign. Parking at the building.",
      },
    ],
  },
  cta: {
    title: "Book today.",
    body: "Call, WhatsApp, or leave a request — we will get back during opening hours.",
    book: "Book a visit",
    call: "Call",
  },
  footer: {
    blurb: "A private dental practice in Stara Iwiczna.",
    legal: "MiDental · Tukanów 12 lok. U3, 05-500 Stara Iwiczna",
    rodo: "Privacy policy",
    rights: "All rights reserved.",
  },
  rodo: {
    title: "Privacy policy",
    updated: "Updated: October 2026",
    body: [
      "The data controller is MiDental, ul. Tukanów 12 lok. U3, 05-500 Stara Iwiczna.",
      "Visit-form data (name, phone, email, message) is processed only to arrange and confirm the appointment, under GDPR Art. 6(1)(b).",
      "Medical records are kept under Polish patient-rights law, for the statutory retention period.",
      "You may access, correct or restrict processing, and lodge a complaint with the Polish DPA (UODO).",
      "Privacy contact: midentalstomatologia@gmail.com.",
      "This site stores form requests only on your device (localStorage) — nothing is sent to a server.",
    ],
  },
  toast: {
    booked: "Request saved. The practice will get in touch.",
  },
};

const ru: Copy = {
  meta: {
    homeTitle: "MiDental · Стоматология Стара-Ивична",
    homeDesc:
      "Частный стоматологический кабинет на Tukanów 12 в Старой Ивичной. Осмотр, лечение, гигиена, каналы, хирургия и протезы. Первый осмотр в году — бесплатно.",
    servicesTitle: "Услуги · MiDental",
    teamTitle: "Кабинет · MiDental",
    pricesTitle: "Цены · MiDental",
    bookTitle: "Запись · MiDental",
    contactTitle: "Контакты · MiDental",
    rodoTitle: "Конфиденциальность · MiDental",
  },
  nav: {
    home: "Главная",
    services: "Услуги",
    team: "Кабинет",
    prices: "Цены",
    contact: "Контакты",
    book: "Записаться",
    skip: "К содержанию",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    lang: "Язык",
  },
  hero: {
    eyebrow: "Стара-Ивична · Tukanów 12",
    title: "Мы уже открыты.",
    lead: "Частная стоматология рядом с домом — от бесплатного осмотра до импланта. Анестезия в цене хирургических процедур.",
    cta: "Записаться",
    call: "Позвонить",
    hours: "Пн–Пт 8:00–20:00 · Сб 9:00–15:00",
  },
  stats: [
    { value: "0 zł", label: "первый осмотр в году" },
    { value: "2×", label: "адаптация ребёнка бесплатно" },
    { value: "8–20", label: "понедельник–пятница" },
    { value: "WhatsApp", label: "быстрая связь с кабинетом" },
  ],
  about: {
    eyebrow: "Кабинет",
    title: "Новый кабинет. Спокойное лечение.",
    body: "MiDental — частная стоматология в Старой Ивичной, Tukanów 12. Современное кресло, светлая ожидальня и врач, который ведёт приём лично. Лучше профилактика, чем лечение — меньше боли, меньше расходов.",
    points: [
      { title: "Первый осмотр в году бесплатно", text: "Регулярный контроль дешевле лечения. Поэтому первый осмотр в календарном году ничего не стоит." },
      { title: "Понятный прайс", text: "Суммы из кабинета — без «от». Имплант 3000 zł, пакет гигиены 330 zł." },
      { title: "Дети без стресса", text: "Два первых адаптационных визита бесплатны. Родитель остаётся в кабинете." },
    ],
  },
  services: {
    eyebrow: "Направления",
    title: "От осмотра до импланта.",
    lead: "Терапия, каналы, хирургия и протезы — без спешки и без лишнего.",
    all: "Все услуги",
    items: {
      consult: {
        name: "Осмотр и диагностика",
        short: "Первый осмотр в году бесплатно. Снимок на месте.",
        body: "Осмотр — 100 zł, первый в году — бесплатно. RTG 50 zł. После приёма — план и смета, до любой работы в кресле.",
      },
      hygiene: {
        name: "Гигиена",
        short: "Скейлинг, Air Flow, фтор. Пакет 330 zł.",
        body: "Скейлинг 150 zł, Air Flow 150 zł, фтор 80 zł. Пакет всех трёх — 330 zł. Лечение чувствительности 50 zł за визит. Отбеливание капами (верх и низ + 2 шприца геля) — 1000 zł.",
      },
      conservative: {
        name: "Терапия",
        short: "Пломбы, восстановление, анестезия.",
        body: "Пломба 250–350 zł в зависимости от размера. Восстановление зуба 350–450 zł, анестезия 50 zł, повязка 80 zł. Стеклоиономер 180 zł, восстановление на стекловолокне 500 zł.",
      },
      endo: {
        name: "Лечение каналов",
        short: "От одного до четырёх каналов, неотложная помощь.",
        body: "Первый визит / неотложка 250–350 zł (анестезия + снимок + повязка). 1 канал 700 zł, 2 канала 800 zł, 3 канала 1000 zł, 4 канала 1200 zł. Повторное лечение +200 zł. Удаление вкладки / анкера 400–500 zł.",
      },
      aesthetic: {
        name: "Эстетика улыбки",
        short: "Отбеливание капами и композитные виниры.",
        body: "Отбеливание капами 1000 zł. Композитный винир в кабинете 400–500 zł. Композитная накладка у техника 1000 zł, керамическая 1500 zł. Естественный эффект.",
      },
      implants: {
        name: "Импланты",
        short: "Имплант 3000 zł. Коронка на импланте 2500–3500 zł.",
        body: "Установка импланта 3000 zł. Коронка на импланте 2500–3500 zł. Наращивание кости — после КЛКТ. План и смета всегда до операции.",
      },
      prosthetics: {
        name: "Протезирование",
        short: "Коронки, виниры, протезы — в кабинете и в лаборатории.",
        body: "Временная коронка в кабинете 250 zł, у техника 300 zł. Металлокерамика 1200 zł, цирконий 2200 zł. Полный и бюгельный протез 2000 zł, протез на замках 2200 zł. Ремонт на месте.",
      },
      surgery: {
        name: "Хирургия",
        short: "Удаления и импланты. Анестезия в цене.",
        body: "Хирургическая консультация 200 zł. Удаление 300–500 zł, ретинированный зуб 500–800 zł. Отломок, сухая лунка, вскрытие абсцесса. Анестезия входит в цену хирургических процедур.",
      },
      pediatric: {
        name: "Детская стоматология",
        short: "Два первых адаптационных визита бесплатно.",
        body: "Адаптация: два раза бесплатно, далее 50 zł (до 15 минут). Чистка молочных 150 zł, фтор и герметизация по 80 zł, пломба 200 zł. Удаление с гелем 150 zł, с инфильтрацией 200 zł. Каналы молочных 150 zł за визит.",
      },
    },
  },
  team: {
    eyebrow: "Врач",
    title: "Кабинет ведётся лично.",
    lead: "Лечение, план и разговор с пациентом — один врач, без анонимного кресла.",
    all: "О кабинете",
    years: "лет практики",
    speaks: "Языки",
    people: {
      lekarz: {
        name: "Ведущий врач",
        role: "Общая стоматология, хирургия и протезирование",
        bio: "Ведёт кабинет MiDental в Старой Ивичной. Принимает взрослых и детей — от осмотра и гигиены через каналы до удалений, имплантов и протезов.",
      },
    },
  },
  reviews: {
    eyebrow: "Рядом",
    title: "Кабинет, в который идут без сжатого живота.",
    items: [
      {
        name: "Анна",
        place: "Стара-Ивична",
        text: "Новый кабинет прямо у дома. Спокойно, без спешки — ребёнок вышел с адаптации улыбаясь. Наконец стоматолог рядом, а не в Варшаве.",
      },
      {
        name: "Пётр",
        place: "Лешноволя",
        text: "Удаление с анестезией в цене. Всё объяснили заранее, сумма с прайса, без доплат в кресле.",
      },
      {
        name: "Кася",
        place: "Нова-Ивична",
        text: "Первый осмотр в году бесплатно — пришла «просто проверить» и получила конкретный план. Цены на сайте совпали с кабинетом.",
      },
    ],
  },
  prices: {
    eyebrow: "Цены",
    title: "Цены кабинета, не «от».",
    lead: "Актуальный прайс MiDental. Окончательная смета — после осмотра и всегда до лечения.",
    note: "Цены в злотых. Частный кабинет, без NFZ. Наличные и карта. Анестезия в цене хирургических процедур. Наращивание кости — после КЛКТ.",
    groups: [
      {
        name: "Осмотр",
        rows: [
          { item: "Первый осмотр в году", price: "бесплатно" },
          { item: "Осмотр", price: "100 zł" },
        ],
      },
      {
        name: "Терапия",
        rows: [
          { item: "Пломба (зависит от размера)", price: "250–350 zł" },
          { item: "Восстановление зуба", price: "350–450 zł" },
          { item: "Анестезия", price: "50 zł" },
          { item: "Повязка", price: "80 zł" },
          { item: "Снимок RTG", price: "50 zł" },
          { item: "Промывание лунки", price: "80 zł" },
          { item: "Стеклоиономерная пломба", price: "180 zł" },
          { item: "Восстановление на стекловолокне", price: "500 zł" },
        ],
      },
      {
        name: "Гигиена",
        rows: [
          { item: "Скейлинг", price: "150 zł" },
          { item: "Air Flow", price: "150 zł" },
          { item: "Фтор", price: "80 zł" },
          { item: "Лечение чувствительности", price: "50 zł / визит" },
          { item: "Пакет: скейлинг + Air Flow + фтор", price: "330 zł" },
          { item: "Отбеливание капами (верх и низ + 2 шприца геля)", price: "1000 zł" },
        ],
      },
      {
        name: "Лечение каналов",
        rows: [
          { item: "Первый визит / неотложка (анестезия + снимок + повязка)", price: "250–350 zł" },
          { item: "1 канал", price: "700 zł" },
          { item: "2 канала", price: "800 zł" },
          { item: "3 канала", price: "1000 zł" },
          { item: "4 канала", price: "1200 zł" },
          { item: "Повторное лечение", price: "+200 zł" },
          { item: "Удаление вкладки / анкера", price: "400–500 zł" },
        ],
      },
      {
        name: "Детская стоматология",
        rows: [
          { item: "Адаптационный визит (до 15 мин)", price: "2× бесплатно, далее 50 zł" },
          { item: "Чистка молочных зубов", price: "150 zł" },
          { item: "Фторирование", price: "80 zł" },
          { item: "Пломба в молочном зубе", price: "200 zł" },
          { item: "Удаление молочного + гель", price: "150 zł" },
          { item: "Удаление молочного + инфильтрация", price: "200 zł" },
          { item: "Герметизация фиссур", price: "80 zł" },
          { item: "Каналы молочных зубов", price: "150 zł / визит" },
        ],
      },
      {
        name: "Хирургия (анестезия в цене)",
        rows: [
          { item: "Хирургическая консультация", price: "200 zł" },
          { item: "Удаление зуба", price: "300–500 zł" },
          { item: "Удаление ретинированного зуба", price: "500–800 zł" },
          { item: "Удаление отломка", price: "150 zł" },
          { item: "Лечение сухой лунки", price: "150 zł" },
          { item: "Вскрытие и дренирование абсцесса", price: "300 zł" },
          { item: "Промывание абсцесса", price: "100 zł" },
          { item: "Имплант", price: "3000 zł" },
          { item: "Наращивание кости", price: "после КЛКТ" },
          { item: "Коронка на импланте", price: "2500–3500 zł" },
        ],
      },
      {
        name: "Протезирование",
        rows: [
          { item: "Временная коронка в кабинете", price: "250 zł" },
          { item: "Временная коронка у техника", price: "300 zł" },
          { item: "Металлокерамическая коронка", price: "1200 zł" },
          { item: "Циркониевая коронка (без металла)", price: "2200 zł" },
          { item: "Композитный винир (в кабинете)", price: "400–500 zł" },
          { item: "Культевая вкладка", price: "600 zł" },
          { item: "Вкладка с шаровидным аттачменом", price: "900 zł" },
          { item: "Композитная накладка у техника", price: "1000 zł" },
          { item: "Керамическая накладка у техника", price: "1500 zł" },
          { item: "Фиксация коронки / вкладки не из кабинета", price: "150 zł" },
          { item: "Микропротез (до 3 единиц)", price: "600 zł" },
          { item: "Частичный протез (больше 3 единиц)", price: "150 zł / единица" },
          { item: "Полный протез", price: "2000 zł" },
          { item: "Бюгельный протез", price: "2000 zł" },
          { item: "Протез на замках", price: "2200 zł" },
          { item: "Ремонт протеза / добавление зуба", price: "250 zł" },
          { item: "Следующая единица в ремонте", price: "100 zł" },
          { item: "Перебазировка протеза", price: "300 zł" },
          { item: "Диагностические модели", price: "300 zł" },
        ],
      },
    ],
  },
  book: {
    eyebrow: "Запись",
    title: "Запишитесь, когда вам удобно.",
    lead: "Заявка уходит в кабинет. Мы перезвоним или ответим в WhatsApp в часы работы.",
    name: "Имя и фамилия",
    phone: "Телефон",
    email: "Эл. почта",
    service: "Повод визита",
    doctor: "Врач",
    doctorAny: "Без предпочтений",
    date: "День",
    time: "Время",
    message: "Сообщение (необязательно)",
    messagePh: "Например: боль два дня, осмотр, визит ребёнка…",
    submit: "Отправить заявку",
    submitting: "Отправка…",
    successTitle: "Заявка принята.",
    successBody: "Подтвердим визит по телефону или в WhatsApp в рабочие часы. Если срочно — звоните: 578 302 502.",
    another: "Оставить ещё одну заявку",
    closedSunday: "По воскресеньям кабинет закрыт.",
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
    title: "Tukanów 12, Стара-Ивична.",
    lead: "Кабинет на первом этаже нового дома. Звоните, пишите на почту или в WhatsApp.",
    address: "Адрес",
    hoursTitle: "Часы работы",
    hours: [
      { day: "Понедельник – пятница", time: "8:00 – 20:00" },
      { day: "Суббота", time: "9:00 – 15:00" },
      { day: "Воскресенье", time: "выходной" },
    ],
    parking: "Лок. U3, первый этаж. Парковка у здания. Удобно из Пясечно, Лешноволи и Новой Ивичной.",
    map: "Карта",
    openMap: "Открыть в Google Maps",
  },
  faq: {
    eyebrow: "Вопросы",
    title: "Прежде чем звонить.",
    items: [
      {
        q: "Первый осмотр правда бесплатный?",
        a: "Да — первый осмотр в календарном году бесплатный. Следующий — 100 zł.",
      },
      {
        q: "Работаете ли с NFZ?",
        a: "Нет. MiDental — частный кабинет. Наличные или карта.",
      },
      {
        q: "Будет ли больно?",
        a: "Не должно. При хирургии анестезия в цене, при терапии — 50 zł. Всегда ждём, пока подействует.",
      },
      {
        q: "Как записать ребёнка?",
        a: "Два первых адаптационных визита (до 15 минут) бесплатны, далее 50 zł. Родитель остаётся в кабинете.",
      },
      {
        q: "Как добраться?",
        a: "ul. Tukanów 12 lok. U3, 05-500 Stara Iwiczna. Первый этаж, вывеска MiDental Stomatologia. Парковка у здания.",
      },
    ],
  },
  cta: {
    title: "Запишитесь сегодня.",
    body: "Позвоните, напишите в WhatsApp или оставьте заявку — ответим в часы работы.",
    book: "Записаться",
    call: "Позвонить",
  },
  footer: {
    blurb: "Частный стоматологический кабинет в Старой Ивичной.",
    legal: "MiDental · Tukanów 12 lok. U3, 05-500 Stara Iwiczna",
    rodo: "Политика конфиденциальности",
    rights: "Все права защищены.",
  },
  rodo: {
    title: "Политика конфиденциальности",
    updated: "Обновлено: октябрь 2026",
    body: [
      "Администратор данных: MiDental, ul. Tukanów 12 lok. U3, 05-500 Stara Iwiczna.",
      "Данные формы записи (имя, телефон, email, сообщение) обрабатываются только для записи и подтверждения визита, ст. 6(1)(b) GDPR.",
      "Медицинские данные ведём согласно польскому закону о правах пациента, в установленные сроки хранения.",
      "Вы можете запросить доступ, исправление, ограничение обработки и подать жалобу в польский UODO.",
      "По вопросам данных: midentalstomatologia@gmail.com.",
      "Эта страница хранит заявки только на вашем устройстве (localStorage) — на сервер ничего не отправляется.",
    ],
  },
  toast: {
    booked: "Заявка сохранена. Кабинет свяжется с вами.",
  },
};

export const copy: Record<Lang, Copy> = { pl, en, ru };
