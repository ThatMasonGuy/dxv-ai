<template>
  <div class="flex items-center justify-center min-h-screen gradient-background relative">
    <div class="relative text-center p-6 bg-white rounded-lg shadow-2xl">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
      <p class="text-lg text-gray-600 mb-8 px-2">
        We are working hard to give you a better experience. Stay tuned!
      </p>
      <form class="flex flex-col items-center" @submit.prevent="handleSubmit">
        <input type="email" v-model="email" autocomplete="email" placeholder="Enter your email"
          class="mb-4 p-2 w-72 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required />
        <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Notify Me
        </button>
      </form>
    </div>
    <div>
      <h2 class="text-center text-gray-50 m-4 absolute bottom-0 right-3">Website views: {{ viewCount }}</h2>
    </div>
  </div>
</template>

<script setup>
import { ref as databaseRef, onValue, runTransaction } from 'firebase/database';
import { realTimeDb } from '@/firebase';
import { ref, onMounted } from 'vue';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '@/firebase.js';
import { toast } from 'vue-sonner';

const email = ref('');

const viewCount = ref(0);
const viewCountRef = databaseRef(realTimeDb, 'websiteViews');


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

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const handleSubmit = async () => {
  if (!email.value || !isValidEmail(email.value)) {
    toast.error('Please enter a valid email address.');
    return;
  }

  try {
    await addDoc(collection(firestore, 'mailing'), {
      email: email.value,
      timestamp: new Date()
    });
    toast.success('Thank you! We will notify you once we are live.');
    email.value = '';
  } catch (e) {
    console.error('Error adding document: ', e);
    toast.error('There was an error. Please try again.');
  }
};
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(300deg, deepskyblue, darkviolet, blue), url(https://grainy-gradients.vercel.app/noise.svg);
  background-size: 180% 180%;
  animation: gradient-animation 18s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>