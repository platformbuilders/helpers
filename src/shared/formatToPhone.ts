import { toOnlyNumbers } from './toOnlyNumbers';

/**
 * Converts a number to a phone number format
 * @param unformatted The number to be formatted
 * @returns The formatted number
 * @example
 *  numberToPhone('11999999999') // (11) 99999-9999
 * numberToPhone('11 99999-9999') // (11) 99999-9999
 * numberToPhone('11 99999 9999') // (11) 99999-9999
 * numberToPhone('11 999999999') // (11) 99999-9999
 *
 */
export const formatToPhone = (unformatted: string): string => {
  const cleaned = toOnlyNumbers(unformatted);
  return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
};
