<template>
  <div class="project-slider relative mt-6 w-full px-4 py-16">
    <h3
      class="mx-auto pt-3 mb-4 text-pretty bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-center text-3xl leading-tight text-transparent lg:max-w-3xl lg:text-4xl"
    >
      <p>Aperçu de mes projets</p>
    </h3>

    <Carousel
      :items-to-show="3"
      :wrap-around="true"
      :transition="500"
      class="max-w-5xl mx-auto"
    >
      <Slide v-for="project in projects" :key="project.id">
        <div class="carousel__item mx-2">
          <UCard class="h-full overflow-hidden bg-gray-800/50 backdrop-blur-sm">
            <img
              :src="project.imageUrl"
              :alt="project.title"
              class="h-56 w-full object-cover"
              @click='navigateToProject()'
            />
            <div class="p-4">
              <h4 class="mx-auto text-pretty bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-center text-xl leading-tight text-transparent lg:max-w-xl lg:text-2xl">
                <p>{{ project.title }}</p>
              </h4>
            </div>
          </UCard>
        </div>
      </Slide>

      <template #addons>
        <Navigation v-slot="{ next, prev }">
          <UButton
            icon="i-heroicons-chevron-left-20-solid"
            color="white"
            variant="solid"
            @click="prev"
            class="carousel-prev absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80"
          />
          <UButton
            icon="i-heroicons-chevron-right-20-solid"
            color="white"
            variant="solid"
            @click="next"
            class="carousel-next absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700/80"
          />
        </Navigation>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import projects from '../data/projects'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToProject = () => {
  router.push(`/project/`)
}
</script>

<style scoped>
.carousel__item {
  min-height: 300px;
  width: 100%;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 2px solid white;
  background-color: red !important;
  color: white !important;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.carousel__prev:hover,
.carousel__next:hover {
  background-color: rgba(55, 65, 81, 0.8) !important;
}

.carousel__pagination {
  padding-top: 20px;
}

.carousel__pagination-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 6px;
  background-color: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.carousel__pagination-button:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

.carousel__pagination-button--active {
  background-color: white;
}
</style>