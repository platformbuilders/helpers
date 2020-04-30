export const currencyParser = (
  value: string,
  numberOfDecimalPlaces = 2,
): string => {
  if (!value) {
    return 'R$ 0,00';
  }

  const withDecimalValue = Number(value)
    .toFixed(numberOfDecimalPlaces)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+,)/g, '$1.');

  return `R$ ${withDecimalValue}`;
};
