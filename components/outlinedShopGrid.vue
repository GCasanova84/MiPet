<template>
  <v-card outlined class="rounded-xl">
    <v-card-title class="independence--text subtitle-2">
      <slot name="header" />
    </v-card-title>
    <v-divider />
    <v-card-text class="pa-0 pb-5">
      <slot name="content" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'OutlinedShopGrid',
  props: {
    cardTitle: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style scoped>
.theme--light.v-divider {
    border-color: rgba(119, 181, 76, 1) !important;
}
</style>
