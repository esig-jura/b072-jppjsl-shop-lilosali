<script setup>

import EnteteDePage from "@/components/EnteteDePage.vue";
import PiedDePage from "@/components/PiedDePage.vue";
</script>

<template>
    <EnteteDePage/>
    <main>
      <RouterView/> >
    </main>
    <PiedDePage/>

</template>

<style scoped>
main {
  padding: 1rem;
  max-width: 1300px;
  margin: 0 auto;
}
</style>