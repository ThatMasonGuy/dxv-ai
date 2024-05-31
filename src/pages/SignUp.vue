<template>
    <div class="w-full lg:grid lg:min-h-screen lg:grid-cols-2 h-screen">
      <div class="flex items-center justify-center py-12 px-4 mx-auto">
        <div class="mx-auto grid w-[350px] gap-6">
          <router-link to="/">
            <Button href="/" class="absolute top-2 left-2 z-20">Return Home</Button>
          </router-link>
          <router-link to="/">
            <Button href="/" class="absolute top-2 right-2 z-20">Dark Mode</Button>
          </router-link>
          <div class="grid gap-2 text-center">
            <h1 class="text-3xl font-bold mb-6">Sign up</h1>
            <p class="text-balance text-muted-foreground">
              Enter your details below to create your account
            </p>
          </div>
          <form class="grid gap-4">
            <div class="grid gap-2">
              <Label for="userName">Username</Label>
              <Input id="userName" type="text" autocomplete="username" placeholder="AwesomeUser24" required v-model="userName" />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="grid gap-2">
                <Label for="firstName">First Name</Label>
                <Input id="firstName" type="text" autocomplete="given-name" placeholder="John" required v-model="firstName" />
              </div>
              <div class="grid gap-2">
                <Label for="lastName">Last Name</Label>
                <Input id="lastName" type="text" autocomplete="family-name" placeholder="Appleseed" required v-model="lastName" />
              </div>
            </div>
            <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input id="email" type="email" autocomplete="email" placeholder="Example@email.com" required v-model="email" />
            </div>
            <div class="grid gap-2">
              <Label for="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" type="tel" autocomplete="tel" placeholder="0412-345-678" required v-model="phoneNumber" />
            </div>
            <div class="grid gap-2">
              <Label for="dateOfBirth">Date of Birth</Label>
              <Input id="dateOfBirth" type="date" autocomplete="bday" required v-model="dateOfBirth" />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="grid gap-2">
                <div class="flex items-center">
                  <Label for="password">Password</Label>
                </div>
                <Input id="password" type="password" autocomplete="new-password" placeholder="Password" required v-model="password" />
              </div>
              <div class="grid gap-2">
                <div class="flex items-center">
                  <Label for="confirmPassword">Confirm Password</Label>
                </div>
                <Input id="confirmPassword" type="password" autocomplete="new-password" placeholder="Password" required v-model="confirmPassword" />
              </div>
            </div>
            <Button type="submit" class="w-full" @click.prevent="handleSignUp">
              Sign up
            </Button>
            <Button variant="outline" class="w-full" @click.prevent="handleGoogleSignUp">
              Sign up with Google
            </Button>
          </form>
          <div class="mt-4 text-center text-sm">
            Already have an account?
            <router-link to="/login" class="underline">
              Login
            </router-link>
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
  import { signUp, signInWithGoogle } from '@/auth';
  import { toast } from 'vue-sonner';
  
  export default {
    components: {
      Button,
      Input,
      Label,
    },
    setup() {
      const currentImage = ref(`https://source.unsplash.com/random/3`);
      const nextImage = ref(`https://source.unsplash.com/random/4`);
      const firstName = ref('');
      const lastName = ref('');
      const userName = ref('');
      const email = ref('');
      const phoneNumber = ref('');
      const dateOfBirth = ref('');
      const password = ref('');
      const confirmPassword = ref('');
  
      const changeImage = () => {
        nextImage.value = `https://source.unsplash.com/random/${Date.now()}`;
        const temp = currentImage.value;
        currentImage.value = nextImage.value;
        nextImage.value = temp;
      };
  
      onMounted(() => {
        setInterval(changeImage, 8000);
      });
  
      const handleSignUp = async () => {
        try {
          console.log('Initiating user sign up');
          await signUp(
            firstName.value,
            lastName.value,
            userName.value,
            email.value,
            phoneNumber.value,
            dateOfBirth.value,
            password.value,
            confirmPassword.value
          );
          console.log('Sign up successful');
          toast.success('Sign up successful!');
        } catch (error) {
          console.error('Error during sign up:', error);
          toast.error(error.message);
        }
      };
  
      const handleGoogleSignUp = async () => {
        try {
          console.log('Initiating Google sign up');
          await signInWithGoogle();
          console.log('Google sign up successful');
          toast.success('Sign up successful!');
        } catch (error) {
          console.error('Error during Google sign up:', error);
          toast.error(error.message);
        }
      };
  
      return {
        currentImage,
        nextImage,
        firstName,
        lastName,
        userName,
        email,
        phoneNumber,
        dateOfBirth,
        password,
        confirmPassword,
        handleSignUp,
        handleGoogleSignUp,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>  