<template>
    <div class="p-9 bg-gray-200 h-[100vh] flex items-center justify-center">

        <div class="bg-white shadow-lg overflow-hidden rounded-xl w-[50%] h-[32rem] z-50">
            <div class="flex space-between items-start">
                <div class="image-container lg:w-[50%] xs:hidden">
                </div>
                <div class="lg:w-[50%] xs:w-full sm:w-full px-8 py-10">
                    <div>
                        <b class="text-2xl text-gray-800">Selamat datang di website kami</b>
                        <p class="text-gray-600">
                            Senang bertemu kembali</p>
                    </div>
                    <br>
                    <div>
                        <div class="flex flex-col">
                            <span class="font-bold mb-1 text-[12px]">
                                <i class="fa fa-user-circle-o" aria-hidden="true"></i>Email</span>
                            <input type="text" name="email" placeholder="isi email"
                                class="p-4 rounded-lg border border-gray-300 w-full" />
                        </div>
                    </div>
                    <br>
                    <div>
                        <div class="flex flex-col">
                            <span class="font-bold mb-1">
                                <i class="fa fa-user-circle-o"></i>Password</span>
                            <input type="text" name="email" class="p-4 rounded-lg border border-gray-300 w-full" />
                        </div>
                    </div>
                    <br>
                    <br>
                    <button class="transition p-2 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                        Next <i class="fa fa-send"></i>
                    </button>
                    <br>
                    <br>
                    <div class="text-center mb-3">
                        <span class="text-[12px] text-gray-600">jika anda belum memiliki akun silahkan,</span><a href="#"
                            class="text-[12px] text-blue-500 hover:text-blue-700 font-bold">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image-container {
    background-image: url(/cafe.jpg);
    background-position: center;
    background-size: cover;
    height: calc(3.2 * 10em);
}
</style>