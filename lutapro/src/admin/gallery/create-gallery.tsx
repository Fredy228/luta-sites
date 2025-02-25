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
  <Create
    {...props}
    title={"Добавить картинку для сайта LutaPro"}
    redirect="list"
  >
    <SimpleForm>
      <ImageInput
        source="file"
        label="Выберете картинку"
        accept="image/jpeg, image/png, image/jpg, image/svg+xml, image/webp, image/svg"
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
          { id: GalleryTypeEnum.LASER_CUTTING, name: "Лазерная резка" },
          { id: GalleryTypeEnum.MIRROR_FRAMES, name: "Зеркала и рамы" },
        ]}
      />
    </SimpleForm>
  </Create>
);

export default GalleryCreate;
