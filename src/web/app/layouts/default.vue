<script setup lang="ts">
import Header from "../partials/base/Header.vue";
import Footer from "../partials/base/Footer.vue";
</script>

<template>
  <Header/>
  <main>
    <slot/>
  </main>
  <Footer/>
</template>
