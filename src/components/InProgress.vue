<template>
    <div
        class="flex flex-col min-h-[--adjusted-height] pt-[--header-height] bg-gradient-to-br from-background-950 from-20% via-background-800 to-background-600">
        <h1 class="mt-12 text-center text-3xl font-bold text-gray-200">In progress<span class="typing-dots"></span></h1>
        <p class="text-center text-gray-400 mt-4">Opps! This page isn't quite finished yet, but we're working on it.</p>
        <div class="flex items-center justify-center">
            <BackButton class="m-12 px-6" />
        </div>
    </div>
</template>

<script setup>
import { BackButton } from '@/components'
</script>