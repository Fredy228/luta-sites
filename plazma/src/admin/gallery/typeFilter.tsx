import React from "react";
import { SelectInput, Filter, TextInput } from "react-admin";
import { GalleryTypeEnum } from "@/types/gallery";
import { listSelectGallery } from "./list-select";

const TypeFilter = (props: any) => (
  <Filter {...props}>
    <SelectInput
      name={"type"}
      label="Раздел"
      source="type"
      choices={listSelectGallery}
      defaultValue={GalleryTypeEnum.LAST_WORKS}
    />
    <TextInput name={"title"} source="title" label={"Описание"} />
  </Filter>
);

export default TypeFilter;
