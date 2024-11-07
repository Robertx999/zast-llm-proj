import { defineConfig } from "@solidjs/start/config";
import { exec } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compileTypst = async () => {
  exec(
    `"bin/typst${
      os.platform() == "win32" ? ".exe" : ""
    }" compile src/assets/typst/documentation/main.typ src/assets/typst/documentation/main.svg`,
    (err, stdout, stderr) => {
      // the *entire* stdout and stderr (buffered)
      stdout && console.log(stdout);
      stderr && console.error(stderr);
    }
  );
  exec(
    `"bin/typst${
      os.platform() == "win32" ? ".exe" : ""
    }" compile src/assets/typst/documentation/main.typ src/assets/typst/documentation/main.pdf`,
    (err, stdout, stderr) => {
      // the *entire* stdout and stderr (buffered)
      stdout && console.log(stdout);
      stderr && console.error(stderr);
    }
  );
};

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "~": resolve(__dirname, "./src"),
      },
    },
    plugins: [
      {
        name: "compile typst",
        // handleHotUpdate: compileTypst,
        buildStart: compileTypst,
      },
    ],
  },
});
