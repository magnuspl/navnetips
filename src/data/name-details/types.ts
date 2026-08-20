// Redaksjonelt påfyll per navn, nøklet på slug.
//
// HVORFOR FILEN FINNES
// --------------------
// names.ts er en tabell: navn, betydning, opphav, stil. Det holder til lister
// og filtre, men det gir hver navneside bare rundt 20 ord eget innhold pakket
// inn i den samme standardteksten som alle de andre. Søkemotorer ser 434
// nesten like sider, og ingen av dem rangerer på «<navn> betydning».
//
// Her ligger det som faktisk skiller sidene fra hverandre.
//
// HVA SOM HØRER HJEMME HER
// ------------------------
// Bare ting som er etterprøvbart: navneledd og hva de betyr, kjente
// skrivemåter, vanlige kortformer, uttale, og kort språkhistorisk kontekst.
//
// HVA SOM IKKE HØRER HJEMME HER
// -----------------------------
// Populariteter, plasseringer på topplister, navnedager og kjente navnebærere.
// Slikt krever kilde. Er du fristet til å skrive «var på topp ti i 2019» –
// ikke gjør det uten å hente tallet fra SSB først. Samme regel som gjelder
// for src/data/stats.ts.
//
// KILDER
// ------
// Nye navn skal ha minst én kilde, og kildene vises nederst på navnesiden.
// Reglene står i docs/legge-til-navn.md, og `npm run navn:sjekk` håndhever dem.
//
// Navnene som lå inne før kildekravet ble innført, mangler ennå kilder.
// Sjekkskriptet teller dem, så hullet er synlig og kan tettes over tid.
//
// Utover `sources` er alle felt valgfrie. Navnesiden bygger tekst av det som
// finnes, og faller tilbake på det som kan utledes av selve navnet.

export type NameElement = {
  /** Leddet slik det ser ut i kildespråket, f.eks. «bjǫrn» eller «hildr». */
  form: string;
  /** Hva leddet betyr på norsk. */
  sense: string;
};

export type NameDetail = {
  /**
   * Navnets oppbygning. Norrøne og germanske navn er som regel satt sammen av
   * to ledd; det er dette som gjør at Torbjørn, Kolbjørn og Bjørnar henger
   * sammen, og det gir hver side en etymologi ingen andre sider har.
   */
  elements?: NameElement[];

  /** Én til tre setninger om hvor navnet kommer fra og hvordan det kom hit. */
  origin?: string;

  /** Andre skrivemåter av samme navn. */
  variants?: string[];

  /** Vanlige kortformer og kjæleformer. */
  shortForms?: string[];

  /** Uttale skrevet for folk, ikke IPA – f.eks. «SJUR-en». */
  pronunciation?: string;

  /**
   * Navn som deler et ledd eller en rot med dette. Fylles ut automatisk fra
   * `elements` der det er mulig; oppgis her bare når slektskapet ikke er
   * synlig i selve skrivemåten.
   */
  related?: string[];

  /**
   * Hvor leseren kan etterprøve opplysningene. Vises nederst på navnesiden.
   *
   * Påkrevd for nye navn. Se docs/legge-til-navn.md for hvilke kilder som
   * holder mål.
   */
  sources?: NameSource[];
};

export type NameSource = {
  /** Tittelen på verket, oppslaget eller artikkelen. */
  title: string;

  /** Forlag, leksikon eller nettsted som står bak. */
  publisher?: string;

  /**
   * Direkte lenke.
   *
   * Ta bare med en URL du faktisk har åpnet og sett at peker på riktig navn.
   * En død lenke er verre enn ingen lenke – da er tittel og utgiver nok.
   */
  url?: string;
};
