<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    menuOption: {
        type: Object,
        required: true,
    },
});
</script>
<template>
  <n-card
    class="menu-card"
    :style="{ 'background-color': props.menuOption.color }"
    :header-style="{ color: '#fff' }"
    :hoverable="true"
    :title="props.menuOption.name"
  />
</template>
<style lang="less">
    .menu-card.n-card {
        width: 30%;
        border-radius: 4px;
        & > .n-card-header > .n-card-header__main {
            color: #fff;
        }
    }
</style>
