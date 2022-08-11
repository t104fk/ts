import { swap } from "./array";

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
