<script setup>
import DotPattern from "~/components/DotPattern.vue";
import ScrollToTop from "~/components/ScrollToTop.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div
    class="bg-zinc-950 text-main font-geist transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800"
  >
    <div>
      <!-- Navbar fixed at the top -->
      <NavBar class="fixed bottom-0 z-50 flex sm:bottom-auto sm:top-0" />

      <!-- Main content area -->
      <main class="pt-16">
        <NuxtPage />
      </main>
      <Footer />
      <!-- Background pattern and other components -->
      <DotPattern
        class="absolute inset-0 -z-10 size-full fill-white/5 [mask-image:radial-gradient(white,transparent_85%)]"
      />
      <ScrollToTop />
    </div>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
