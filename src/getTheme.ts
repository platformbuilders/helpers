import { get } from 'lodash';

const getTheme = (themeProp: string) => ({ theme }: any): string =>
  get(theme, themeProp);

export default getTheme;
