import { Picture } from "../picture/Picture";
import { User } from "../user/User";

export type MemberProfile = {
  age: number | null;
  biography: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  id: string;
  name: string | null;
  pictures?: Array<Picture>;
  updatedAt: Date;
  user?: User | null;
};
