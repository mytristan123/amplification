import { PictureCreateNestedManyWithoutMemberProfilesInput } from "./PictureCreateNestedManyWithoutMemberProfilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MemberProfileCreateInput = {
  age?: number | null;
  biography?: string | null;
  dateOfBirth?: Date | null;
  name?: string | null;
  pictures?: PictureCreateNestedManyWithoutMemberProfilesInput;
  user?: UserWhereUniqueInput | null;
};
