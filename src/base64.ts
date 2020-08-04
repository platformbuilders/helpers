export const formatToBase64 = (value: string): string => {
  if (!value) return '';

  return `data:image/png;base64,${value}`;
};
