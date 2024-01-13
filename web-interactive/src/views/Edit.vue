<template>
    <div class="bg-gradient-to-r from-purple-500 via-purple-400 to-pink-300 min-h-screen flex items-center justify-center">
      <div class="max-w-md mx-auto bg-white p-6 shadow-lg overflow-hidden rounded-xl">
        <h3 class="text-2xl font-bold mb-6 text-center">Edit User</h3>
        <form @submit.prevent="update">
            <div class="mb-4">
            <label for="name" class="block text-gray-700 font-bold mb-2">Nama</label>
            <input v-model="form.name" id="name" name="name" type="text" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" required />
          </div>
  
          <div class="mb-4">
            <label for="genre" class="block text-gray-700 font-bold mb-2">Tipe</label>
            <input v-model="form.genre" id="genre" name="genre" type="text" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" required />
          </div>

          <div class="mb-4">
            <label for="year" class="block text-gray-700 font-bold mb-2">Tahun Terbit</label>
            <input v-model="form.year" id="year" name="year" type="number" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" required />
          </div>
  
          <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            Update
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive, computed, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getUser, updateUser } from '@/firebase'
  
  export default {
    setup() {
      const router = useRouter()
      const route = useRoute()
      const userId = computed(() => route.params.id)
  
      const form = reactive({ name: '', genre: '', year: '' })
      onMounted(async () => {
        const user = await getUser(userId.value)
        form.name = user.name
        form.genre = user.genre
        form.year = user.year
      })
  
      const update = async () => {
        await updateUser(userId.value, { ...form })
        router.push('/')
        form.name = ''
        form.genre = ''
        form.year = ''
      }
  
      return { form, update }
    }
  }
  </script>
  