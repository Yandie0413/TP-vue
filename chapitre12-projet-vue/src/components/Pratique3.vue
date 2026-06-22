<template>
  <div>
    <h3>Pratique 3 — Hook mounted</h3>
    <button @click="show = !show">Afficher/Cacher</button>
    <ComponentMounted v-if="show" />
  </div>
</template>

<script>
const ComponentMounted = {
  template: `<div><p>Regarde la couleur de fond !</p></div>`,
  mounted() {
    document.body.style.backgroundColor = 'red'
  },
  unmounted() {
    document.body.style.backgroundColor = ''
  },
}

export default {
  components: { ComponentMounted },
  data() {
    return { show: false }
  },
}
</script>
