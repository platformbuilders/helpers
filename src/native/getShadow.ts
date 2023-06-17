type GetShadowType = {
  xOffset?: number;
  yOffset?: number;
  shadowRadius?: number;
  shadowOpacity?: number;
  shadowColor?: string;
  elevation?: number;
};

export const defaultShadowProps = {
  xOffset: 0,
  yOffset: 4,
  shadowRadius: 4,
  shadowOpacity: 0.2,
  shadowColor: '#000',
  elevation: 3,
};

export const getShadow = (
  shadowOptions: GetShadowType = defaultShadowProps,
): string => `
  shadow-offset: ${shadowOptions.xOffset}px ${shadowOptions.yOffset}px;
  shadow-opacity: ${shadowOptions.shadowOpacity};
  shadow-radius: ${shadowOptions.shadowRadius}px;
  shadow-color: ${shadowOptions.shadowColor};
  elevation: ${shadowOptions.elevation};
`;
