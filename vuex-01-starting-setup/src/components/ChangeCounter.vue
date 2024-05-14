<template>
  <div>
    <button @click="increment">Add increment</button>
    <button @click="increase({ value: 11 })">Add increase 11</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    //     addOne(){
    //    this.$store.dispatch('increment') ;
    //     }
    // ...mapActions(['increment', 'increase']),
    ...mapActions('numbers',{
        increment: 'increment',  // burada isimleri degistirebiliriz
        increase: 'increase'
    })
  },
};
</script>
