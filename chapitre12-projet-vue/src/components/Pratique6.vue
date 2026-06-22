<template>
  <div>
    <h3>Pratique 6 — Provide / Inject</h3>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div>
      <Pratique6ComponentOne v-if="activeComp"></Pratique6ComponentOne>
    </div>
  </div>
</template>

<script>
import Pratique6ComponentOne from './Pratique6ComponentOne.vue'

export default {
  components: { Pratique6ComponentOne },
  data() {
    return {
      activeComp: false,
      foods: [
        { name: 'Pomme', Couleur: 'vert' },
        { name: 'Banane', Couleur: 'Jaune' },
        { name: 'Orange', Couleur: 'Orange' },
      ],
    }
  },
  provide() {
    return {
      foods: this.foods,
    }
  },
}
</script>
