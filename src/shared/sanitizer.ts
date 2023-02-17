import * as DOMPurify from 'isomorphic-dompurify';

type ConfigSanitize = DOMPurify.Config & {
  RETURN_DOM_FRAGMENT?: false | undefined;
  RETURN_DOM?: false | undefined;
};

const defaultConfig: ConfigSanitize = {
  RETURN_DOM_FRAGMENT: false,
  SANITIZE_DOM: true,
  USE_PROFILES: { html: false },
};

export const sanitizeValues = <T = Record<string, any>>(
  values: T,
  config?: ConfigSanitize,
): T => {
  const purifiedValues = DOMPurify.sanitize(JSON.stringify(values), {
    ...defaultConfig,
    ...config,
  });

  return JSON.parse(purifiedValues);
};

export const isSecureLink = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return ['https:', 'http:'].includes(parsed.protocol);
  } catch (error) {
    return false;
  }
};
