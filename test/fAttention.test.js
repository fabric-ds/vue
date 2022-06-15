import { describe, it, assert } from 'vitest'
import { mount } from '@vue/test-utils'
import { fAttention } from '#components'
import { ref, nextTick } from 'vue'

describe('attention', () => {
  assert.ok(fAttention)
  assert.ok(fAttention.name)

  it('callout', () => {
    const defaultSlot = '<h5>Hello Fabric</h5>'
    const wrapper = mount(fAttention, {
      props: { callout: true, modelValue: true },
      slots: { default: defaultSlot } })
    assert.include(wrapper.text(), 'Hello Fabric')
    const html = wrapper.get('[data-test="wrapper"]')
    assert.include(html.classes().join(' '), 'bg-green')
  })
  it('show/hide callout', async () => {
    const model = ref(false)
    const CalloutFixture = {
      template: `
        <f-attention callout v-model="model" data-test="comp">
          <h1>OMG WTF BBQ</h1>
        </f-attention>
      `,
      components: { fAttention },
      setup: () => ({ model })
    }
    // TODO: use isVisible after submitting bug, seems broke?
    const wrapper = mount(CalloutFixture)
    assert.include(wrapper.attributes().style, 'display: none')
    model.value = true
    await nextTick()
    assert.equal(wrapper.attributes().style, undefined)
  })
})
