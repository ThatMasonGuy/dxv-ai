<template>
    <button @click="toggleTheme" :class="[
        'flex items-center justify-center p-2 rounded-md transition-colors duration-300',
        colorMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800',
    ]">
        <SunIcon v-if="colorMode === 'dark'" class="h-5 w-5" />
        <MoonIcon v-else-if="colorMode === 'light'" class="h-5 w-5" />
        <ComputerDesktopIcon v-else class="h-5 w-5" />
        <span class="sr-only">Toggle theme</span>
    </button>
</template>

<script setup>
import { useColorMode } from '@vueuse/core'
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/vue/24/outline'

const colorMode = useColorMode()

const toggleTheme = () => {
    if (colorMode.value === 'dark') {
        colorMode.value = 'light'
    } else if (colorMode.value === 'light') {
        colorMode.value = 'auto'
    } else {
        colorMode.value = 'dark'
    }
}
</script>