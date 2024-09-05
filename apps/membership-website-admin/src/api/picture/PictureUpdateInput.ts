import { MemberProfileWhereUniqueInput } from "../memberProfile/MemberProfileWhereUniqueInput";

export type PictureUpdateInput = {
  caption?: string | null;
  memberProfile?: MemberProfileWhereUniqueInput | null;
  url?: string | null;
};
