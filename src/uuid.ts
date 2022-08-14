import validate from "uuid-validate";
import { v4 } from "uuid";

export const PATTERN =
  "[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}";
const DELIMITER_UUID = "-";
export const removeHyphen = (uuid: string) =>
  uuid.split(DELIMITER_UUID).join("");
export const hyphenize = (id: string) => {
  if (validate(id)) {
    return "";
  }
  return [
    id.slice(0, 8),
    id.slice(8, 12),
    id.slice(12, 16),
    id.slice(16, 20),
    id.slice(20, 32),
  ].join(DELIMITER_UUID);
};

export const generateUUID = () => v4();
export const validateUUID = (id: string) => validate(id);
