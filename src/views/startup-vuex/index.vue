<template>
  <div class="startup-vuex">
    <h2>Mutation</h2>
    <p>count:{{count}}</p>
    <button @click="decrease">-</button>
    <button @click="increase">+</button>
    <h2>Action</h2>
    <button @click="decreaseAsync">-(async)</button>
    <button @click="increaseAsync">+(async)</button>
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'StartupVuex',
  components: {},
  model: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    decrease() {
      this.$store.commit('decrement')
    },
    increase() {
      this.$store.commit('increment')
    },
    decreaseAsync() {
      this.$store.dispatch('decrementAsync')
    },
    increaseAsync() {
      this.$store.dispatch('incrementAsync')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>