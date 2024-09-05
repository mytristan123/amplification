import { PictureUpdateManyWithoutMemberProfilesInput } from "./PictureUpdateManyWithoutMemberProfilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MemberProfileUpdateInput = {
  age?: number | null;
  biography?: string | null;
  dateOfBirth?: Date | null;
  name?: string | null;
  pictures?: PictureUpdateManyWithoutMemberProfilesInput;
  user?: UserWhereUniqueInput | null;
};
