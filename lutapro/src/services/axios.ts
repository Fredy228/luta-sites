import axios from "axios";
import { GalleryItem, GalleryTypeEnum } from "@/types/gallery";

const baseURL = process.env.SERVER_URL!;

axios.defaults.baseURL = baseURL;

export const getAllGallery = async (
  type: GalleryTypeEnum,
): Promise<GalleryItem[]> => {
  const params = new URLSearchParams({
    filter: JSON.stringify({ type: GalleryTypeEnum.LAST_WORKS }),
  });

  console.log("fetch", `${baseURL}/api/gallery-luta?${String(params)}`);

  const data = await fetch(`${baseURL}/api/gallery-luta?${String(params)}`, {
    next: {
      revalidate: 60,
    },
  });

  return data.json();
};
