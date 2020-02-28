import {
  currencyParser,
  parseToThousands,
  toOnlyNumbers,
  removeWhiteSpaces,
} from '../stringFormatter';

describe('string formatter tests', () => {
  it('should format currency properly if value is not there', () => {
    const parsed = currencyParser('');
    expect(parsed).toBe('R$ 0,00');
  });
  it('should format currency properly', () => {
    const parsed = currencyParser('100');
    expect(parsed).toBe('R$ 100,00');
  });

  it('should format to only numbers properly', () => {
    const parsed = toOnlyNumbers('R1000');
    expect(parsed).toBe('1000');
  });

  it('should remove white spaces properly', () => {
    const parsed = removeWhiteSpaces(' 1 1 ');
    expect(parsed).toBe('11');
  });

  it('should parse to thousands', () => {
    const parsed = parseToThousands('1000');
    expect(parsed).toBe('1.000');
  });
  it('should parse to thousands if value is not there', () => {
    const parsed = parseToThousands('');
    expect(parsed).toBe('0');
  });
});
