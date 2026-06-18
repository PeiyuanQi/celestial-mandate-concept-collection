import { dataPackContent } from "./data-packs";
import { gameplayContent } from "./pages/gameplay";
import { homePageContent } from "./pages/home";
import { wikiContent } from "./pages/wiki";
import { type Locale, type SiteContent } from "./types";

export {
  defaultLocale,
  localeLabels,
  localeRoutes,
  pageRoutes,
} from "./routes";
export { supportedLocales } from "./types";
export type {
  DataPackContent,
  GameplayContent,
  GameplaySystem,
  GameplaySystemPoint,
  HomePageContent,
  Locale,
  SiteContent,
  SitePage,
  WikiContent,
} from "./types";

export const siteContent: Record<Locale, SiteContent> = {
  "zh-Hans": {
    ...homePageContent["zh-Hans"],
    gameplay: gameplayContent["zh-Hans"],
    dataPack: dataPackContent["zh-Hans"],
    wiki: wikiContent["zh-Hans"],
  },
  en: {
    ...homePageContent.en,
    gameplay: gameplayContent.en,
    dataPack: dataPackContent.en,
    wiki: wikiContent.en,
  },
};
