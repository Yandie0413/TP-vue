<template>
  <div v-for="x in foods" :key="x.name">{{ x.name }} — {{ x.Couleur }}</div>
</template>

<script>
export default {
  inject: ['foods'],
}
</script>
