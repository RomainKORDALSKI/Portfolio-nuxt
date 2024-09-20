<script setup lang="ts">
import type { PropType } from "vue";
import { stacks } from "../components/data/stacks";
</script>

<template>
  <section class="relative">
    <!-- Grid Background -->
    <div
      class="pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]"
    />

    <!-- Main Content Container -->
    <div
      class="relative mx-auto flex max-w-7xl flex-col justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8 lg:py-16"
    >
      <!-- Spotlight -->
      <div
        class="absolute -top-8 left-1/2 size-72 -translate-x-1/2 rounded-full bg-white/25 blur-[120px] lg:-top-8 lg:size-[32rem] lg:blur-[200px]"
      />

      <!-- Profile Picture -->
      <HomeProfilePicture />

      <!-- Title and Subtitle -->
      <div class="z-20 flex flex-col items-center justify-center">
        <!-- Title -->
        <div
          class="font-geist"
          style="--stagger: 1; --delay: 10ms"
          data-animate
        >
          <h1
            class="mx-auto text-pretty bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-center text-3xl leading-tight text-transparent lg:max-w-3xl lg:text-4xl"
          >
            <p>
              Bonjour, je suis Romain Kordalski, un développeur web full stack
              passionné par les nouvelles technologies et récemment formé à
              l'école O'clock.
            </p>
          </h1>

          <!-- Subtitle -->
          <h2
            class="mx-auto mt-4 max-w-xl text-center text-lg antialiased text-white/60"
          >
            <p>
              Tout au long de mon parcours, je n’ai jamais cessé de vouloir
              transformer ma curiosité et mon goût pour l’innovation en
              compétences concrètes. Du JavaScript à React, de Vue ou encore
              beaucoup d’autres technologies, chaque projet est une occasion de
              tester mes limites. N’hésitez pas à naviguer dans mon portfolio
              pour découvrir mes réalisations. Pour toute proposition pensez à
              me contacter!
            </p>
          </h2>
        </div>

        <!-- Social Links -->
        <HomeSocial style="--stagger: 3" data-animate />
        <HomeCTA style="--stagger: 4" data-animate />
        <Divider />

        <!-- Stack Section -->
        <div class="flex flex-col gap-3">
          <h3
            class="mx-auto pt-3 mb-2 text-pretty bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-center text-3xl leading-tight text-transparent lg:max-w-3xl lg:text-4xl"
          >
            <p>Mes Stacks</p>
          </h3>
          <div class="flex flex-wrap w-2/3 mx-auto justify-center mb-4 gap-4">
            <HomeStackItem
              v-for="item in stacks"
              :key="item.name"
              :item="item"
            />
          </div>
        </div>
        <Divider />

        <HomeProjectSlider />
        <Divider />
        <!-- Buttons Section: Projets & Contact -->
        <div class="flex flex-row gap-4 mt-12">
          <!-- Button Projets -->
          <SpotlightButton rounded>
            <NuxtLink
              to="/project"
              class="white-gradient relative flex items-center justify-center transition-all duration-200 p-3"
            >
              Voir mes projets
            </NuxtLink>
          </SpotlightButton>

          <!-- Button Contact -->
          <SpotlightButton rounded>
            <NuxtLink
              to="/contact"
              class="white-gradient relative flex items-center justify-center transition-all duration-200 p-3"
            >
              Contactez-moi
            </NuxtLink>
          </SpotlightButton>
        </div>
      </div>
    </div>
  </section>
</template>
