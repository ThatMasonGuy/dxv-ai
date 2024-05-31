<!-- src/pages/Contact.vue -->
<template>
  <div class="flex flex-col min-h-[--adjusted-height] pt-[--header-height] bg-gradient-to-br from-background-950 from-20% via-background-800 to-background-600">
    <div class="flex-grow container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8 text-center text-gray-100">Contact Us</h1>
      <div class="max-w-lg mx-auto">
        <p class="text-lg mb-8 text-center text-gray-200">This is the contact page content. You can provide contact information or a contact form here.</p>
        <form @submit.prevent="handleSubmit" class="grid grid-cols-1 gap-6">
          <div>
            <Label for="name" class="block text-gray-300 font-bold mb-2">Name</Label>
            <Input type="text" id="name" v-model="formData.name" required class="w-full px-3 py-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none" placeholder="Your Name" />
          </div>
          <div>
            <Label for="email" class="block text-gray-300 font-bold mb-2">Email</Label>
            <Input type="email" id="email" v-model="formData.email" required class="w-full px-3 py-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none" placeholder="Your Email" />
          </div>
          <div>
            <Label for="message" class="block text-gray-300 font-bold mb-2">Message</Label>
            <Textarea id="message" v-model="formData.message" rows="4" required class="w-full px-3 py-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none" placeholder="Your Message" />
          </div>
          <div>
            <Button type="submit" class="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input, Label, Button, Textarea } from '@/components/ui'
import { sendEmail } from '@/utils/emailHelper'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = async () => {
  try {
    await sendEmail(formData.value)
    formData.value = {
      name: '',
      email: '',
      message: ''
    }
  } catch (error) {
    console.error('Error sending email:', error)
  }
}
</script>