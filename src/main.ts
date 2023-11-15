// Plugins
import { createApp } from 'vue';
import { registerPlugins } from '@/plugins';

// Inject Vue Context
import { boot } from '@/boot';

import App from './App.vue';

const app = createApp(App);

registerPlugins(app);

boot();

app.mount('#app');
