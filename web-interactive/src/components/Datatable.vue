<template>
    <div>
      <h2>Data Table</h2>
      <DataTable :value="cars" :paginator="true" :rows="10" :rowsPerPageOptions="[5, 10, 20]">
        <Column field="brand" header="Brand"></Column>
        <Column field="model" header="Model"></Column>
        <Column field="year" header="Year"></Column>
        <Column field="color" header="Color"></Column>
        <Column header="Actions">
          <template #body="slotProps">
            <Button icon="pi pi-pencil" @click="editCar(slotProps.data)"></Button>
            <Button icon="pi pi-trash" @click="deleteCar(slotProps.data)"></Button>
          </template>
        </Column>
      </DataTable>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { DataTable, Column } from 'primevue/datatable';
  import { Button } from 'primevue/button';
  import firebase from 'firebase/app';
  import 'firebase/database';
  
  export default {
    components: {
      DataTable,
      Column,
      Button
    },
    setup() {
      const cars = ref([]);
  
      const database = firebase.database();
      const carsRef = database.ref('cars');
  
      const fetchCars = () => {
        carsRef.on('value', (snapshot) => {
          const data = snapshot.val();
          if (data) {
            cars.value = Object.keys(data).map(key => ({ id: key, ...data[key] }));
          }
        });
      };
  
      const addCar = (car) => {
        carsRef.push(car);
      };
  
      const editCar = (selectedCar) => {
        // Implement edit logic
        console.log('Edit Car:', selectedCar);
      };
  
      const deleteCar = (selectedCar) => {
        carsRef.child(selectedCar.id).remove();
      };
  
      onMounted(() => {
        fetchCars();
      });
  
      return {
        cars,
        addCar,
        editCar,
        deleteCar
      };
    }
  };
  </script>
  