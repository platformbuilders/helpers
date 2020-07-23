export const formatToBase64 = (string: string): string => {
  if (!string) return '';

  return `data:image/png;base64,${string}`;
};
