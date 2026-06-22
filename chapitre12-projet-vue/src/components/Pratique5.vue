<template>
  <div>
    <h3>Pratique 5 — Hook unmounted</h3>
    <button @click="show = !show">Ajouter/Supprimer le composant</button>
    <ComponentUnmount v-if="show" />
  </div>
</template>

<script>
const ComponentUnmount = {
  template: `<div><p>My component</p></div>`,
  unmounted() {
    alert('The component is removed (unmounted)!')
  },
}

export default {
  components: { ComponentUnmount },
  data() {
    return { show: true }
  },
}
</script>
