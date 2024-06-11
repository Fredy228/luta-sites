export enum GalleryTypeEnum {
  REZBA = "rezba",
  PLAZMA = "plazma",
  LAST_WORKS = "last-works",
  FREZEROVKA = "frezerovka",
  THREED_PANEL = "3dpanel",
}

export interface GalleryItem {
  id: number;
  title: string;
  path: string;
}
