import { isIOS } from '../isIOS';
import { Platform } from 'react-native';

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
