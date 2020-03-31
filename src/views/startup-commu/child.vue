<template>
  <div class="startup-communite-child">
    <p class="child-title">{{title}}{{params}}</p>
    <p class="child-click" @click="childEmit()">点我父组件-1</p>

  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'StartupCommunite',
  components: {},
  model: {},
  props: {
    params: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      title: '我是子组件,父组件props值：',
      num: 0
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
  },
  beforeDestroy() {},
  methods: {
    childEmit(){
      this.$emit('parentWatch', this.num--)
    }
  }
}
</script>
<style lang="scss" scoped>
.startup-communite-child {
  position: absolute;
  width: 300px;
  height: 300px;
  border: 1px solid red;
  left: 100px;
  bottom: 0;
  .child-title {
    width: 100%;
    height: 30px;
  }
  .child-click {
    cursor: pointer;
    user-select:none;
  }
}
</style>