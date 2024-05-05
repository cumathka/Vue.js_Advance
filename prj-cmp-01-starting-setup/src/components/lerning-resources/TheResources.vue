<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
    >
      Stored Resources
    </base-button>
    <base-button
      @click="setSelectedTab('add-resources')"
      :mode="addResButtonMode"
    >
      Add Resources
    </base-button>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </base-card>
</template>
  
  <script>
import AddResources from './AddResources.vue';
import StoredResources from './StoredResources.vue';

export default {
  components: {
    StoredResources,
    AddResources,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google',
          link: 'https://google.com',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.AddResource, // Corrected to use AddResource method
      removeResources: this.removeResources,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resources' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    AddResource(title, description, link) {
      const newResource = {
        id: new Date().toString(),
        title: title,
        description: description,
        link: link,
      };
      this.storedResources.unshift(newResource);
      this.setSelectedTab('stored-resources'); // Corrected assignment
    },
    removeResources(id) {
      // this.storedResources = this.storedResources.filter(res => res.id !== id) bu method calismiyr veriler bellekteki dizi ile calismaya devam ediyor.
      let indexToRemove = this.storedResources.findIndex(
        (res) => res.id === id
      );
      this.storedResources.splice(indexToRemove, 1);
    },
  },
};
</script>