<template>
  <div class="conteneur">
    <h1>Chapitre 12 (partie 2) — Composants avancés et communication entre composants</h1>

    <hr />
    <Pratique1 />

    <hr />
    <Exercice />

    <hr />
    <Pratique2 />

    <hr />
    <Pratique3 />

    <hr />
    <Pratique4 />

    <hr />
    <Pratique5 />

    <hr />
    <Pratique6 />
  </div>
</template>

<script>
import Pratique1 from './components/Pratique1.vue'
import Exercice from './components/Exercice.vue'
import Pratique2 from './components/Pratique2.vue'
import Pratique3 from './components/Pratique3.vue'
import Pratique4 from './components/Pratique4.vue'
import Pratique5 from './components/Pratique5.vue'
import Pratique6 from './components/Pratique6.vue'

export default {
  components: {
    Pratique1,
    Exercice,
    Pratique2,
    Pratique3,
    Pratique4,
    Pratique5,
    Pratique6,
  },
}
</script>

<style>
.conteneur {
  font-family: Arial, sans-serif;
  max-width: 700px;
  margin: 30px auto;
}
button {
  padding: 6px 14px;
  cursor: pointer;
}
</style>
