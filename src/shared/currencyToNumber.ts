export const currencyToNumber = (currency: string): number =>
  parseFloat(currency.replace('R$', '').replace(/\./g, '').replace(/,/g, '.'));
