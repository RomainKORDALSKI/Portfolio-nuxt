<template>
  <div>
    <Navbar class="fixed top-0 z-50 w-full" />
    <main class="pt-16">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
</script>
