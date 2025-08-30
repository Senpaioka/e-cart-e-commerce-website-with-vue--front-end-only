
<script setup>
import { RouterLink, useRoute } from 'vue-router';
import dataSet from '../data/home.json'
import { reactive, onMounted, watch, watchEffect } from 'vue';

// category
let categories = new Set();
const data = reactive(dataSet)

for(let i=0; i < data.length; i++) {
	categories.add(data[i].category)
}


</script>




<template>

<header class="section-header">
    <nav class="navbar p-md-0 navbar-expand-sm navbar-light border-bottom">
        <div class="container">

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

            <div class="collapse navbar-collapse" id="navbarTop4">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown"><a href="#" class="nav-link"> English </a></li>
                    <li class="nav-item dropdown"><a href="#" class="nav-link"> USD </a></li>
                  </ul>

                  <ul class="navbar-nav">
                    <li><a href="#" class="nav-link"> <i class="fa fa-envelope"></i> Email </a></li>
                    <li><a href="#" class="nav-link"> <i class="fa fa-phone"></i> Call us </a></li>
                </ul>

            </div> 
        </div> 
    </nav>

<section class="header-main border-bottom">
	<div class="container">

      <div class="row align-items-center">

        <div class="col-lg-2 col-md-3 col-6">
          <RouterLink v-bind:to="{name: 'home'}" class="brand-wrap">
            <img class="logo" src="../assets/images/logo.png">
          </RouterLink> 
        </div>

        <div class="col-lg col-sm col-md col-6 flex-grow-0">
          <div class="category-wrap dropdown d-inline-block float-right">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"> 
              <i class="fa fa-bars"></i> All category 
            </button>
            <div class="dropdown-menu">
              <div v-for="value in categories" :key="value">
                <!-- <a class="dropdown-item" href="#">{{ value }}</a> -->
                <RouterLink class="dropdown-item" v-bind:to="{name: 'filteredProduct', params:{ selected_category:value }}">{{ value.toUpperCase() }}</RouterLink>
              </div>
            </div>
          </div> 
        </div> 

        <RouterLink v-bind:to="{name: 'store'}" class="btn btn-outline-primary">Store</RouterLink>
        <div class="col-lg  col-md-6 col-sm-12 col">
          <form action="#" class="search">
            <div class="input-group w-100">
                <input type="text" class="form-control" style="width:60%;" placeholder="Search">
                
                <div class="input-group-append">
                  <button class="btn btn-primary" type="submit">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
          </form> 
        </div>

        <div class="col-lg-3 col-sm-6 col-8 order-2 order-lg-3">
              <div class="d-flex justify-content-end mb-3 mb-lg-0">
                <div class="widget-header">
                  <small class="title text-muted">Welcome guest!</small>
                  <div> 
                    <!-- <a href="./signin.html">Sign in</a> <span class="dark-transp"> | </span> -->
                    <RouterLink v-bind:to="{name: 'login'}">Sign in</RouterLink> <span class="dark-transp"> | </span>
                    <!-- <a href="./register.html"> Register</a> -->
                    <RouterLink v-bind:to="{name: 'register'}">Register</RouterLink>
                  </div>
                </div>
                <a href="./cart.html" class="widget-header pl-3 ml-3">
                  <div class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></div>
                  <span class="badge badge-pill badge-danger notify">0</span>
                </a>
              </div> 
          </div> 
      </div> 
	</div> 
</section> 
</header> 

</template>









<style scoped>

</style>