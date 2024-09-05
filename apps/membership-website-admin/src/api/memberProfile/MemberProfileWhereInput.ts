import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PictureListRelationFilter } from "../picture/PictureListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MemberProfileWhereInput = {
  age?: IntNullableFilter;
  biography?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  pictures?: PictureListRelationFilter;
  user?: UserWhereUniqueInput;
};
