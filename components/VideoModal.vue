<!-- Modal.vue -->
<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
    @click.self="close"
  >
    <div class="relative w-full max-w-4xl p-4 bg-zinc-800 rounded-lg">
      <button
        @click="close"
        class="absolute top-2 right-2 text-white/60 text-lg"
      >
        X
      </button>
      <video controls class="w-full h-auto rounded-lg" :src="videoSrc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  visible: Boolean,
  videoSrc: String,
});

const emit = defineEmits(["update:visible"]);

function close() {
  emit("update:visible", false);
}
</script>

<style scoped>
/* Styles pour la modal */
</style>
