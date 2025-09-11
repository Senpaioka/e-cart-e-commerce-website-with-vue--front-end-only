<script setup>
import { ref, reactive, computed, defineProps } from 'vue'


const props = defineProps({
    productPerPage : {
        type: Number,
        default: 6
    },

    data: {
        type: Object,
        required: true
    }
})

// pagination
// state
const currentPage = ref(1)
const productPerPage = ref(props.productPerPage)
const pageData = reactive(props.data)


// const paginatedProducts = computed(() => {
//     const start = (currentPage.value - 1) * productPerPage.value
//     const end = start + productPerPage.value
//     return pageData.slice(start, end)
// })


// paginate data
const paginatedProducts = computed(() => {
  if (productPerPage.value <= 0) return pageData
  const start = (currentPage.value - 1) * productPerPage.value
  const end = start + productPerPage.value
  return pageData.slice(start, end)
})

const totalPages = computed(() => {
    return productPerPage.value > 0 ? Math.ceil(pageData.length / productPerPage.value) : 1
})


// paginate functions
function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}




// expose to parent
// defineExpose({
//     currentPage,
//     paginatedProducts,
// })

</script>


<template>

    <!-- show products basic on props -->
    <div class="row">
        <div class="col-md-4" v-for="item in paginatedProducts" v-bind:key="item.id" v-memo="[item.id ,item.product, item.price]">
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


    <!-- Pagination Controls -->
    <nav v-if="paginatedProducts.length < data.length" class="mt-4" aria-label="Page navigation sample">
        <ul class="pagination">
            <li class="page-item" @click="prevPage" :class="currentPage === 1 ? 'disabled': null"><button class="page-link">Previous</button></li>
            <li class="page-item" v-for="page in totalPages" :key="page"  @click="goToPage(page)" :class="{ active : currentPage === page }"><button class="page-link">{{ page }}</button></li>
            <li class="page-item" @click="nextPage" :class="currentPage === totalPages ? 'disabled' : null"><button class="page-link">Next</button></li>
        </ul>
    </nav>

</template>


<style scoped>

</style>