<template>
<div>
    <button @click="login" v-if="!isAuth">Login</button>
   <button @click="logout" v-if="isAuth" >Logout</button>
   <p> test Auth : {{ isTestAuth }}</p>
</div>
</template>

<script>
//import { mapActions } from 'vuex'
export default {
 
methods: { 
    login(){
        this.$store.dispatch('login');
    },
    logout(){
        this.$store.dispatch('logout');
    }

},
computed:{
    isAuth(){
        return this.$store.getters.userIsAuthenticated ;
    },
    isTestAuth(){
        return this.$store.getters.testAuth
    }
}

}
</script>