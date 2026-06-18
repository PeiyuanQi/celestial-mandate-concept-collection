import { type Locale, type WikiContent } from "../types";

export const wikiContent: Record<Locale, WikiContent> = {
  "zh-Hans": {
    kicker: "维基",
    title: "像战争策略游戏维基一样拆开可查询对象。",
    body:
      "维基区用于列举人物、地点、术语与系统，让设计笔记、资料包和历史输入可以互相引用，而不是散落在单篇说明里。",
    heroImageAlt:
      "暗色档案桌面上整齐排列人物、地点、术语与系统卡片，细线把可查询条目连接起来。",
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
  en: {
    kicker: "Wiki",
    title: "A strategy-wiki style index for things you can look up.",
    body:
      "The wiki area lists characters, places, terms, and systems so design notes, DLC, and historical inputs can reference each other instead of living as isolated essays.",
    heroImageAlt:
      "A dark archive desk with orderly cards for characters, places, terms, and systems, linked by fine index lines.",
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
};
