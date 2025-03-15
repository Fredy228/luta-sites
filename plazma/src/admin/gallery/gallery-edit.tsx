import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  ImageField,
  ImageInput,
} from "react-admin";
import { listSelectGallery } from "@/admin/gallery/list-select";

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
        choices={listSelectGallery}
      />
    </SimpleForm>
  </Edit>
);

export default GalleryEdit;
