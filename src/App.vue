<!-- src/App.vue -->
<template>
  <div id="app" class="flex flex-col">
    <Toaster position="bottom-right" richColors />
    <Header v-if="$route.meta.requiresOverlay" />
    <router-view class="flex" :class="{'pt-[--header-height]': $route.meta.requiresOverlay}" />
    <div clas="flex-grow"></div>
    <Footer v-if="$route.meta.requiresOverlay" />
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import { Toaster } from '@/components/ui/sonner';

export default {
  components: {
    Header,
    Footer,
    Toaster,
  },
};
</script>

<style>
#app {
  min-height: 100vh;
}

.router-view {
  flex-grow: 1;
}
</style>