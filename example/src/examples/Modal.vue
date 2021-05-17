<template>
  <div>
    <setup title="Modal" pkg-name="@finn-no/fabric-vue-modal" compName="fModal" />

    <section-header label="Example" />

    <button class="button button--utility" @click="model = true">Show modal</button>

    <f-modal title="Oh hello" style="--f-modal-width: 640px; --f-modal-max-height: 32vh" :left="show" right @dismiss="model = false" v-model="model" @right="model = false">
      <h1 class="h4 mb-16">This is a title for the content area</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
      <button @click="show = !show">toggle</button>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
      <template #footer>
        <button class="button button--cta" @click="model = false">Click me</button>
      </template>
    </f-modal>

    <section-header label="Documentation" />

    <h4>Token</h4>
    <show-token :token="token" />

    <h4 class="mt-64 mb-16">Props</h4>
    <docs-table>
      <tr>
        <td>v-model</td>
        <td>
          <div>boolean</div>
          <div class="annotation">Whether or not to show the modal</div>
        </td>
        <td></td>
      </tr>
    </docs-table>

    <h4 class="mt-64 mb-16">Events</h4>
    <docs-table>
      <template #titles>
        <th>name</th>
        <th>notes</th>
      </template>
      <tr>
        <td>dismiss</td>
        <td class="annotation">Emitted when a user presses ESC or clicks outside the dialog</td>
      </tr>
    </docs-table>

    <h4 class="mt-64 mb-16">Custom Properties</h4>
    <docs-table>
      <template #titles>
        <th>name</th>
        <th>notes</th>
      </template>
      <tr>
        <td>--f-modal-padding</td>
        <td class="annotation">The inner padding of the modal dialog</td>
      </tr>
      <tr>
        <td>--f-modal-max-height</td>
        <td class="annotation">The max-height of the modal dialog</td>
      </tr>
      <tr>
        <td>--f-modal-width</td>
        <td class="annotation">The max-width of the modal dialog</td>
      </tr>
    </docs-table>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { fModal } from '@finn-no/fabric-vue-modal'
import Setup from '../Setup.vue'

const show = ref(false)
const model = ref(false)
const token =
`<f-modal @dismiss="modalIsOpen = false" v-model="modalIsOpen">
  <h1>Hello I am a modal</h1>
</f-modal>`
</script>
