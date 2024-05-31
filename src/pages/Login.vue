<!-- Login.vue -->
<template>
    <div class="w-full lg:grid lg:min-h-screen lg:grid-cols-2 h-screen">
        <div class="flex flex-col items-center justify-center py-12 px-4 mx-auto">
            <router-link to="/">
                <Button href="/" class="absolute top-2 left-2 z-20">Return Home</Button>
            </router-link>
            <router-link to="/">
                <Button href="/" class="absolute top-2 right-2 z-20">Dark Mode</Button>
            </router-link>
            <div class="mx-auto grid w-[350px] gap-6">
                <div class="grid gap-2 text-center">
                    <h1 class="text-3xl font-bold mb-6">Login</h1>
                    <p class="text-balance text-muted-foreground">
                        Enter your email below to login to your account
                    </p>
                </div>
                <div class="grid gap-4">
                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input id="email" type="email" placeholder="example@gmail.com" required v-model="email" />
                    </div>
                    <div class="grid gap-2">
                        <div class="flex items-center">
                            <Label for="password">Password</Label>
                            <a href="/forgot-password" class="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </a>
                        </div>
                        <Input id="password" type="password" required v-model="password" />
                    </div>
                    <Button type="submit" class="w-full" @click="handleEmailLogin">
                        Login
                    </Button>
                    <Button variant="outline" class="w-full" @click="handleGoogleLogin">
                        Login with Google
                    </Button>
                </div>
                <div class="mt-4 text-center text-sm">
                    Don't have an account?
                    <a href="/signup" class="underline">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
        <div class="bg-gray-500 lg:block relative overflow-hidden">
            <transition name="fade" mode="in-out" :enter-active-class="'transition-opacity duration-1000'"
                :leave-active-class="'transition-opacity duration-1000'" :enter-from-class="'opacity-0'"
                :leave-to-class="'opacity-0'">
                <img :key="currentImage" :src="currentImage" alt="Current Image"
                    class="object-cover w-full h-full absolute inset-0" />
            </transition>
            <img :src="nextImage" alt="Next Image" class="object-cover w-full h-full absolute inset-0 opacity-0" />
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signIn, signInWithGoogle } from '@/auth';
import { toast } from "vue-sonner";

export default {
    components: {
        Button,
        Input,
        Label,
    },
    setup() {
        const currentImage = ref(`https://source.unsplash.com/random/1`);
        const nextImage = ref(`https://source.unsplash.com/random/2`);
        const email = ref('');
        const password = ref('');

        const changeImage = () => {
            nextImage.value = `https://source.unsplash.com/random/${Date.now()}`;
            const temp = currentImage.value;
            currentImage.value = nextImage.value;
            nextImage.value = temp;
        };

        onMounted(() => {
            setInterval(changeImage, 8000);
        });

        const handleEmailLogin = async () => {
            try {
                await signIn(email.value, password.value);
                toast.success('Login successful!');
            } catch (error) {
                toast.error(error.message);
            }
        };

        const handleGoogleLogin = async () => {
            try {
                await signInWithGoogle();
                toast.success('Login successful!');
            } catch (error) {
                toast.error(error.message);
            }
        };

        return {
            currentImage,
            nextImage,
            email,
            password,
            handleEmailLogin,
            handleGoogleLogin,
        };
    },
};
</script>