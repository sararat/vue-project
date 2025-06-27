<template>
  <main>
    <div class="title-box">
      <h1 class="page-title">Products</h1>
    </div>
    <div class="grid-container">
      <div v-for="(product, index) in search_products" :key="index">
        <div class="card">
          <img :src="product.image" alt="" style="width: 12rem; height: 12rem;">
          <div class="container">
            <h3>{{ product.title }}</h3>
            <p class="price">ราคา {{ currencyTHB(product.price) }} บาท</p>
            <router-link :to="`/products/${product.id}`">
              <button class="btn-detail">ดูรายละเอียดสินค้า</button>
            </router-link>
            <button class="btn-cart" @click="cart_store.add_cart(product.id, product.price)">เพิ่มลงตะกร้า</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { computed } from 'vue'

//currencyTHB
import { currencyTHB } from '../shared/currency';

//useProductStore
import { useProductStore } from '../store/product';
const product_store = useProductStore()

const list = computed(() => product_store.list_products)

const search_products = computed(() => product_store.search_products)

//useCartStore
import { useCartStore } from '../store/cart'
const cart_store = useCartStore()



</script>
<style scoped>
/* Reset & Font */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: #dbeffd;
}

main {
  padding: 1rem;
  background-color: #bde3ff;
  padding-top: 160px; /* กันทับ Navbar */
}

/* Title */
.title-box {
  text-align: center;
  margin-bottom: 20px;
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

/* Grid Layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

/* Card Style */
.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  height: 100%;
  text-align: center;
}

/* Image */
.card img {
  display: block;
  margin: 0 auto; /* จัดกลางแนวนอน */
  max-width: 100%;
  max-height: 200px;
  object-fit: contain; /* ให้รูปไม่เบี้ยว */
}

/* Text Content */
.card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  min-height: 50px;
}

.card .price {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

/* Buttons */
.card .btn-detail,
.card .btn-cart {
  width: 80%;
  max-width: 250px;
  margin: 0.5rem auto;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  transition: background-color 0.3s ease;
}

/* ปุ่มสีเขียว */
.btn-detail {
  background-color: #28a745;
  color: white;
}
.btn-detail:hover {
  background-color: #218838;
}

/* ปุ่มสีน้ำเงิน */
.btn-cart {
  background-color: #007bff;
  color: white;
}
.btn-cart:hover {
  background-color: #0056b3;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .page-title {
    font-size: 1.6rem;
  }

  .card h3 {
    font-size: 1rem;
  }

  .card .btn-detail,
  .card .btn-cart {
    font-size: 14px;
  }
}
</style>
