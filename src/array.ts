type Swappable = Record<string, string>;
export const swap = <T extends Swappable>(obj: T) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
export const unique = <T>(arr: T[]) => [...new Set(arr)];
