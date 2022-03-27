export const isKeyOf = <T extends {}>(
  key: PropertyKey,
  object: T
): key is keyof T => (
  key in object
);

export const safelyIndex = <T extends {}>(object: T, key: string) => {
  if (isKeyOf(key, object)) {
    return object[key];
  }
  return null;
};