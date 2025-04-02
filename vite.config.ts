import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import dts from "vite-plugin-dts";
import { UserConfigExport } from "vite";

const app = (): UserConfigExport => {
  return defineConfig({
    plugins: [
      react(),
      tailwindcss(),
      dts({
        insertTypesEntry: true,
      }),
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/lib/index.ts"),
        name: "index",
        formats: ["es", "umd"],
      },
      rollupOptions: {
        external: ["react", "react/jsx-runtime", "react-dom", "tailwindcss"],
        output: {
          globals: {
            react: "React",
            "react/jsx-runtime": "react/jsx-runtime",
            "react-dom": "ReactDOM",
            tailwindcss: "tailwindcss",
          },
        },
      },
      cssCodeSplit: false,
    },
  });
};

export default app;
