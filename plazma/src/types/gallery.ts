export enum GalleryTypeEnum {
  LAST_WORKS = "last-works",
  FORGING = "forging",
  INDUSTRIAL = "industrial",
  BRAZIERS = "braziers",
  METAL = "metal",
  STAIRS = "stairs",
  LETTERS = "letters",
  LOFT = "loft",
  GOAL = "goal",
  RAILING = "railing",
  METALDECOR = "metaldecor",
  ALUMINUM = "aluminum",
  BRASS = "brass",
  METALCUTTING = "metalcutting",
  DECORMETAL = "decormetal",
  FURNITURE = "furniture",
}

export interface GalleryItem {
  id: number;
  title: string;
  path: string;
}
