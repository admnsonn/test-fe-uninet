<template>
    <div class="bg-gradient-to-r from-purple-500 via-purple-400 to-pink-300 min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 shadow-lg overflow-hidden rounded-xl w-full md:w-1/2 lg:w-1/3">
        <h2 class="text-3xl font-semibold text-gray-800 mb-6">Tambahkan Arsip Buku</h2>
        <form @submit.prevent="onSubmit">
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
  
          <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
            Tambah Buku
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { createUser } from '../firebase';
  import { reactive } from 'vue';
  
  export default {
    setup() {
      const form = reactive({ name: '', genre: '', year: '' });
  
      const onSubmit = async () => {
        await createUser({ ...form });
        form.name = '';
        form.genre = '';
        form.year = '';
        
      };
  
      return { form, onSubmit };
    },
  };
  </script>
  