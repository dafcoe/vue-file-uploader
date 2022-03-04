export function getSizeWithUnit(bytes: number, decimals: number | null = null): string {
  if (bytes === 0) return '0 B';

  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const kilo = 1024;
  const fractionDigits = Math.max((decimals || 0), 0);

  const index = Math.floor(Math.log(bytes) / Math.log(kilo));
  const sizeWithoutUnit = parseFloat((bytes / Math.pow(kilo, index)).toFixed(fractionDigits));

  return `${sizeWithoutUnit} ${units[index]}`;
}
