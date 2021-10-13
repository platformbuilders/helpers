import { removeWhiteSpaces } from '../shared/removeWhiteSpaces';

describe('removeWhiteSpaces tests', () => {
  it('should remove white empty spaces properly', () => {
    const parsed = removeWhiteSpaces('');
    expect(parsed).toBe('');
  });

  it('should remove white spaces properly', () => {
    const parsed = removeWhiteSpaces(' 1 1 ');
    expect(parsed).toBe('11');
  });
});
