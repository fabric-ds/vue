import vue from "@vitejs/plugin-vue";

/**
 * @type {import('vite').UserConfig}
 */
export default {
  base: "/fabric-vue/",
  plugins: [vue()],
  server: { host: "0.0.0.0", port: 3003 },
};
