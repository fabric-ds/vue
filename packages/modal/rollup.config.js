import pkg from './package.json';
import { getExports } from '../../build/rollup-settings'

export default getExports(pkg, { external: ['dom-focus-lock', 'body-scroll-lock'] })
