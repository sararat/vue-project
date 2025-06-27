<script setup>
import MyBar from './views/MyBar.vue'
import { onMounted } from 'vue'

// useProductStore
import { useProductStore } from './store/product'
const product_store = useProductStore()

//useCartStore
import { useCartStore } from './store/cart';
const cart_store = useCartStore()

onMounted(() => product_store.fetch_products())
onMounted(() => cart_store.loadFromLocalStorage())

</script>

<template>
  <div id="app">
    <MyBar />
    <router-view  />
  </div>
</template>

<style scoped>
 
</style>
