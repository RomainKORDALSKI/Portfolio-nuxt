<template>
  <section class="relative pt-12">
    <!-- Background Grid -->
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
            <p>À Propos de Moi</p>
          </h1>

          <!-- Subtitle -->
          <h2
            class="mx-auto mt-4 max-w-xl text-center text-lg antialiased text-white/60"
          >
            <p>Apprenez-en plus sur mon parcours et mes passions.</p>
          </h2>
        </div>

        <!-- Personal Information -->
        <div class="mt-12 max-w-3xl text-lg antialiased text-white/60">
<p> Je m'appelle Romain Kordalski, j'ai 31 ans et je suis développeur web full stack. Depuis tout jeune, j'ai été fasciné par l'informatique et le développement. À 14 ans, j'ai découvert la programmation à travers les tutoriels du "Site du Zéro", et dès cet instant, je savais que le code jouerait un rôle important dans ma vie. Cependant, mon parcours professionnel m'a initialement dirigé vers d'autres horizons, mais cette passion ne m'a jamais quitté. Aujourd'hui, après une reconversion réussie, je suis pleinement engagé dans ce que j'aime faire : coder. </p> <p class="mt-4"> Avant de plonger dans le développement, j'ai travaillé dans des métiers manuels tels que cariste, opérateur de production et horticulteur. Ces expériences m'ont permis de développer des compétences précieuses comme la rigueur, l'adaptabilité et l'autonomie. Ce sont des qualités que j'utilise au quotidien dans mon travail de développeur, où chaque ligne de code demande précision et réflexion. </p> <p class="mt-4"> Après avoir suivi une formation intensive à l'école O'Clock, où je me suis spécialisé dans des technologies modernes telles que React, Next.js, Vue.js, Nuxt.js, Tailwind et PostgreSQL, j'ai découvert à quel point l'écosystème du web est vaste et en constante évolution. Mais ce n'est pas uniquement la formation qui m'a forgé : c'est aussi l'expérience pratique, les projets personnels et les défis que je me suis imposés en parallèle, qui m'ont permis de réellement maîtriser ces outils. </p> <p class="mt-4"> Actuellement en stage en tant que développeur front-end, je me spécialise sur Nuxt.js et Vue.js, ce qui m'a permis de travailler sur des projets complexes et d'intégrer la dynamique d'une équipe de développement en entreprise. J'ai ainsi pu découvrir les différentes facettes du travail en entreprise : la collaboration avec des équipes pluridisciplinaires, la gestion de projets à grande échelle, et les défis techniques quotidiens. Cette immersion m'a non seulement permis de solidifier mes compétences, mais aussi de me donner encore plus envie de travailler dans ce domaine. </p> <p class="mt-4"> Être développeur junior sur un marché compétitif n'est pas simple, mais je suis convaincu que ma capacité à apprendre rapidement et à m'adapter fait la différence. Je prends le temps de comprendre les problématiques, d'optimiser mon code et d'explorer de nouveaux frameworks. Ma passion pour l'apprentissage continu me pousse à toujours aller plus loin et à ne jamais me reposer sur mes acquis. </p> <p class="mt-4"> Je consacre une grande partie de mon temps libre à suivre les dernières avancées technologiques et à développer des projets personnels. Cela me permet de rester à jour et de toujours améliorer mes compétences. Mon objectif n'est pas seulement d'obtenir un poste, mais de grandir dans ce métier, d'apporter de la valeur à l'entreprise dans laquelle je travaille et de continuer à apprendre chaque jour. </p> <p class="mt-4"> Si vous êtes à la recherche d'un développeur web motivé, passionné et désireux de se surpasser, je serais ravi de discuter de la manière dont je peux contribuer à vos projets. </p>

          <!-- CV Download Button -->
          <div class="mt-8 flex justify-center">
            <SpotlightButton rounded>
              <a
                href="/cv/cv.pdf"
                download
                aria-label="Télécharger mon CV"
                class="white-gradient relative flex items-center justify-center transition-all duration-200 p-3"
              >
                Télécharger mon CV
              </a>
            </SpotlightButton>
          </div>
        </div>

        <!-- Profile Picture -->
        <div class="mt-12 flex justify-center">
          <HomeProfilePicture />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { profilePicture } = useAppConfig(); // Assure-toi que la photo de profil est définie dans la config globale
</script>

<style scoped></style>
