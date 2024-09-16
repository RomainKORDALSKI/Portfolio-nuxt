<template>
  <div>
    <div id="projects" class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <Card
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @openModal="openModal"
      />
    </div>

    <!-- Modal centralisée avec taille réduite -->
    <Teleport to="body">
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
        @click.self="closeModal"
      >
        <div class="relative w-full max-w-md p-4 bg-zinc-800 rounded-lg">
          <button
            @click="closeModal"
            class="absolute top-2 right-2 text-white text-lg"
          >
            X
          </button>
          <video
            v-if="selectedProject"
            controls
            autoplay
            class="w-full h-auto rounded-lg"
            :src="selectedProject.siteUrl"
            style="max-height: 400px"
          />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import projects from "../data/projects";
import Card from "./Card.vue";

const showModal = ref(false);
interface Project {
  id: number;
  siteUrl: string;
  // Add other properties as needed
}

const selectedProject = ref<Project | null>(null);

function openModal(project: { id: number; siteUrl: string } | null) {
  selectedProject.value = project;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  selectedProject.value = null;
}
</script>

<style scoped>
/* Vous pouvez ajouter des styles spécifiques ici si nécessaire */
</style>
