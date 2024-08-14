import { defineConfig } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"

export default defineConfig(({}) => {
  return {
    base: "/top-homepage/",
    plugins: [
      createHtmlPlugin({
        minify: true,
      }),
    ],
  }
})
