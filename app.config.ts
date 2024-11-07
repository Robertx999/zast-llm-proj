import { defineConfig } from "@solidjs/start/config";
import { exec } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "~": resolve(__dirname, "./src"),
      },
    },
  },
});
