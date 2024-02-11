//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "morocco-svg",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});