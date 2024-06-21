import {
  List,
  TextField,
  ShowButton,
  FunctionField,
  DateField,
  BooleanField,
  Datagrid,
} from "react-admin";
import TypeFilterSms from "@/admin/sms-order/typeFilter";

const SmsOrderList = (props: any) => {
  return (
    <List
      {...props}
      filters={<TypeFilterSms />}
      title={"Список заявок сайта LutaPro"}
    >
      <Datagrid>
        <TextField source="id" />
        <TextField source="email" label={"Email"} />
        <TextField source="name" label={"Имя"} />
        <TextField source="phone" label={"Номер телефона"} />
        <FunctionField
          source="file"
          label={"Файл"}
          render={(record: any) => `${record?.file?.name_file || "-"}`}
        />
        <DateField source="createAt" label={"Дата"} />
        <BooleanField
          source="message"
          label={"Комментарий"}
          looseValue={true}
        />

        <ShowButton label={""} title={"Показать"} />
      </Datagrid>
    </List>
  );
};

export default SmsOrderList;
