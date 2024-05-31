<template>
  <div
    class="mx-auto pb-12 w-full min-h-[--adjusted-height] bg-gradient-to-br from-background-950 from-20% via-background-800 to-background-600 lg:px-28 px-6">
    <div class="lg:max-w-4xl mx-auto">
      <div>
        <header class="text-center mb-12 mt-5">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-100">{{ data.name }}</h1>
          <p class="text-2xl text-gray-200">{{ data.title }}</p>
        </header>
      </div>
      <div class="mb-12 flex-box justify-center">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100">About Me</h2>
        <p class="text-md md:text-lg text-gray-300 flex">{{ data.about }}</p>
      </div>
      <div class="mb-12">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100">Skills</h2>
        <div class="flexbox flex-wrap">
          <span v-for="skill in data.skills" :key="skill"
            class="inline-block bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm sm:text-md md:text-lg mb-4 mr-4 transition duration-200 ease-in-out">{{
            skill }}</span>
        </div>
      </div>
      <div class="mb-12">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100">Projects</h2>
        <div v-for="project in data.projects" :key="project.name"
          class="mb-6 flex flex-col sm:flex-row items-center sm:justify-between">
          <div class="w-full sm:w-1/2 sm:pr-8">
            <h3 class="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-200">{{ project.name }}</h3>
            <p class="text-sm sm:text-md md:text-lg text-gray-300 mb-4">{{ project.description }}</p>
            <div class="hidden sm:flex sm:space-x-4 justify-between sm:justify-start mb-1 sm:mb-0">
              <router-link v-if="project.demo" :to="project.demo"
                class="text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg transition duration-200 ease-in-out whitespace-nowrap">View
                Demo</router-link>
              <a v-if="project.website" :href="project.website"
                class="text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg transition duration-200 ease-in-out whitespace-nowrap">View
                Live</a>
            </div>
          </div>
          <div class="w-full sm:w-1/2 mt-4 sm:mt-0 mb-4">
            <Dialog>
              <DialogTrigger as-child>
                <img :src="project.image" alt="{{ project.name }}"
                  class="rounded-lg w-full sm:w-96 shadow-2xl hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
              </DialogTrigger>
              <DialogContent class="sm:max-w-5xl bg-gray-100">
                <DialogHeader>
                  <DialogTitle>{{ project.name }}</DialogTitle>
                  <DialogDescription>
                    {{ project.description }}
                  </DialogDescription>
                </DialogHeader>
                <img :src="project.image" alt="Project Image" class="w-full rounded-lg shadow-xl">
              </DialogContent>
            </Dialog>
          </div>
          <div class="flex sm:hidden flex-row justify-between mt-2 w-full">
              <router-link v-if="project.demo" :to="project.demo"
                class="text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg transition duration-200 ease-in-out whitespace-nowrap">View
                Demo</router-link>
              <a v-if="project.website" :href="project.website"
                class="text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg transition duration-200 ease-in-out whitespace-nowrap">View
                Live</a>
            </div>
        </div>
      </div>
      <div>
        <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100">Contact</h2>
        <div class="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 sm:h-6 w-5 sm:w-6 mr-2 text-gray-100" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a :href="'mailto:' + data.email"
            class="text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg transition duration-200 ease-in-out whitespace-nowrap">{{
            data.email }}</a>
        </div>
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 sm:h-6 w-5 sm:w-6 mr-2 text-gray-100" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          <a :href="data.linkedin" target="_blank"
            class="text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg transition duration-200 ease-in-out whitespace-nowrap">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default {
  components: {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  },
  setup() {
    const data = {
      name: 'Mason Bartholomai',
      title: 'IT Professional and Developer',
      about: 'Innovative IT professional with a strong background in PowerApps development, web application development, and IT training. Leveraging 5 years of experience in Local Government and People and Culture, I possess a keen awareness of confidentiality and privacy. Proven track record of building advanced applications, training top-rated custom GPT models for PowerApps, and increasing brand visibility. Passionate about leading innovation and leveraging technology to enhance organisational efficiency.',
      skills: ['JavaScript', 'Vue.js', 'TailwindCSS', 'Firebase', 'PowerApps', 'Python', 'GitHub'],
      projects: [
        {
          name: 'Lifestyle Mentor Services Website',
          description: 'Built the entire lifestylementors.com.au website from scratch using Squarespace.',
          image: 'https://firebasestorage.googleapis.com/v0/b/maso-au.appspot.com/o/website%2Fimages%2Fportfolio%2Flms-website.jpg?alt=media',
          website: 'https://lifestylementors.com.au'
        },
        {
          name: 'PowerApps Visitor Log',
          description: 'Developed a complex PowerApps app for logging visitors and managing session data.',
          demo: '/demo/lms-powerapps',
          image: 'https://firebasestorage.googleapis.com/v0/b/maso-au.appspot.com/o/website%2Fimages%2Fportfolio%2Flms-visitor-app.jpg?alt=media'
        },
        {
          name: 'Full Stack Web App',
          description: 'Set up a sub-domain hosting a full stack webapp using Firestore and Firebase for data and authentication.',
          demo: '/demo/lms-webapp',
          image: 'https://firebasestorage.googleapis.com/v0/b/maso-au.appspot.com/o/website%2Fimages%2Fportfolio%2Flms-web-app.jpg?alt=media',
          website: 'https://lifestylementors.mxn.au'
        }
      ],
      email: 'mason@mxn.au',
      linkedin: 'https://www.linkedin.com/in/masonbartholomai'
    }

    const isDialogOpen = ref(false)

    function openDialog() {
      isDialogOpen.value = true
    }

    function closeDialog() {
      isDialogOpen.value = false
    }

    return {
      data,
      isDialogOpen,
      openDialog,
      closeDialog,
    }
  }
}
</script>