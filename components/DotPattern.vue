<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 16, // Augmenter la taille pour un effet plus visible
  },
  radius: {
    type: Number,
    default: 1, // Augmenter le rayon pour des cercles plus grands
  },
  offsetX: {
    type: Number,
    default: 0,
  },
  offsetY: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <svg class="absolute inset-0 -z-10 w-full h-full">
    <defs>
      <pattern
        id="dot-pattern"
        :width="size"
        :height="size"
        patternUnits="userSpaceOnUse"
        patternContentUnits="userSpaceOnUse"
        :x="offsetX"
        :y="offsetY"
      >
        <circle
          :cx="size / 2"
          :cy="size / 2"
          :r="radius"
          fill="currentColor"
          opacity="0.1"
        />
      </pattern>
    </defs>

    <rect
      width="100%"
      height="100%"
      stroke-width="0"
      fill="url(#dot-pattern)"
    />
  </svg>
</template>
