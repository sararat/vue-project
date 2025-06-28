import { createWebHistory, createRouter } from 'vue-router'
import Home from "../views/Home.vue";
import About from '../views/About.vue';
import NotFound from '../views/NotFound.vue';
import ProductDetail from '../views/ProductDetail.vue'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'
const routes = 
[
  { 
    path: '/', component: Home 
  },
  { 
    path: '/about', component: About 
  },
  { 
    path: '/products', component: Products 
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: "/products/:id", 
    name: "ProductDetail", 
    component: ProductDetail, 
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 