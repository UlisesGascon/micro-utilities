export function stringToArray(
  source: string,
  criteria: string = ","
): string[] {
  return source
    .split(criteria)
    .map((x) => x.trim())
    .filter((x) => x !== "");
}
