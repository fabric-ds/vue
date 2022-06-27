import { describe, it, assert } from 'vitest'
import { mount } from '@vue/test-utils'
import { fModal } from '#components'
import { ref, nextTick } from 'vue'

describe('modal', () => {
  assert.ok(fModal.name)

  it('can mount expanded', async () => {
    const defaultSlot = '<h1>Hello Fabric</h1>'
    const wrapper = mount(fModal, { props: { modelValue: true }, slots: { default: defaultSlot } })
    await nextTick() // have to wait for the modal to mount/animate
    assert.equal(wrapper.text(), 'Hello Fabric')
  })
  it('can show/hide', async () => {
    const model = ref(false)
    const ModalFixture = {
      template: `
        <f-modal v-model="model" title="Hello">
          <h1>OMG WTF BBQ</h1>
        </f-modal>
      `,
      components: { fModal },
      setup: () => ({ model })
    }
    const wrapper = mount(ModalFixture)
    await nextTick() // have to wait for the modal to mount/animate
    assert.notOk(wrapper.find('[data-test="wrapper"]').exists())
    model.value = true
    await nextTick() // have to wait for the modal to mount/animate
    await nextTick() // have to wait for the modal to mount/animate
    assert.ok(wrapper.find('[data-test="wrapper"]').exists())
    // assert.equal(wrapper.text(), 'Hello Fabric')
  })
  it('has a title', async () => {
    const defaultSlot = '<h1>Hello Fabric</h1>'
    const wrapper = mount(fModal, { props: { modelValue: true, title: 'OMG' }, slots: { default: defaultSlot } })
    await nextTick() // have to wait for the modal to mount/animate
    assert.include(wrapper.text(), 'OMG')
  })
  it('has a footer', async () => {
    const defaultSlot = '<h1>Hello Fabric</h1>'
    const footerSlot = '<h1>Goodbye Fabric</h1>'
    const wrapper = mount(fModal, { props: { modelValue: true }, slots: { default: defaultSlot, footer: footerSlot } })
    await nextTick() // have to wait for the modal to mount/animate
    assert.include(wrapper.text(), 'Hello Fabric')
    assert.include(wrapper.text(), 'Goodbye Fabric')
  })
  it('left and right are toggleable', async () => {
    const defaultSlot = '<h1>Hello Fabric</h1>'
    const wrapper = mount(fModal, { props: { modelValue: true }, slots: { default: defaultSlot } })
    await nextTick()
    const left = wrapper.find('button[aria-label="Tilbake"]').exists()
    assert.notOk(left)
    const right = wrapper.find('button[aria-label="Lukk"]').exists()
    assert.notOk(right)
  })
  it('has sane defaults for left and right', async () => {
    const defaultSlot = '<h1>Hello Fabric</h1>'
    const wrapper = mount(fModal, { props: { modelValue: true, left: true, right: true }, slots: { default: defaultSlot } })
    await nextTick()
    const left = wrapper.find('button[aria-label="Tilbake"]')
    assert.ok(left.exists())
    assert.include(left.html(), '<svg ')
    const right = wrapper.find('button[aria-label="Lukk"]')
    assert.ok(right.exists())
    assert.include(right.html(), '<svg ')
  })
})
