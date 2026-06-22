<template>
  <div>
    <h3>Pratique 2 — Hook created</h3>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <div class="boite">
      <Pratique2ComponentOne v-if="activeComp"></Pratique2ComponentOne>
    </div>
  </div>
</template>

<script>
import Pratique2ComponentOne from './Pratique2ComponentOne.vue'

export default {
  components: { Pratique2ComponentOne },
  data() {
    return {
      activeComp: false,
    }
  },
}
</script>

<style scoped>
.boite {
  border: dashed black 1px;
  padding: 10px;
  margin-top: 10px;
  background-color: rgb(176, 188, 236);
}
</style>
