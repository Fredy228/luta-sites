"use client";

import { type FC } from "react";
import dynamic from "next/dynamic";
import { Admin as AdminComponent, Resource } from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";
import { Layout } from "react-admin";
import CollectionsIcon from "@mui/icons-material/Collections";

import dataProvider from "./dataProvider";
import authProvider from "@/admin/authProvider";

const GalleryCreate = dynamic(() => import("./gallery/create-gallery"), {
  ssr: false,
});
const GalleryList = dynamic(() => import("./gallery/list-gallery"), {
  ssr: false,
});
const GalleryShow = dynamic(() => import("./gallery/show-gallery"), {
  ssr: false,
});
const GalleryEdit = dynamic(() => import("./gallery/gallery-edit"), {
  ssr: false,
});
const SmsOrderList = dynamic(() => import("./sms-order/list-sms-order"), {
  ssr: false,
});
const SmsOrderShow = dynamic(() => import("./sms-order/show-sms-order"), {
  ssr: false,
});

export const MyLayout = (props: any) => (
  <>
    <Layout {...props} />
    <ReactQueryDevtools initialIsOpen={false} />
  </>
);

const Admin: FC = () => {
  return (
    <AdminComponent
      requireAuth
      dataProvider={dataProvider}
      authProvider={authProvider}
      layout={MyLayout}
    >
      <Resource
        name="gallery-luta"
        list={GalleryList}
        create={GalleryCreate}
        edit={GalleryEdit}
        show={GalleryShow}
        icon={CollectionsIcon}
        options={{
          label: "Галерея Plazma",
        }}
      />
      <Resource
        name="sms-order-luta"
        list={SmsOrderList}
        show={SmsOrderShow}
        options={{
          label: "Заявки Plazma",
        }}
      />
    </AdminComponent>
  );
};

export default Admin;
