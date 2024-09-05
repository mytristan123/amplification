import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MemberProfileTitle } from "../memberProfile/MemberProfileTitle";

export const PictureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="caption" source="caption" />
        <ReferenceInput
          source="memberProfile.id"
          reference="MemberProfile"
          label="MemberProfile"
        >
          <SelectInput optionText={MemberProfileTitle} />
        </ReferenceInput>
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
