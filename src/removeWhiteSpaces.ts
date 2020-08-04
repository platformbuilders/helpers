export const removeWhiteSpaces = (value: string): string => {
  if (!value) return '';

  return value.replace(/\s/g, '');
};
