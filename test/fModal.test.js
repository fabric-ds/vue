import { describe, it, assert } from 'vitest'
import { mount } from '@vue/test-utils'
import { fModal } from '#components'
import { nextTick } from 'vue'

describe('expandable', () => {
  assert.ok(fModal.name)

  it('can mount expanded', async () => {
    const defaultSlot = '<h1>Hello Fabric</h1>'
    const wrapper = mount(fModal, { props: { modelValue: true }, slots: { default: defaultSlot } })
    await nextTick() // have to wait for the modal to mount/animate
    assert.equal(wrapper.text(), 'Hello Fabric')
  })
  // it('has a title area - prop', () => {
  //   const titleWrapper = mount(fModal, { props: { title: 'Hi' } })
  //   assert.equal(titleWrapper.text(), 'Hi')

  //   const defaultSlot = '<h1>Mom</h1>'
  //   const fullWrapper = mount(fModal, {
  //     props: { modelValue: true, title: 'Hi ' },
  //     slots: { default: defaultSlot }
  //   })
  //   assert.equal(fullWrapper.text(), 'Hi Mom')
  // })
  // it('has a title area - slot', () => {
  //   const titleSlot = '<h1>Hi </h1>'
  //   const titleWrapper = mount(fModal, { slots: { title: titleSlot } })
  //   assert.equal(titleWrapper.text(), 'Hi')

  //   const defaultSlot = '<h1>Mom</h1>'
  //   const fullWrapper = mount(fModal, {
  //     props: { modelValue: true },
  //     slots: { default: defaultSlot, title: titleSlot }
  //   })
  //   assert.equal(fullWrapper.text(), 'Hi Mom')
  // })
  // it('has a chevron', () => {
  //   const wrapper = mount(fModal, { props: { title: 'Yay' } })
  //   assert.include(wrapper.html(), '<svg ')

  //   const noChevronWrapper = mount(fModal, { props: { title: 'Yay', chevron: false } })
  //   assert.notInclude(noChevronWrapper.html(), '<svg ')
  // })
  // it('emits events', async () => {
  //   const wrapper = mount(fModal, { props: { title: 'Yay' } })
  //   wrapper.get('button').trigger('click')
  //   // we have to wait twice because the event trigger itself is waiting for the DOM!
  //   await Promise.all([nextTick, nextTick])
  //   assert.property(wrapper.emitted(), 'expand')

  //   wrapper.get('button').trigger('click')
  //   await Promise.all([nextTick, nextTick])
  //   assert.property(wrapper.emitted(), 'collapse')
  // })
})
