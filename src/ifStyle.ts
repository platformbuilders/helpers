export const ifStyle = (prop: any) => (
  truthy: any,
  falsy: any = null,
) => (props: { [x: string]: any }): any => (props[prop] ? truthy : falsy);
