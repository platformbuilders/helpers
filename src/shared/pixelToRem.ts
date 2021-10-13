export const pxToRem = (pixels: number, baseline = 16): string => {
  return `${pixels / baseline}rem`;
};
