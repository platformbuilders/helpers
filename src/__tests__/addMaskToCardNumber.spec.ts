import { addMaskToCardNumber } from '../shared/addMaskToCardNumber';

const expected = '**** **** **** 1234';

describe('addMaskToCardNumber tests', () => {
  it('should format using last 4 numbers', () => {
    const unformatted = '1234';
    const formatted = addMaskToCardNumber(unformatted);
    expect(formatted).toBe(expected);
  });
  it('should normalize when some formatting already exists', () => {
    const unformatted = '56272 23213 32831 21234';
    const formatted = addMaskToCardNumber(unformatted);
    expect(formatted).toBe(expected);
  });
});
