export function stringToArray(
  source: string,
  criteria: string = ","
): string[] {
  if (typeof source !== "string") {
    throw new Error("Source must be a string");
  }
  return source
    .split(criteria)
    .map((x) => x.trim())
    .filter((x) => x !== "");
}
