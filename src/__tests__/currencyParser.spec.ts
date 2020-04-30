import { currencyParser } from '../currencyParser';

describe('currencyParser tests', () => {
  it('should format currency properly if value is not there', () => {
    const parsed = currencyParser('');
    expect(parsed).toBe('R$ 0,00');
  });
  it('should format currency properly', () => {
    const parsed = currencyParser('100');
    expect(parsed).toBe('R$ 100,00');
  });
});
