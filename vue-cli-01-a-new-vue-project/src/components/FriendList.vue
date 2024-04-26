<template>
    <section>
        <ul>
            <li v-for="friend in friends" :key="friend.id">
                <p>{{ friend.name }}</p>
                <button @click="toggleDetails(friend.id)">Show Details</button>
                <div>
                    <ul v-if="detailsAreVisible === friend.id">
                        <li>{{ friend.phone }} </li>
                        <li> {{ friend.email }}</li>
                    </ul>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props: ['friends'],
  data() {
    return {
        detailsAreVisible  : null,
    }
  },
   methods :{
    toggleDetails (id){
        
        this.detailsAreVisible = this.detailsAreVisible === id ? null : id ;    
        console.log(this.detailsAreVisible);   
    }
   }
}
</script>