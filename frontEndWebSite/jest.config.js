module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
    "next/image$": "<rootDir>/__mocks__/nextImageMock.js"
  },
  transform: {
     "^.+\\.css$": "jest-css-modules-transform",
     "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  }
};

