<template>
  <div>
    <setup title="Forms" pkg-name="@finn-no/fabric-vue-forms" compName="fInput, fSelect, fToggle, fForm, fField, fSuffix" />

    <section-header label="Example" />

    <section v-if="activeExample === 'input'">
      <f-input class="mb-16" #suffix="{ inputElement }" label="A required input with a clear button" hint="A hint" required v-model="inputModel">
        <f-suffix clear @click="handleClear(inputElement)" />
      </f-input>

      <f-input v-model.number="numericModel" number type="tel" :mask="moneyMask" label="A masked (money) input" :hint="`Model value: <code>${numericModel}</code>`" />
    </section>


    <f-select v-else-if="activeExample === 'select'" v-model="selectModel" label="A useful and informative label">
      <option disabled selected value="">Pick something</option>
      <option value="foo">Foo</option>
      <option value="bar">Bar</option>
    </f-select>


    <f-toggle v-else-if="activeExample === 'radio'" radio v-model="multiToggleModel" label="A very toggly label" :toggles="toggles" />
    <f-toggle v-else-if="activeExample === 'checkbox'" checkbox v-model="checkboxModel" label="A very toggly label" :toggles="toggles" />
    <f-toggle v-else-if="activeExample === 'radio-button'" radio-button v-model="multiToggleModel" label="A very toggly label" :toggles="toggles" />

    <f-toggle class="mt-32 bg-gray-100 p-16 inline-block rounded-4" no-hint radio label="Form element" :toggles="exampleToggles" v-model="activeExample" />



    <section-header label="Documentation" />

    <div class="text-12 text-gray-400 flex mb-32">
      <div class="flex-1 p-16 pt-0 mb-16 border-b-2 border-gray-200" />
      <tab name="input">Input</tab>
      <tab name="select">Select</tab>
      <tab name="toggle">Toggle</tab>
      <tab name="field">Field</tab>
      <div class="flex-1 p-16 pt-0 mb-16 border-b-2 border-gray-200" />
    </div>

    <h4>Token</h4>

    <show-token v-if="activeDocument === 'input'" :token="inputToken" />
    <show-token v-else-if="activeDocument === 'select'" :token="selectToken" />
    <show-token v-else-if="activeDocument === 'toggle'" :token="toggleToken" />
    <show-token v-else-if="activeDocument === 'field'" :token="fieldToken" />

    <section v-if="activeDocument === 'input'">
      <h4 class="mt-64 mb-16">Props</h4>
      <props-notice />

      <docs-table>
        <tr>
          <td>type</td>
          <td>string</td>
          <td>text</td>
        </tr>
        <tr>
          <td>autocomplete</td>
          <td>string</td>
          <td>off</td>
        </tr>
        <tr>
          <td>mask</td>
          <td>
            <div>object</div>
            <div class="annotation">See the Masking section below for more information</div>
          </td>
          <td></td>
        </tr>
      </docs-table>

      <h4 class="mt-64 mb-16">Masking</h4>
      <p class="text-14">To use input masking, first <code>provide</code> the default export from the <code>cleave.js</code> package as shown below. Once you've done that, any <a href="https://github.com/nosir/cleave.js/blob/master/doc/options.md">options</a> from Cleave are valid options on the <code>mask</code> prop.</p>
      <show-token :token="cleaveToken" />

    </section>

    <section v-else-if="activeDocument === 'select'">
      <h4 class="mt-64 mb-16">Props</h4>
      <p class="text-12">All typical HTML5 attributes are valid props for select, see Field for additional props.</p>
    </section>

    <section v-else-if="activeDocument === 'toggle'">
      <h4 class="mt-64 mb-16">Props</h4>
      <p class="mb-16 text-14">Toggle takes a special prop - <code>toggles</code> - which is an array of objects. Each object must at least have a <code>value</code> and <code>label</code> attribute. Any other attributes will be transferred directly to the individual toggle</p>
      <props-notice />

      <docs-table>
        <tr>
          <td>radio</td>
          <td>boolean</td>
          <td></td>
        </tr>
        <tr>
          <td>checkbox</td>
          <td>boolean</td>
          <td></td>
        </tr>
        <tr>
          <td>radio-button</td>
          <td>boolean</td>
          <td></td>
        </tr>
        <tr>
          <td>equal-width</td>
          <td>
            <div>boolean</div>
            <div class="annotation">Will make each radio-button equal width</div>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>toggles</td>
          <td>array</td>
          <td></td>
        </tr>
      </docs-table>
    </section>

    <section v-else-if="activeDocument === 'field'">
      <h4 class="mt-64 mb-16">Props</h4>

      <docs-table>
        <tr>
          <td>label</td>
          <td>string</td>
          <td></td>
        </tr>
        <tr>
          <td>hint</td>
          <td>
            <div>string</div>
            <div class="annotation">The string can contain HTML</div>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>invalid</td>
          <td>boolean</td>
          <td></td>
        </tr>
      </docs-table>

      <h4 class="mt-64 mb-16">Slots</h4>

      <h5 class="mt-32">default</h5>
      <p class="text-14">This slot is used by all other form elements, and is where one can slot any content that should be wrapped by a field</p>

      <h5 class="mt-32">control</h5>
      <p class="text-14">The control slot is used to control a form element. It provides one slot attribute, <code>form</code> whose properties are below.</p>

      <docs-table>
        <template #titles>
          <th>name</th>
          <th>info</th>
        </template>
        <tr>
          <td>validate</td>
          <td class="text-12">A function which, when called, will force all descendants to immediately validate</td>
        </tr>
        <tr>
          <td>valid</td>
          <td class="text-12">A boolean indicating if all descendants are currently valid</td>
        </tr>
        <tr>
          <td>completed</td>
          <td class="text-12">A boolean indicating if all descendants are currently completed</td>
        </tr>
        <tr>
          <td>validationElements</td>
          <td class="text-12">The list of descendants the form has registered</td>
        </tr>
      </docs-table>

    </section>

    <section-header label="Validation" />

    <h4 class="my-16">Validating Elements</h4>

    <p class="text-14">Every form element accepts a prop <code>rules</code> which takes an array of functions. These functions will be run in order until one returns an object. If all functions return <code>true</code> the field is considered valid.</p>
    <show-token :token="ruleToken" />
    <p class="text-12 mt-16 mb-32">The function has one argument, the current value of the form element — and can either return <code>true</code> or an object with attributes described below</p>
    <docs-table>
      <template #titles>
        <th>attribute</th>
        <th>type</th>
      </template>
      <tr>
        <td>valid</td>
        <td>
          <div>boolean</div>
          <div class="annotation">Whether or not to treat the form element as valid</div>
        </td>
      </tr>
      <tr>
        <td>hint</td>
        <td>
          <div>string</div>
          <div class="annotation">The hint to show when this result is triggered</div>
        </td>
      </tr>
      <tr>
        <td>always</td>
        <td>
          <div>boolean</div>
          <div class="annotation">If true, will show the status/hint even if the form element hasn't been touched yet - normally validation is only shown after blur</div>
        </td>
      </tr>
    </docs-table>

    <h4 class="mt-64 mb-16">Collecting Validation with fForm</h4>

    <p class="text-14 mb-32">The <code>fForm</code> component registers element descendants at any level, and provides the aggregate validation status.</p>

    <docs-table>
      <tr>
        <td>v-model</td>
        <td>
          <div>boolean</div>
          <div class="annotation">True when all descendants are valid</div>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>v-model:completed</td>
        <td>
          <div>boolean</div>
          <div class="annotation">True when all descendants are completed - passing their <code>required</code> rule</div>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>should-validate</td>
        <td>
          <div>boolean</div>
          <div class="annotation">Can be set to true to instruct all descendants to immediately validate</div>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>as</td>
        <td>
          <div>string</div>
          <div class="annotation">The DOM element to emit for the wrapper</div>
        </td>
        <td>form</td>
      </tr>
    </docs-table>

    <h4 class="mt-64 mb-16">Programatic validation</h4>
    <p class="text-14">The <code>fField</code> component can provide access to programatic validation beyond what <code>fForm</code>'s props can. For information on which methods are available, see the documentation on Field.</p>
    <show-token :token="fieldControlToken" />

    <h4 class="mt-64 mb-16">Validation and <code>required</code> Form Elements</h4>
    <p class="text-14">If the form element is marked <code>required</code>, <a href="omg">a special rule</a> will be inserted before any user-defined rules.</p>
    <p class="text-14">The <code>required</code> prop can accept a function that will be used as the required-rule</p>

    <h4 class="mt-64 mb-16">Complete Form Example</h4>

    <f-form class="space-y-32 bg-gray-100 p-16 rounded-4">
      <f-input v-model="form1" required label="An input with several hints" :rules="[v => v.trim().length > 4 || { valid: false, hint: 'Must be more than 4 characters!' }]" hint="Enter <strong>more</strong> than 4 characters" />
      <f-toggle checkbox v-model="form2" :toggles="[{ label: 'This must be checked', value: true }]" :required="v => v || { valid: false, hint: 'You must accept the terms!' }" />

      <f-field #control="{ form }">
        <f-button utility label="Submit" @click="handleSubmit(form)" />
      </f-field>
    </f-form>

  </div>
</template>

<script setup>
import { ref, h } from 'vue'
import { ShowToken, VariantHeading, SectionHeader } from '../util.js'
import { fInput, fSelect, fToggle, fForm, fField, fSuffix } from '@finn-no/fabric-vue-forms'
import { fButton } from '@finn-no/fabric-vue-button'
import Setup from '../Setup.vue'
import DocsTable from '../DocsTable.vue'

const activeDocument = ref('input')

const Tab = (props, context) => h('button', {
  class: {
    'capitalize focus-ring font-bold antialias p-16 pt-0 border-b-2 border-gray-200 mb-16': true,
    'border-gray-700 text-gray-700': props.name === activeDocument.value
  },
  onClick: () => activeDocument.value = props.name
}, props.name)

const PropsNotice = () => h('p', { class: 'text-12 mb-32' }, 'The props documented below have defaults set or are unique to this component, all typical HTML5 attributes are valid props. See Field for additional props.')

const exampleToggles = [
  { label: 'Input', value: 'input' },
  { label: 'Select', value: 'select' },
  { label: 'Radio', value: 'radio' },
  { label: 'Checkbox', value: 'checkbox' },
  { label: 'Radio-button', value: 'radio-button' }
]
const activeExample = ref('input')

const handleClear = (el) => {
  inputModel.value = ''
  el.focus()
}
const moneyMask = { numeral: true, numeralPositiveOnly: true, numeralIntegerScale: 8, delimiter: ' ' }
const inputModel = ref('I am an input element')
const numericModel = ref('')
const selectModel = ref('')
const multiToggleModel = ref('')
const checkboxModel = ref([])
const toggles = [
  { label: 'One', value: 1, 'data-test': 'toggle:1' },
  { label: 'Two', value: 2, 'data-test': 'toggle:2' },
]
const form1 = ref('')
const form2 = ref('')
const handleSubmit = form => {
  form.validate()
  if (!form.valid) return
  alert('I submitted a thing!')
}

const inputToken = `<f-input label="A label" hint="A hint" v-model="model" />`
const selectToken =
`<f-select v-model="model" label="A label">
  <option disabled selected value="">Pick something</option>
  <option value="foo">Foo</option>
</f-select>`
const toggleToken =
`<f-toggle radio v-model="model" label="A label" :toggles="[
  { label: 'One', value: 1 },
  { label: 'Two', value: 2 }
]" />`
const fieldToken =
`<f-field label="I can be anything!" hint="Isn't that neat?">
  <your-custom-element />
<f-field>`
const ruleToken = `[v => v.trim().length > 5 || { valid: false, hint: 'This should be longer' }]`
const cleaveToken =
`// in setup, if you only need masking in one component
import { provide } from 'vue'
import Cleave from 'cleave.js'

export default {
  setup() {
    provide('Cleave', Cleave)
  }
}

// or install app-wide by using the provide method on app
app.provide('Cleave', Cleave)`
const fieldControlToken =
`<f-field #control="{ form }">
  <button @click="submit(form)">Submit</button>
</f-field>
`
</script>
