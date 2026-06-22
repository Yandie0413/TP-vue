<template>
  <div>
    <h3>Pratique 4 — Hook updated</h3>
    <button @click="this.activeComp = !this.activeComp">Add/Remove Component</button>
    <p>Nombre de mises à jour détectées : {{ updateCount }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeComp: false,
      updateCount: 0,
    }
  },
  updated() {
    this.updateCount++
    console.log('The component is updated!')
  },
}
</script>
