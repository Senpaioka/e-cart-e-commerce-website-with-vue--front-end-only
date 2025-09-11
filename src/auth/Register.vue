<script setup>
import { ref } from 'vue';
import { useUserInfoStore } from '../store/AuthStore';
import { useRouter } from 'vue-router';

const store = useUserInfoStore()
const router = useRouter()

const formData = ref({
	first_name: "",
	last_name: "",
	email: "",
	gender: "male",
	city: "",
	country: "",
	password: "",
	confirm_password: ""
})


const handleSubmit = () => {
	const password1 = Number(formData.value.password)
	const password2 = Number(formData.value.confirm_password)
	if (password1 === password2) {
		store.addUser({...formData.value})

		formData.value = {
			first_name: "",
			last_name: "",
			email: "",
			gender: "male",
			city: "",
			country: "",
			password: "",
			confirm_password: ""
		}

		router.push({ name: 'login' })
	}
}

const handleReset = ()=> {
	formData.value = {
	first_name: "",
	last_name: "",
	email: "",
	gender: "male",
	city: "",
	country: "",
	password: "",
	confirm_password: ""
	}
}


</script>


<template>

<section class="section-content padding-y">

	<div class="card mx-auto" style="max-width:520px; margin-top:40px;">
      <article class="card-body">
		<header class="mb-4"><h4 class="card-title">Sign up</h4></header>
		
        <form @submit.prevent="handleSubmit" @reset.prevent="handleReset">
				<div class="form-row">
					<div class="col form-group">
						<label>First name</label>
					  	<input type="text" v-model="formData.first_name" class="form-control" placeholder="Your first name" required>
					</div> 
					<div class="col form-group">
						<label>Last name</label>
					  	<input type="text" v-model="formData.last_name" class="form-control" placeholder="Your last name" required>
					</div> 
				</div> 

				<div class="form-group">
					<label>Email</label>
					<input type="email" v-model="formData.email" class="form-control" placeholder="example@mail.com" required>
					<small class="form-text text-muted">We'll never share your email with anyone else.</small>
				</div> 

				<div class="form-group">
					<label class="custom-control custom-radio custom-control-inline">
					  <input class="custom-control-input" v-model="formData.gender" type="radio" name="gender" value="male">
					  <span class="custom-control-label"> Male </span>
					</label>
					<label class="custom-control custom-radio custom-control-inline">
					  <input class="custom-control-input" v-model="formData.gender" type="radio" name="gender" value="female">
					  <span class="custom-control-label"> Female </span>
					</label>
				</div> 

				<div class="form-row">
					<div class="form-group col-md-6">
					  <label>City</label>
					  <input type="text" v-model="formData.city" class="form-control" required>
					</div>
					<div class="form-group col-md-6">
					  <label>Country</label>
					  <select id="inputState" v-model="formData.country" class="form-control" required>
					    <option selected disabled> Choose...</option>
					      <option>Uzbekistan</option>
					      <option>Russia</option>
					      <option>United States</option>
					      <option>Bangladesh</option>
					      <option>Afghanistan</option>
					      <option>China</option>
					  </select>
					</div> 
				</div>

				<div class="form-row">
					<div class="form-group col-md-6">
						<label>Create password</label>
					    <input class="form-control" v-model="formData.password" type="password" placeholder="Password" required>
					</div>
					<div class="form-group col-md-6">
						<label>Repeat password</label>
					    <input class="form-control" v-model="formData.confirm_password" type="password" placeholder="Confirm Password" required>
					</div>  
				</div>
                
			    <div class="form-group">
			        <button type="submit" class="btn btn-primary btn-block"> Register  </button>
					<button type="reset" class="btn btn-danger btn-block"> Reset </button>
			    </div>    

				<div class="form-group">
			        
			    </div> 
			        
			</form>
		</article>
    </div> 
	
	
		<p class="text-center mt-4">Have an account? <RouterLink v-bind:to="{name: 'login'}">Log In</RouterLink></p>
    <br><br>

</section>

</template>



<style scoped>

</style>