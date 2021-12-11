<template>
  <v-row class="d-flex justify-end align-center">
    <v-btn icon :disabled="page === 0" @click="page = page - 1">
      <v-icon color="secondary">
        mdi-chevron-left
      </v-icon>
    </v-btn>
    {{ 1 + 16*page }} <span class="font-weight-regular px-1">al</span> {{ 16 + 16*page > totalModel? totalModel : 16 + 16*page }} <span class="font-weight-regular px-1"> de </span> {{ totalModel }}
    <v-btn icon :disabled="16 + 16*page >= totalModel" @click="page = page + 1">
      <v-icon color="secondary">
        mdi-chevron-right
      </v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      page: 0
    }
  },
  computed: {
    totalModel () {
      return this.total
    }
  }
}
</script>

<style>

</style>
