<template>
  <div
    class="flex flex-col min-h-[--adjusted-height] pt-[--header-height] bg-gradient-to-br from-background-950 from-20% via-background-800 to-background-600">
    <main class="flex-grow container mx-auto px-6 py-8">
      <h1 class="text-4xl font-bold mb-8 text-center text-gray-100">
        Check out my other websites!
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(link, index) in links" :key="index" :class="link.color +
          ' rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transition duration-300'">
          <a :href="link.url" target="_blank" rel="noopener noreferrer" class="block text-center">
            <div class="text-2xl font-bold mb-4 text-white">
              {{ link.title }}
            </div>
            <div class="text-white">{{ link.description }}</div>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const links = ref([
      {
        title: "Mxn",
        url: "https://mxn.au",
        description: "Description of Mxn website",
      },
      {
        title: "Xbx",
        url: "https://xbx.au",
        description: "Description of Xbx website",
      },
      {
        title: "Maso",
        url: "https://maso.au",
        description: "Description of Maso website",
      },
      {
        title: "Dxv",
        url: "https://dxv.ai",
        description: "Description of Dxv website",
      },
      {
        title: "Tempest Games",
        url: "https://tempestgames.au",
        description: "Description of Tempest Games website",
      },
      {
        title: "Studio Tempest",
        url: "https://studio-tempest.com",
        description: "Description of Studio Tempest website",
      },
      {
        title: "That Mason Guy",
        url: "https://thatmasonguy.com",
        description: "Description of That Mason Guy website",
      },
    ]);

    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-indigo-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-gray-500",
      "bg-teal-500",
      "bg-cyan-500",
    ];

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    const assignRandomColors = () => {
      shuffleArray(colors);
      links.value = links.value.map((link, index) => {
        return { ...link, color: colors[index % colors.length] };
      });
    };

    onMounted(() => {
      assignRandomColors();
    });

    return {
      links,
    };
  }
};
</script>