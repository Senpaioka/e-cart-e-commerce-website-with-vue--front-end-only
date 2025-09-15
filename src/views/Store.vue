<script setup>

import { RouterLink } from 'vue-router';
import { reactive, ref, watchEffect } from 'vue';
import Pagination from '../components/Pagination.vue';
import SizeFilter from '../views/Sizes.vue';
import { useProductStore } from '../store/ProductStore';

const store = useProductStore()

// total product count
let totalProduct = ref(0)
watchEffect(() => {
    totalProduct.value = store.data.length;
})



// filter category
let categories = new Set();

store.data.forEach(value => {
	categories.add(value.category)
})



// Filtering available size
const sizeVariation = new Set()
const selectedSize = ref([])


for (let item of store.data){
	if (item?.size) {
		for (let x in item.size){
			sizeVariation.add(x)
		}
	}
}

// const filtered product



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

	<!-- showing category list -->

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
	<!-- size list -->

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
					<input type="checkbox" v-model="selectedSize" :value="value.toUpperCase()">
					<span class="btn btn-light">{{ value.toUpperCase() }}</span>
				</label>

		</div>
		</div>
	</article> 
	
	
</div> 
</aside> 

<!-- product counts -->

<main class="col-md-9">
	<header class="border-bottom mb-4 pb-3">
		<div class="form-inline">
			<span class="mr-md-auto">{{ totalProduct }} Items found </span>
		</div>
	</header>


	<!-- showing all products -->
	<div>
		<Pagination :productPerPage="6" :data="store.data" />
	</div>

	<!-- showing filtered products  -->
	<SizeFilter :productSize="selectedSize"/>


</main> 

</div>

</div> 
</section>

</template>


<style scoped>

</style>