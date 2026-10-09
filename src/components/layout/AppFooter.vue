<template>
  <footer class="footer bg-gray-100">
    <div class="container mx-auto py-20 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
      <div class="flex flex-col gap-8">
        <img src="/logo.svg" alt="EduPress" class="w-48 h-auto">
        <p class="text-gray-500 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur sed necessitatibus,
          repudiandae fugit unde excepturi placeat officiis.
        </p>
      </div>

      <div class="flex flex-col gap-8">
        <h4 class="text-lg font-semibold">Get Help</h4>
        <ul class="space-y-2 text-gray-600">
          <li><a href="/contact" class="hover:text-orange-500">Contact Us</a></li>
          <li><a href="#" class="hover:text-orange-500">Latest Articles</a></li>
          <li><router-link to="/faqs" class="hover:text-orange-500">FAQ</router-link></li>
        </ul>
      </div>

      <div class="flex flex-col gap-8">
        <h4 class="text-lg font-semibold">Programs</h4>
        <ul class="space-y-2 text-gray-600">
          <li><a href="#" class="hover:text-orange-500">Art & Design</a></li>
          <li><a href="#" class="hover:text-orange-500">Business</a></li>
          <li><a href="#" class="hover:text-orange-500">IT & Software</a></li>
          <li><a href="#" class="hover:text-orange-500">Languages</a></li>
          <li><a href="#" class="hover:text-orange-500">Programming</a></li>
        </ul>
      </div>

      <div class="flex flex-col gap-8">
        <h4 class="text-lg font-semibold">Contact Us</h4>
        <div class="flex flex-col gap-4">
          <ul class="space-y-3 text-gray-600 text-sm">
            <li>Address: 2321 New Design Str, Hudson Yards, USA</li>
          </ul>
          <ul class="space-y-3 text-gray-600 text-sm">
            <li>Tel: + (123) 2500-567-8988</li>
            <li>Email: support@gmail.com</li>
          </ul>
          <div class="flex gap-4 text-gray-500">
            <a href="#" class="hover:text-orange-500"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="hover:text-orange-500"><i class="fa-brands fa-pinterest-p"></i></a>
            <a href="#" class="hover:text-orange-500"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#" class="hover:text-orange-500"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="hover:text-orange-500"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>

    </div>
  </footer>
  <div class="container mx-auto bg-gray-100 border-t border-gray-200">
    <p class="text-center text-gray-500 text-sm py-5">Copyright © 2024 LearnPress LMS | Powered by ThimPress</p>
  </div>

</template>
