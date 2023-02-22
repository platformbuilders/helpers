export const sanitizeValues = <T = Record<string, any>>(values: T): T => {
  if (!values) return {} as T;
  const strippedString = JSON.stringify(values).replace(/<\/?[^>]+(>|$)/g, '');
  return JSON.parse(strippedString);
};

export const isSecureLink = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return ['https:', 'http:'].includes(parsed.protocol);
  } catch (error) {
    return false;
  }
};
