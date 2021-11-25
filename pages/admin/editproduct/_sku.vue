<template>
  <v-container class="my-5 text-center">
    <h1 class="mb-5">Edición Producto SKU:  {{ producto.sku }}</h1>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
      producto: {
        sku: null
      }
    }
  },
  created () {
    this.producto.sku = this.$route.params.sku
  }
}
</script>
