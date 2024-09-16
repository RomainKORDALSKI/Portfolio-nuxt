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
          <p>
            Je m’appelle Romain Kordalski, j’ai 31 ans et je suis un développeur
            web full stack en pleine transition professionnelle. Je suis
            passionné par le web et les nouvelles technologies.
          </p>

          <p class="mt-4">
            J’ai commencé ma carrière professionnelle dans des métiers manuels,
            j’étais cariste, opérateur de production, et aussi
            horticulteur/maraîcher. J’ai toujours su faire preuve de rigueur et
            de précision, d’autonomie mais aussi d’adaptabilité à différents
            milieux. Ces qualités je les utilise également aujourd’hui dans mon
            travail de développeur.
          </p>

          <p class="mt-4">
            Ma formation à l’école O’clock m’a permis de me spécialiser dans des
            technologies en développement web tels que React, Next.js, Nuxt.js,
            Vue.js, Tailwind, Sass, postgresql. J’ai toujours montré de la
            curiosité pour l’apprentissage. J’ai mené des projets durant ma
            formation, ou en parallèle de celle-ci afin de perfectionner mes
            compétences et de me tenir informé des nouvelles tendances du
            développement.
          </p>

          <p class="mt-4">
            D’ici quelques semaines, je commencerai un stage en tant que
            développeur front-end, avec une spécialisation sur Nuxt.js et
            Vue.js, domaine dans lequel j’aspire à acquérir plus de compétences.
            Je considère qu’il s’agit d’une nouvelle opportunité pour moi de
            tester ce que j’ai appris jusqu’à présent et continuer à approfondir
            des connaissances prometteuses.
          </p>

          <p class="mt-4">
            En dehors du code, je suis une personne simple qui sait apprécier la
            vie. J’aime passer du temps avec ma famille, et je suis passionné
            par le bricolage. J’ai rénové ma maison en suivant des tutoriels, ce
            qui m'a permis de montrer à quel point je suis autonome et
            persévérant.
          </p>

          <p class="mt-4">
            Je suis à la recherche active d’une opportunité en développement Web
            qui me permettrait de mettre en avant mon experience et ma forte
            motivation, si vous avez ce que je cherche, n’hésitez pas à me
            contacter pour discuter!
          </p>

          <!-- CV Download Button -->
          <div class="mt-8 flex justify-center">
            <SpotlightButton rounded>
              <a
                href="/cv.pdf"
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
