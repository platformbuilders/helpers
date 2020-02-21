import Numeral from 'numeral';
import { Metrics } from '../@types/metrics';

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

export const parseToThousands = (value: string, metrics: Metrics): string => {
  if (!value) {
    return '0';
  }

  return Numeral(value)
    .format(metrics.screenWidth <= 320 ? '0a' : '0,0')
    .replace(',', '.');
};

export const toOnlyNumbers = (param: string): string => {
  if (!param) return '';

  return param.replace(/\D/g, '');
};

export const removeWhiteSpaces = (param: string): string => {
  if (!param) return '';

  return param.replace(/\s/g, '');
};