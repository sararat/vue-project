<script setup>
import logo from "@/assets/logo.png"
import { useRouter } from 'vue-router'
import { useProductStore } from '../store/product';
const router = useRouter()
import { storeToRefs } from 'pinia'
const productStore = useProductStore()
const { input } = storeToRefs(productStore)
</script>
<template>
  <nav class="navbar">
    <div class="wrapper">
      <div class="logo">
        <router-link to="/">
          <img :src="logo" alt="Logo" />
        </router-link>
      </div>

      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">MyCard</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li>
          <routerLink to="/cart" aria-current="page">ตะกร้าสินค้า</routerLink>
        </li>
        <li class="search-container">
          <input v-model="input" @keyup.enter="onSearch" type="text" placeholder="Search..." class="search-input" />
          <font-awesome-icon icon="search" class="search-icon" />
        </li>
      </ul>
    </div>
  </nav>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans Thai", sans-serif;
  font-optical-sizing: auto;
}

.navbar {
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

.wrapper {
  max-width: 1300px;
  height: 130px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}

.logo img {
  width: 100px;
  height: auto;
}

.menu-toggle {
  display: none;
  font-size: 30px;
  cursor: pointer;
  color: #fff;
}

.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 20px;
}

.nav-links li a {
  color: #f2f2f2;
  text-decoration: none;
  font-size: 26px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 5px;
  transition: all 0.3s ease;
  
}

.nav-links li a:hover {
  background: #00418b;
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  padding: 10px 40px 10px 15px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  width: 200px;
}

.search-icon {
  position: absolute;
  right: 15px;
  color: #888;
  font-size: 14px;
  pointer-events: none;
}

/* 🔻 Responsive styles */
@media (max-width: 430px) {
  /* ปรับ wrapper ให้เล็กลง */
  .wrapper {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 10px;
  }

  .logo img {
    width: 100px;
    margin-bottom: 10px;
  }

  .menu-toggle {
    display: block;
    font-size: 28px;
    align-self: flex-end;
  }

  .nav-links {
    position: static;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    display: none;
    padding: 10px 0;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links li a {
    font-size: 16px;
    width: 100%;
    text-align: center;
    padding: 10px;
  }

  .search-container {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }

  .search-input {
    width: 90%;
    font-size: 14px;
  }

  .desktop-only {
    display: none;
  }

  .mobile-item {
    display: block;
    width: 100%;
    padding: 10px 0;
  }
}
</style>