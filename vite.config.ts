import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/// <reference types="vitest" />
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/test-utils.tsx",
  },
};

export default defineConfig({
  plugins: [react()],
  test: vitestConfig.test,
});
