type OpenObjectType = Record<string, any>;

const isObject = (obj: object): boolean => {
  return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
};

export function softAssign(
  obj: OpenObjectType,
  keys: string[],
  value: any
): void {
  if (!isObject(obj)) throw new Error("obj must be an object");
  if (!Array.isArray(keys) || keys.length === 0)
    throw new Error("keys must be an Array with at least one element");

  const lastKeyIndex = keys.length - 1;
  for (let i = 0; i < lastKeyIndex; ++i) {
    const key = keys[i];
    if (!(key in obj)) {
      obj[key] = {};
    }
    obj = obj[key];
  }
  obj[keys[lastKeyIndex]] =
    obj[keys[lastKeyIndex]] !== undefined ? obj[keys[lastKeyIndex]] : value;
}
