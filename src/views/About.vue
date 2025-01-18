<template>
  <div>
    <!-- ส่วนหัว -->
    <div class="header">
      <button @click="show = !show">Toggle List</button>
      <button @click="list.push(list.length + 1)">Push Number</button>
      <button @click="list.pop()">Pop Number</button>
      <button @click="list.reverse()">Reverse List</button>
    </div>

    <!-- รายการ -->
    <div class="list-container">
      <ul v-if="show && list.length">
        <li v-for="item of list" :key="item">{{ item }}</li>
      </ul>
      <p v-else-if="list.length">List is not empty, but hidden.</p>
      <p v-else>List is empty.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true);
const list = ref([1, 2, 3]); // item ที่ต้องการแสดงใน list
</script>

<style scoped>
/* ส่วนหัว (ปุ่มต่างๆ) */
.header {
  position: fixed; /* ปุ่มคงที่ด้านบน */
  top: 25%;
  left: 0;
  width: 95%;  
  background-color: #6308cb;
  color: white;
  z-index: 1000;
  padding: 10px;
  margin-left: 30px;
  text-align: left;
  display: flex;
  gap: 10px; /* เว้นระยะระหว่างปุ่ม */
  text-align: left;
  
}
.header-button {
  font-size: 25px;
  font-weight: 600;
  padding: 5px 10px;
  border: none;
  background-color: #ffffff;
  color: #6308cb;
  cursor: pointer;
  border-radius: 10px;
}
.header-button:hover {
  background-color: #ffffffcc; /* สีพื้นหลังเมื่อ hover */
}
/* ตัวจัดการรายการ */
.list-container {
  margin-top: 220px; /* เว้นระยะด้านบน เพื่อไม่ให้ทับกับปุ่ม */
  margin-left: 30px;
  padding: 10px;
  width: 95%;
  max-height: calc(100vh - 80px); /* จำกัดความสูงของรายการ */
  overflow-y: auto; /* เปิดใช้งานการเลื่อนใน container */
  background-color: white;
  border: 1px solid #ccc;
  text-align: left;
  justify-content: left;
  font-size: 20px;
  font-weight: 600;
  position: fixed
}

/* รูปแบบรายการ */
ul {
  list-style-type: none;

}
li {
  display: flex;
  align-items: left;
  justify-content: left;
  padding: 0;
  margin-left: 30px;
}
</style>