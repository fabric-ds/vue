<template>
  <div>
    <article class="flex gap-16">
    <div class="border border-gray-400 rounded-4 p-12 relative hover:bg-aqua-50 hover:border-blue-600">
      <div class="flex items-center">
        <div class="input-toggle h-24 w-24 pointer-events-none" aria-hidden="true">
          <f-toggle-item type="radio" v-model="foo" value="foo" class="hidden" />
        </div>
        <div class="ml-12">
          <h3 class="mb-0">Purchase a thing</h3>
          <p class="mb-0">More info about the thing like a price</p>
          <f-toggle-item type="radio" v-model="foo" value="foo" class="absolute inset-0 h-full w-full appearance-none cursor-pointer" />
        </div>
      </div>
    </div>
    <div class="border border-gray-400 rounded-4 p-12 relative hover:bg-aqua-50 hover:border-blue-600">
      <div class="flex items-center">
        <div class="input-toggle h-24 w-24 pointer-events-none" aria-hidden="true">
          <f-toggle-item type="radio" v-model="foo" value="bar" class="hidden" />
        </div>
        <div class="ml-12">
          <h3 class="mb-0">Purchase a thing</h3>
          <p class="mb-0">More info about the thing like a price</p>
          <f-toggle-item type="radio" v-model="foo" value="bar" class="absolute inset-0 h-full w-full appearance-none cursor-pointer" />
        </div>
      </div>
    </div>
    </article>
    <setup title="Card" compName="fCard" />

    <div class="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32">
      <f-card @click="selected = !selected" :selected="selected">
        <img class="h-128 w-full object-cover" src="https://source.unsplash.com/random/400x400" />
        <p class="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">Ukens bolig</p>
        <div class="p-16">
          <p class="text-12 text-gray-300">DNB Eiendom</p>
          <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
          <p class="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p class="font-bold my-8">52 m<span style="font-size: 10px; vertical-align: super;">2</span> Totalpris: 4 869 039 kr</p>
          <p class="text-14 text-gray-400 mb-0">Eier (Selveier) <span class="text-gray-200">•</span> Leilighet <span class="text-gray-200">•</span> 2 soverom</p>
        </div>
      </f-card>
      <f-card @click="selected = !selected" :selected="selected">
        <img class="h-128 w-full object-cover" src="https://source.unsplash.com/random/402x402" />
        <div class="p-16">
          <p class="text-12 text-gray-300">DNB Eiendom</p>
          <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
          <p class="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p class="font-bold my-8">52 m<span style="font-size: 10px; vertical-align: super;">2</span> Totalpris: 4 869 039 kr</p>
          <p class="text-14 text-gray-400 mb-0">Eier (Selveier) <span class="text-gray-200">•</span> Leilighet <span class="text-gray-200">•</span> 2 soverom</p>
        </div>
      </f-card>
      <f-card @click="selected = !selected" :selected="selected">
        <img class="h-128 w-full object-cover" src="https://source.unsplash.com/random/404x404" />
        <div class="p-16">
          <p class="text-12 text-gray-300">DNB Eiendom</p>
          <p>Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.</p>
          <p class="text-14 text-gray-400 mb-4">Bøgata 25C, 0655 Oslo</p>
          <p class="font-bold my-8">52 m<span style="font-size: 10px; vertical-align: super;">2</span> Totalpris: 4 869 039 kr</p>
          <p class="text-14 text-gray-400 mb-0">Eier (Selveier) <span class="text-gray-200">•</span> Leilighet <span class="text-gray-200">•</span> 2 soverom</p>
        </div>
      </f-card>
    </div>

    <f-card :selected="checkModel" class="mt-32 w-max">
      <div class="p-24">
        <f-toggle class="in-card -mb-4" checkbox :toggles="[{ label: 'Check in a box', value: true }]" v-model="checkModel" />
      </div>
    </f-card>

    <div class="flex gap-32 mt-32">
      <f-card :selected="radioModel === 'foo'" class="w-max">
        <div class="p-24">
          <f-toggle class="in-card -mb-4" radio :toggles="[{ label: 'Radio in a box - A', value: 'foo', name: 'radio-group' }]" v-model="radioModel" />
        </div>
      </f-card>
      <f-card :selected="radioModel === 'bar'" class="w-max">
        <div class="p-24">
          <f-toggle class="in-card -mb-4" radio :toggles="[{ label: 'Radio in a box - B', value: 'bar', name: 'radio-group' }]" v-model="radioModel" />
        </div>
      </f-card>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { fCard, fToggle, fToggleItem } from '#components'

const selected = ref(false)
const checkModel = ref(false)
const radioModel = ref('')
const foo = ref('')
</script>
