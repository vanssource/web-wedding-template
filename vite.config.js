// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/wedding_web_test/", // sesuai nama repo GitHub
  plugins: [react()],
});
