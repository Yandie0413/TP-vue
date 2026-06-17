<template>
  <div>
    <slot v-bind:mydata="monPremierSlot"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monPremierSlot: 'This is local data',
    }
  },
}
</script>
