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
            <p>Mes Projets</p>
          </h1>

          <!-- Subtitle -->
          <h2
            class="mx-auto mt-4 max-w-xl text-center text-lg antialiased text-white/60"
          >
            <p>
              Ces projets ont été réalisés avec un large éventail de langages et
              d’outils qui incluent React, Vue, Nuxt.js, Next.js, EJS, Vanilla
              JavaScript, Saas, TailWind et bien plus encore. En somme, chaque
              projet a été entrepris dans un effort de curiosité pour découvrir
              de nouvelles techniques, approfondir ma connaissance du langage et
              affiner mes compétences.
            </p>
          </h2>
        </div>

        <!-- Projects Section -->
        <div
          style="--stagger: 5"
          data-animate
          class="mt-12 mb-12 flex w-full max-w-3xl flex-col gap-4 lg:mt-16"
        >
          <HomeProjects />
        </div>
      </div>
    </div>
  </section>
</template>
