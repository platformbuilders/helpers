import { formatToBase64 } from '../shared/base64';

describe('base64 helpers tests', () => {
  it('should return a formatted string when no string sent', () => {
    // given
    const stringTest = 'iVBORw0KGgoAAAANSUhEUgAAAyEAAAJ';
    const expected = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyEAAAJ';
    // when
    const formatted = formatToBase64(stringTest);
    // then
    expect(formatted).toBe(expected);
  });

  it('should return an empty string when no string sent', () => {
    // given
    const stringTest = '';
    const expected = '';
    // when
    const formatted = formatToBase64(stringTest);
    // then
    expect(formatted).toBe(expected);
  });
});
