<!-- LoadingScreen.vue -->
<template>
    <div v-if="isLoading" class="loading-screen fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999]">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoadingScreen',
    data() {
      return {
        isLoading: true,
      };
    },
  };
  </script>
  
  <style scoped>
  .loading-screen {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  .spinner {
    /* Add your spinner styles here */
  }
  </style>