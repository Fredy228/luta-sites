import { GalleryTypeEnum } from "@/types/gallery";
import { getAllGallery } from "@/services/axios";
import Portfolio from "@/screens/portfolio/portfolio";

export default async function FramesPage() {
  const { data } = await getAllGallery(GalleryTypeEnum.MIRROR_FRAMES);
  return <Portfolio title={"Зеркала и рамы"} galleryPortfolio={data} />;
}
