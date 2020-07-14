const regex = /^-?\d+(.\d+)?$/;
const NUMBER_OF_DECIMAL_PLACES_DEFAULT = 2;

export const currencyParser = (
  value: string | number,
  numberOfDecimalPlaces = NUMBER_OF_DECIMAL_PLACES_DEFAULT,
): string => {
  const isValidValue = regex.test(String(value));
  const decimals =
    numberOfDecimalPlaces < 0
      ? NUMBER_OF_DECIMAL_PLACES_DEFAULT
      : numberOfDecimalPlaces;

  if (!isValidValue) {
    return 'R$ 0,00';
  }

  const withDecimalValue = Number(value)
    .toFixed(decimals)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+,)/g, '$1.');

  return `R$ ${withDecimalValue}`;
};
