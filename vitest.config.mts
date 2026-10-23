import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // tsconfig keeps "jsx": "preserve" for Next 15, so tell Vite how to compile JSX in tests.
  oxc: { jsx: { runtime: "automatic" } },
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  test: {
    environment: "node",
    include: ["tests/**/*.test.{ts,tsx}"],
    coverage: { provider: "v8", include: ["src/app/**/*.{ts,tsx}", "src/lib/**/*.ts", "src/components/**/*.tsx"] },
  },
});
