import { MemberProfileWhereUniqueInput } from "../memberProfile/MemberProfileWhereUniqueInput";

export type PictureCreateInput = {
  caption?: string | null;
  memberProfile?: MemberProfileWhereUniqueInput | null;
  url?: string | null;
};
