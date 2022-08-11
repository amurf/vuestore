<script setup>
import { useMainStore } from '../store/main.js'
import { useOtherStore } from '../store/other.js'

const mainStore = await useMainStore()
const otherStore = await useOtherStore()

await mainStore.refresh()
</script>

<template>
  <section>
    <h1>This page fetches everytime you navigate to it</h1>
    <h2>{{ mainStore.message.brand }}</h2>
    <h3>{{ otherStore.things }}</h3>
  </section>
</template>

<style scoped>
</style>
