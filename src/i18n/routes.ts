import { type Locale, type SitePage } from "./types";

export const defaultLocale: Locale = "zh-Hans";

export const localeRoutes: Record<Locale, string> = {
  "zh-Hans": "/",
  en: "/en/",
};

export const pageRoutes: Record<Locale, Record<SitePage, string>> = {
  "zh-Hans": {
    home: "/",
    gameGuide: "/game-guide/",
    gameplay: "/gameplay/",
    dataPacks: "/data-packs/",
    chapterOne: "/data-packs/po-zhen-zi/",
    wiki: "/wiki/",
  },
  en: {
    home: "/en/",
    gameGuide: "/en/game-guide/",
    gameplay: "/en/gameplay/",
    dataPacks: "/en/data-packs/",
    chapterOne: "/en/data-packs/po-zhen-zi/",
    wiki: "/en/wiki/",
  },
};

export const gameGuideArticlePath = (locale: Locale, slug: string) =>
  `${pageRoutes[locale].gameGuide}${slug}/`;

export const localeLabels: Record<Locale, string> = {
  "zh-Hans": "中文",
  en: "English",
};
