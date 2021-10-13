export const toOnlyNumbers = (value: string): string => {
  if (!value) return '';

  return value.replace(/\D/g, '');
};
