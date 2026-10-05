import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// User site (biki886.github.io) is served from root, so base stays "/".
export default defineConfig({ plugins: [react()], base: "/" });
