export const addMaskToCardNumber = (lastDigits: string): string =>
  `**** **** **** ${lastDigits}`;
