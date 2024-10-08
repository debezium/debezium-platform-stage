import { defineConfig } from "vite";
import type { InlineConfig } from "vitest";
import type { UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from 'vite-tsconfig-paths';

type ViteConfig = UserConfig & { test: InlineConfig };
const config: ViteConfig = {
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"), // Keep '/api' prefix
      },
    },
    port: 3000,
  },
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/__test__/unit/setup.ts",
  },
};

// https://vitejs.dev/config/
export default defineConfig(config);
