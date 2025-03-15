import { GalleryTypeEnum } from "@/types/gallery";

type NavPortfolioType = {
  id: number;
  name: string;
  text?: string;
  img: string;
  url: string;
  cols: number;
  rows: number;
};

import imgPortf_1 from "@/../public/img/nav-portfolio/nav-portf-1.webp";
import imgPortf_2 from "@/../public/img/nav-portfolio/nav-portf-2.webp";
import imgPortf_3 from "@/../public/img/nav-portfolio/nav-portf-3.webp";
import imgPortf_4 from "@/../public/img/nav-portfolio/nav-portf-4.webp";
import imgPortf_5 from "@/../public/img/nav-portfolio/nav-portf-5.webp";
import imgPortf_6 from "@/../public/img/nav-portfolio/nav-portf-6.webp";

export const ListNavPortfolio: NavPortfolioType[] = [
  {
    id: 1,
    name: "Лестницы из металла",
    text: "Каркасы косоуры из листовой стали",
    img: imgPortf_1.src,
    cols: 2,
    rows: 1,
    url: `/${GalleryTypeEnum.STAIRS}`,
  },
  {
    id: 2,
    name: "Вывески и таблички",
    text: "Буквы из металла",
    img: imgPortf_2.src,
    cols: 1,
    rows: 1,
    url: `/${GalleryTypeEnum.LETTERS}`,
  },
  {
    id: 3,
    name: "Стиль Лофт",
    text: "Резка COR-TEN, сварка",
    img: imgPortf_3.src,
    cols: 1,
    rows: 1,
    url: `/${GalleryTypeEnum.LOFT}`,
  },
  {
    id: 4,
    name: "Ворота и калитки",
    text: "Двери, флюгера",
    img: imgPortf_4.src,
    cols: 1,
    rows: 1,
    url: `/${GalleryTypeEnum.GOAL}`,
  },
  {
    id: 5,
    name: "Ограждение пламенной резки",
    text: "Сетки, узоры и декор в ограждениях",
    img: imgPortf_5.src,
    cols: 2,
    rows: 1,
    url: `/${GalleryTypeEnum.RAILING}`,
  },
  {
    id: 6,
    name: "Декор из металла",
    img: imgPortf_6.src,
    cols: 1,
    rows: 1,
    url: `/${GalleryTypeEnum.METALDECOR}`,
  },
];
