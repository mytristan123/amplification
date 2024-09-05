import { MemberProfileWhereInput } from "./MemberProfileWhereInput";
import { MemberProfileOrderByInput } from "./MemberProfileOrderByInput";

export type MemberProfileFindManyArgs = {
  where?: MemberProfileWhereInput;
  orderBy?: Array<MemberProfileOrderByInput>;
  skip?: number;
  take?: number;
};
