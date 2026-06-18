import { type DataPackContent, type Locale } from "../types";
import { poZhenZiChapter } from "./po-zhen-zi";

export const dataPackContent: Record<Locale, DataPackContent> = {
  "zh-Hans": {
    kicker: "资料包",
    title: "按章节收束时代、地点、人物与系统。",
    body:
      "资料包是公开材料进入可玩结构的入口：时代范围、关键地点、势力关系、系统假设与来源笔记，在这里被整理成可迭代的章节。",
    heroImageAlt:
      "昏暗案头上摊开多组资料卡、地图卷与石质标记，像一座按章节整理的历史档案库。",
    chapter: poZhenZiChapter["zh-Hans"],
  },
  en: {
    kicker: "DLC",
    title: "Eras, places, people, and systems, gathered by chapter.",
    body:
      "DLC is the public entry point from research material into playable structure: era scope, key places, faction relationships, system assumptions, and source-note summaries gathered into chapters that can evolve.",
    heroImageAlt:
      "A dim tabletop with stacked source cards, map rolls, and stone markers arranged like a chaptered historical archive.",
    chapter: poZhenZiChapter.en,
  },
};
