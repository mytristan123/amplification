import { MemberProfile as TMemberProfile } from "../api/memberProfile/MemberProfile";

export const MEMBERPROFILE_TITLE_FIELD = "name";

export const MemberProfileTitle = (record: TMemberProfile): string => {
  return record.name?.toString() || String(record.id);
};
