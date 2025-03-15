export type ListNavType = {
  id: number;
  name: string;
  link: string;
};

export const listNavigationMain: ListNavType[] = [
  {
    id: 1,
    name: "Галерея",
    link: "gallery",
  },
  {
    id: 5,
    name: "Прайс-лист",
    link: "price",
  },
  {
    id: 2,
    name: "Способы применения",
    link: "usage",
  },
  {
    id: 3,
    name: "Отправка файлов на просчет",
    link: "calc",
  },
  {
    id: 4,
    name: "Карта",
    link: "contacts",
  },
];

export const listNavigationPortfolio: ListNavType[] = [
  {
    id: 1,
    name: "Портфолио",
    link: "gallery",
  },
  {
    id: 2,
    name: "Отправить на просчет",
    link: "calc",
  },
  {
    id: 3,
    name: "Карта и контакты",
    link: "contacts",
  },
];
