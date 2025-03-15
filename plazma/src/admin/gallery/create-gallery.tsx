import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  SelectInput,
} from "react-admin";
import { listSelectGallery } from "@/admin/gallery/list-select";

const GalleryCreate = (props: any) => (
  <Create
    {...props}
    title={"Добавить картинку для сайта Plazma"}
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
        choices={listSelectGallery}
      />
    </SimpleForm>
  </Create>
);

export default GalleryCreate;
