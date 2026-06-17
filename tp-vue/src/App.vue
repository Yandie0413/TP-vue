<template>
  <div>
    <h1>TP Vue - Chapitres 12 & 13</h1>

    <!-- ===== CHAPITRE 12 ===== -->
    <h2>Chapitre 12 : Composants avancés</h2>

    <!-- 1. v-for avec composant -->
    <h3>1. Composants avec v-for</h3>
    <FruitItem
      v-for="x in fruits"
      :key="x"
      v-bind:fruitName="x"
    />

    <!-- 2. $emit sans données -->
    <h3>2. $emit() sans données</h3>
    <FruitItemEmit @affiche-alerte="receiveEmit" />

    <!-- 3. $emit avec données -->
    <h3>3. $emit() avec données</h3>
    <FruitItemEmitData @affiche-alerte="receiveEmitData" />

    <!-- 4. Slot simple -->
    <h3>4. Slot simple</h3>
    <FruitItemSlot>
      test du slot
    </FruitItemSlot>

    <!-- 5. v-slot nommé -->
    <h3>5. v-slot nommé</h3>
    <FruitItemVSlot v-slot:monPremierSlot>
      test du slot
    </FruitItemVSlot>

    <!-- 6. Scoped slot avec v-bind -->
    <h3>6. Scoped slot avec v-bind</h3>
    <FruitItemScopedSlot v-slot="dataFromSlot">
      <h2>{{ dataFromSlot.mydata }}</h2>
    </FruitItemScopedSlot>

    <!-- 7. Composant dynamique -->
    <h3>7. Composant dynamique</h3>
    <h1>Dynamic Components</h1>
    <button @click="toggleValue = !toggleValue">Switch component</button>
    <component :is="activeComp"></component>

    <!-- 8. KeepAlive -->
    <h3>8. Composant dynamique avec KeepAlive</h3>
    <button @click="toggleKeepAlive = !toggleKeepAlive">Switch (KeepAlive)</button>
    <KeepAlive>
      <component :is="activeCompKeepAlive"></component>
    </KeepAlive>

    <!-- ===== TP : Composant dynamique avec formulaire ===== -->
    <hr />
    <h2>TP : Alternance de composants (dont formulaire)</h2>
    <button @click="tpIndex = (tpIndex + 1) % tpComponents.length">
      Changer de composant ({{ tpComponents[tpIndex] }})
    </button>
    <KeepAlive>
      <component :is="tpComponents[tpIndex]"></component>
    </KeepAlive>
  </div>
</template>

<script>
import FruitItem from './components/FruitItem.vue'
import FruitItemEmit from './components/FruitItemEmit.vue'
import FruitItemEmitData from './components/FruitItemEmitData.vue'
import FruitItemSlot from './components/FruitItemSlot.vue'
import FruitItemVSlot from './components/FruitItemVSlot.vue'
import FruitItemScopedSlot from './components/FruitItemScopedSlot.vue'
import ComponentOne from './components/ComponentOne.vue'
import ComponentTwo from './components/ComponentTwo.vue'
import FormulaireTp from './components/FormulaireTp.vue'

export default {
  components: {
    FruitItem,
    FruitItemEmit,
    FruitItemEmitData,
    FruitItemSlot,
    FruitItemVSlot,
    FruitItemScopedSlot,
    ComponentOne,
    ComponentTwo,
    FormulaireTp,
  },
  data() {
    return {
      fruits: ['Pomme', 'Banane', 'Raisin'],
      toggleValue: true,
      toggleKeepAlive: true,
      tpIndex: 0,
      tpComponents: ['ComponentOne', 'ComponentTwo', 'FormulaireTp'],
    }
  },
  computed: {
    activeComp() {
      return this.toggleValue ? 'ComponentOne' : 'ComponentTwo'
    },
    activeCompKeepAlive() {
      return this.toggleKeepAlive ? 'ComponentOne' : 'ComponentTwo'
    },
  },
  methods: {
    receiveEmit() {
      alert("Hello, j'ai ma pomme")
    },
    receiveEmitData(fruit) {
      alert("Hello, j'ai ma " + fruit)
    },
  },
}
</script>
