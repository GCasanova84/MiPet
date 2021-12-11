<template>
  <v-container>
    <v-row>
      <v-col class="px-6 pt-8">
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CardContentWrapper'
}
</script>
