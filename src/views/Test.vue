<script setup>
import { useMainStore } from '../store/main.js'
import { useOtherStore } from '../store/other.js'

const mainStore = await useMainStore()
const otherStore = await useOtherStore()
</script>

<template>
  <section>
    <h1>This page only fetches once</h1>
    <h2>{{ mainStore.message.description }}</h2>
    <h3>{{ otherStore.things }}</h3>
    <button @click="otherStore.methods.addThing">Add item</button>
  </section>
</template>

<style scoped>
</style>
