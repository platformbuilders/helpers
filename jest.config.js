const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  verbose: true,
  automock: false,
  collectCoverage: true,
  testEnvironment: 'node',
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!@platformbuilders|@react-native|react-native)',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testMatch: ['**/__tests__/*.spec.+(ts|tsx)'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  unmockedModulePathPatterns: ['react'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverageFrom: ['src/**/*.{ts|tsx}', 'src/**/{!(index),}.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
};
