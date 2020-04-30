import { removeWhiteSpaces } from '../removeWhiteSpaces';

describe('removeWhiteSpaces tests', () => {
  it('should remove white spaces properly', () => {
    const parsed = removeWhiteSpaces(' 1 1 ');
    expect(parsed).toBe('11');
  });
});
