import { GalleryTypeEnum } from "@/types/gallery";
import { getAllGallery } from "@/services/axios";
import Portfolio from "@/screens/portfolio/portfolio";

export default async function FrezerovkaPage() {
  const { data } = await getAllGallery(GalleryTypeEnum.FREZEROVKA);
  return <Portfolio title={"Фрезеровка"} galleryPortfolio={data} />;
}
