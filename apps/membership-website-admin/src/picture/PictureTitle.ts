import { Picture as TPicture } from "../api/picture/Picture";

export const PICTURE_TITLE_FIELD = "caption";

export const PictureTitle = (record: TPicture): string => {
  return record.caption?.toString() || String(record.id);
};
