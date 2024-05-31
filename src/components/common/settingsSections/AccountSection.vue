<!-- src/components/AccountSection.vue -->
<template>
    <div class="flex-grow h-full ml-64 p-10">
        <div class="flex justify-center items-center flex-col">
        <Avatar class="avatar w-48 h-48 flex items-center justify-center overflow-hidden drop-shadow-lg">
          <AvatarFallback class="text-4xl"></AvatarFallback>
        </Avatar>
        <form class="space-y-6 w-full max-w-lg mt-8">
          <div class="grid grid-cols-2 gap-6">
            <div>
              <Label class="block text-sm font-medium mb-1">First Name:</Label>
              <Input type="text" class="bg-gray-500 rounded p-2 w-full" />
            </div>
            <div>
              <Label class="block text-sm font-medium mb-1">Last Name:</Label>
              <Input type="text" class="bg-gray-500 rounded p-2 w-full" />
            </div>
          </div>
          <div>
            <Label class="block text-sm font-medium mb-1">Email Address:</Label>
            <Input type="email" class="bg-gray-500 rounded p-2 w-full" />
          </div>
          <div>
            <Label class="block text-sm font-medium mb-1">Phone Number:</Label>
            <Input type="phone" class="bg-gray-500 rounded p-2 w-full" />
          </div>
          <div>
            <Label class="block text-sm font-medium mb-1">Date of Birth:</Label>
            <Input type="date" class="bg-gray-500 rounded p-2 w-full" />
          </div>
          <div>
            <Label class="block text-sm font-medium mb-1">Old Password:</Label>
            <Input type="password" class="bg-gray-500 rounded p-2 w-full" />
          </div>
          <div>
            <Label class="block text-sm font-medium mb-1">New Password:</Label>
            <Input type="password" class="bg-gray-500 rounded p-2 w-full" />
          </div>
          <div>
            <Label class="block text-sm font-medium mb-1">Confirm New Password:</Label>
            <Input type="password" class="bg-gray-500 rounded p-2 w-full" />
          </div>
          <Button type="submit" class="bg-yellow-500 text-black p-3 rounded w-full">Update Profile</Button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { Avatar, AvatarFallback, AvatarImage, Label, Input, Button } from '@/components/ui';
  
  export default {
    components: {
      Avatar, AvatarFallback, AvatarImage, Label, Input, Button,
    },
    setup() {
  
      return {

      };
    }
  };
  </script>