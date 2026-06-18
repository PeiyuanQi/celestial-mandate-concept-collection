export const defaultLocale = "zh-Hans";

export const supportedLocales = ["zh-Hans", "en"] as const;

export type Locale = (typeof supportedLocales)[number];
export type SitePage =
  | "home"
  | "gameplay"
  | "dataPacks"
  | "chapterOne"
  | "wiki";

type NavItem = {
  href: string;
  label: string;
  children?: NavItem[];
};

type Action = Omit<NavItem, "children"> & {
  variant: "primary" | "secondary";
};

type Pillar = {
  label: string;
  text: string;
};

type HeroSignal = {
  label: string;
  text: string;
};

type Chapter = {
  kicker: string;
  title: string;
  body: string;
  points: string[];
};

type WikiCategory = {
  label: string;
  items: string[];
};

export type HomeContent = {
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
  gameplay: {
    kicker: string;
    title: string;
    body: string;
    pillars: Pillar[];
  };
  dataPack: {
    kicker: string;
    title: string;
    body: string;
    chapter: Chapter;
  };
  wiki: {
    kicker: string;
    title: string;
    body: string;
    categoriesAriaLabel: string;
    categories: WikiCategory[];
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

export const localeRoutes: Record<Locale, string> = {
  "zh-Hans": "/",
  en: "/en/",
};

export const pageRoutes: Record<Locale, Record<SitePage, string>> = {
  "zh-Hans": {
    home: "/",
    gameplay: "/gameplay/",
    dataPacks: "/data-packs/",
    chapterOne: "/data-packs/po-zhen-zi/",
    wiki: "/wiki/",
  },
  en: {
    home: "/en/",
    gameplay: "/en/gameplay/",
    dataPacks: "/en/data-packs/",
    chapterOne: "/en/data-packs/po-zhen-zi/",
    wiki: "/en/wiki/",
  },
};

export const localeLabels: Record<Locale, string> = {
  "zh-Hans": "中文",
  en: "English",
};

export const homeContent: Record<Locale, HomeContent> = {
  "zh-Hans": {
    htmlLang: "zh-Hans",
    meta: {
      title: "社稷",
      titleSuffix: "历史策略模拟",
      description:
        "一个关于权威、后勤、合法性，以及命令如何穿过崩坏国家的历史社会模拟与大战略概念。",
    },
    brand: {
      mark: "社稷",
      name: "社稷",
      homeLabel: "社稷首页",
    },
    primaryAriaLabel: "主导航",
    navAriaLabel: "网站导航",
    nav: [
      { href: pageRoutes["zh-Hans"].home, label: "首页" },
      { href: pageRoutes["zh-Hans"].gameplay, label: "玩法介绍" },
      {
        href: pageRoutes["zh-Hans"].dataPacks,
        label: "资料包",
        children: [
          {
            href: pageRoutes["zh-Hans"].chapterOne,
            label: "第一章:破阵子",
          },
        ],
      },
      { href: pageRoutes["zh-Hans"].wiki, label: "维基" },
    ],
    languageSwitcherLabel: "选择语言",
    hero: {
      eyebrow: "明末残局 · 角色席位策略",
      title: "社稷",
      copy:
        "坐进一个摇晃的政权，而不是俯瞰一张听话的地图：奏报会迟到，粮饷会断线，命令离开案头就开始变形。",
      imageAlt: "一张铺满地图、路线、筹码、封蜡与报告的指挥桌。",
      actions: [
        {
          href: pageRoutes["zh-Hans"].gameplay,
          label: "玩法介绍",
          variant: "primary",
        },
        {
          href: pageRoutes["zh-Hans"].chapterOne,
          label: "第一章:破阵子",
          variant: "secondary",
        },
      ],
      signalsAriaLabel: "首页核心讯号",
      signals: [
        {
          label: "奏报",
          text: "晚一步，局势已变。",
        },
        {
          label: "命令",
          text: "出门后便会走样。",
        },
        {
          label: "江河",
          text: "水陆路线决定可抵达之处。",
        },
        {
          label: "席位",
          text: "有职位，没有全知视野。",
        },
      ],
    },
    intro: {
      kicker: "核心",
      title: "权力先经过世界，才变成行动。",
      body:
        "地图、江河、人物与奏报给开局以真实压力，玩家席位与系统演绎给历史留下余地。",
    },
    gameplay: {
      kicker: "玩法介绍",
      title: "以受限权力构成的策略游戏。",
      body:
        "玩法不是从全知地图上直接调度一切，而是在有限席位中处理消息、关系、后勤、合法性与地方接受度。",
      pillars: [
        {
          label: "权威有摩擦",
          text:
            "命令要穿过衙署、信使、幕僚、派系信任、地形与地方接受度，才可能变成行动。",
        },
        {
          label: "国家地图色块",
          text:
            "同一地点可以同时存在相互竞争的名义、薄弱行政、军事占据、士绅影响、财政缺口与被争夺的合法性。",
        },
        {
          label: "历史是条件结构",
          text: "历史压力以因果结构存在，而不是按剧本准点抵达的结局。",
        },
        {
          label: "真实历史环境再现",
          text:
            "地理,水文,人物,地方,事件,给开局以真相,给演绎以空间。",
        },
      ],
    },
    dataPack: {
      kicker: "资料包",
      title: "按章节组织时代、地点、人物与系统。",
      body:
        "资料包是公开材料进入可玩结构的入口：它把时代范围、关键地点、势力关系、系统假设与来源笔记整理成可迭代的章节。",
      chapter: {
        kicker: "第一章",
        title: "第一章:破阵子",
        body:
          "第一段切片以弘光朝廷与江北四镇为中心：南京、镇江、扬州、淮安，长江、大运河，军镇、士绅网络、供给焦虑，以及那些很少及时抵达、也很少让决策变得干净的奏报。",
        points: ["角色席位", "命令封包", "回报循环", "江北军镇"],
      },
    },
    wiki: {
      kicker: "维基",
      title: "像战争策略游戏维基一样拆开可查询对象。",
      body:
        "维基区用于列举人物、地点、术语与系统，让设计笔记、资料包和历史输入可以互相引用，而不是散落在单篇说明里。",
      categoriesAriaLabel: "维基分类",
      categories: [
        {
          label: "人物",
          items: ["弘光朝廷", "江北四镇", "史可法", "高杰"],
        },
        {
          label: "地点",
          items: ["南京", "镇江", "扬州", "淮安"],
        },
        {
          label: "术语",
          items: ["合法性", "命令封包", "关系触达", "供给焦虑"],
        },
        {
          label: "系统",
          items: ["角色席位", "后勤线路", "回报循环", "地方接受度"],
        },
      ],
    },
    footer: {
      label: "社稷",
      backToTop: "顶部",
      rights: "保留所有权利",
      wikiNotice: {
        text: "维基",
        linkLabel: "CC BY-SA 4.0",
        href: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
    },
  },
  en: {
    htmlLang: "en",
    meta: {
      title: "Celestial Mandate (社稷)",
      titleSuffix: "Historical Strategy Simulation",
      description:
        "A historical society-simulation and grand-strategy concept about authority, logistics, legitimacy, and decisions that must travel through a collapsing state.",
    },
    brand: {
      mark: "社稷",
      name: "Celestial Mandate (社稷)",
      homeLabel: "Celestial Mandate (社稷) home",
    },
    primaryAriaLabel: "Primary",
    navAriaLabel: "Site navigation",
    nav: [
      { href: pageRoutes.en.home, label: "Home" },
      { href: pageRoutes.en.gameplay, label: "Gameplay" },
      {
        href: pageRoutes.en.dataPacks,
        label: "Data Packs",
        children: [
          {
            href: pageRoutes.en.chapterOne,
            label: "Chapter One: Po Zhen Zi (破阵子)",
          },
        ],
      },
      { href: pageRoutes.en.wiki, label: "Wiki" },
    ],
    languageSwitcherLabel: "Select language",
    hero: {
      eyebrow: "Late-Ming crisis · character-seat strategy",
      title: "Celestial Mandate (社稷)",
      copy:
        "Sit inside an unstable regime, not above an obedient map: reports arrive late, grain and pay break down, and orders begin changing the moment they leave your desk.",
      imageAlt:
        "A command table with layered maps, routes, tokens, wax seals, and reports.",
      actions: [
        {
          href: pageRoutes.en.gameplay,
          label: "Gameplay",
          variant: "primary",
        },
        {
          href: pageRoutes.en.chapterOne,
          label: "Chapter One",
          variant: "secondary",
        },
      ],
      signalsAriaLabel: "Home page core signals",
      signals: [
        {
          label: "Reports",
          text: "Late by design; the situation has moved.",
        },
        {
          label: "Orders",
          text: "They change once they leave your desk.",
        },
        {
          label: "Waterways",
          text: "Routes decide what can be reached.",
        },
        {
          label: "Seat",
          text: "You hold an office, not omniscience.",
        },
      ],
    },
    intro: {
      kicker: "Core",
      title: "Power must pass through the world before it becomes action.",
      body:
        "Maps, waterways, people, and reports give each opening real pressure; player seats and systemic play leave history room to unfold.",
    },
    gameplay: {
      kicker: "Gameplay",
      title: "Strategy built from constrained power.",
      body:
        "The game is not about issuing perfect orders from an omniscient map. It is about acting from a limited seat while messages, relationships, logistics, legitimacy, and local acceptance reshape every decision.",
      pillars: [
        {
          label: "Authority Has Friction",
          text:
            "Commands pass through offices, messengers, staff, factional trust, terrain, and local acceptance before they become action.",
        },
        {
          label: "A State Is Not A Tile",
          text:
            "Places can hold rival claims, weak administration, military occupation, elite influence, fiscal gaps, and disputed legitimacy at once.",
        },
        {
          label: "History Is Conditional",
          text:
            "Historical pressure exists as causal structure, not as an appointment with a scripted ending.",
        },
        {
          label: "Faithful Historical Simulation",
          text:
            "Geography, waterways, people, places, and events ground each opening in historical reality while leaving room for the simulation to unfold.",
        },
      ],
    },
    dataPack: {
      kicker: "Data Packs",
      title: "Chapters organize eras, places, people, and systems.",
      body:
        "Data packs are the public entry point from research material into playable structure: era scope, key places, faction relationships, system assumptions, and source-note summaries gathered into chapters that can evolve.",
      chapter: {
        kicker: "Chapter One",
        title: "Chapter One: Po Zhen Zi (破阵子)",
        body:
          "The first slice centers on the Hongguang court and the Jiangbei Four Towns: Nanjing, Zhenjiang, Yangzhou, Huai'an, the Yangtze, the Grand Canal, military governors, gentry networks, supply anxiety, and reports that rarely arrive in time to make decisions clean.",
        points: [
          "Character seats",
          "Command packets",
          "Report loops",
          "Jiangbei garrisons",
        ],
      },
    },
    wiki: {
      kicker: "Wiki",
      title: "A strategy-wiki style index for things you can look up.",
      body:
        "The wiki area lists characters, places, terms, and systems so design notes, data packs, and historical inputs can reference each other instead of living as isolated essays.",
      categoriesAriaLabel: "Wiki categories",
      categories: [
        {
          label: "Characters",
          items: [
            "Hongguang court",
            "Jiangbei Four Towns",
            "Shi Kefa",
            "Gao Jie",
          ],
        },
        {
          label: "Places",
          items: ["Nanjing", "Zhenjiang", "Yangzhou", "Huai'an"],
        },
        {
          label: "Terms",
          items: [
            "Legitimacy",
            "Command packet",
            "Relational reach",
            "Supply anxiety",
          ],
        },
        {
          label: "Systems",
          items: [
            "Character seats",
            "Logistics routes",
            "Report loops",
            "Local acceptance",
          ],
        },
      ],
    },
    footer: {
      label: "Celestial Mandate",
      backToTop: "Top",
      rights: "All rights reserved",
      wikiNotice: {
        text: "Wiki",
        linkLabel: "CC BY-SA 4.0",
        href: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
    },
  },
};
