<template>
  <div>
    <h3>Pratique 1 — Template Refs</h3>
    <button @click="changeVal">Change Text</button>
    <p ref="myReference">Initial text</p>
  </div>
</template>

<script>
export default {
  methods: {
    changeVal() {
      this.$refs.myReference.innerHTML = 'Hello!'
    },
  },
}
</script>
