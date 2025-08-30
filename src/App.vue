<script setup>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Nav />

      <main>
        <router-view />
      </main>
      
    <Footer />
  </div>
</template>

<style>

</style>
