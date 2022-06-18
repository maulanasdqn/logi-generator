import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetUno from "@unocss/preset-uno";
import { presetAttributify } from "unocss";

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetWebFonts({
          provider: "google",
          fonts: {
            normal: "Roboto",
            sans: "Roboto",
            mono: ["Fira Code", "Fira Mono:400,700"],
            lobster: "Lobster",
            lato: [
              {
                name: "Lato",
                weights: ["400", "700"],
                italic: true,
              },
              {
                name: "sans-serif",
                provider: "none",
              },
            ],
          },
        }),
      ],
    }),
  ],
});
