import pkg from './package.json';
import { getExports } from '../../build/rollup-settings'

const { outputBrowser, outputSsrEsm } = getExports(pkg)

export default [outputBrowser, outputSsrEsm]
