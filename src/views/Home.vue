
<template>
  <!-- HERO SECTION -->
  <section
    class="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
    style="background-image: url('/src/assets/6.png')"
  >
    <!-- DARK OVERLAY -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- CONTENT -->
    <div class="relative z-10 text-center px-6 max-w-6xl">
      <h1
        class="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mt-5"
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
          class=" bg-white border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-bold transition duration-300 text-black"
        >
          Learn More
        </button>
      </div>

    <div class="flex ">
      <img src="/src/assets/12.jpg" alt="#" class="w-70 h-80 mt-8 mb-8 ">
      <img src="/src/assets/7.jpg" alt="#" class="w-70 h-80 mt-8 mb-8  ml-3">
      <img src="/src/assets/6.png" alt="#" class="w-70 h-80 mt-8 mb-8  ml-3">
      <img src="/src/assets/4.jpg" alt="#" class="w-70 h-80 mt-8 mb-8  ml-3">
    </div>
    </div>


    <div
      class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"
    ></div>
  </section>
  
</template>