type ItemMachineType = {
  id: number;
  img: string;
  name: string;
  title: string;
  text: string;
  text2: string;
};

import img1 from "@/../public/img/our-machines/our-machine-1.webp";
import img2 from "@/../public/img/our-machines/our-machine-2.webp";
import img3 from "@/../public/img/our-machines/our-machine-3.webp";
import img4 from "@/../public/img/our-machines/our-machine-4.webp";

export const listOurMachines: ItemMachineType[] = [
  {
    id: 1,
    img: img1.src,
    name: "Станок чпу (вакуумный стол)",
    title: "Станок чпу (вакуумный стол)",
    text: "Лучшие цены в Одессе на контурную резку и фрезеровку! Большой выбор материалов для обработки",
    text2: "от 15 грн. метр.пог.",
  },
  {
    id: 2,
    img: img2.src,
    name: "Гравировально-фрезерный станок с ЧПУ",
    title: "Гравировально-фрезерный станок с ЧПУ",
    text: "Фрезеровка 3Д фасадов для мебели, накладки на двери",
    text2: "Работает 24 часа 7 дней в неделю",
  },
  {
    id: 3,
    img: img3.src,
    name: "Станок плазменной резки металла",
    title: "Станок плазменной резки металла",
    text: "Лучшие цены на услуги резки металла",
    text2: "Резка металла от 1 мм до 25 мм",
  },
  {
    id: 4,
    img: img4.src,
    name: "Поворотная ось - 4D",
    title: "Поворотная ось - 4D",
    text: "Обработка тел вращения - 4D, производство балясин и объёмного резного декора",
    text2: "от 8$ дм2",
  },
];
