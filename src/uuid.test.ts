import { generateUUID, validateUUID } from "./uuid";

test("Converting Multi to Single test", () => {
  expect(validateUUID(generateUUID())).toBe(true);
});
