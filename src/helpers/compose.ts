export const compose = (...funcs: Function[]): any =>
  funcs.reduce(
    (a, b) => (...args: any): any => a(b(...args)),
    (arg: any) => arg,
  );
