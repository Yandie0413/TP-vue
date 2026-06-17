<template>
  <div>
    <slot name="monPremierSlot"></slot>
  </div>
  <div>
    <slot name="monDeuxiemeSlot"></slot>
  </div>
</template>

<style scoped>
div {
  height: 30px;
  width: 50%;
  margin: 10px;
  padding: 10px;
  background-color: rgb(238, 144, 174);
  font-weight: bold;
}
</style>
