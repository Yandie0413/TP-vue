<template>
  <h2>Ma méthode emit</h2>
  <button @click="afficheAlerte">Afficher alerte</button>
</template>

<script>
export default {
  emits: ['affiche-alerte'],
  methods: {
    afficheAlerte() {
      this.$emit('affiche-alerte')
    },
  },
}
</script>
