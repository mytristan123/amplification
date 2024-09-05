import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MemberProfileTitle } from "../memberProfile/MemberProfileTitle";

export const PictureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
