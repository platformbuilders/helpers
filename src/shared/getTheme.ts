/* eslint-disable @typescript-eslint/ban-types */
import { get } from 'lodash';
import { DefaultTheme } from 'styled-components';

export const getTheme =
  <Theme extends DefaultTheme>(
    themeProp: Flatten<Theme> | ((theme: DefaultTheme) => string | number),
  ) =>
  ({ theme }: { theme: DefaultTheme }): string | number => {
    return typeof themeProp === 'function'
      ? themeProp(theme)
      : get(theme, themeProp);
  };
