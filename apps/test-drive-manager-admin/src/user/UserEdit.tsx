import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TestdriveTitle } from "../testdrive/TestdriveTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="testdrives.id"
          reference="Testdrive"
          label="Testdrives"
        >
          <SelectInput optionText={TestdriveTitle} />
        </ReferenceInput>
        <TextInput label="Timezone" source="timezone" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
