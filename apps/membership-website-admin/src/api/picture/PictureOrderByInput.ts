import { SortOrder } from "../../util/SortOrder";

export type PictureOrderByInput = {
  caption?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  memberProfileId?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
