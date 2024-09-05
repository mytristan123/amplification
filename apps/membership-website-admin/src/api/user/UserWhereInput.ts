import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MemberProfileListRelationFilter } from "../memberProfile/MemberProfileListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  memberProfiles?: MemberProfileListRelationFilter;
  username?: StringFilter;
};
