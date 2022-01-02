<script lang="ts" setup>
import Layout from '@/layout/index.ts';
</script>
<template>
  <div
    ref="scrollContainerRef"
    class="app-container"
  >
    <component :is="Layout">
      <router-view />
    </component>
  </div>
</template>

<style lang="less" scoped>
    .app-container {
        width: 100%;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>
<style lang="less">
@import './assets/styles/normalize.less';
</style>
