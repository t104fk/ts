import { toSingleByte } from "./string";

test("Converting Multi to Single test", () => {
  const sut = "ｗａｔｅｒ";
  const single = toSingleByte(sut);
  expect(single).toBe("water");
});
