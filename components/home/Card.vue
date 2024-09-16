<template>
  <div>
    <div
      class="group relative flex flex-col gap-1 rounded-lg border border-white/10 bg-zinc-900/80 p-1 shadow-2xl shadow-zinc-950/50 backdrop-blur-sm transition-all duration-300"
      :style="{ height: showFullDescription ? 'auto' : 'initial' }"
    >
      <!-- Petits points en haut -->
      <div class="flex gap-1 px-1 py-[2px]">
        <div
          class="size-2 rounded-full bg-white/10 transition-all duration-300 group-hover:bg-red-500/90"
        />
        <div
          class="size-2 rounded-full bg-white/10 transition-all duration-300 group-hover:bg-yellow-500/90"
        />
        <div
          class="size-2 rounded-full bg-white/10 transition-all duration-300 group-hover:bg-green-500/90"
        />
      </div>

      <!-- Image du projet ou Vidéo -->
      <div class="relative flex h-56 justify-center overflow-hidden rounded-lg">
        <NuxtImg
          v-if="!project.siteUrl.endsWith('.mov')"
          :src="project.imageUrl"
          width="1536"
          :alt="project.title + ' project image'"
          class="h-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
        />
        <!-- Vidéo avec icône de lecture -->
        <div v-else class="relative cursor-pointer" @click="openModal">
          <video
            class="h-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
            :src="project.siteUrl"
            :alt="project.title + ' project video'"
          />
          <!-- Icône play sur la vidéo -->
          <div
            class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg transition-opacity duration-300 hover:bg-opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16 text-white/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.752 11.168l-5.197-3.008A1 1 0 008 9.07v5.858a1 1 0 001.555.832l5.197-3.008a1 1 0 000-1.664z"
              />
            </svg>
          </div>
        </div>

        <!-- Nom du projet sur l'image -->
        <div
          class="absolute bottom-0 flex w-full justify-center bg-gradient-to-t from-black/70 via-transparent to-transparent p-2"
        >
          <div
            class="flex items-center justify-between gap-2 px-4 py-[5px] rounded-t-lg border-x border-t border-white/10 border-b-transparent backdrop-blur-md shadow-md"
          >
            <div class="flex items-center gap-2">
              <span
                class="whitespace-nowrap text-sm font-semibold text-white/60"
              >
                {{ project.title }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Description, Stack et Liens -->
      <div class="flex flex-col gap-4 mt-2">
        <!-- Description avec bouton Voir plus -->
        <p
          class="text-sm text-white/80"
          :class="showFullDescription ? '' : 'line-clamp-3'"
        >
          {{ project.description }}
        </p>
        <button
          class="text-white/60 text-sm focus:outline-none"
          @click="toggleDescription"
        >
          {{ showFullDescription ? "Voir moins" : "Voir plus" }}
        </button>

        <!-- Stack utilisé -->
        <div>
          <h4 class="text-sm font-semibold text-white/80">Technologies :</h4>
          <p class="text-sm text-white/60">{{ project.taches }}</p>
        </div>

        <!-- Liens vers GitHub et le site -->
        <div class="flex gap-4 justify-center">
          <!-- Lien GitHub 
          <div>
            <SpotlightButton>
              <NuxtLink
                :to="project.githubUrl"
                target="_blank"
                class="white-gradient relative flex items-center justify-center transition-all duration-200"
              >
                Voir sur GitHub
              </NuxtLink>
            </SpotlightButton>
          </div>-->
          <!-- Lien vers le site ou vidéo -->
          <SpotlightButton>
            <NuxtLink
              v-if="project.siteUrl && !project.siteUrl.endsWith('.mov')"
              :to="project.siteUrl"
              target="_blank"
              class="white-gradient relative flex items-center justify-center transition-all duration-100"
            >
              Voir le projet
            </NuxtLink>
            <div
              v-else
              class="white-gradient relative flex items-center justify-center transition-all duration-100"
            >
              Vidéo du projet
            </div>
          </SpotlightButton>

          <!-- Vidéo si non déployé -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { PropType } from "vue";
import type { Project } from "../data/projects";

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});

const showFullDescription = ref(false);
const showModal = ref(false);

function toggleDescription() {
  showFullDescription.value = !showFullDescription.value;
}

function openModal() {
  showModal.value = true;
  emits("openModal", props.project);
}

const emits = defineEmits(["openModal"]);
</script>

<style scoped>
/* Limite la description à 3 lignes avant de cliquer sur "Voir plus" */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Petits points colorés */
.size-2 {
  width: 8px;
  height: 8px;
}

/* Icône play */
svg {
  cursor: pointer;
}
</style>
