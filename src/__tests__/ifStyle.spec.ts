import { ifStyle } from '../shared/ifStyle';

const style = {
  fullWidth: 375,
};

describe('if style tests', () => {
  describe('with params `truthy and falsy`', () => {
    it('should prop exist', () => {
      const test = ifStyle('fullWidth')(375, 0)(style);
      expect(test).toBe(375);
    });

    it('should prop no exist', () => {
      const test = ifStyle('fullHeight')(375, 0)(style);
      expect(test).toBe(0);
    });
  });

  describe('with only param `truthy`', () => {
    it('should prop exist', () => {
      const test = ifStyle('fullWidth')(375)(style);
      expect(test).toBe(375);
    });

    it('should prop no exist', () => {
      const test = ifStyle('fullHeight')(375)(style);
      expect(test).toBe(null);
    });
  });
});
