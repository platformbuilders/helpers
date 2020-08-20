import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const cjs = {
  exports: 'named',
  format: 'cjs',
  sourcemap: true,
};

const esm = {
  format: 'esm',
  sourcemap: true,
};

const baseConfig = {
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};

const commonConfig = {
  ...baseConfig,
  input: './src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      ...cjs,
    },
    {
      file: 'dist/index.esm.js',
      ...esm,
    },
  ],
};

const nativeModulesConfig = {
  ...baseConfig,
  input: './src/native/index.ts',
  output: [
    {
      file: 'native/index.js',
      ...cjs,
    },
    {
      file: 'native/index.esm.js',
      ...esm,
    },
  ],
};

export default [nativeModulesConfig, commonConfig];
