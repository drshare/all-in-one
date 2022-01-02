<script lang="ts" setup>
import { useRouter } from 'vue-router';
import MenuCard from '../components/MenuCard.vue';
import MenuList from '../data/menu.json';

const ColorList = ['#806d9e', '#2376b7', '#d2b42c', '#b7ae8f', '#ed2f6a', '#f1441d', '#ed5126', '#ec2d7a', '#66a9c9', '#126bae', '#1661ab', '#66c18c', '#1ba784', '#1e9eb3', '#2c9678', '#248067', '#229453', '#e2d849'];

const router = useRouter();
function handleMenuCheck(url) {
    if (!url || typeof url !== 'string') return;
    if (url.includes('http://')) {
        window.location.href = url;
    } else {
        router.push(url);
    }
}
</script>
<template>
  <section class="menu-list">
    <menu-card
      class="menu-card"
      v-for="(item, index) in MenuList"
      :key="index"
      :menu-option="{...item, color: ColorList[index]}"
      @click="handleMenuCheck(item.url)"
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
        .menu-card {
            cursor: pointer;
        }
        .menu-card:nth-child(n+4) {
            margin-top: 16px;
        }
    }
</style>
