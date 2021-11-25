<template>
  <v-app>
    <Navbar />
    <Nuxt />
  </v-app>
</template>

<script>
import Navbar from '@/components/admin/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
 .swal2-popup {
  font-family: Roboto, serif !important;
}
</style>
