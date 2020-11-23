<template>
  <div>
    <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#304156" text-color="#bfcbd9" :unique-opened="true" active-text-color="#409EFF">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100vh;
}
</style>
