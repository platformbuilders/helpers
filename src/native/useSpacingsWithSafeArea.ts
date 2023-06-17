import { useContext, useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from 'styled-components/native';
import { FluidTheme } from '@platformbuilders/theme-toolkit';

export type SpacingValue =
  | 'min'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'max';

export const useSpacingsWithSafeArea = (customSpacing: SpacingValue = 'lg') => {
  const { bottom, top } = useSafeAreaInsets();
  const themeContext: unknown = useContext(ThemeContext);
  const [spacings, setSpacings] = useState({
    topSpacing: 0,
    bottomSpacing: 0,
  });
  const themeFluid = themeContext as FluidTheme;
  const spacingFluid = themeFluid.spacing[customSpacing];

  useEffect(() => {
    setSpacings({
      topSpacing: top + spacingFluid,
      bottomSpacing: bottom + spacingFluid,
    });
  }, [bottom, top]);

  return {
    topSpacing: spacings.topSpacing,
    bottomSpacing: spacings.bottomSpacing,
  };
};
