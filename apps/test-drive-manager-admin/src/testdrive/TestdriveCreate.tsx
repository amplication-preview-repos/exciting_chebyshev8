import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const TestdriveCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Attack Ran" source="attack_ran" />
        <TextInput label="Attack Results" multiline source="attack_results" />
        <BooleanInput label="Cleanup Ran" source="cleanup_ran" />
        <TextInput label="Cleanup Results" multiline source="cleanup_results" />
        <div />
        <div />
        <TextInput label="Name" source="name" />
        <TextInput label="Notes" multiline source="notes" />
        <ReferenceInput source="owner.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <BooleanInput label="Prep Ran" source="prep_ran" />
        <TextInput label="Prep Results" multiline source="prep_results" />
        <DateTimeInput label="Start Time" source="startTime" />
      </SimpleForm>
    </Create>
  );
};
