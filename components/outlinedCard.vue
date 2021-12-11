<template>
  <v-card outlined class="rounded-xl">
    <v-card-title v-if="cardTitle" class="independence--text subtitle-2" v-text="cardTitle" />
    <v-divider v-if="cardTitle" />
    <v-card-text class="pa-0 pb-5">
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'OutlinedCard',
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
