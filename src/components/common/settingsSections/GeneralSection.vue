<!-- src/components/SettingsSection.vue -->
<template>
    <div class="flex-grow h-full ml-64 p-10">
        <h2 class="text-2xl font-bold mb-6">Settings</h2>
      <div class="space-y-6">
        <div>
          <Label class="block text-sm font-medium mb-1">Language:</Label>
          <select class="bg-gray-500 rounded p-2 w-full">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
        <div>
          <Label class="block text-sm font-medium mb-1">Theme:</Label>
          <div class="flex items-center space-x-4">
            <label class="inline-flex items-center">
              <input type="radio" name="theme" value="light" class="form-radio bg-gray-500">
              <span class="ml-2">Light</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" name="theme" value="dark" class="form-radio bg-gray-500">
              <span class="ml-2">Dark</span>
            </label>
          </div>
        </div>
        <div>
          <Label class="block text-sm font-medium mb-1">Notifications:</Label>
          <div class="flex items-center space-x-2 mt-3">
            <Checkbox v-model="emailNotifications" id="emailNotifications" class="mb-2 ml-1 text-gray-100" />
            <label for="emailNotifications"
              class="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email Notifications
            </label>
            <Checkbox v-model="pushNotifications" id="pushNotifications" class="mb-2 ml-1 text-gray-100" />
            <label for="pushNotifications"
              class="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Push Notifications
            </label>
          </div>
        </div>
        <Button type="submit" class="bg-yellow-500 text-black p-3 rounded w-full">Save Settings</Button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { Label, Button, Checkbox } from '@/components/ui';
  
  export default {
    components: {
      Label, Button, Checkbox,
    },
    setup() {
      const pushNotifications = ref(true);
      const emailNotifications = ref(true);
  
      return {
        pushNotifications, emailNotifications,
      };
    }
  };
  </script>