import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TestdriveTitle } from "../testdrive/TestdriveTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
