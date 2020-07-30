import { currencyParser } from '../currencyParser';

describe('currencyParser tests', () => {
  describe('with string', () => {
    it('should format currency properly if value has only letters', () => {
      const parsed = currencyParser('abc');
      expect(parsed).toBe('R$ 0,00');
    });
    it('should format currency properly if value has only letters and consider number of decimals', () => {
      const parsed = currencyParser('abc', 0);
      expect(parsed).toBe('R$ 0');
    });

    it('should format currency properly if value has letters and numbers', () => {
      const parsed = currencyParser('1k');
      expect(parsed).toBe('R$ 0,00');
    });

    it('should format currency properly if value is not there', () => {
      const parsed = currencyParser('');
      expect(parsed).toBe('R$ 0,00');
    });

    it('should format currency with negative string properly', () => {
      const parsed = currencyParser('-100.1');
      expect(parsed).toBe('R$ -100,10');
    });

    it('should format currency properly', () => {
      const parsed = currencyParser('-100');
      expect(parsed).toBe('R$ -100,00');
    });
  });

  describe('with number', () => {
    it('should format currency properly', () => {
      const parsed = currencyParser(100);
      expect(parsed).toBe('R$ 100,00');
    });

    it('should format currency properly if value is number', () => {
      const parsed = currencyParser(-100);
      expect(parsed).toBe('R$ -100,00');
    });
  });

  describe('with decimal', () => {
    it('should format currency properly if is 0', () => {
      const parsed = currencyParser('100', -1);
      expect(parsed).toBe('R$ 100,00');
    });

    it('should format currency properly if is 0', () => {
      const parsed = currencyParser('100', 0);
      expect(parsed).toBe('R$ 100');
    });

    it('should format currency properly if is 1', () => {
      const parsed = currencyParser(100, 1);
      expect(parsed).toBe('R$ 100,0');
    });
  });
});
