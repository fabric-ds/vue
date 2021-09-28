import vue from "@vitejs/plugin-vue";
import path from 'path'
import drnm from 'drnm'

const __dirname = drnm(import.meta.url)

/**
 * @type {import('vite').UserConfig}
 */
export default {
  base: "/vue/",
  plugins: [vue()],
  server: { host: "0.0.0.0", port: 3003 },
  resolve: {
    alias: {
      '#components': path.resolve(path.join(__dirname, '../index.js')),
      '#util': path.resolve(path.join(__dirname, '../components/util/index.js'))
    }
  }
};
