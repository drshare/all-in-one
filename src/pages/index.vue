<script lang="ts" setup>
import MenuCard from '../components/MenuCard.vue';
import MenuList from '../data/menu.json';
import ColorList from '../data/color.json';

const radomColor = () => ColorList[Math.floor(Math.random() * ColorList.length)].hex;
</script>
<template>
  <section class="menu-list">
    <menu-card
      class="menu-card"
      v-for="(item, index) in MenuList"
      :key="index"
      :menu-option="{...item, color: radomColor()}"
    />
  </section>
</template>

<style lang="less" scoped>
    .menu-list {
        margin: 24px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &::after {
            content: "";
            margin-right: 30%;
        }
        .menu-card:nth-child(n+4) {
            margin-top: 16px;
        }
    }
</style>
