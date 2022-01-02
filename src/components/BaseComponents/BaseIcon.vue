<script lang="ts" setup>
import { withDefaults } from 'vue';
import { IconProps } from '#/components/baseIcon.d.ts';

const props = withDefaults(defineProps<IconProps>(), {
    icon: {
        type: 'icon',
        path: '',
    },
});
const { icon } = props as IconProps;

</script>

<template>
  <i
    v-if="icon.type === 'icon'"
    :class="['iconfont', icon.path]"
  />
  <img
    v-else-if="icon.type === 'img'"
    src=""
    alt=""
  >
</template>
