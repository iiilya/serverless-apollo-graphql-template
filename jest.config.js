module.exports = {
  displayName: "unit",
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  collectCoverageFrom: [
    "src/modules/**",
    "!src/modules/graphql/resolvers/index.ts",
    "!src/modules/graphql/types/**",
    "!**/__spec__/**",
    "!**/__test__/**",
    "!**/__snapshots__/**"
  ],
  globals: {
    TZ: "America/New_York"
  }
};
