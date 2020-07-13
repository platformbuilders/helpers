import { toOnlyNumbers } from '../toOnlyNumbers';

describe('toOnlyNumbers tests', () => {
  it('should format to string empty properly', () => {
    const parsed = toOnlyNumbers('');
    expect(parsed).toBe('');
  });

  it('should format to only space empty properly', () => {
    const parsed = toOnlyNumbers(' ');
    expect(parsed).toBe('');
  });

  it('should format to only string properly', () => {
    const parsed = toOnlyNumbers('ABC');
    expect(parsed).toBe('');
  });

  it('should format to some strings and numbers properly', () => {
    const parsed = toOnlyNumbers('A1B2C3');
    expect(parsed).toBe('123');
  });

  it('should format to some strings, numbers and special characters properly', () => {
    const parsed = toOnlyNumbers('@A1!B2,C3-');
    expect(parsed).toBe('123');
  });

  it('should format to only numbers properly', () => {
    const parsed = toOnlyNumbers('R1000');
    expect(parsed).toBe('1000');
  });
});
