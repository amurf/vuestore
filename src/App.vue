<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <h1>Testing</h1>

  <div>
    <RouterLink to="/">Home</RouterLink>
    -
    <RouterLink to="/test">Test page</RouterLink>
  </div>

  <RouterView v-slot="{ Component }">
    <template v-if="Component">

        <Suspense timeout="0">
          <component :is='Component' />
          <template #fallback>
            <h2>Loading..</h2>
          </template>
        </Suspense>

    </template>
  </RouterView>

</template>
