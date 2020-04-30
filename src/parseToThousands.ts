import Numeral from 'numeral';

export const parseToThousands = (value: string): string => {
  if (!value) {
    return '0';
  }

  return Numeral(value)
    .format('0,0')
    .replace(',', '.');
};
