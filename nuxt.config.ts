import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Nutripurna",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },

  runtimeConfig: {
    private: {
      xRapidApiKey: process.env.X_RAPIDAPI_KEY,
      xRapidApiHost: process.env.X_RAPIDAPI_HOST,
    },

    public: {
      xRapidApiHost: process.env.X_RAPIDAPI_HOST,
    },
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/image", "@nuxt/eslint", "@nuxtjs/google-fonts", "@nuxt/ui", "@nuxt/ui-pro"],

  build: {
    transpile: ["oh-vue-icons"],
  },
});
