import { currencyToNumber } from '../currencyToNumber';

describe('currencyToNumber tests', () => {
  it('should parse to thousands', () => {
    const parsed = currencyToNumber('R$ 1000,00');
    expect(parsed).toBe(1000);
  });
  it('should parse to thousands with decimals', () => {
    const parsed = currencyToNumber('R$ 1000,10');
    expect(parsed).toBe(1000.1);
  });
});
