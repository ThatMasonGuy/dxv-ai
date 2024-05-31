<!-- src/pages/About.vue -->

<template>
  <div class="flex flex-col min-h-[--adjusted-height] pt-[--header-height] bg-gradient-to-br from-background-950 from-20% via-background-800 to-background-600">
    <div class="flex-grow container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8 text-center">Welcome to the About Us Page</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p class="text-lg mb-4">This is the about page content. You can provide information about your company or
            organization here.</p>
          <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum
            bibendum, augue magna tincidunt enim, eget ultricies magna augue eget est.</p>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/2" alt="Random Image" class="w-[600px] h-[400px] image-cover overflow-hidden rounded-lg shadow-2xl hover:scale-[101%] transition-transform duration-300">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup () {

    return {
      
    }
  }
};
</script>