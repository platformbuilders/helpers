import getTheme from '../getTheme';

const theme = {
  white: '#FFF',
};

describe('Get theme helper tests', () => {
  it('should get the key working fine', () => {
    const color = getTheme('white')({ theme });
    expect(color).toBe(theme.white);
  });

  it('shoud not return any color if the prop does not exists', () => {
    const color = getTheme('black')({ theme });
    expect(color).toBe(undefined);
  });
});
