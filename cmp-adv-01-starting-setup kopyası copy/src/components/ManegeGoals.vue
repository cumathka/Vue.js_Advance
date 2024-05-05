<template>
  <div>
    <h2>Manege Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoals">Set Goals</button>
    <teleport to="body">
    <error-alert v-if="inputIsInvalid">
    <h2>Input is Invalid</h2>
    <p>Please Enter Input Value</p>
    <button @click="confirmError">OK</button>
    </error-alert>
    </teleport>
  </div>
</template>


<script>
import ErrorGoals from "./ErrorAlert.vue" ;
export default {
    components: {
        'error-alert': ErrorGoals,
    }
    ,
    data() {
        return {   
            inputIsInvalid: false,
         }},
         methods:{
            setGoals(){
                const enteredValue = this.$refs.goal.value ;
                if (enteredValue === "") {
                    this.inputIsInvalid = true;
                } else {
                    console.log(enteredValue);
                }
            },
            confirmError(){
              this.inputIsInvalid = false
            }
         }}
</script>