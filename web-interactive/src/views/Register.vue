<template>
  <div class="p-9 bg-gray-200 h-[100vh] flex items-center justify-center">

      <div class="bg-white shadow-lg overflow-hidden rounded-xl w-[50%] h-[32rem] z-50">
          <div class="flex space-between items-start">
              <div class="image-container lg:w-[50%] xs:hidden">
              </div>
              <div class="lg:w-[50%] xs:w-full sm:w-full px-8 py-10">
                  <div>
                      <b class="text-2xl text-gray-800">Segera Mendaftarkan Diri Anda Disini</b>
                      <p class="text-gray-600">
                        Silahkan melakukan sign up</p>
                  </div>
                  <br>
                  <div>
                      <div class="flex flex-col">
                          <span class="font-bold mb-1 text-[12px]">
                              <i class="fa fa-user-circle-o" aria-hidden="true"></i>Email</span>
                          <input v-model="loginForm.email" type="text" name="email" placeholder="isi email"
                              class="p-4 rounded-lg border border-gray-300 w-full" />
                      </div>
                  </div>
                  <br>
                  <div>
                      <div class="flex flex-col">
                          <span class="font-bold mb-1 text-[12px]">
                              <i class="fa fa-user-circle-o"></i>Password</span>
                          <input v-model="loginForm.password" type="text" name="email"
                              class="p-4 rounded-lg border border-gray-300 w-full" />
                      </div>
                  </div>
                  <br>
                  <br>
                  <button @click="login"
                      class="transition p-2 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                      Kembali <i class="fa fa-send"></i>
                  </button>
                  <br>
                  <br>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          loginForm: {
              email: "eve.holt@reqres.in",
              password: "pistol",
          },
      };
  },
  methods: {
      async login() {
          try {
              const response = await this.$axios.post(
                  "https://reqres.in/api/register",
                  this.loginForm
              );

              if (response.status === 200) {
                  console.log("Login successful");
                  console.log("User data:", response.data);
                  this.$router.push('/')
              } else {
                  console.log("Login failed");
                  console.log("Error:", response.data.error);
              }
          } catch (error) {
              console.error("Error during login:", error);
          }
      },
  },
};
</script>

<style scoped>
.image-container {
  background-image: url(/book.jpg);
  background-position: center;
  background-size: cover;
  height: calc(3.2 * 10em);
}
</style>