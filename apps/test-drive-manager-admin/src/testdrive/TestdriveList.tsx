import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TestdriveList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Testdrives"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Attack Ran" source="attack_ran" />
        <TextField label="Attack Results" source="attack_results" />
        <BooleanField label="Cleanup Ran" source="cleanup_ran" />
        <TextField label="Cleanup Results" source="cleanup_results" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created Users" source="created_users" />
        <TextField label="Errors" source="errors" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Notes" source="notes" />
        <ReferenceField label="Owner" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Prep Ran" source="prep_ran" />
        <TextField label="Prep Results" source="prep_results" />
        <TextField label="Start Time" source="startTime" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
