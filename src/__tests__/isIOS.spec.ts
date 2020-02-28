import { Platform } from 'react-native';
import { isIOS } from '../isIOS';

describe('is iOS tests', () => {
  it('should return true', () => {
    Platform.OS = 'ios';
    expect(isIOS()).toBe(true);
  });

  it('should return false', () => {
    Platform.OS = 'android';
    expect(isIOS()).toBe(false);
  });
});
