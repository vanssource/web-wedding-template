// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/web-wedding-template/", // sesuai nama repo GitHub
  plugins: [react()],
});
