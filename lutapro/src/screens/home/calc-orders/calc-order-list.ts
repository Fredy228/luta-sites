type ItemCalcOrderType = {
  id: number;
  name: string;
  price: number | null | undefined;
};

export const CalcOrderList: ItemCalcOrderType[] = [
  {
    id: 1,
    name: "Зеркало",
    price: 20,
  },
  {
    id: 2,
    name: "Заготовка",
    price: 150,
  },
  {
    id: 3,
    name: "Фрезеровка",
    price: 450,
  },
  {
    id: 4,
    name: "Подготовка под покраску",
    price: 35,
  },
  {
    id: 5,
    name: "Покраска изделия",
    price: 85,
  },
  {
    id: 6,
    name: "Упаковка плёнкой",
    price: null,
  },
  {
    id: 7,
    name: "Доставка",
    price: undefined,
  },
  {
    id: 8,
    name: "Установка",
    price: undefined,
  },
];
