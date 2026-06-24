import { type Locale, type WikiContent } from "../types";

export const wikiContent: Record<Locale, WikiContent> = {
  "zh-Hans": {
    kicker: "维基",
    title: "社稷中文维基",
    body:
      "按资料片浏览已有百科文件：人物、事件、地点、时间线和地图数据说明都从相邻研究库同步，保持可检索、可追溯。",
    heroImageAlt:
      "皇史宬式砖石档案库里，木架、册匣、黄册与案牍在灯下层层排开。",
    navAriaLabel: "维基词条导航",
    readerAriaLabel: "维基正文",
    searchLabel: "搜索",
    searchPlaceholder: "搜索词条、文件名或摘要",
    entryCountLabel: "个词条",
    sourceLabel: "来源",
    loadingLabel: "正在载入词条",
    emptyLabel: "没有匹配词条",
  },
  en: {
    kicker: "Wiki",
    title: "Celestial Mandate Wiki",
    body:
      "Browse existing encyclopedia files by DLC: people, events, places, timelines, and map-data notes are synced from the adjacent research archive and kept searchable.",
    heroImageAlt:
      "A Huangshicheng-style imperial archive with stone vaults, wooden shelves, register bundles, and dossiers under warm lamplight.",
    navAriaLabel: "Wiki entry navigation",
    readerAriaLabel: "Wiki article",
    searchLabel: "Search",
    searchPlaceholder: "Search entries, filenames, or excerpts",
    entryCountLabel: "entries",
    sourceLabel: "Source",
    loadingLabel: "Loading entry",
    emptyLabel: "No matching entries",
  },
};
