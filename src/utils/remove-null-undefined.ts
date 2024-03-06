/**
 * Remove all null and undefined properties from an object
 */
export const removeNullUndefined = <T extends Record<string, any>>(obj: T) =>
  Object.entries(obj).reduce(
    (a: any, [k, v]) => (v == null ? a : ((a[k] = v), a)),
    {}
  ) as {
    [K in keyof T as T[K] extends null | undefined ? never : K]: T[K];
  };
