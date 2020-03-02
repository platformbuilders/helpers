module.exports = {
  testEnvironment: 'node',
  verbose: true,
  automock: false,
  collectCoverage: true,
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
    },
  },
  testMatch: ['**/__tests__/*.spec.+(ts)'],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: -10,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverageFrom: ['src/**/*.{ts}', 'src/**/{!(index),}.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
};
