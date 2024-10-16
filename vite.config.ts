import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";
import restart from 'vite-plugin-restart';

import path from "path";

//Remember to run
// npm i @types/node -D vite-plugin-restart

// https://vitejs.dev/config/

export default defineConfig({
  assetsInclude: ['**/*.glb'],
  plugins: [
    react(),
    restart({ restart: ['../static/**',] }),
    glsl()
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: true,
    open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env),
  },
});