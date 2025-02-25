import { GalleryTypeEnum } from "@/types/gallery";
import { getAllGallery } from "@/services/axios";
import Portfolio from "@/screens/portfolio/portfolio";

export default async function LaserPage() {
  const { data } = await getAllGallery(GalleryTypeEnum.LASER_CUTTING);
  return <Portfolio title={"Лазерная резка"} galleryPortfolio={data} />;
}
