"use client";

import { type FC } from "react";
import dynamic from "next/dynamic";
import { Admin as AdminComponent, Resource } from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";
import { Layout } from "react-admin";

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
        show={GalleryShow}
        options={{
          label: "Галерея LutaPro",
        }}
      />
    </AdminComponent>
  );
};

export default Admin;
