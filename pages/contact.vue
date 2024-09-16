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
            <p>Me contacter</p>
          </h1>

          <!-- Subtitle -->
          <h2
            class="mx-auto mt-4 max-w-xl text-center text-lg antialiased text-white/60"
          ></h2>
        </div>

        <!-- Contact Form -->
        <div class="mb-24 max-w-3xl w-3/6">
          <form @submit.prevent="sendEmail" class="flex flex-col gap-6 mt-4">
            <input
              v-model="form.name"
              type="text"
              placeholder="Votre nom"
              required
              class="p-4 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 transition"
            />
            <input
              v-model="form.email"
              type="email"
              placeholder="Votre e-mail"
              required
              class="p-4 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 transition"
            />
            <input
              v-model="form.telephone"
              type="telephone"
              placeholder="Votre numéro de téléphone"
              class="p-4 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 transition"
            />
            <textarea
              v-model="form.message"
              placeholder="Votre message"
              required
              rows="5"
              class="p-4 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500 transition"
            ></textarea>
            <button
              type="submit"
              class="p-4 bg-gray-800 text-white/60 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500 transition"
            >
              Envoyer
            </button>
          </form>
          <p v-if="responseMessage" class="mt-4 text-green-400">
            {{ responseMessage }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "emailjs-com"; // Assure-toi d'installer emailjs avec npm

const form = ref({
  name: "",
  email: "",
  message: "",
  telephone: "",
});

const responseMessage = ref("");
emailjs.init("IdkEeH4ERWQi7aGiy");
const sendEmail = () => {
  emailjs
    .send("service_x40bhxy", "template_test", form.value, "IdkEeH4ERWQi7aGiy")
    .then(
      (response) => {
        responseMessage.value = "Votre message a été envoyé avec succès !";
        form.value = { name: "", email: "", message: "", telephone: "" }; // Réinitialise le formulaire
      },
      (error) => {
        responseMessage.value = "Une erreur est survenue. Veuillez réessayer.";
        console.error("Erreur lors de l’envoi du message :", error);
      }
    );
};
</script>

<style scoped></style>
