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
  'create-v-model',
  '@fabric-ds/vue-utilities'
]
const plugins = [
  vue({ postcssPlugins }),
  getBabelOutputPlugin({ presets: [['@babel/preset-env', { targets: browsers }]] }),
  nodeResolve(),
  commonjs(),
  postcss(),
]

export const getExports = (pkg, { external = [] } = {}) => ({
  input, plugins,
  external: [...defaultExternal, ...external],
  output: { file: pkg.exports, format: 'es', exports: 'named' },
})
