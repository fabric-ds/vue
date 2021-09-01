import pkg from './package.json';
import { getExports } from '../../build/rollup-settings'

export default getExports(pkg, { external: ['@finn-no/dom-focus-lock-fixed', 'scroll-doctor'] })
