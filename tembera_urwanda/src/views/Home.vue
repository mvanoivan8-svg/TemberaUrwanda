<script setup>
const places = [
  {
    title: "Volcanoes National Park",
    image: "/src/assets/7.jpg",
    description: "Home of mountain gorillas and beautiful volcano views.",
  },
  {
    title: "Lake Kivu",
    image: "/src/assets/6.png",
    description: "Relaxing beaches, boats, and amazing sunsets.",
  },
  {
    title: "Kigali City",
    image: "/src/assets/1.jpg",
    description: "Clean modern city with culture and nightlife.",
  },
]
</script>

<template>
  <!-- HERO SECTION -->
  <section
    class="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
    style="background-image: url('/src/assets/6.png');"
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Main Content -->
    <div class="relative z-10 text-center px-6 max-w-5xl">
      <h1
        class="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg"
      >
        TEMBERA URWANDA
      </h1>

      <p
        class="text-xl md:text-3xl text-green-300 mt-6 font-semibold"
      >
        The Land of a Thousand Hills
      </p>

      <p
        class="text-gray-200 mt-5 text-base md:text-lg max-w-2xl mx-auto"
      >
        Discover the beauty of Rwanda through mountains, lakes,
        wildlife, culture, and unforgettable adventures.
      </p>

      <!-- Buttons -->
      <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          class="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full text-lg font-bold transition duration-300 shadow-lg"
        >
          Explore Rwanda
        </button>

        <button
          class=" bg-white border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-bold transition duration-300"
        >
          Learn More
        </button>
      </div>

      <!-- CARDS -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mb-10"
      >
        <div
          v-for="place in places"
          :key="place.title"
          class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition duration-300"
        >
          <img
            :src="place.image"
            :alt="place.title"
            class="w-full h-52 object-cover"
          />

          <div class="p-5 text-left">
            <h2 class="text-2xl font-bold text-white mb-2">
              {{ place.title }}
            </h2>

            <p class="text-gray-200">
              {{ place.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Fade -->
    <div
      class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent mb-10"
    ></div>
  </section>
</template>