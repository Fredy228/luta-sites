import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  SelectInput,
} from "react-admin";
import { GalleryTypeEnum } from "@/types/gallery";

const GalleryCreate = (props: any) => (
  <Create {...props} title={"Добавить картинку для сайта LutaPro"}>
    <SimpleForm>
      <ImageInput
        source="file"
        label="Выберете картинку"
        accept="image/*"
        name={"file"}
        placeholder={"Нажмите или перетяните картинку чтобы загрузить"}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput
        name={"title"}
        source="title"
        required={true}
        label={"Описание"}
      />
      <SelectInput
        source="type"
        required={true}
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
  </Create>
);

export default GalleryCreate;
