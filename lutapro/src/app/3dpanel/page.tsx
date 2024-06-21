import { GalleryTypeEnum } from "@/types/gallery";
import { getAllGallery } from "@/services/axios";
import Portfolio from "@/screens/portfolio/portfolio";

export default async function ThreeDPanelPage() {
  const data = await getAllGallery(GalleryTypeEnum.THREED_PANEL);
  return <Portfolio title={"2D/3D Панели"} galleryPortfolio={data} />;
}
