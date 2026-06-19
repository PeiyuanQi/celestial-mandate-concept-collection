import { pageRoutes } from "../routes";
import { type HomePageContent, type Locale } from "../types";

export const homePageContent: Record<Locale, HomePageContent> = {
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
        label: "资料片",
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
      eyebrow: "历史社会模拟 · 大战略概念",
      title: "社稷",
      quote: "看试手，补天裂。",
      quoteSource: "——辛弃疾",
      copy:
        "一个关于权威、后勤、合法性与命令传递的历史社会模拟。",
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
          text: "迟之一瞬，局势已易。",
        },
        {
          label: "命令",
          text: "令既出，行之有差。",
        },
        {
          label: "江河",
          text: "水陆所通，方为可达。",
        },
        {
          label: "身居高位",
          text: "天下事，未必尽明。",
        },
      ],
    },
    intro: {
      kicker: "这是什么",
      title: "不是复述一段历史，而是模拟权力如何抵达现实。",
      body:
        "公开资料、地理水文、人物关系和系统假设被整理成可玩的章节。每个资料片给出开局压力；玩法系统决定命令、回报、合法性与地方接受度如何相互牵扯。",
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
        label: "DLC",
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
      eyebrow: "Historical Society Simulation · Grand Strategy Concept",
      title: "社稷",
      quote: "Try the hand, and mend the broken sky.",
      quoteSource: "— Xin Qiji",
      copy:
        "A historical society simulation and grand-strategy concept about authority, logistics, legitimacy, and orders that must travel through people, roads, and institutions.",
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
      kicker: "What It Is",
      title: "Not a retelling of history, but a model of power reaching reality.",
      body:
        "Public sources, geography, waterways, relationships, and system assumptions are gathered into playable chapters. Each DLC defines the opening pressure; the systems decide how orders, reports, legitimacy, and local acceptance pull against one another.",
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
