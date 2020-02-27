import setStyleIOS from '../setStyleIOS';
import { Platform } from 'react-native';

describe('set style iOS should return stuyle for iOS', () => {
  it('should set style for iOS Platform', () => {
    Platform.OS = 'ios';
    const style = setStyleIOS('100', '0');
    expect(style).toBe('100');
  });
  it('should set style for Android Platform', () => {
    Platform.OS = 'android';
    const style = setStyleIOS('100', '0');
    expect(style).toBe('0');
  });
});
