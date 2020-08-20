import { Platform } from 'react-native';
import { isIOS } from '../isIOS';

describe('isIOS', () => {
  it('should return true', () => {
    Platform.OS = 'ios';

    const value = isIOS();

    expect(value).toBe(true);
  });

  it('should return false', () => {
    Platform.OS = 'android';
    const value = isIOS();
    expect(value).toBe(false);
  });
});
