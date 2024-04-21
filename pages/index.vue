<template>
  <div>
    Hello 
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
const runtimeConfig = useRuntimeConfig();
const store = useStore();
console.log(runtimeConfig, store.state);
</script>
