"use strict";

module.exports = {
  transform: {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|scss|png|svg|jpg|jpeg|gif|webp)$": "jest-transform-stub",
  },
  transformIgnorePatterns: ["node_modules/*"],
  modulePaths: ["frontend", "frontend/js", "frontend/js/app"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
  collectCoverageFrom: ["frontend/js/**/*.{js,jsx}"],
  coveragePathIgnorePatterns: [
    "frontend/js/store.js",
    "frontend/js/index.js",
    "frontend/js/constants/*",
    "frontend/js/pages/*",
    "frontend/js/tests/*",
  ],
  coverageThreshold: {
    global: {
      statements: 10,
    },
  },
};
