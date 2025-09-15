import { defineStore } from "pinia";
import { ref, computed } from "vue";


export const useCartStore = defineStore('cart', () => {

    const cart = ref([]);
    const count = computed(() => cart.value.length)

    // add product
    function addToCart(product){
        const isExists = cart.value.find(item => item.id === product.value.id && item.color === product.value.color && item.size === product.value.size) 
        if (isExists){
            isExists.quantity++
            
        }else {
            cart.value.push({...product.value, quantity: 1})
        }
    }


    function removeFromCart(id) {
        cart.value = cart.value.filter(item => item.id !== id)
    }

    return {cart, addToCart, removeFromCart, count}
})