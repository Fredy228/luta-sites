import { GalleryTypeEnum } from "@/types/gallery";
import { getAllGallery } from "@/services/axios";
import Portfolio from "@/screens/portfolio/portfolio";

export default async function RezbaPage() {
  const { data } = await getAllGallery(GalleryTypeEnum.REZBA);
  return <Portfolio title={"Резьба по дереву"} galleryPortfolio={data} />;
}
