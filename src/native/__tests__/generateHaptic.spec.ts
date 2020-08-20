import { Platform } from 'react-native';
import Haptic from 'react-native-haptic';
import { generateHaptic } from '../generateHaptic';

jest.mock('react-native-haptic', () => ({
  generate: jest.fn(),
}));

describe('generateHaptic', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should NOT call `generate` when Platform is Android', () => {
    // given
    Platform.OS = 'android';

    // when
    generateHaptic();

    // then
    expect(Haptic.generate).not.toBeCalled();
  });

  it('should call `generate` when Platform is IOS', () => {
    // given
    Platform.OS = 'ios';

    // when
    generateHaptic();

    // then
    expect(Haptic.generate).toBeCalled();
  });

  it('should call `generate` with specific feedback when Platform is IOS', () => {
    // given
    Platform.OS = 'ios';
    const hapticFeedbackType = 'notification';

    // when
    generateHaptic(hapticFeedbackType);

    // then
    expect(Haptic.generate).toBeCalledWith(hapticFeedbackType);
  });
});
