<script setup>
const contacts = [
  {
    title: "Location",
    text: "Kigali, Rwanda",
  },
  {
    title: "Phone",
    text: "+250 788 000 000",
  },
  {
    title: "Email",
    text: "info@visitrwanda.com",
  },
]
</script>

<template>
  <section
    class="min-h-screen bg-cover bg-center relative flex items-center justify-center py-20 px-6"
    style="background-image: url('/src/assets/contact-bg.jpg');"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/70"></div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-7xl">
      
      <!-- Title -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-7xl font-extrabold text-white">
          CONTACT US
        </h1>

        <p class="text-green-300 text-xl mt-5">
          Explore Rwanda With Us
        </p>
      </div>
      
      <!-- Main Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        <!-- Contact Form -->
        <div
          class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl"
        >
          <h2 class="text-3xl font-bold text-white mb-8">
            Send a Message
          </h2>

          <form class="space-y-6">
            <!-- Name -->
            <div>
              <label class="text-white block mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                class="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-green-400"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="text-white block mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-green-400"
              />
            </div>

            <!-- Subject -->
            <div>
              <label class="text-white block mb-2">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                class="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-green-400"
              />
            </div>

            <!-- Message -->
            <div>
              <label class="text-white block mb-2">Message</label>
              <textarea
                rows="6"
                placeholder="Write your message..."
                class="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none border border-white/20 focus:border-green-400"
              ></textarea>
            </div>

            <!-- Button -->
            <button
              class="w-full bg-green-500 hover:bg-green-600 transition duration-300 text-white font-bold py-4 rounded-xl text-lg shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="flex flex-col gap-8 justify-center">
          
          <!-- Cards -->
          <div
            v-for="contact in contacts"
            :key="contact.title"
            class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 flex items-center gap-5 shadow-xl hover:scale-105 transition duration-300"
          >
            <div
              class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl"
            >
              {{ contact.icon }}
            </div>

            <div>
              <h3 class="text-2xl font-bold text-white">
                {{ contact.title }}
              </h3>

              <p class="text-gray-300 mt-1">
                {{ contact.text }}
              </p>
            </div>
          </div>

          <!-- Extra Box -->
          <div
            class="bg-gradient-to-r from-green-500 to-green-700 rounded-3xl p-10 shadow-2xl"
          >
            <h2 class="text-3xl font-bold text-white mb-4">
              Visit Rwanda Today
            </h2>

            <p class="text-gray-100 text-lg leading-relaxed">
              Rwanda offers unforgettable experiences from mountain gorillas
              to breathtaking landscapes and vibrant culture. Contact us and
              start your adventure now.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>