import { parseToThousands } from '../parseToThousands';

describe('parseToThousands tests', () => {
  it('should parse to thousands', () => {
    const parsed = parseToThousands('1000');
    expect(parsed).toBe('1.000');
  });
  it('should parse to thousands if value is not there', () => {
    const parsed = parseToThousands('');
    expect(parsed).toBe('0');
  });
});
