module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testMatch: ["**/tests/**/*.test.ts"], // Đảm bảo rằng đường dẫn này đúng
  roots: ["<rootDir>/src", "<rootDir>/tests"],
};
