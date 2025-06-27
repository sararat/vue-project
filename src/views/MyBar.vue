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
        <li class="search-container">
          <input v-model="input"  @keyup.enter="onSearch" type="text" placeholder="Search..." class="search-input" />
          <font-awesome-icon icon="search" class="search-icon" />
        </li>
      </ul>
    </div>
  </nav>
</template>



<style scoped>
/* Navbar Styles */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.navbar {
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0px 0px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

.wrapper {
  position: relative;
  max-width: 1300px;
  height: 140px;
  line-height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wrapper .logo img {
  display: flex;
  align-items: center;
  width: 120px;
  height: auto;
  margin-top: 10px;
  margin-right: 10px;
}

.wrapper .nav-links {
  display: inline-flex;
  z-index: 10;
}



.nav-links li a {
  color: #f2f2f2;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  padding: 9px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;

}

.nav-links li a:hover {
  background: #00418b;
}

.nav-links .mobile-item {
  display: none;
}

.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-links li {
  position: relative;
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
</style>