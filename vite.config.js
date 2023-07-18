import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["typed.js", "uuidv4"],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setUpTests.js",
  },
})
