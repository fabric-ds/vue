import pkg from './package.json';
import { getExports } from '../../build/rollup-settings'

const { outputBrowser, outputSsrEsm } = getExports(pkg, { external: ['dom-focus-lock'] })

export default [outputBrowser, outputSsrEsm]
