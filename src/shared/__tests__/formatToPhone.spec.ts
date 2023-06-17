import { formatToPhone } from '../formatToPhone';

const expected = '(11) 99999-8888';

describe('formatToPhone tests', () => {
  it('should format when all sequenced numbers', () => {
    const unformatted = '11999998888';
    const formatted = formatToPhone(unformatted);
    expect(formatted).toBe(expected);
  });
  it('should normalize when some formatting already exists', () => {
    const unformatted = '(11) 999998888';
    const formatted = formatToPhone(unformatted);
    expect(formatted).toBe(expected);
  });
});
