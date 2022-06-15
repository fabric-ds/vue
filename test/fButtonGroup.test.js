import { describe, it, assert } from 'vitest'
import { mount } from '@vue/test-utils'
import { fButtonGroup, fButtonGroupItem, fClickable } from '#components'

describe('button group', () => {
  assert.ok(fButtonGroup)
  assert.ok(fButtonGroup.name)
  assert.ok(fButtonGroupItem)
  assert.ok(fButtonGroupItem.name)

  it('works', () => {
    const ButtonGroupFixture = {
      template: `
        <f-button-group outline>
          <f-button-group-item>
            <f-clickable label href="#/foo">Foo</f-clickable>
          </f-button-group-item>
          <f-button-group-item>
            <f-clickable label href="#/bar">Bar</f-clickable>
          </f-button-group-item>
        </f-button-group>
      `,
      components: { fButtonGroup, fButtonGroupItem, fClickable }
    }
    const wrapper = mount(ButtonGroupFixture)
    const anchor = wrapper.get('a')
    assert.include(anchor.attributes().href, '#/foo')
    assert.equal(anchor.text(), 'Foo')
    // TODO: find the button-group-item component and check to see if provide went through?
  })
})
