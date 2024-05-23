type GalleryItemType = {
  id: number;
  img: string;
  name?: string;
};

import gallery from "@/../public/img/gallery/gallery.webp";
import gallery1 from "@/../public/img/gallery/gallery-1.webp";
import gallery2 from "@/../public/img/gallery/gallery-2.webp";
import gallery3 from "@/../public/img/gallery/gallery-3.webp";
import gallery4 from "@/../public/img/gallery/gallery-4.webp";
import gallery5 from "@/../public/img/gallery/gallery-5.webp";
import gallery6 from "@/../public/img/gallery/gallery-6.webp";
import gallery7 from "@/../public/img/gallery/gallery-7.webp";
import gallery8 from "@/../public/img/gallery/gallery-8.webp";
import gallery9 from "@/../public/img/gallery/gallery-9.webp";
import gallery10 from "@/../public/img/gallery/gallery-10.webp";
import gallery11 from "@/../public/img/gallery/gallery-11.webp";
import gallery12 from "@/../public/img/gallery/gallery-12.webp";

export const galleryList: GalleryItemType[] = [
  {
    id: 1,
    img: gallery.src,
  },
  {
    id: 2,
    img: gallery1.src,
  },
  {
    id: 3,
    img: gallery2.src,
  },
  {
    id: 4,
    img: gallery3.src,
  },
  {
    id: 5,
    img: gallery4.src,
  },
  {
    id: 6,
    img: gallery5.src,
  },
  {
    id: 7,
    img: gallery6.src,
  },
  {
    id: 8,
    img: gallery7.src,
  },
  {
    id: 9,
    img: gallery8.src,
  },
  {
    id: 10,
    img: gallery9.src,
  },
  {
    id: 11,
    img: gallery10.src,
  },
  {
    id: 12,
    img: gallery11.src,
  },
  {
    id: 13,
    img: gallery12.src,
  },
];
