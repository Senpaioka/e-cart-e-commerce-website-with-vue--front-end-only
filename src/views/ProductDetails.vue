<script setup>

import { useRoute } from 'vue-router';
import {useProductStore} from '../store/ProductStore'
import { useCartStore } from '../store/CartStore';
import { computed, reactive, ref, watch } from 'vue';


const store = useProductStore()
const cart = useCartStore()

// get id from url
const route_id = useRoute()
const productId = parseInt(route_id.params.id, 10)

// get product by id
const getProduct = store.data.find(item => item.id === productId)

// cart product info
const productInfo = ref({
    id: getProduct.id,
    product: getProduct.product,
    description: getProduct.description,
    price: getProduct.price,
    image: getProduct.image,
    category: getProduct.category,
    color: Object.values(getProduct.color)[0] || null,
    size: Object.values(getProduct.size)[0] || null
})


const cartFunctionality = () => {
    cart.addToCart(productInfo)
}

// button change blue -> green
const checkProduct = computed(() => {
    return cart.cart.some(item => item.id === getProduct.id)
})


const showOption = getProduct.color
</script>


<template>

<section class="section-content padding-y bg">
    <div class="container">
        <div class="card">
            <div class="row no-gutters">

                <aside class="col-md-6">
                    <article class="gallery-wrap"> 
                        <div class="img-big-wrap">
                            <a href="#"><img v-bind:src="getProduct.image"></a>
                        </div> 
                    </article> 
                </aside>

        <main class="col-md-6 border-left">

        <article class="content-body">
            <h2 class="title">{{ getProduct.product }}</h2>

            <div class="mb-3"> 
                <var class="price h4">${{ getProduct.price }}</var> 
            </div> 

            <p>{{ getProduct.description }}</p>

            <hr>

            <div class="row">
                    <div class="item-option-select">
                        <h6>Choose Color</h6>
                        <div v-if="Object.keys(getProduct.color).length">
                            <div class="btn-group btn-group-sm btn-group-toggle">
                            <div v-for="(value, key) in getProduct.color" :key="key">
                                <label class="btn btn-light custom-radio" :class="{ active: productInfo.color === value }">
                                <input v-model="productInfo.color" type="radio" name="radio_color" :value="value">
                                {{ value }}
                                </label>
                            </div>
                        </div> 
                        </div>
                        <div v-else>
                            <small>**Not Applicable</small>
                        </div>
                    </div>
                </div>
                
            
                <div class="row">
                    <div class="item-option-select">
                        <h6>Select Size</h6>
                        <div v-if="Object.values(getProduct.size).length">
                            <div class="btn-group btn-group-sm btn-group-toggle">
                                <div v-for="(value, key) in getProduct.size" v-bind:key="key">
                                    <label class="btn btn-light custom-radio" :class="{ active: productInfo.size === value }">
                                        <input v-model="productInfo.size" type="radio" name="radio_color" :value="value"> 
                                        {{ value }}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <small>**Not Applicable</small>
                        </div>
                    </div>
                </div>

                <hr>
                <button v-if="checkProduct"  @click="cartFunctionality" class="btn  btn-success"> <span class="text">Product Added</span> <i class="fas fa-shopping-cart"></i></button>
                <button v-else  @click="cartFunctionality" class="btn  btn-primary"> <span class="text">Add to cart</span> <i class="fas fa-shopping-cart"></i></button>
        </article> 
        </main> 
    </div> 
    </div>

    <br>
        <!-- review section -->
        <div class="row">
            <div class="col-md-9">

                <header class="section-heading">
                    <h3>Customer Reviews </h3>  
                </header>

            <article class="box mb-3">
                <div class="icontext w-100">
                    <img src="../assets/images/avatars/avatar1.jpg" class="img-xs icon rounded-circle">
                    <div class="text">
                        <span class="date text-muted float-md-right">24.04.2020 </span>  
                        <h6 class="mb-1">Mike John </h6>
                    </div>
                </div> 

                <div class="mt-3">
                    <p>
                        Dummy comment Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>	
                </div>
            </article>
            </div> 
        </div> 

    </div> 
</section>

</template>



<style scoped>

.custom-radio input[type="radio"] {
  display: none; 
}

</style>


