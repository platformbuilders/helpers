import { renderHook } from '@testing-library/react-hooks';
import { useSpacingsWithSafeArea } from '../useSpacingsWithSafeArea';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => ({
    spacing: {
      lg: 24,
      sm: 8,
    },
  }),
}));

jest.mock('react-native-safe-area-context', () => {
  const {
    default: mockSafeAreaContext,
  } = require('react-native-safe-area-context/jest/mock');
  return mockSafeAreaContext;
});

describe('useSpacingsWithSafeArea', () => {
  test("should return spacing lg value when don't have safe area value", async () => {
    const { result } = renderHook(() => useSpacingsWithSafeArea());

    expect(result.current.topSpacing).toBe(24);
    expect(result.current.bottomSpacing).toBe(24);
  });

  test('should return spacing sm value when pass sm as parameter', async () => {
    const { result } = renderHook(() => useSpacingsWithSafeArea('sm'));

    expect(result.current.topSpacing).toBe(8);
    expect(result.current.bottomSpacing).toBe(8);
  });
});
