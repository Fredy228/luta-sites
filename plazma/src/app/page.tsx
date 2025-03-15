import Home from "@/screens/home/home";
import { GalleryTypeEnum } from "@/types/gallery";
import { getAllGallery } from "@/services/axios";

export default async function HomePage() {
  const { data } = await getAllGallery(GalleryTypeEnum.LAST_WORKS);
  return <Home galleryLastWork={data} />;
}
