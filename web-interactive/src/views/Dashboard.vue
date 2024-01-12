<template>
    <div>
      <Navbar />
      <DataTable />
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  import DataTable from "@/components/DataTable.vue";
  
  export default {
    components: {
      Navbar,
      DataTable
    }
  };
  </script>
  