<script lang="ts" setup>
import { useRoute } from "vue-router";

// Définir les éléments de navigation
const navigation = [
  { name: "Home", to: "/", icon: "IconHome" },
  { name: "About", to: "/about", icon: "IconUser" },
  { name: "Projects", to: "/project", icon: "IconBriefcase" },
  { name: "Contact", to: "/contact", icon: "IconMail" },
];

const route = useRoute();
</script>

<template>
  <div class="mx-auto my-2 flex w-full items-center justify-center">
    <header class="rounded-full">
      <SpotlightButton
        rounded
        transparent
        :animate="false"
        class="border border-white/10"
      >
        <nav
          class="z-10 flex h-[50px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out sm:h-[45px] sm:hover:gap-4"
        >
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :aria-label="item.name + ' navigation link'"
            :to="item.to"
            :class="[
              item.to === route.path
                ? 'border border-white/5 bg-zinc-900/10 text-white/75 shadow-2xl shadow-white/50 backdrop-blur-3xl text-shadow-sm'
                : 'text-muted',
            ]"
            class="flex items-center rounded-full border border-transparent px-4 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-zinc-900/50 hover:text-main hover:backdrop-blur-3xl sm:px-6"
          >
            <!-- Utiliser des conditions pour rendre les icônes -->
            <template v-if="item.icon === 'IconHome'">
              <IconHome class="size-7 font-light sm:size-6" />
            </template>
            <template v-else-if="item.icon === 'IconUser'">
              <IconUser class="size-7 font-light sm:size-6" />
            </template>
            <template v-else-if="item.icon === 'IconBriefcase'">
              <IconBriefcase class="size-7 font-light sm:size-6" />
            </template>
            <template v-else-if="item.icon === 'IconMail'">
              <IconMail class="size-7 font-light sm:size-6" />
            </template>
          </NuxtLink>
        </nav>
      </SpotlightButton>
    </header>
  </div>
</template>

<style scoped>
/* Ajoutez des styles spécifiques pour le composant NavBar ici si nécessaire */
</style>
