export function isDifferent(firstValue: any, secondValue: any): boolean {
  return JSON.stringify(firstValue) !== JSON.stringify(secondValue);
}
