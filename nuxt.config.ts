import mkcert from "vite-plugin-mkcert";
import path from "path";
import process from "process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  devServer: {
    port: 3001,
    https: {
      key: `${process.cwd()}/.vite-plugin-mkcert/localhost`,
      cert: `${process.cwd()}/.vite-plugin-mkcert/localhost`,
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL,
    },
  },
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: { mergeProps: true },
    plugins: [
      mkcert({
        savePath: ".vite-plugin-mkcert",
        certFileName: "localhost",
        keyFileName: "localhost",
      }),
    ],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "dayjs-nuxt",
    "@nuxt/image",
    "@nuxtjs/i18n"
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  colorMode: {
    classSuffix: "",
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  googleFonts: { families: { Onest: { wght: "100..900" } } },
});