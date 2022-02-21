import { getTheme } from '../shared/getTheme';

const theme = {
  white: '#FFF',
};

describe('Get theme helper tests', () => {
  it('should get the key working fine', () => {
    const color = getTheme('white')({ theme });
    expect(color).toBe(theme.white);
  });

  it('should not return any color if the prop does not exists', () => {
    const color = getTheme('black' as 'white')({ theme });
    expect(color).toBe(undefined);
  });

  it('should get the key using a function as param', () => {
    const color = getTheme((t) => t.white)({ theme });
    expect(color).toBe(theme.white);
  });
});
