import { isFunction } from 'lodash';

export const switchStyle =
  (name: string) =>
  (stylesObj: { [x: string]: any }) =>
  (props: { [x: string]: any }): string => {
    const propValue = props[name] || 'default';
    const switchObj = stylesObj[propValue];

    if (isFunction(switchObj)) return switchObj(props);

    return switchObj;
  };
