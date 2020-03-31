<template>
  <div class="startup-communite">
    <p class="parent-title">{{title}},子组件$emit值：{{content}}</p>
    <p class="parent-click" @click="parentClick()">点我子组件+1</p>
    <childComp :params="childNum"  @parentWatch="parentWatch"></childComp>
  </div>
</template>
<script>
import childComp from './child'
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'StartupCommunite',
  components: {childComp},
  model: {},
  props: {},
  data() {
    return {
      title: '我是父组件',
      content: 0,
      childNum: 0
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    parentWatch(params){
      this.content = params
    },
    parentClick(){
      this.childNum++
    }
  }
}
</script>
<style lang="scss" scoped>
.startup-communite {
  position: relative;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  border: 1px solid red;
  .parent-title {
    width: 100%;
    height: 30px;
  }
  .parent-click {
    cursor: pointer;
    user-select:none;
  }
}
</style>