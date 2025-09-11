<script setup>
import { computed, reactive, ref, watch, watchEffect } from 'vue';
import { useProductStore } from '../store/ProductStore';

const store = useProductStore()
const { data } = store
console.log(data)

const props = defineProps({
    productSize: {
        type: Array,
    },
    default: () => []
})



watch(
  () => props.productSize,
  (newVal) => {
    const selectedSize = [...newVal]
    // filtered(selectedSize)
  }
)

</script>


<template>
<!-- <section class="section-name padding-y-sm">
    <div class="container">        

        <header class="border-bottom mb-4 pb-3">
                <div class="form-inline">
                    <span class="mr-md-auto">{{ filteredProducts.length }} Items found </span>		
                </div>
        </header>

        <div class="row">
                <div class="col-md-3" v-for="data in filteredProducts" v-bind:key="data.id">
                    <RouterLink v-bind:to="{ name: 'product', params: { id: data.id } }">
                        <figure class="card card-product-grid">
                            <a href="./product-detail.html" class="img-wrap"> <img v-bind:src="data.image"></a>
                            <figcaption class="info-wrap">
                                <a href="./product-detail.html" class="title">{{ data.product }}</a>
                                <div class="price mt-1">${{ data.price }}</div> 
                            </figcaption>
                        </figure> 
                    </RouterLink>
                </div>
        </div>

    </div>
</section> -->

</template>


<style scoped>

</style>