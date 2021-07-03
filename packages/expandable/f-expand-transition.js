import { Transition, TransitionGroup, h } from 'vue'

const removeTransition = el => {
  el.style.transition = null
  el.style.backfaceVisibility = null
  el.style.overflow = null
}
const addTransition = el => {
  el.style.transition = 'height var(--f-expansion-duration, 0.3s)'
  el.style.backfaceVisibility = 'hidden'
  el.style.overflow = 'hidden'
}

export const fExpandTransition = {
  name: 'fExpandTransition',
  props: {
    group: Boolean,
    tag: String
  },
  setup(props, { emit, slots }) {
    const windowExists = (typeof window !== 'undefined')
    const onEnter = (el, done) => {
      removeTransition(el)
      el.style.height = 'auto'
      let dest = el.scrollHeight
      windowExists && requestAnimationFrame(() => {
        el.addEventListener('transitionend', () => done(), { once: true })
        el.style.height = '0px'
        el.style.transitionTimingFunction = 'ease-out'
        addTransition(el)
        requestAnimationFrame(() => el.style.height = dest + 'px')
      })
    }
    const onAfterEnter = (el) => {
      el.style.height = 'auto'
      el.style.overflow = null
      emit('expand')
    }
    const onLeave = (el, done) => {
      removeTransition(el)
      let original = el.scrollHeight
      windowExists && requestAnimationFrame(() => {
        el.addEventListener('transitionend', () => done(), { once: true })
        el.style.height = original + 'px'
        el.style.transitionTimingFunction = 'ease-in'
        addTransition(el)
        requestAnimationFrame(() => el.style.height = '0px')
      })
    }
    const onAfterLeave = () => {
      emit('collapse')
    }
    const transition = props.group ? TransitionGroup : Transition
    return () => h(transition, { css: false, onEnter, onAfterEnter, onLeave, onAfterLeave, tag: props.tag }, slots)
  }
}
