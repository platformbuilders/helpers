import { get } from 'lodash';

export const getTheme =
  (themeProp: string) =>
  ({ theme }: any): string =>
    get(theme, themeProp);
