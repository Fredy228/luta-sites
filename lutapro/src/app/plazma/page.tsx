import { GalleryTypeEnum } from "@/types/gallery";
import { getAllGallery } from "@/services/axios";
import Portfolio from "@/screens/portfolio/portfolio";

export default async function PlazmaPage() {
  const { data } = await getAllGallery(GalleryTypeEnum.PLAZMA);
  return <Portfolio title={"Плазменная резка"} galleryPortfolio={data} />;
}
