export const supportedLocales = ["zh-Hans", "en"] as const;

export type Locale = (typeof supportedLocales)[number];
export type SitePage =
  | "home"
  | "gameGuide"
  | "gameplay"
  | "dataPacks"
  | "chapterOne"
  | "wiki";

export type NavItem = {
  href: string;
  label: string;
  children?: NavItem[];
};

export type Action = Omit<NavItem, "children"> & {
  variant: "primary" | "secondary";
};

export type Pillar = {
  label: string;
  text: string;
};

export type GameplaySystemPoint = {
  label: string;
  text: string;
};

export type GameplaySystem = {
  slug: string;
  category: string;
  source: string;
  shortTitle: string;
  title: string;
  deck: string;
  summary: string;
  indexPoints: string[];
  questions: string[];
  feedback: GameplaySystemPoint[];
  guardrails: string[];
  relatedSlugs: string[];
};

export type GameplaySystemGroup = {
  id: string;
  label: string;
  title: string;
  body: string;
  question: string;
  steps: string[];
  systemSlugs: string[];
};

export type GameGuideItem = {
  label: string;
  text: string;
};

export type GameGuideSection = {
  kicker: string;
  title: string;
  body: string;
  layout: "sequence" | "grid" | "comparison";
  items: GameGuideItem[];
  note?: string;
};

export type GameGuideArticle = {
  slug: string;
  navLabel: string;
  category: string;
  kicker: string;
  title: string;
  body: string;
  summary: string;
  indexPoints: string[];
  sections: GameGuideSection[];
  closing: string;
};

export type GameGuideContent = {
  kicker: string;
  title: string;
  body: string;
  heroImageAlt: string;
  intro: {
    kicker: string;
    title: string;
    body: string;
  };
  gameplayCard: {
    label: string;
    title: string;
    body: string;
    points: string[];
    openLabel: string;
  };
  library: {
    kicker: string;
    title: string;
    body: string;
    openLabel: string;
  };
  modePromise: {
    kicker: string;
    title: string;
    body: string;
    gameLabel: string;
    gameText: string;
    simulationLabel: string;
    simulationText: string;
    sharedRule: string;
  };
  status: {
    label: string;
    title: string;
    body: string;
  };
  articleDetail: {
    backLabel: string;
    contentsLabel: string;
    closingLabel: string;
  };
  articles: GameGuideArticle[];
};

export type HeroSignal = {
  label: string;
  text: string;
};

export type Chapter = {
  kicker: string;
  title: string;
  body: string;
  heroImageAlt: string;
  points: string[];
};

export type HomePageContent = {
  htmlLang: string;
  meta: {
    title: string;
    titleSuffix: string;
    description: string;
  };
  brand: {
    mark: string;
    name: string;
    homeLabel: string;
  };
  primaryAriaLabel: string;
  navAriaLabel: string;
  nav: NavItem[];
  languageSwitcherLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    quote: string;
    quoteSource: string;
    copy: string;
    imageAlt: string;
    actions: Action[];
    signalsAriaLabel: string;
    signals: HeroSignal[];
  };
  intro: {
    kicker: string;
    title: string;
    body: string;
  };
  footer: {
    label: string;
    backToTop: string;
    rights: string;
    wikiNotice: {
      text: string;
      linkLabel: string;
      href: string;
    };
  };
};

export type GameplayContent = {
  kicker: string;
  title: string;
  body: string;
  heroImageAlt: string;
  pillarsTitle: string;
  pillars: Pillar[];
  systemIndex: {
    kicker: string;
    title: string;
    body: string;
    ariaLabel: string;
    sourceLabel: string;
    openLabel: string;
  };
  systemGroups: GameplaySystemGroup[];
  systemDetail: {
    kicker: string;
    sourceLabel: string;
    overviewTitle: string;
    questionsTitle: string;
    feedbackTitle: string;
    guardrailsTitle: string;
    relatedTitle: string;
    backLabel: string;
  };
  systems: GameplaySystem[];
};

export type DataPackContent = {
  kicker: string;
  title: string;
  body: string;
  heroImageAlt: string;
  chapter: Chapter;
};

export type WikiContent = {
  kicker: string;
  title: string;
  body: string;
  heroImageAlt: string;
  navAriaLabel: string;
  readerAriaLabel: string;
  searchLabel: string;
  searchPlaceholder: string;
  entryCountLabel: string;
  sourceLabel: string;
  loadingLabel: string;
  emptyLabel: string;
};

export type SiteContent = HomePageContent & {
  gameGuide: GameGuideContent;
  gameplay: GameplayContent;
  dataPack: DataPackContent;
  wiki: WikiContent;
};
