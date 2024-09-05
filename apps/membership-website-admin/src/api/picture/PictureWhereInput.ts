import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MemberProfileWhereUniqueInput } from "../memberProfile/MemberProfileWhereUniqueInput";

export type PictureWhereInput = {
  caption?: StringNullableFilter;
  id?: StringFilter;
  memberProfile?: MemberProfileWhereUniqueInput;
  url?: StringNullableFilter;
};
