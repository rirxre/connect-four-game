import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Default port, change if needed
    open: true, // Automatically opens the browser on start
  },
  build: {
    outDir: "dist", // Default output directory for production builds
    sourcemap: true, // Useful for debugging
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // Ensures React is available in JSX files (optional)
  },
});
