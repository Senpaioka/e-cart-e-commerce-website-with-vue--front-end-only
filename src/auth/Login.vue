<script setup>

import { ref } from 'vue'
import { useUserInfoStore } from '../store/AuthStore';
import { useRouter } from 'vue-router';

const store = useUserInfoStore()
const route = useRouter()

const getUser = ref({
    email: "",
    password: ""
})


const handleLogin = () => {

    const exists = store.user.find(item => item.email === getUser.value.email && Number(item.password) === Number(getUser.value.password))
    
    if (exists) {
        store.setCurrentUser(exists)
        route.push({ name: 'home' })
    } else {
        console.log("Invalid credentials")
    }

    getUser.value = {
        email: "",
        password: ""
    }
}




</script>


<template>

<section class="section-content padding-y" style="min-height:84vh">
	<div class="card mx-auto" style="max-width: 380px; margin-top:100px;">
      <div class="card-body">
      <h4 class="card-title mb-4">Sign in</h4>

      <form @submit.prevent="handleLogin">
          <div class="form-group">
			 <input type="email" v-model="getUser.email" class="form-control" placeholder="Email Address" required>
          </div> 
          <div class="form-group">
			<input type="password" v-model="getUser.password" class="form-control" placeholder="Password" required>
          </div> 
          
          <div class="form-group">
          	<a href="#" class="float-right">Forgot password?</a> 
           
          </div> 
          <div class="form-group">
              <button type="submit" class="btn btn-primary btn-block"> Login  </button>
          </div>     
      </form>
      

      </div> 
    </div> 

     <p class="text-center mt-4">Don't have account? <RouterLink v-bind:to="{name: 'register'}">Sign Up</RouterLink></p>
     <br><br>

</section>

</template>



<style scoped>

</style>