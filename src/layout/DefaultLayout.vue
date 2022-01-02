<script setup lang="ts">
import AppBg from '@/components/LayoutComponents/AppBg.vue';

</script>
<template>
  <div class="default-layout">
    <app-bg>
      <slot />
    </app-bg>
  </div>
</template>

<style lang="less" scoped>
.default-layout {
    height: 100vw;
    height: 100vh;
    position: relative;
}
</style>
