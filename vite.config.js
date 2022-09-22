import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "node:path";


/* eslint-disable  import/no-default-export */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    // alias: {
    //   "@": path.resolve(__dirname, "src")
    // }
  },
  server: {
    port: 3000,
    // https: true
  }
});
/* eslint-enable  import/no-default-export */