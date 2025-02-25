type NavPortfolioType = {
  id: number;
  name: string;
  text: string;
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
    name: "Фрезеровка фанеры",
    text: "2D панели из влагостойкой фанеры",
    img: imgPortf_1.src,
    cols: 2,
    rows: 1,
    url: "/frezerovka",
  },
  {
    id: 2,
    name: "Плазменная резка",
    text: "Резка листовой стали",
    img: imgPortf_2.src,
    cols: 1,
    rows: 1,
    url: "/plazma",
  },
  {
    id: 3,
    name: "Резьба по дереву",
    text: "Резной декор в интерьере",
    img: imgPortf_3.src,
    cols: 1,
    rows: 1,
    url: "/rezba",
  },
  {
    id: 4,
    name: "Зеркала и рамы",
    text: "3Д багеты",
    img: imgPortf_4.src,
    cols: 1,
    rows: 1,
    url: "/mirror-frames",
  },
  {
    id: 5,
    name: "3Д панели",
    text: "Объёмные панели из МДФ и дерева",
    img: imgPortf_5.src,
    cols: 2,
    rows: 1,
    url: "/3dpanel",
  },
  {
    id: 6,
    name: "Лазерная резка",
    text: "Замена фрезеровке",
    img: imgPortf_6.src,
    cols: 1,
    rows: 1,
    url: "/laser-cutting",
  },
];
