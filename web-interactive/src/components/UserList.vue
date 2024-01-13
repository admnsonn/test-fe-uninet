<template>
    <div class="bg-gradient-to-r from-purple-500 via-purple-400 to-pink-300 p-4">
      <div class="bg-white shadow-lg overflow-hidden rounded-xl">
        <table class="w-full table-auto">
          <thead class="bg-gray-100">
            <tr>
              <th scope="col" class="py-2 px-4 border-b">Nama</th>
              <th scope="col" class="py-2 px-4 border-b">Tipe</th>
              <th scope="col" class="py-2 px-4 border-b">Tahun</th>
              <th scope="col" class="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="{ id, name, genre, year } in pengguna" :key="id" class="hover:bg-gray-50">
              <td class="py-2 px-4 border-b">{{ name }}</td>
              <td class="py-2 px-4 border-b">{{ genre }}</td>
              <td class="py-2 px-4 border-b">{{ year }}</td>
              <td class="py-2 px-4 border-b space-x-2">
                <router-link :to="`/edit/${id}`">
                  <button class="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                    Edit
                  </button>
                </router-link>
                <button @click="deleteUser(id)" class="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { useLoadUsers, deleteUser } from '../firebase';
  
  export default {
    setup() {
      const pengguna = useLoadUsers();
      return { pengguna, deleteUser };
    },
  };
  </script>
  