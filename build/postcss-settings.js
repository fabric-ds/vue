import presetEnv from 'postcss-preset-env'
import { browsers } from './browsers'

export const plugins = [
  presetEnv({
    stage: 0,
    browsers,
    features: {
        'blank-pseudo-class': false,
        'dir-pseudo-class': false,
        'focus-visible-pseudo-class': false,
        'focus-within-pseudo-class': false,
        'has-pseudo-class': false,
    }
  })
]
