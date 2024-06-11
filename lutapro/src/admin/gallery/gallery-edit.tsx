import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  ImageField,
  ImageInput,
} from "react-admin";
import { GalleryTypeEnum } from "@/types/gallery";

const GalleryEdit = (props: any) => (
  <Edit {...props} title={"Редактирование картинки сайта LutaPro"}>
    <SimpleForm>
      <ImageInput
        source="file"
        label="Выберете картинку чтобы заменить на новую"
        accept="image/jpeg, image/png, image/jpg, image/svg+xml, image/webp, image/svg"
        name={"file"}
        placeholder={"Нажмите или перетяните картинку чтобы загрузить"}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="title" />
      <SelectInput
        source="type"
        label={"Раздел"}
        name={"type"}
        choices={[
          { id: GalleryTypeEnum.LAST_WORKS, name: "Последние работы" },
          { id: GalleryTypeEnum.FREZEROVKA, name: "Фрезеровка" },
          { id: GalleryTypeEnum.REZBA, name: "Резьба" },
          { id: GalleryTypeEnum.PLAZMA, name: "Плазменная резка" },
          { id: GalleryTypeEnum.THREED_PANEL, name: "3D панели" },
        ]}
      />
    </SimpleForm>
  </Edit>
);

export default GalleryEdit;
