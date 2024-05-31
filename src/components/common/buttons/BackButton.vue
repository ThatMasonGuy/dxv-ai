<template>
    <Button @click="goBack" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Go Back
    </Button>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { Button } from '@/components/ui/button'

const router = useRouter();

const goBack = () => {
    router.go(-1);
};
</script>