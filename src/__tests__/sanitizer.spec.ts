import { isSecureLink, sanitizeValues } from '../shared/sanitizer';

describe('Sanitizer', () => {
  describe('isSecureLink', () => {
    it('should return isSecure false when pass link without http protocol', () => {
      const isSecure = isSecureLink('wss://google.com');
      expect(isSecure).toBeFalsy();
    });

    it('should return isSecure false when pass invalid link', () => {
      const isSecure = isSecureLink('ja&#x0000A;vascript:alert(1)');
      expect(isSecure).toBeFalsy();
    });
  });

  describe('sanitizeValues', () => {
    it('should return same values when pass secure values', () => {
      const objectValues = {
        a: 1,
        b: 2,
      };

      const purifiedValues = sanitizeValues(objectValues);

      expect(objectValues).toStrictEqual(purifiedValues);
    });

    it('should return purified values when pass insecure values', () => {
      const objectValues = {
        a: '<b>hello there</b>',
        b: 2,
      };

      const expectedValues = {
        a: 'hello there',
        b: 2,
      };

      const purifiedValues = sanitizeValues(objectValues);

      expect(expectedValues).toStrictEqual(purifiedValues);
    });
  });
});
