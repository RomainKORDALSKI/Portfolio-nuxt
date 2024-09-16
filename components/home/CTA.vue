<script setup lang="ts">
// Variables
const cvUrl = "/cv/cv.pdf"; // Chemin vers le fichier CV
const cvText = "Telecharger CV"; // Texte du bouton
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 sm:gap-2">
    <div
      class="flex flex-col mb-2 items-center justify-center gap-4 sm:flex-row sm:gap-2"
    >
      <!-- Bouton de téléchargement du CV -->
      <UTooltip :text="cvText">
        <SpotlightButton>
          <a
            class="white-gradient relative flex items-center justify-center transition-all duration-200"
            :href="cvUrl"
            download
            aria-label="Télécharger mon CV"
          >
            {{ cvText }}
          </a>
        </SpotlightButton>
      </UTooltip>
    </div>
  </div>
</template>
