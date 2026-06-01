<template>
  <section class="relative h-screen overflow-hidden">

    <!-- Background Video -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/src/assets/11.mp4" type="video/mp4" />
    </video>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/10"></div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
      <h1 class="text-5xl md:text-7xl font-bold mb-4">
        Visit Rwanda
      </h1>
      <p class="text-lg md:text-2xl">
        Discover the Land of a Thousand Hills
      </p>
    </div>

  </section>
</template>