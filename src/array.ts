type Swappable = Record<string, string>;
export const swap = <T extends Swappable>(obj: T): Swappable =>
  Object.entries(obj).reduce((prev, [k, v]) => {
    prev[v] = k;
    return prev;
  }, {} as Swappable);
