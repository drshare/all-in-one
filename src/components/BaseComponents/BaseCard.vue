<template>
  <div
    :class="['base-card'
      `base-card-size-${props.size}`
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
import { withDefaults } from 'vue';
import BaseCard from '@/types/components/baseCard.d.ts';

const props = withDefaults<BaseCard>({
    size: 'medium',
    type: 'default',
    shape: 'default',
    color: 'white',
    disabled: false,
    title: false,
});
</script>

<style scoped lang="less">
@base-size: 64px;
.base-card {
    width: @base-size;
    height: @base-size;
}
.base-card-size-mini {
    width: @base-size * @size-mini;
    height: @base-size * @size-mini;
}
.base-card-size-small {
    width: @base-size * @size-small;
    height: @base-size * @size-small;
}
.base-card-size-medium {
    width: @base-size * @size-medium;
    height: @base-size * @size-medium;
}
.base-card-size-large {
    width: @base-size * @size-large;
    height: @base-size * @size-large;
}
.base-card-size-max {
    width: @base-size * @size-max;
    height: @base-size * @size-max;
}
</style>
