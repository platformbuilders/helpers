export const toOnlyNumbers = (param: string): string => {
  if (!param) return '';

  return param.replace(/\D/g, '');
};
