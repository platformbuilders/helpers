import { formatToMonogram } from '../shared/formatToMonogram';

describe('formatToMonogram tests', () => {
  it('should format to monogram', () => {
    const unformatted = 'John Doe';
    const formatted = formatToMonogram(unformatted);
    expect(formatted).toBe('JD');
  });
  it('should format to monogram with 3 words', () => {
    const unformatted = 'John Doe Due';
    const formatted = formatToMonogram(unformatted);
    expect(formatted).toBe('JDD');
  });
  it('should format to monogram when there is only one word', () => {
    const unformatted = 'John';
    const formatted = formatToMonogram(unformatted);
    expect(formatted).toBe('J');
  });
  it('should format to monogram when there is no word', () => {
    const unformatted = '';
    const formatted = formatToMonogram(unformatted);
    expect(formatted).toBe('');
  });
  it('should format to monogram when there is no word', () => {
    const unformatted = '';
    const formatted = formatToMonogram(unformatted);
    expect(formatted).toBe('');
  });
});
