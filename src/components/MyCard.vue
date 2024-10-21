<template lang="">
  <div class="card">
    <img :src="coverimage" :alt="name" style="width:100% " />
    <div className="container">
      <h1>{{name}}</h1>
      <p class="price">{{price}}</p>
      <p>{{detail}}</p>
      <p><button>Add to Cart</button></p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id', 'name', 'detail','coverimage', 'price' ]
}
</script>
<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 350px;
  margin: auto;
  text-align: center;
  font-family: arial;
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 10px 20px 0 rgba(0,0,0,0.2);
}
img {
  border-radius: 5px 5px 0 0;
  height: 350px;
}
/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  margin: 20px;
  margin-top: 10px;
}
.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  margin-top: 10px;
}

.card button:hover {
  opacity: 0.7;
}
</style>

 