import { describe, it, assert } from 'vitest'
import { mount } from '@vue/test-utils'
import { fButton } from '#components'

const label =  'Hello Fabric'

describe('button', () => {
  assert.ok(fButton.name)

  it('label/smoke', () => {
    const wrapper = mount(fButton, { props: { label } })
    const html = wrapper.get('button')
    assert.equal(wrapper.text(), 'Hello Fabric')
    assert.ok(wrapper.componentVM.buttonClass.button)
    assert.equal(html.attributes().type, 'button')
  })
  it('slot', () => {
    const wrapper = mount(fButton, { slots: { default: () => label } })
    assert.equal(wrapper.text(), 'Hello Fabric')
  })
  it('primary', () => {
    const wrapper = mount(fButton, { props: { primary: true, label } })
    assert.equal(wrapper.text(), 'Hello Fabric')
    assert.ok(wrapper.componentVM.buttonClass.button)
    assert.ok(wrapper.componentVM.buttonClass['button--primary'])
  })
  it('href', () => {
    const href = 'https://finn.no'
    const wrapper = mount(fButton, { props: { label, href } })
    const html = wrapper.get('a')
    assert.equal(html.attributes().href, href)
    assert.equal(wrapper.text(), 'Hello Fabric')
  })
  it('target = _blank defaults with rel=noopener', () => {
    const href = 'https://finn.no'
    const wrapper = mount(fButton, { props: { label, href, target: '_blank' } })
    const html = wrapper.get('a')
    assert.equal(html.attributes().rel, 'noopener')
  })
})
