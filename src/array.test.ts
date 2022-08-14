import { swap, unique } from "./array";

test("Swapping test", () => {
  const sut = {
    en: "Water",
    ja: "水",
  };
  const swapped = swap(sut);
  expect(Object.keys(swapped).length).toBe(2);
  expect(swapped["Water"]).toBe("en");
  expect(swapped["水"]).toBe("ja");
});

test("Unique test", () => {
  const sut = [1, 2, 3, 1, "1"];
  const result = unique(sut);
  expect(result.length).toBe(4);
  expect(result[0]).toBe(1);
  expect(result[3]).toBe("1");
});
