<template>
  <div class="mt-12 w-full">
    <h3
      class="mx-auto mb-6 text-pretty bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-center text-3xl leading-tight text-transparent lg:max-w-3xl lg:text-4xl"
    >
      <p>Aperçu de mes projets</p>
    </h3>

    <div class="relative overflow-hidden">
      <div
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="w-full flex-shrink-0 px-2"
        >
          <img
            :src="project.imageUrl"
            :alt="project.title"
            class="h-48 w-full rounded-lg object-cover shadow-lg border border-white/10"
            @click="navigateToProject(project)"
          />
          <h3
            class="mx-auto mt-6 mb-4 text-pretty bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-center text-1xl leading-tight text-transparent lg:max-w-1sxl lg:text-2xl"
          >
            <p>{{ project.title }}</p>
          </h3>
        </div>
      </div>
      <button
        @click="prevSlide"
        class="absolute left-3 top-1/3 -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white/60"
      >
        &lt;
      </button>
      <button
        @click="nextSlide"
        class="absolute right-3 top-1/3 -translate-y-1/2 bg-black bg-opacity-50 p-2 text-white/60"
      >
        &gt;
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import projects from "../data/projects";

const currentSlide = ref(0);
const router = useRouter();

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % projects.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + projects.length) % projects.length;
};

const navigateToProject = (project: { id: any }) => {
  router.push(`/project`);
};
</script>
