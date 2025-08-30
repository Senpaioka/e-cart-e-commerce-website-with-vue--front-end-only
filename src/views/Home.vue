<script setup>
import { RouterLink } from 'vue-router';
import home_data from '../data/home.json';
import Pagination from '../components/Pagination.vue';
</script>


<template>

<!-- ========================= SECTION MAIN ========================= -->
<section class="section-intro padding-y-sm">
    <div class="container">

    <div class="intro-banner-wrap">
        <img src="../assets/images/banners/1.jpg" class="img-fluid rounded">
    </div>

    </div>
</section>
<!-- ========================= SECTION MAIN END// ========================= -->


<section class="section-name padding-y-sm">
    <div class="container">

        <header class="section-heading">
            <RouterLink v-bind:to="{name: 'store'}" class="btn btn-outline-primary float-right">See all</RouterLink>
            <h3 class="section-title">Popular products</h3>
        </header>

        
        <div class="row">
                <div class="col-md-3" v-for="data in home_data" v-bind:key="data.id">
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

