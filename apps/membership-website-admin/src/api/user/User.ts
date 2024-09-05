import { MemberProfile } from "../memberProfile/MemberProfile";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  memberProfiles?: Array<MemberProfile>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
