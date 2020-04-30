import { ifStyle } from '../ifStyle';

const style = {
  fullWidth: 375,
};

describe('if style tests', () => {
  it('truthy', () => {
    const test = ifStyle('fullWidth')(375, 0)(style);
    expect(test).toBe(375);
  });

  it('falsy', () => {
    const test = ifStyle('fullHeight')(375, 0)(style);
    expect(test).toBe(0);
  });
});
