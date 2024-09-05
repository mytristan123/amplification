import { MemberProfile } from "../memberProfile/MemberProfile";

export type Picture = {
  caption: string | null;
  createdAt: Date;
  id: string;
  memberProfile?: MemberProfile | null;
  updatedAt: Date;
  url: string | null;
};
