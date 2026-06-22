<template>
  <div>
    <h3>Exercice — Copier p1 vers p2</h3>
    <p ref="p1">Texte initial à copier</p>
    <p ref="p2">Texte de destination</p>
    <button @click="copierTexte">Copier</button>
  </div>
</template>

<script>
export default {
  methods: {
    copierTexte() {
      this.$refs.p2.innerHTML = this.$refs.p1.innerHTML
    },
  },
}
</script>
