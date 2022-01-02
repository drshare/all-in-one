<script lang="ts" setup>
const props = defineProps<{
    title: string,
    bgColor?: string,
    color?: string,
}>();
const textColor = props?.bgColor && props.bgColor.startsWith('#f') ? '#000' : '#fff';
</script>
<template>
  <n-card
    class="base-card"
    :style="{ 'background-color': props.bgColor }"
    :hoverable="true"
    :title="props.title"
  >
    <slot />
  </n-card>
</template>
<style lang="less" scpoed>
.base-card.n-card {
    border-radius: 4px;
    & > .n-card-header > .n-card-header__main, & > .n-card__content {
        color: v-bind(textColor);
    }
}
</style>
