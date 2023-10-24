import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://evi1husky.github.io/DSAvisualizer/",
  plugins: [react()],
});
