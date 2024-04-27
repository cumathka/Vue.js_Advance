import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFreund from './components/NewFreund.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('new-freund', NewFreund);

app.mount('#app');
