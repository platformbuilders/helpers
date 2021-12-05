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

export const getShadow = (defaultShadowProps: GetShadowType = {}): string => `
  shadow-offset: ${defaultShadowProps.xOffset}px ${defaultShadowProps.yOffset}px;
  shadow-opacity: ${defaultShadowProps.shadowOpacity};
  shadow-radius: ${defaultShadowProps.shadowRadius}px;
  shadow-color: ${defaultShadowProps.shadowColor};
  elevation: ${defaultShadowProps.elevation};
`;
