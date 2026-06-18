import { type Chapter, type Locale } from "../types";

export const poZhenZiChapter: Record<Locale, Chapter> = {
  "zh-Hans": {
    kicker: "第一章",
    title: "第一章：破阵子",
    body:
      "第一段切片，以弘光朝廷与江北四镇为中心：南京、镇江、扬州、淮安，长江与大运河，军镇与士绅网络，供给焦虑，以及那些很少及时抵达、也很少让决策变得干净的奏报。",
    heroImageAlt:
      "南明江防案头摆着势力旗与江南地图，远处江面舟帆穿过燃烧城池的烟火。",
    points: ["角色席位", "命令封包", "回报循环", "江北军镇"],
  },
  en: {
    kicker: "Chapter One",
    title: "Chapter One: Po Zhen Zi (破阵子)",
    body:
      "The first slice centers on the Hongguang court and the Jiangbei Four Towns: Nanjing, Zhenjiang, Yangzhou, Huai'an, the Yangtze and the Grand Canal, military governors and gentry networks, supply anxiety, and reports that rarely arrive in time or make decisions clean.",
    heroImageAlt:
      "A Southern Ming riverside command table with faction flags and a Jiangnan map, while sails cross the river before a burning city.",
    points: [
      "Character seats",
      "Command packets",
      "Report loops",
      "Jiangbei garrisons",
    ],
  },
};
