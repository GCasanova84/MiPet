<template>
  <div class="text-center mb-8 independence--text text-h3" v-text="title.toUpperCase()" />
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
