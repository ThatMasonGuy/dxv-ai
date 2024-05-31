<template>
    <header class="fixed top-0 z-50 backdrop-blur-lg bg-white/10 text-black shadow-2xl flex items-center sm:py-3 px-4 h-20 sm:h-[--header-height] w-screen">
      <nav class="w-full">
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center">
            <img
              src="@/assets/favicon.jpg"
              alt="Logo image"
              class="sm:h-12 h-10 sm:w-12 w-10 object-cover cursor-pointer rounded-full shadow-xl"
              @click="$router.push('/')"
            />
            <span
              class="sm:text-3xl text-2xl font-bold absolute sm:ml-16 ml-14 text-[--text-50] drop-shadow-[0_5px_30px_rgba(255,255,255,0.35)]"
            >{{ currentPageTitle }}</span>
          </div>
          <button @click="toggleMenu" class="sm:hidden focus:outline-none">
            <svg
              class="w-8 h-8 text-[--text-50]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul class="hidden sm:flex text-md lg:text-xl items-center font-bold text-[--text-50]">
            <li class="sm:mx-1 my-2 sm:my-0">
              <router-link :to="{ path: '/home' }">
                <Button variant="link" :class="{ underline: currentPageTitle === 'Home' }" class="px-1 lg:px-2">Home</Button>
              </router-link>
            </li>
            <li class="sm:mx-1 my-2 sm:my-0">
              <router-link :to="{ path: '/contact' }">
                <Button variant="link" :class="{ underline: currentPageTitle === 'Contact' }" class="px-1 lg:px-2">Contact</Button>
              </router-link>
            </li>
            <li class="sm:mx-1 my-2 sm:my-0">
              <router-link :to="{ path: '/portfolio' }">
                <Button variant="link" :class="{ underline: currentPageTitle === 'Portfolio' }" class="px-1 lg:px-2">Portfolio</Button>
              </router-link>
            </li>
            <li class="sm:mx-1 my-2 sm:my-0">
              <router-link :to="{ path: '/websites' }">
                <Button variant="link" :class="{ underline: currentPageTitle === 'Websites' }" class="mr-4 px-1 lg:px-2">Websites</Button>
              </router-link>
            </li>
            <li class="sm:mx-1 my-2 sm:my-0">
              <router-link :to="{ path: '/login' }">
                <Avatar class="h-10 w-10">
                  <AvatarFallback>
                    <UserCircleIcon class="h-8 w-8" />
                  </AvatarFallback>
                </Avatar>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div v-if="isMenuOpen" class="fixed inset-0 bg-gray-700 bg-opacity-50 z-40 h-screen" @click="toggleMenu"></div>
      <div v-if="isMenuOpen" class="fixed z-[9999] top-0 right-0 h-screen bg-[--background-700] shadow-lg transform transition-transform duration-300 ease-in-out w-4/5" :class="{'translate-x-full': !isMenuOpen, 'translate-x-0': isMenuOpen}">
        <div class="flex items-center justify-between p-6 bg-[--background-800] h-20">
          <button @click="toggleMenu" class="text-black focus:outline-none">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <router-link to="/login" @click="toggleMenu">
            <Avatar class="h-10 w-10">
              <AvatarFallback>
                <UserCircleIcon class="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
          </router-link>
        </div>
        <ul class="flex flex-col text-2xl items-start font-bold text-[--text-50] space-y-8 mt-8 px-2">
          <li><router-link to="/home" @click="toggleMenu"><Button variant="link" :class="{ underline: currentPageTitle === 'Home' }">Home</Button></router-link></li>
          <li><router-link to="/contact" @click="toggleMenu"><Button variant="link" :class="{ underline: currentPageTitle === 'Contact' }">Contact</Button></router-link></li>
          <li><router-link to="/portfolio" @click="toggleMenu"><Button variant="link" :class="{ underline: currentPageTitle === 'Portfolio' }">Portfolio</Button></router-link></li>
          <li><router-link to="/websites" @click="toggleMenu"><Button variant="link" :class="{ underline: currentPageTitle === 'Websites' }">Websites</Button></router-link></li>
        </ul>
      </div>
    </header>
  </template>
  
  <script>
  import { ref, computed, onMounted, watch } from "vue";
  import { Button, Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
  import { UserCircleIcon } from "@heroicons/vue/24/outline";
  import { toast } from "vue-sonner";
  import { useRoute } from "vue-router";
  
  export default {
    components: {
      Button,
      Avatar,
      AvatarFallback,
      AvatarImage,
      UserCircleIcon,
    },
    setup() {
      const route = useRoute();
      const isMenuOpen = ref(false);
  
      const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
      };
  
      const currentPageTitle = computed(() => {
        return (route.meta && route.meta.title) || 'Default Title';
      });
  
      onMounted(() => {
        toast.success(`Welcome to ${currentPageTitle.value}`);
      });
  
      watch(() => route.path, (newPath) => {
        toast.success(`Transitioned to ${currentPageTitle.value}`);
      });
  
      return {
        currentPageTitle,
        isMenuOpen,
        toggleMenu,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if necessary */
  </style>  