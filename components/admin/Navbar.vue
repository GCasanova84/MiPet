<template>
  <div>
    <v-app-bar color="primary" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click="drawer = true" />
        <v-toolbar-title>
          MiPetOnline
        </v-toolbar-title>
      </div>
      <v-spacer />
      <!--Aparece si el usuario esta logeado-->
      <v-btn text @click="logout">
        <span class="mr-2 text-lowercase d-none d-sm-inline ">algun_correo@gmail.com</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <!--Barra lateral-->
    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-wrench</v-icon>
          </v-list-item-icon>
          <v-list-item-title color="danger">
            <NuxtLink to="/admin">
              Listado de Productos
            </NuxtLink>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-wrench</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <NuxtLink to="/admin/brands">
              Listado de Marcas
            </NuxtLink>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-wrench</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <NuxtLink to="/admin/categories">
              Listado de Categorias
            </NuxtLink>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  components: {},
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    logout () {
      this.$swal.fire('añadir la funcion logout')
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none !important;
}
a:hover{
  color: #ffac00;
}
</style>
