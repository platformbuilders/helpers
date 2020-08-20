module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    'transform-es2015-modules-commonjs',
    '@babel/transform-flow-strip-types',
    '@babel/transform-object-assign',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
      },
    ],
  ],
};
