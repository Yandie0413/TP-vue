<template>
  <div>
    <h4>component one</h4>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    }
  },
  created() {
    this.text = 'initial text'
    console.log('created')
  },
}
</script>
