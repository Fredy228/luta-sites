import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  DeleteButton,
  FunctionField,
  DateField,
  BooleanField,
} from "react-admin";
import TypeFilterSms from "@/admin/sms-order/typeFilter";

const SmsOrderList = (props: any) => {
  return (
    <List
      {...props}
      title={"Список заявок сайта LutaPro"}
      filters={<TypeFilterSms />}
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

        <ShowButton label={""} />
      </Datagrid>
    </List>
  );
};

export default SmsOrderList;
