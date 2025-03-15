type ItemCalcOrderType = {
  id: number;
  name: string;
  price: string | null | undefined;
};

export const CalcOrderList: ItemCalcOrderType[] = [
  {
    id: 1,
    name: "1мм - 2мм",
    price: "30 грн м.пог. (2 грн. врезка)",
  },
  {
    id: 2,
    name: "3мм - 4мм",
    price: "35 грн м.пог. (3 грн. врезка)",
  },
  {
    id: 3,
    name: "5мм - 6мм",
    price: "45 грн м.пог. (4 грн. врезка)",
  },
  {
    id: 4,
    name: "7мм - 8мм",
    price: "50 грн м.пог. (5 грн. врезка)",
  },
  {
    id: 5,
    name: "9мм - 10мм",
    price: "55 грн м.пог. (8 грн. врезка)",
  },
  {
    id: 6,
    name: "11мм - 14мм",
    price: "75 грн м.пог. (10 грн. врезка)",
  },
  {
    id: 7,
    name: "15мм - 16мм",
    price: "100 грн м.пог. (20 грн. врезка)",
  },
  {
    id: 8,
    name: "17мм - 25мм",
    price: "150 грн м.пог. (50 грн. врезка с края)",
  },
];
