<template>
  <footer class="bg-green-800 text-white px-8 py-10 mt-10">

<div class="flex flex-wrap justify-between gap-8 ">
  <!--this is about of footer-->
  <div>
  <h3 class="text-yellow-300 font-bold text-lg mb-3 ">TEMBERA URWANDA</h3>
  <P class="text-sm text-green-200">Discover the beauty of the land of thousand hills</P>
</div>
<!--quicklinks  -->
<div>
<h3 class="text-yellow-300 font-bold text-lg mb-3 ">Quick links</h3>
<ul class="space-y-2 text-sm">
  <li><RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink></li>
  <li><RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink></li>
  <li><RouterLink to="/contacts" class="hover:text-yellow-300">Contacts</RouterLink></li>
  <li><RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink></li>
</ul>
</div>
<!--Destinations-->
<div>
<h3 class="text-yellow-300 font-bold  text-lg mb-3">Destinations</h3>
<ul class="space-y-2 text-sm">
<li><RouterLink to="/" class="hover:text-yellow-300">Northern province</RouterLink></li>
<li><RouterLink to="/" class="hover:text-yellow-300">Eastern province</RouterLink></li>
<li><RouterLink to="/" class="hover:text-yellow-300">Western province</RouterLink></li>
<li><RouterLink to="/" class="hover:text-yellow-300">Southern province</RouterLink></li>
<li><RouterLink to="/" class="hover:text-yellow-300">Kigali city</RouterLink></li>
</ul>
</div>
<!--contact info-->
<div>
  <h3 class="text-yellow-300 font-bold  text-lg mb-3">Contact</h3>
<ul class="space-y-2 text-green-300 text-sm">
<li >Ahantunyaburanga@gmail.com</li>
<li>0783535353553533553</li>
<li>Kigali.kagugu</li>
</ul>
</div>
</div>

<!-- place forcopyright-->
<div class="border-t border-green-600 mt-8 pt-4 text-sm ">
  <p class=" text-center text-white-500"> @2025 Visit Rwanda.All rights reserved</p>
  </div>

  </footer>
</template>