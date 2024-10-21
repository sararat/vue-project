<script setup>
import MyBar from './components/MyBar.vue';
import MyCard from './components/MyCard.vue';
import items from './Products.json'
</script>

<template>
  <header>
    <MyBar />
  </header>
  <!--ใส่เนื้อหาเว็บตรงนี้-->
  <main>
    <h1 style="padding-left: 10px">Products</h1>
    <div className="grid-container">
      <MyCard v-for="item in items" v-bind="item" />
    </div>
  </main>
</template>
<!--ใส่tag style เพื่อให้รองรับการแสดงผลแบบ responsive-->
<style scoped>
.grid-container {
  display: grid;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  justify-content: center;

}
@media (min-width: 576px) {
  .grid-container { grid-template-columns: repeat(1, 1fr); }
}
@media (min-width: 992px) {
  .grid-container { grid-template-columns: repeat(3, 1fr); }
}
</style>