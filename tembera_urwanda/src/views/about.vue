<script setup>
import img4 from '../assets/4.jpg'
import img6 from '../assets/6.png'
import img7 from '../assets/7.jpg'
import img13 from '../assets/13.png'
import img12 from '../assets/12.jpg'
</script>

<template>
  <section class="bg-green-50">

    <h1 class="text-6xl text-green-800 ml-120 font-bold">About us</h1>

    <div class="flex ml-30 mt-20">
      <img :src="img4" class="w-100 h-100 p-2" />
      <p class="text-2xl text-black mt-15 ml-18">
        This is the website that helps tourists...
      </p>
    </div>

    <div class="flex ml-30 mt-20">
      <p class="text-2xl text-black mt-15 ml-18 mr-10">
        This is the website that helps tourists...
      </p>
      <img :src="img6" class="w-100 h-100 p-2 mb-10" />
    </div>

    <div class="flex ml-30 mt-20">
      <img :src="img7" class="w-100 h-100 p-2" />
      <p class="text-2xl text-black mt-15 ml-18">
        This is the website that helps tourists...
      </p>
    </div>

    <div class="flex ml-30 mt-20">
      <p class="text-2xl text-black mt-15 ml-18 mr-10">
        This is the website that helps tourists...
      </p>
      <img :src="img13" class="w-100 h-100 p-2 mb-10" />
    </div>

    <div class="flex ml-30 mt-20">
      <img :src="img12" class="w-100 h-100 p-2" />
      <p class="text-2xl text-black mt-15 ml-18">
        This is the website that helps tourists...
      </p>
    </div>

  </section>
</template>