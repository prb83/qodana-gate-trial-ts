import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    coverage: {
      provider: "v8",
      // Every source file, also one that no test loads.
      include: ["src/**/*.ts"],
      // One report: the LCOV file, in the directory that Qodana reads.
      reporter: ["lcovonly", "text"],
      reportsDirectory: ".qodana/code-coverage",
    },
  },
});
