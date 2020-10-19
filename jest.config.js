module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/?(*.)+(spec|test).+(ts|tsx)'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '~root(.*)$': '<rootDir>/$1',
    '~src(.*)$': '<rootDir>/src/$1',
    '~public(.*)$': '<rootDir>/public/$1'
  }
};
