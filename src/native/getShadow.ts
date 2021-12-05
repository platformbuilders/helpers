type GetShadowType = {
  xOffset?: number;
  yOffset?: number;
  shadowRadius?: number;
  shadowOpacity?: number;
  shadowColor?: string;
  elevation?: number;
};

export const getShadow = ({
  xOffset = 0,
  yOffset = 4,
  shadowRadius = 4,
  shadowOpacity = 0.2,
  shadowColor = '#000',
  elevation = 3,
}: GetShadowType = {}): string => `
  shadow-offset: ${xOffset}px ${yOffset}px;
  shadow-opacity: ${shadowOpacity};
  shadow-radius: ${shadowRadius}px;
  shadow-color: ${shadowColor};
  elevation: ${elevation};
`;
