module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^Src(.*)$': '<rootDir>/src$1',
    '^Components[/](.+)': '<rootDir>/src/components/$1',
    '^Config[/](.+)': '<rootDir>/src/config/$1',
    '^Containers(.*)$': '<rootDir>/src/containers/$1',
    '^Context[/](.+)': '<rootDir>/src/context/$1',
    '^Ducks[/](.+)': '<rootDir>/src/ducks/$1',
  },
};
