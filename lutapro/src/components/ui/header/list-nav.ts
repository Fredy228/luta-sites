type ListNavType = {
  id: number;
  name: string;
  link: string;
};

export const listNavigation: ListNavType[] = [
  {
    id: 1,
    name: "Галерея",
    link: "gallery",
  },
  {
    id: 2,
    name: "Плазменная резка металла",
    link: "plasma-cutting",
  },
  {
    id: 3,
    name: "Фрезеровка 3D и 4D",
    link: "milling",
  },
  {
    id: 4,
    name: "Наши станки",
    link: "machines",
  },
  {
    id: 5,
    name: "Прайс-лист",
    link: "price",
  },
];
