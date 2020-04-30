import { switchStyle } from '../switchStyle';

describe('Switch Style tests', () => {
  it('should switch style', () => {
    const value = switchStyle('name')({ foo: 'test' })({ name: 'foo' });

    expect(value).toBe('test');
  });

  it('should swich style even when its a function', () => {
    const value = switchStyle('name')({ foo: (obj: any) => obj.name })({
      name: 'foo',
    });

    expect(value).toBe('foo');
  });
});
