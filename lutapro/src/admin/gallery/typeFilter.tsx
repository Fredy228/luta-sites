import React from "react";
import { SelectInput, Filter, TextInput } from "react-admin";
import { GalleryTypeEnum } from "@/types/gallery";

const typeChoices = [
  { id: GalleryTypeEnum.LAST_WORKS, name: "Последние работы" },
  { id: GalleryTypeEnum.FREZEROVKA, name: "Фрезеровка" },
  { id: GalleryTypeEnum.REZBA, name: "Резьба" },
  { id: GalleryTypeEnum.PLAZMA, name: "Плазменная резка" },
  { id: GalleryTypeEnum.THREED_PANEL, name: "3D панели" },
];

const TypeFilter = (props: any) => (
  <Filter {...props}>
    <SelectInput
      name={"type"}
      label="Раздел"
      source="type"
      choices={typeChoices}
      defaultValue={GalleryTypeEnum.LAST_WORKS}
    />
    <TextInput name={"title"} source="title" label={"Описание"} />
  </Filter>
);

export default TypeFilter;
