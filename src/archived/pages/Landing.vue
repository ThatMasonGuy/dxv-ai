<!-- src/pages/Home.vue -->
<template>
  <div
    class="flex flex-col min-h-[--adjusted-height] pt-[--header-height] bg-gradient-to-br from-background-950 from-20% via-background-800 to-background-600"
  >
    <div class="flex-grow container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8 text-center">Welcome to the Home Page</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1687938641915-4338bf1ba124?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random Image"
            class="w-[600px] h-[400px] object-cover rounded-lg shadow-2xl hover:scale-[101%] transition-transform duration-300"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1687938310683-b6824667ab73?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random Image"
            class="w-[600px] h-[400px] object-cover rounded-lg shadow-2xl hover:scale-[101%] transition-transform duration-300"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1687938214619-a96bd6391809?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random Image"
            class="w-[600px] h-[400px] object-cover rounded-lg shadow-2xl hover:scale-[101%] transition-transform duration-300"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1687938133945-477129b34b42?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random Image"
            class="w-[600px] h-[400px] object-cover rounded-lg shadow-2xl hover:scale-[101%] transition-transform duration-300"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1687856265836-60f5bc77d736?q=80&w=2733&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random Image"
            class="w-[600px] h-[400px] object-cover rounded-lg shadow-2xl hover:scale-[101%] transition-transform duration-300"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1687855480803-afb87cc0b760?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random Image"
            class="w-[600px] h-[400px] object-cover rounded-lg shadow-2xl hover:scale-[101%] transition-transform duration-300"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1687854763118-93fbaa46f068?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random Image"
            class="w-[600px] h-[400px] object-cover rounded-lg shadow-2xl hover:scale-[101%] transition-transform duration-300"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1665199439045-b301573908c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random Image"
            class="w-[600px] h-[400px] object-cover rounded-lg shadow-2xl hover:scale-[101%] transition-transform duration-300"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1665199368875-17a658b47668?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random Image"
            class="w-[600px] h-[400px] object-cover rounded-lg shadow-2xl hover:scale-[101%] transition-transform duration-300"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1665197501864-8300c5cfcabe?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Random Image"
            class="w-[600px] h-[400px] object-cover rounded-lg shadow-2xl hover:scale-[101%] transition-transform duration-300"
          />
        </div>
        <div class="col-span-2 text-center">
          <p class="text-lg mb-4 font-semibold">This is the home page content. You can add more content here.</p>
          <p class="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna
            tincidunt enim, eget ultricies magna augue eget est.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {

    return {
      
    };
  },
};
</script>