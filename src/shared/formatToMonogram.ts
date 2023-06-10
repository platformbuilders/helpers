/**
 * Format string to monogram
 * @param value The string to be formatted
 * @returns The string formatted to monogram
 * @example
 * formatToMonogram('John') // J
 * formatToMonogram('John Doe') // JD
 * formatToMonogram('John Doe Due') // JDD
 * formatToMonogram('') // ''
 * formatToMonogram() // ''
 *
 */
export const formatToMonogram = (value: string): string => {
  if (!value) return '';

  return value
    .trim()
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();
};
