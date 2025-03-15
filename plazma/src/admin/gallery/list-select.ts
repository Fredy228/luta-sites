import { GalleryTypeEnum } from "@/types/gallery";

export const listSelectGallery: Array<{ id: GalleryTypeEnum; name: string }> = [
  { id: GalleryTypeEnum.LAST_WORKS, name: "Последние работы" },
  { id: GalleryTypeEnum.FORGING, name: "Элементы ковки" },
  { id: GalleryTypeEnum.INDUSTRIAL, name: "Промышленные изделия" },
  { id: GalleryTypeEnum.BRAZIERS, name: "Мангалы и ножи" },
  { id: GalleryTypeEnum.METAL, name: "Резка толстого металла" },
  { id: GalleryTypeEnum.STAIRS, name: "Лестницы из металла" },
  { id: GalleryTypeEnum.LETTERS, name: "Вывески и буквы из металла" },
  { id: GalleryTypeEnum.LOFT, name: "Стиль Лофт" },
  { id: GalleryTypeEnum.GOAL, name: "Ворота, калитки, двери, флюгера" },
  { id: GalleryTypeEnum.RAILING, name: "Ограждения плазменной резки" },
  { id: GalleryTypeEnum.METALDECOR, name: "Декор из металла" },
  { id: GalleryTypeEnum.ALUMINUM, name: "Резка алюминия" },
  { id: GalleryTypeEnum.BRASS, name: "Резка цветных металлов" },
  { id: GalleryTypeEnum.METALCUTTING, name: "Резка металла" },
  {
    id: GalleryTypeEnum.DECORMETAL,
    name: "Декоративные накладки из металла",
  },
  {
    id: GalleryTypeEnum.FURNITURE,
    name: "Мебель из металла",
  },
];
