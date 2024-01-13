<template>
  <div>
    <h1>Data Sebelum Filter</h1>
    <ul>
      <li v-for="item in dataBeforeFilter" :key="item">{{ item }}</li>
    </ul>

    <h1>Data Setelah Filter</h1>
    <ul>
      <li v-for="item in dataAfterFilter" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dataBeforeFilter: Array,
    dataAfterFilter: Array
  }
};
</script>