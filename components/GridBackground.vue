<template>
  <svg
    class="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <!-- Dégradé radial pour les bords -->
      <radialGradient
        id="radial-gradient"
        cx="50%"
        cy="50%"
        r="50%"
        fx="50%"
        fy="50%"
      >
        <stop
          offset="0%"
          style="stop-color: rgba(0, 0, 0, 0.8); stop-opacity: 1"
        />
        <stop
          offset="100%"
          style="stop-color: rgba(0, 0, 0, 1); stop-opacity: 1"
        />
      </radialGradient>

      <!-- Motif de grille -->
      <pattern
        id="grid-pattern"
        viewBox="0 0 100 100"
        width="100"
        height="100"
        patternUnits="userSpaceOnUse"
        :x="offsetX"
        :y="offsetY"
      >
        <!-- Lignes de la grille -->
        <line
          x1="0"
          y1="0"
          x2="100"
          y2="0"
          stroke="rgba(255, 255, 255, 0.3)"
          stroke-width="1"
        />
        <line
          x1="0"
          y1="100"
          x2="100"
          y2="100"
          stroke="rgba(255, 255, 255, 0.3)"
          stroke-width="1"
        />
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="100"
          stroke="rgba(255, 255, 255, 0.3)"
          stroke-width="1"
        />
        <line
          x1="100"
          y1="0"
          x2="100"
          y2="100"
          stroke="rgba(255, 255, 255, 0.3)"
          stroke-width="1"
        />
      </pattern>
    </defs>

    <!-- Application du dégradé radial comme fond -->
    <rect width="100%" height="100%" fill="url(#radial-gradient)" />

    <!-- Application du motif de grille avec positionnement central -->
    <rect x="15%" y="15%" width="70%" height="70%" fill="url(#grid-pattern)" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: Number,
    default: 64,
  },
  offsetX: {
    type: Number,
    default: -1,
  },
  offsetY: {
    type: Number,
    default: -1,
  },
});
</script>

<style scoped>
.absolute {
  position: absolute;
}
.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.w-full {
  width: 100%;
}
.h-full {
  height: 100%;
}
</style>
