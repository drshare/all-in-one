<script lang="ts" setup>
import ColorList from '../data/color.json';
import BaseCard from '../components/BaseCard.vue';
</script>

<template>
  <section class="color-page">
    <base-card
      class="base-card"
      v-for="item in ColorList"
      :key="item.hex"
      :title="item.name"
      :bg-color="item.hex"
    >
      <p>HEX: {{ item.hex }}</p>
      <p>RGB: {{ item.RGB }}</p>
    </base-card>
  </section>
</template>

<style lang="less" scoped>
    .color-page {
        padding: 24px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        & > .base-card {
            width: 23%;
        }
        .base-card:nth-child(n+5) {
            margin-top: 16px;
        }
        &::after {
            content: "";
            margin-right: 49%;
        }
    }
</style>
