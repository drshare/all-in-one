<script setup lang="ts">
import { computed } from 'vue';
import { BG } from '../../types/navComponents/bg.d.ts';

const bgList: Array<BG> = [

];
const defaultBg: BG = {
    id: 'default',
    path: '/video/default-video.webm',
    type: 'video',
};
const getBg = computed(() => defaultBg);
</script>
<template>
  <div class="app-bg">
    <img
      v-if="getBg.type === 'img'"
      class="bg-img"
      :src="getBg.path"
      alt="图片加载失败"
    >
    <video
      v-else-if="getBg.type === 'video'"
      class="bg-video"
      autoplay
      loop
      muted
    >
      <source
        :src="getBg.path"
        type="video/webm"
      >
    </video>
  </div>
  <div class="app-body">
    <slot />
  </div>
</template>
<style lang="less" scoped>
.app-bg, .app-body {
    width: 100%;
    height: 100%;
}
.app-bg {
    z-index: -1;
    overflow: hidden;

    .bg-img {
        width: 100%;
    }
}
.app-body {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
