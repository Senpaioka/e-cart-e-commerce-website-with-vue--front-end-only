import { defineStore } from "pinia";
import { reactive } from "vue";
import productList from '../data/home.json'

export const useProductStore = defineStore('products', () => {
    const data = reactive(productList)

    return { data }
})