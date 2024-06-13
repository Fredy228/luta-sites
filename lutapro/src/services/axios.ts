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

export const sendSmsOrder = async (body: {
  file?: File;
  phone: string;
  name: string;
  message?: string;
  email: string;
}) => {
  const formData = new FormData();
  if (body.file) formData.append("file", body.file);
  if (body.message) formData.append("message", body.message);
  formData.append("phone", body.phone);
  formData.append("name", body.name);
  formData.append("email", body.email);

  await axios.post("/api/sms-order-luta", formData);
};
