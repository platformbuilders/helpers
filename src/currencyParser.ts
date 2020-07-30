const regex = /^-?\d+(.\d+)?$/;
const NUMBER_OF_DECIMAL_PLACES_DEFAULT = 2;

export const currencyParser = (
  value: string | number,
  numberOfDecimalPlaces = NUMBER_OF_DECIMAL_PLACES_DEFAULT,
): string => {
  let formatValue = value;
  const isValidValue = regex.test(String(value));
  const decimals =
    numberOfDecimalPlaces < 0
      ? NUMBER_OF_DECIMAL_PLACES_DEFAULT
      : numberOfDecimalPlaces;

  if (!isValidValue) {
    formatValue = 0;
  }

  const withDecimalValue = Number(formatValue)
    .toFixed(decimals)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+,)/g, '$1.');

  return `R$ ${withDecimalValue}`;
};
