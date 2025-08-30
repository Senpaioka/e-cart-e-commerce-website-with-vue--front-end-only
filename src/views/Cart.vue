<script setup>

import { reactive } from 'vue';
import cartData from '../data/cart.json';

const productData = reactive(cartData)

</script>


<template>

<section class="section-content padding-y bg">
<div class="container">

<div class="row">
<aside class="col-lg-9">

<div class="card">
<table class="table table-borderless table-shopping-cart">

    <thead class="text-muted">
        <tr class="small text-uppercase">
        <th scope="col">Product</th>
        <th scope="col" width="120">Quantity</th>
        <th scope="col" width="120">Price</th>
        <th scope="col" class="text-right" width="200"> </th>
        </tr>
    </thead>

<tbody>
<tr v-for="value in productData" :key="value.id">
	<td>
		<figure class="itemside align-items-center">
			<div class="aside"><img v-bind:src="value.image" class="img-sm"></div>
			<figcaption class="info">
				<a href="#" class="title text-dark">{{ value.product }}</a>
				<p class="text-muted small">Color: {{ value?.color }} <br> Size: {{ value?.size }}</p>
			</figcaption>
		</figure>
	</td>

	<td> 
		<!-- increase decrease -->
					<div class="col"> 
						<div class="input-group input-spinner">
							<div class="input-group-prepend">
							<button class="btn btn-light" type="button" id="button-plus"> <i class="fa fa-minus"></i> </button>
							</div>
							<input type="text" class="form-control"  value="1">
							<div class="input-group-append">
							<button class="btn btn-light" type="button" id="button-minus"> <i class="fa fa-plus"></i> </button>
							</div>
						</div> 
					</div> 
	</td>

	<td> 
        <!-- price info -->
		<div class="price-wrap"> 
			<var class="price">${{ value.price }}</var> 
			<small class="text-muted"> ${{ value.price }} each </small> 
		</div> 
	</td>

    <!-- remove -->
	<td class="text-right"> 
	    <a href="" class="btn btn-danger"> Remove</a>
	</td>
</tr>

</tbody>

</table>
</div>

	</aside> 

	<aside class="col-lg-3">

		<div class="card">
		<div class="card-body">
			<dl class="dlist-align">
			  <dt>Total price:</dt>
			  <dd class="text-right">$69.97</dd>
			</dl>
			<dl class="dlist-align">
			  <dt>Tax:</dt>
			  <dd class="text-right"> $10.00</dd>
			</dl>
			<dl class="dlist-align">
			  <dt>Total:</dt>
			  <dd class="text-right text-dark b"><strong>$59.97</strong></dd>
			</dl>
			<hr>
			<p class="text-center mb-3">
				<img src="../assets/images/misc/payments.png" height="26">
			</p>
			<a href="./place-order.html" class="btn btn-primary btn-block"> Checkout </a>
			<a href="./store.html" class="btn btn-light btn-block">Continue Shopping</a>
		</div> 
		</div> 

    </aside> 
</div> 

</div> 
</section>

</template>


<style scoped>

</style>