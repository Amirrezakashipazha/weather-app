import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    // reporters: ["verbose"],
    coverage: {
      // reporter: ['text', 'json', 'html'], // Specifies the reporters
      exclude: [
        "**/*.config.{js,mjs,ts,cjs}",
        "node_modules",
        ".next",
        "**/__test__/**",
        "**/*.test.*",
      ],
    },
  },
});
