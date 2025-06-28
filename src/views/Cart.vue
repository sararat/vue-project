<template>
  <div class="cart-container">
    <h1>ตะกร้าสินค้า</h1>

    <div v-if="!product_store.load_products">
      <h2>กำลังโหลดข้อมูลสินค้า...</h2>
    </div>

    <div class="cart-table" v-else>
      <div class="cart-row header">
        <div>สินค้า</div>
        <div>ราคา</div>
        <div>จำนวน</div>
        <div>รวม</div>
        <div>ลบ</div>
      </div>

      <div class="cart-row" v-for="(cart, index) in carts" :key="index">
        <div>
          <img :src="cart.product.image" alt="สินค้า" class="product-image" />
          <p>{{ cart.product.title }}</p>
        </div>
        <div>{{ currencyTHB(cart.product.price) }} บาท</div>
        <div>
          <button @click="cart_store.decrement_quantity(index)">-</button>
          <span class="qty">{{ cart.quantity }}</span>
          <button @click="cart_store.increment_quantity(index)">+</button>
        </div>
        <div>{{ currencyTHB(cart.total_product) }} บาท</div>
        <div>
          <button @click="cart_store.remove_cart(index)">ลบ</button>
        </div>
      </div>
    </div>

    <div class="cart-actions">
      <button>รวม {{ currencyTHB(cart_store.total) }} บาท</button>
      <button @click="cart_store.clear_cart()">เคลียร์ตะกร้า</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { currencyTHB } from '../shared/currency'
import { useProductStore } from '../store/product'
import { useCartStore } from '../store/cart'

const product_store = useProductStore()
const cart_store = useCartStore()

const carts = computed(() => cart_store.cart_previews)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap');

/* Reset & Font */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans Thai", sans-serif;
  font-optical-sizing: auto;
}
.cart-container {
  padding: 20px;
  max-width: 1000px;
  margin: auto;
  margin-top: 120px;
}

.cart-table {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 2px;
  
}

.cart-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: 10px;
  padding: 5px 80px;
  border-bottom: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 10px;
}

.cart-row.header {
  font-weight: bold;
  background-color: #ddd;
  align-items: center;
}

.product-image {
  width: 60px;
  height: auto;
  border-radius: 6px;
  margin-right: 8px;
}

.qty {
  margin: 0 10px;
}

button {
  padding: 6px 12px;
  background-color: #c0392b;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #e74c3c;
}

.cart-actions {
  display: flex;
  justify-content: right;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  padding: 5px 160px;
}

/* 🔻 Responsive สำหรับหน้าจอเล็ก (เช่น 430x932) */
@media (max-width: 768px) {
  .cart-row,
  .cart-row.header {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .cart-row.header {
    display: none; /* ซ่อน header บนมือถือ */
  }

  .cart-row {
    background-color: #f0f0f0;
  }

  .cart-row > div {
    margin: 5px 0;
  }

  .product-image {
    width: 80px;
    margin-bottom: 5px;
  }

  .cart-actions {
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 100%;
    max-width: 300px;
  }
}
</style>
