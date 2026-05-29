<template>
    <nav class=" bg-green-800 text-white  px-8 py-2 flex item-center">
        <img src="../assets/image.png" alt="logo" class="w-15 h-11">

        
            <ul class="flex  gap-8 text-l font-medium w-full ml-100">
                <li> <a href="/" class="hover:text-yellow-300">Home</a> </li>
                <li><a href="/about" class="hover:text-yellow-300">About</a></li>
                <li><a href="/services" class="hover:text-yellow-300">Services</a></li>

                <li class="relative group">
                <a href="#" class="hover:text-yellow-300">Gallery<span> v</span></a>
                <ul class="invisible group-hover:visible opacity-0  group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
                <li><a href="#" class="block px-4 py-2  hover:bg-green-300 text-green-900">photos</a></li>
                <li><a href="#" class="block px-4 py-2  hover:bg-green-300 text-green-900">videos</a></li>
                </ul>
                </li>
                <li class="relative group">
                <a href="#" class="hover:text-yellow-300">Destination<span> v</span></a>
                <ul class="invisible group-hover:visible opacity-0  group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
                <li><a href="#" class="block px-4 py-2  hover:bg-green-300 text-green-900">Northern Province</a></li>
                <li><a href="#" class="block px-4 py-2  hover:bg-green-300 text-green-900">Southern Province</a></li>
                <li><a href="#" class="block px-4 py-2  hover:bg-green-300 text-green-900">Eastern Province</a></li>
                <li><a href="#" class="block px-4 py-2  hover:bg-green-300 text-green-900">Western Province</a></li>
                <li><a href="#" class="block px-4 py-2  hover:bg-green-300 text-green-900">Kigali</a></li>
                </ul>
                </li>
                <li><a href="/contacts" class="hover:text-yellow-300">Contacts</a></li>
                <li class="relative group">
                <a href="#" class="hover:text-yellow-300">Language<span> v</span></a>
                <ul class="invisible group-hover:visible opacity-0  group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
                <li><a href="#" class="block px-4 py-2  hover:bg-green-300 text-green-900">English</a></li>
                <li><a href="#" class="block px-4 py-2  hover:bg-green-300 text-green-900">Kinyarwanda</a></li>
                </ul>
                </li>
            </ul>
    
    </nav>
</template>      