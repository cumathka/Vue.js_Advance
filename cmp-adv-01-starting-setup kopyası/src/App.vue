<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponenet('active-goals')">Active Goals</button>
    <button @click="setSelectedComponenet('manege-goals')">Manege Goals</button>
    <!-- <active-goals v-if="selectedComponenet === 'active-goals'"></active-goals>
    <manege-goals v-if="selectedComponenet === 'manege-goals'"></manege-goals> -->
    <component :is="selectedComponenet"></component>
    
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
import ActiveGoals from "./components/ActiveGoals.vue";
import ManegeGoals from "./components/ManegeGoals.vue";

export default {
  components :{
    'the-header': TheHeader,
    'active-goals' : ActiveGoals,
    'manege-goals' : ManegeGoals
   
  },
  data() {
    return {
      selectedComponenet: 'active-goals' ,
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    setSelectedComponenet(component){
       this.selectedComponenet = component;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  background: #95c3eb;
  border: none; 
  margin: 5px;
}
</style>