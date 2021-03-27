import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import { plugins as postcssPlugins } from './postcss-settings'
import { browsers } from './browsers'

const input = './entry.js'
const defaultExternal = [
  'vue',
  '@vue/server-renderer',
  'create-v-model',
  '@finn-no/fabric-vue-utilities'
]
const getPlugins = ({ SSR } = {}) => [
  vue({
    target: SSR ? 'node' : 'browser',
    postcssPlugins
  }),
  !SSR && getBabelOutputPlugin({ presets: [['@babel/preset-env', { targets: browsers }]]  }),
  nodeResolve(),
  commonjs(),
  postcss(),
]

export const getExports = (pkg, { external = [] } = {}) => ({
  outputBrowser: {
    input,
    external: [...defaultExternal, ...external],
    output: { file: pkg.exports.browser, format: 'es', exports: 'named' },
    plugins: getPlugins()
  },
  outputSsrEsm: {
    input,
    external: [...defaultExternal, ...external],
    output: { file: pkg.exports.import, format: 'es', exports: 'named' },
    plugins: getPlugins({ SSR: true })
  }
})
