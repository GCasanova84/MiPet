<template>
  <v-app dark>
    <system-bar />
    <app-bar />
    <v-navigation-drawer
      v-model="drawer"
      right
      fixed
      temporary
      width="500"
      class="pt-2"
      @input="setDrawer"
    >
      <login-drawer />
    </v-navigation-drawer>
    <v-main>
      <v-container id="scrolling-techniques-8" fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from '../components/appBar.vue'
import SystemBar from '../components/systemBar.vue'
import LoginDrawer from '../components/loginDrawer.vue'

export default {
  components: {
    AppBar,
    SystemBar,
    LoginDrawer
  },
  data () {
    return {
      fixed: false
    }
  },
  computed: {
    drawer () {
      return this.$store.state.drawer
    }
  },
  methods: {
    setDrawer (e) {
      this.$store.commit('setDrawer', e)
    }
  }
}
</script>

<style>
.v-application {
  background-color: white;
}
.theme--light.v-sheet--outlined {
 border: thin solid rgba(119, 181, 76, 1);
}
</style>
