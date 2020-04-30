export const removeWhiteSpaces = (param: string): string => {
  if (!param) return '';

  return param.replace(/\s/g, '');
};
