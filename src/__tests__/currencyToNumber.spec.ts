import { currencyToNumber } from '../shared/currencyToNumber';

describe('currencyToNumber tests', () => {
  it('should parse to thousands', () => {
    const parsed = currencyToNumber('R$ 1000,00');
    expect(parsed).toBe(1000);
  });
  it('should parse to thousands with decimals', () => {
    const parsed = currencyToNumber('R$ 1000,10');
    expect(parsed).toBe(1000.1);
  });
  it('must analyze for millions', () => {
    const parsed = currencyToNumber('R$ 1.000.000,00');
    expect(parsed).toBe(1000000);
  });
  it('must analyze for millions with decimals', () => {
    const parsed = currencyToNumber('R$ 1.000.000,50');
    expect(parsed).toBe(1000000.5);
  });
});
