import { isIOS } from './isIOS';

export const setStyleIOS = (
  truthy: string | number,
  falsy: string | number,
): string | number => (isIOS() ? truthy : falsy);

export default setStyleIOS;
