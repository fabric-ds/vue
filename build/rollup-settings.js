import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import { browsers } from './browsers'

const input = './entry.js'
const defaultExternal = [
  'vue',
  'create-v-model',
  '@fabric-ds/vue-utilities'
]
const plugins = [
  vue(),
  getBabelOutputPlugin({ presets: [['@babel/preset-env', { targets: browsers }]] }),
  nodeResolve(),
  commonjs(),
]

export const getExports = (pkg, { external = [] } = {}) => ({
  input, plugins,
  external: [...defaultExternal, ...external],
  output: { file: pkg.exports, format: 'es', exports: 'named' },
})
