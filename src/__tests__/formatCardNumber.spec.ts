import { formatCardNumber } from '../shared/formatCardNumber';

describe('formatCardNumber tests', () => {
  it('should apply mask credit card number 5363 5085 9979 9238', () => {
    const parsed = formatCardNumber('53 63 5 085 99 79 9238');
    expect(parsed).toBe('5363 5085 9979 9238');
  });
  it('should apply mask credit card number 4024 0071 0360 4194', () => {
    const parsed = formatCardNumber('4024007103604194');
    expect(parsed).toBe('4024 0071 0360 4194');
  });
});
