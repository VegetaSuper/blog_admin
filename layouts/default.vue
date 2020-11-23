<template>
  <div id="layout">
    <el-container>
      <el-aside width="200px">
        <Menu />
      </el-aside>
      <el-container>
        <el-header>头部</el-header>
        <el-main>
          <nuxt />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
</style>
