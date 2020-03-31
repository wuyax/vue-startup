<template>
  <div class="startup-api">
    <h2>Vue.nextTick( [callback, context] )</h2>
    <button @click="changeList">修改列表</button>
    <ul>
      <li v-for="(li, index) in list" :key="index" :id="`list${index}`">{{li}}</li>
    </ul>
    <h2>Vue.set( target, propertyName/index, value )</h2>
    <button @click="setNewProp">直接设置新属性</button>
    <p>新属性:{{myProps.newProperty}}</p>
    <button @click="setNewPropByApi">通过API设置新属性</button>
    <p>新属性:{{myPropsApi.newProperty}}</p>
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'StartupApi',
  components: {},
  model: {},
  props: {},
  data() {
    return {
      list: [],
      myProps: {},
      myPropsApi: {}
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    changeList() {
      this.list = ['北京','上海','广州','深证']
      // 直接获取dom
      let list2 = document.querySelector('#list1')
      console.log(list2) //null
      // 通过nextTick
      this.$nextTick(() => {
        let list2 = document.querySelector('#list1')
        console.log(list2)
      })
    },
    // 直接修改属性,没有更新dom
    setNewProp() {
      this.myProps.newProperty = 'new property'
    },
    // 通过 set 方法修改跟新了dom
    setNewPropByApi() {
      this.$set(this.myPropsApi, 'newProperty', 'new property api')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>