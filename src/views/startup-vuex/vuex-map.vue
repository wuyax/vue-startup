<template>
  <div class="startup-vuex">
    <h2>Mutation</h2>
    <p>count:{{count}}</p>
    <button @click="decrease">-</button>
    <button @click="increase">+</button>
    <h2>Action</h2>
    <button @click="decreaseAsync">-(async)</button>
    <button @click="increaseAsync">+(async)</button>
    <h2>Get Data</h2>
    <button @click="getDataAsync">获取数据</button>
    <p>name: {{remoteData.name}}</p>
    <p>id: {{remoteData.id}}</p>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
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
    ...mapState(['count','remoteData'])
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    ...mapMutations(['decrement', 'increment']),
    ...mapActions(['decrementAsync', 'incrementAsync', 'getData']),
    decrease() {
      this.decrement()
    },
    increase() {
      this.increment()
    },
    decreaseAsync() {
      this.decrementAsync()
    },
    increaseAsync() {
      this.incrementAsync()
    },
    getDataAsync() {
      this.getData()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>