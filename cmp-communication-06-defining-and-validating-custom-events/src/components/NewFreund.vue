<template>
  <form @submit.prevent="submitData" ref="addFriendForm">
    <div>
      <label for="">Name : </label>
      <input type="text" name="" v-model="enteredName" />
    </div>
    <div>
      <label for="">Phone : </label>
      <input type="tel" name="" v-model="enteredPhone" />
    </div>
    <div>
      <label for="">E-mail : </label>
      <input type="email" name="" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Friend</button>
    </div>
  </form>
</template>


<script>
export default {
  emit: ['add-friend'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
    };
  },
  methods: {
    submitData() {
      this.$emit(
        'add-friend',
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail ,
      );
    },
  },
};
</script>