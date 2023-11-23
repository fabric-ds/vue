import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import eik from '@eik/rollup-plugin';
import replace from '@rollup/plugin-replace';
import pkg from './package.json';

const browsers = 'supports es6-module and > 2% in NO and not dead';
const commonPlugins = [
  vue(),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  nodeResolve(),
  commonjs(),
];

export default [
  { // local build
    input: 'index.js',
    output: { file: './dist/fabric-vue.js', format: 'es', exports: 'named', sourcemap: true },
    plugins: commonPlugins,
    external: ['vue', ...Object.keys(pkg.dependencies)]
  },
  { // docs build
    input: 'index.js',
    output: { file: './dist/docs/fabric-vue.js', format: 'es', exports: 'named', sourcemap: true },
    plugins: commonPlugins,
    external: ['vue']
  },
  { // eik build
    input: 'index.js',
    output: { file: './dist/eik/index.js', format: 'es', exports: 'named', sourcemap: true },
    plugins: [
      eik(),
      ...commonPlugins
    ]
  }
]
