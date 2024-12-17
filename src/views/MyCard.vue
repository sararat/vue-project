<template>
  <div class="card">
    <img :src="coverimage" :alt="name" style="width:100% " />
    <div className="container">
      <h1>{{ name }}</h1>
      <p class="price">{{ price }}</p>
      <p>{{ detail }}</p>
      
      <router-link :to="`/products/${id}`">
        <button>View Details</button>
      </router-link>

    </div>
  </div>
</template>
<script>
export default {
  name: "MyCard",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      default: "",
    },
    coverimage: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>
<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: auto;
  text-align: center;
  font-family: arial;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;

  overflow: hidden;
  /* Prevent content overflow */

}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
}

img {
  border-radius: 5px 5px 0 0;
  height: 350px;
  width: 350px;
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  margin: 20px;
  width: 100%;
  height: 200px;
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
  width: 300px;
  font-size: 18px;
  margin-top: 10px;
}

.card button:hover {
  opacity: 0.7;
}

section {
  padding: 16px 24px;
  background: #f3f3f3;
  width: 100%;
  margin-right: 24px;
}
</style>