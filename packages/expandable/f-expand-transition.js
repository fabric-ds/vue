import { Transition, TransitionGroup, h } from 'vue'

export const fExpandTransition = {
  name: 'fExpandTransition',
  props: {
    group: Boolean,
    tag: String
  },
  setup(props, { emit, slots }) {
    const windowExists = (typeof window !== 'undefined')
    const onEnter = (el, done) => {
      el.classList.remove('f-can-expand')
      el.style.height = 'auto'
      let dest = el.scrollHeight
      windowExists && requestAnimationFrame(() => {
        el.addEventListener('transitionend', () => {
          el.style.height = 'auto'
          done()
          emit('expand')
        }, { once: true })
        el.style.height = '0px'
        el.classList.add('f-can-expand')
        requestAnimationFrame(() => el.style.height = dest + 'px')
      })
    }
    const onLeave = (el, done) => {
      el.classList.remove('f-can-expand')
      let original = el.scrollHeight
      windowExists && requestAnimationFrame(() => {
        el.addEventListener('transitionend', () => {
          done()
          emit('collapse')
        }, { once: true })
        el.style.height = original + 'px'
        el.classList.add('f-can-expand')
        requestAnimationFrame(() => el.style.height = '0px')
      })
    }
    const transition = props.group ? TransitionGroup : Transition
    return () => h(transition, { css: false, onEnter, onLeave, tag: props.tag }, slots)
  }
}
