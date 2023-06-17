import { defaultShadowProps, getShadow } from '../getShadow';

describe('getShadow', () => {
  it('should return default options', () => {
    const shadowMock = `
    shadow-offset: ${defaultShadowProps.xOffset}px ${defaultShadowProps.yOffset}px;
    shadow-opacity: ${defaultShadowProps.shadowOpacity};
    shadow-radius: ${defaultShadowProps.shadowRadius}px;
    shadow-color: ${defaultShadowProps.shadowColor};
    elevation: ${defaultShadowProps.elevation};
    `;
    const shadow = getShadow();

    expect(shadow.replace(/\s/g, '')).toBe(shadowMock.replace(/\s/g, ''));
  });

  it('should return shadow with another options', () => {
    const shadowOptions = {
      xOffset: 1,
      yOffset: 2,
      shadowRadius: 6,
      shadowOpacity: 0.7,
      shadowColor: '#FFF',
      elevation: 1,
    };
    const shadowMock = `
    shadow-offset: ${shadowOptions.xOffset}px ${shadowOptions.yOffset}px;
    shadow-opacity: ${shadowOptions.shadowOpacity};
    shadow-radius: ${shadowOptions.shadowRadius}px;
    shadow-color: ${shadowOptions.shadowColor};
    elevation: ${shadowOptions.elevation};
    `;
    const shadow = getShadow(shadowOptions);

    expect(shadow.replace(/\s/g, '')).toBe(shadowMock.replace(/\s/g, ''));
  });
});
