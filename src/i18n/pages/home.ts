import { gameGuideArticlePath, pageRoutes } from "../routes";
import { type HomePageContent, type Locale } from "../types";

export const homePageContent: Record<Locale, HomePageContent> = {
  "zh-Hans": {
    htmlLang: "zh-Hans",
    meta: {
      title: "社稷",
      titleSuffix: "历史策略模拟",
      description:
        "一款以角色视角进入深层历史社会模拟的大战略概念：因果压力推动无人干预时的局势大体沿历史方向演变，而每道命令都受权限、信息、资源、制度与距离约束。",
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
      {
        href: pageRoutes["zh-Hans"].gameGuide,
        label: "游戏指南",
        children: [
          { href: pageRoutes["zh-Hans"].gameGuide, label: "指南总览" },
          { href: pageRoutes["zh-Hans"].gameplay, label: "玩法介绍" },
          { href: gameGuideArticlePath("zh-Hans", "vision"), label: "游戏愿景" },
          { href: gameGuideArticlePath("zh-Hans", "design"), label: "设计原则" },
          { href: gameGuideArticlePath("zh-Hans", "systems"), label: "系统蓝图" },
        ],
      },
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
      eyebrow: "深层历史社会模拟 · 大战略体验方向",
      title: "社稷",
      quote: "看试手，补天裂。",
      quoteSource: "——辛弃疾",
      copy:
        "从具体人物的席位进入历史社会：即使无人干预，因果压力也会推动局势大体沿历史方向演变；当你介入，每道命令仍受权限、信息、资源、制度与距离约束。项目以高品质大战略体验为方向。",
      imageAlt: "一张铺满地图、路线、筹码、封蜡与报告的指挥桌。",
      actions: [
        {
          href: pageRoutes["zh-Hans"].gameGuide,
          label: "游戏指南",
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
          label: "视角",
          text: "身在其位，所知有限。",
        },
        {
          label: "命令",
          text: "权、信、财、制、路，缺一皆受阻。",
        },
        {
          label: "社会",
          text: "人物与地方，各循其势。",
        },
        {
          label: "历史",
          text: "因果导向，不以剧本锁定。",
        },
      ],
    },
    intro: {
      kicker: "这是什么",
      title: "让历史社会在压力中继续运转。",
      body:
        "公开资料、地理水文、人物关系与制度条件被整理为可玩的章节。开局建立历史压力与人物处境；角色、群体与机构依其利益与资源行动，使无人干预的世界仍大体趋向历史，同时为有因有果的改变保留空间。",
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
        "A grand-strategy concept built around deep historical society simulation from a character's perspective: causal pressures keep an unattended world broadly historical, while authority, information, resources, institutions, and distance constrain every command.",
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
      {
        href: pageRoutes.en.gameGuide,
        label: "Game Guide",
        children: [
          { href: pageRoutes.en.gameGuide, label: "Guide Overview" },
          { href: pageRoutes.en.gameplay, label: "Gameplay" },
          { href: gameGuideArticlePath("en", "vision"), label: "Game Vision" },
          { href: gameGuideArticlePath("en", "design"), label: "Design Principles" },
          { href: gameGuideArticlePath("en", "systems"), label: "Systems Blueprint" },
        ],
      },
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
      eyebrow: "Deep Historical Society Simulation · Grand Strategy Direction",
      title: "社稷",
      quote: "Try the hand, and mend the broken sky.",
      quoteSource: "— Xin Qiji",
      copy:
        "Enter a historical society from a particular character's seat. Causal pressures keep the unattended world broadly historical without fixing it to a script; when you intervene, authority, information, resources, institutions, and distance still constrain every command. The project aims for a high-quality grand-strategy experience.",
      imageAlt:
        "A command table with layered maps, routes, tokens, wax seals, and reports.",
      actions: [
        {
          href: pageRoutes.en.gameGuide,
          label: "Game Guide",
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
          label: "Perspective",
          text: "Your office defines what you can know.",
        },
        {
          label: "Orders",
          text: "Authority, knowledge, means, institutions, and distance all matter.",
        },
        {
          label: "Society",
          text: "People and places follow pressures of their own.",
        },
        {
          label: "History",
          text: "Causally directed, never locked to a script.",
        },
      ],
    },
    intro: {
      kicker: "What It Is",
      title: "A historical society that keeps moving under pressure.",
      body:
        "Public sources, geography, waterways, relationships, and institutional conditions are shaped into playable chapters. The opening establishes historical pressures and character circumstances; people, groups, and institutions act from their interests and resources, keeping an unattended world broadly historical while leaving room for causally earned change.",
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
