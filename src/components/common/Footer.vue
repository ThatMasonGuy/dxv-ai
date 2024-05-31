<!-- src/components/common/Footer.vue -->
<template>
  <footer
    class="bg-gray-800 text-white bottom-0 left-0 z-[999] flex justify-between items-center w-full p-4 drop-shadow-2xl h-[--footer-height]">
    <p>&copy; 2024 Mason Bartholomai. All rights reserved.</p>
    <div class="mr-2 flex items-center">
      <p class="mr-4">Website Views: {{ viewCount }}</p>
      <component is="Cog8ToothIcon" class="w-6 h-6 inline-block mr-2 cursor-pointer" @click="showSettings" />
      <component is="QuestionMarkCircleIcon" class="w-6 h-6 inline-block cursor-pointer" />
    </div>
  </footer>
</template>

<script>
import { ref as databaseRef, onValue, runTransaction } from 'firebase/database';
import { realTimeDb } from '@/firebase';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Cog8ToothIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';

export default {
  components: {
    Cog8ToothIcon,
    QuestionMarkCircleIcon,
  },
  setup() {
    const viewCount = ref(0);

    const viewCountRef = databaseRef(realTimeDb, 'websiteViews');

    const router = useRouter();

    function showSettings() {
      router.push('/settings');
    }

    onValue(viewCountRef, (snapshot) => {
      const data = snapshot.val();
      viewCount.value = data ? data : 0;
    });

    onMounted(() => {
      const viewCountUpdate = (currentViewCount) => {
        return (currentViewCount || 0) + 1;
      };

      runTransaction(viewCountRef, viewCountUpdate)
        .catch((error) => {
          console.error('Error updating view count:', error);
        });
    });

    return {
      viewCount,
      showSettings,
    };
  },
};
</script>