/**
 * Add mask to card number
 * @param lastDigits The last 4 digits of the card number
 * @returns The card number with mask
 * @example
 * addMaskToCardNumber('1234') // **** **** **** 1234
 * addMaskToCardNumber('12345678') // **** **** **** 5678
 * addMaskToCardNumber('1234567890123456') // **** **** **** 3456
 */
export const addMaskToCardNumber = (lastDigits: string): string => {
  if (!lastDigits) return '';
  return `**** **** **** ${lastDigits.slice(-4)}`;
};
