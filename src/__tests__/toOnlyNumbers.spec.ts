import { toOnlyNumbers } from '../toOnlyNumbers';

describe('toOnlyNumbers tests', () => {
  it('should format to only numbers properly', () => {
    const parsed = toOnlyNumbers('R1000');
    expect(parsed).toBe('1000');
  });
});
