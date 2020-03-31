// 简单的插件
function install(Vue) {
  Vue.mixin({
    created: function () {
      // 逻辑...
      console.log('插件安装成功')
    }
  })
}

export default {
  install
}