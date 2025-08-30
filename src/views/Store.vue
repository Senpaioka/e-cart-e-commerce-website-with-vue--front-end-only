<script setup>

import { RouterLink } from 'vue-router';
import { reactive, ref, watchEffect, computed } from 'vue';

import dataSet from '../data/home.json';
import Pagination from '../components/Pagination.vue';

const data = reactive(dataSet)

// total product count
let totalProduct = ref(0)
watchEffect(() => {
    totalProduct.value = data.length;
})



// filter category
let categories = new Set();

for(let i=0; i < data.length; i++) {
	categories.add(data[i].category)
}



// Filtering logic
const sizeVariation = new Set()
const selectedSize = ref([])

for(let i=0; i<data.length; i++){
	if(data[i]?.size){
		for(let x in data[i].size){
			sizeVariation.add(x)
		}
	}
}

const filteredProducts = computed(() => {
	return (data ?? []).filter(product => product.size)
})

const selectedProduct = computed(() =>
	filteredProducts.value.filter(product =>
    selectedSize.value.some(size => Object.values(product.size).includes(size))
  )
)

</script>


<template>

<!-- ========================= SECTION PAGE TOP ========================= -->
<section class="section-pagetop bg">
<div class="container">
	<h2 class="title-page">Our Store</h2>
</div>
</section>
<!-- ========================= SECTION INTRO END// ========================= -->



<!-- ========================= SECTION CONTENT ========================= -->
<section class="section-content padding-y">
<div class="container">

<div class="row">
	<aside class="col-md-3">
		
<div class="card">

	<article class="filter-group">
		<header class="card-header">
			<a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
				<i class="icon-control fa fa-chevron-down"></i>
				<h6 class="title">Categories</h6>
			</a>
		</header>
		<div class="filter-content collapse show" id="collapse_1" style="">
			<div class="card-body">
				
				<ul class="list-menu" v-for="category of categories">
					<li><RouterLink v-bind:to="{name: 'filteredProduct', params:{ selected_category:category }}">{{ category }}</RouterLink></li>
				</ul>

			</div> 
		</div>
	</article> 

	<article class="filter-group">
		<header class="card-header">
			<a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" class="">
				<i class="icon-control fa fa-chevron-down"></i>
				<h6 class="title">Sizes </h6>
			</a>
		</header>
		<div class="filter-content collapse show" id="collapse_4" style="">
			<div class="card-body">

				<label class="checkbox-btn" v-for="value in sizeVariation" :key="value">
					<input type="checkbox" v-model="selectedSize" :value=value.toUpperCase()>
					<span class="btn btn-light">{{ value.toUpperCase() }}</span>
				</label>
	
		</div>
		</div>
	</article> 
	
	
</div> 
</aside> 


<main class="col-md-9">
	<header class="border-bottom mb-4 pb-3">
		<div class="form-inline">
			<span class="mr-md-auto">{{ totalProduct }} Items found </span>
		</div>
	</header>

	<!-- showing filtered products -->
	 <div v-if="(selectedSize.length)">
		<div class="row">
			<div class="col-md-4" v-for="item in selectedProduct" v-bind:key="item.id" v-memo="[item.id ,item.product, item.price]">
				<figure class="card card-product-grid">
					<div class="img-wrap"> 
						<img v-bind:src="item.image">
					</div> 

					<figcaption class="info-wrap">
						<div class="fix-height">
							<RouterLink v-bind:to="{ name:'product', params: {id:item.id} }" class="title">{{ item.product }}</RouterLink>
							<div class="price-wrap mt-2">
								<span class="price">${{ item.price }}</span>
							</div> 
						</div>
						<a href="#" class="btn btn-block btn-primary">Add to cart </a>	
					</figcaption>
				</figure>
			</div> 
    	</div>
	</div>

	<div v-else>
		<Pagination :productPerPage="6" :data="data" />
	</div>

</main> 

</div>

</div> 
</section>

</template>


<style scoped>

</style>