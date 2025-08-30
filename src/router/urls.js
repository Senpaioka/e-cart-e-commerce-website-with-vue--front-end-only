import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Product from '../views/ProductDetails.vue';
import Store from '../views/Store.vue';
import Filtered from '../views/FilterProduct.vue';
import Cart from '../views/Cart.vue';


const routes = [
    { path: '/registration', name: 'register', component: Register },
    { path: '/login', name: 'login', component: Login },
    { path: '/', name: 'home', component: Home},
    { path: '/product/:id', name: 'product', component: Product},
    { path: '/store', name: 'store', component: Store},
    { path: '/filtered/:selected_category', name: 'filteredProduct', component: Filtered},
    { path: '/cart', name: 'cart', component: Cart},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router