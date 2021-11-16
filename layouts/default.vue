<template>
  <v-app dark>
    <system-bar />
    <app-bar />
    <v-main>
      <v-container id="scrolling-techniques-8">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from '../components/appBar.vue'
import SystemBar from '../components/systemBar.vue'

export default {
  components: {
    AppBar,
    SystemBar
  },
  data () {
    return {
      fixed: false
    }
  }
}
</script>

<style scoped>
  .v-application {
    background-color: white;
  }
</style>
