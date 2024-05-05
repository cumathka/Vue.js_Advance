<template>
  <div>
    <base-dialog v-if="inputIsInvalid" @close="confirmErrorMessage">
      <template #default>
        <p>Unfortunatly , at least one input value is invalid</p>
        <p>Please check all input</p>
      </template>
      <template #actions>
        <base-button @click="confirmErrorMessage">OK</base-button>
      </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm" title="Invalid Input">
        <div class="form control">
          <label for="title">Title</label>
          <input type="text" id="title" name="title" ref="titleInput" />
        </div>
        <div class="form control">
          <label for="description">Description</label>
          <textarea
            rows="3"
            id="description"
            name="description"
            ref="descInput"
          ></textarea>
        </div>
        <div class="form control">
          <label for="link">Link</label>
          <input type="url" id="link" name="link" ref="linkInput" />
        </div>
        <div id="add-button">
          <base-button type="submit"> Add Resource</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    submitForm() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredLink.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(enteredTitle, enteredDescription, enteredLink);
    },
    confirmErrorMessage() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

#add-button {
  margin-top: 10px;
}
</style>