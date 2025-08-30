<script setup>
import { useRoute } from 'vue-router';
import data from '../data/home.json';
import { computed, ref, reactive, watchEffect } from 'vue';

// reactive data
const allData = reactive(data);

// getting category from url
const selectedCategory = useRoute()
let getCategory = ref()

getCategory = selectedCategory.params.selected_category;

// filter product based on category
const filteredProducts = computed(() => {
    const getProducts = allData.filter(item => item.category === getCategory);
    return getProducts;
})


</script>


<template>

<section class="section-pagetop bg">
<div class="container">
	<h2 class="title-page">Filtered Product: '{{ getCategory }}' </h2>	
</div>
</section>


<section class="section-name padding-y-sm">
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
</section>


</template>


<style scoped>

</style>