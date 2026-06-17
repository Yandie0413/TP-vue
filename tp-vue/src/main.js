import { createApp } from 'vue'
import App from './App.vue'

import ComponentOne from './components/ComponentOne.vue'
import ComponentTwo from './components/ComponentTwo.vue'
import FormulaireTp from './components/FormulaireTp.vue'

const app = createApp(App)

app.component('ComponentOne', ComponentOne)
app.component('ComponentTwo', ComponentTwo)
app.component('FormulaireTp', FormulaireTp)

app.mount('#app')
