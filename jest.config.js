module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
      babelConfig: true,
    },
  },
  testMatch: ['**/__tests__/*.+(ts|tsx|js)'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: -10,
    },
  },
};
