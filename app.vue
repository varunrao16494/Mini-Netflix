<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import config from "./config/config";
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig.public);
config.baseUrl = runtimeConfig.public.apiBase;
config.apiKey = runtimeConfig.public.apiSecret;
</script>

<style>
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text-center{
        text-align: center;
    }
</style>