import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 443,
    proxy: {
      "/api/": "http://localhost:4000/",
    },
  },
  build: {
    outDir: "/var/www/html",
    emptyOutDir: true
  },
  plugins: [react()],
});