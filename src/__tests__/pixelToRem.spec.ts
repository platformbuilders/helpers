import { pxToRem } from '../shared/pixelToRem';

describe('pixelToRem helpers tests', () => {
  it('should return a formatted rem', () => {
    // given
    const pixelValue = 20;
    const expected = '1.25rem';
    // when
    const formatted = pxToRem(pixelValue);
    // then
    expect(formatted).toBe(expected);
  });

  it('should return a formatted rem using baseValue', () => {
    // given
    const pixelValue = 20;
    const baseValue = 20;
    const expected = '1rem';
    // when
    const formatted = pxToRem(pixelValue, baseValue);
    // then
    expect(formatted).toBe(expected);
  });
});
