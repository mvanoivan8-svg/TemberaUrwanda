<script setup>
const heroImage = new URL('../assets/6.png', import.meta.url).href

const places = [
  {
    title: "Volcanoes National Park",
    image: new URL('../assets/7.jpg', import.meta.url).href,
    description:
      "Home of mountain gorillas and beautiful volcano views.",
  },
  {
    title: "Lake Kivu",
    image: new URL('../assets/6.png', import.meta.url).href,
    description:
      "Relaxing beaches, boats, and amazing sunsets.",
  },
  {
    title: "Kigali City",
    image: new URL('../assets/1.jpg', import.meta.url).href,
    description:
      "Clean modern city with culture and nightlife.",
  },
]
</script>

<template>
  <!-- HERO SECTION -->
  <section
    class="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <!-- DARK OVERLAY -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- CONTENT -->
    <div class="relative z-10 text-center px-6 max-w-6xl">
      <h1
        class="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg"
      >
        TEMBERA URWANDA
      </h1>

      <p
        class="text-xl md:text-3xl text-green-300 mt-6 font-semibold"
      >
        The Land of a Thousand Hills
      </p>

      <p
        class="text-gray-200 mt-5 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
      >
        Discover the beauty of Rwanda through mountains,
        wildlife, lakes, culture, and unforgettable adventures.
      </p>

      <!-- BUTTONS -->
      <div
        class="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
      >
        <button
          class="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full text-lg font-bold transition duration-300 shadow-2xl"
        >
          Explore Rwanda
        </button>

        <button
          class="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-bold transition duration-300 text-white"
        >
          Learn More
        </button>
      </div>

      <!-- CARDS SECTION -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
      >
        <div
          v-for="place in places"
          :key="place.title"
          class="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition duration-300"
        >
          <img
            :src="place.image"
            :alt="place.title"
            class="w-full h-56 object-cover"
          />

          <div class="p-6 text-left">
            <h2 class="text-2xl font-bold text-white mb-3">
              {{ place.title }}
            </h2>

            <p class="text-gray-200 leading-relaxed">
              {{ place.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- BOTTOM FADE -->
    <div
      class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"
    ></div>
  </section>
</template>