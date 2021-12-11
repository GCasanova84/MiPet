<template>
  <v-app-bar app class="white elevation-2">
    <v-container fluid>
      <v-row>
        <v-col cols="3" class="d-flex justify-start align-center">
          <v-img src="mipet-logo.png" max-height="40" max-width="160" contain />
        </v-col>
        <v-col cols="6" class="d-flex align-center">
          <v-text-field
            dense
            outlined
            hide-details
            class="rounded-l-pill"
            color="secondary"
          />
          <div id="input-fill" class="d-flex justify-center align-center secondary">
            <v-icon size="30" color="white">
              mdi-magnify
            </v-icon>
          </div>
        </v-col>
        <v-col cols="3" class="d-flex justify-end align-center">
          <v-btn text rounded color="independence" @click="toggleDrawer">
            <v-icon left size="25">
              mdi-account-circle
            </v-icon>
            {{ logged? 'CIERRA SESIÓN' : 'INICIA SESIÓN' }}
          </v-btn>
          <v-btn icon>
            <v-badge color="secondary" :content="counter" :value="counter">
              <v-icon size="30" color="independence">
                mdi-cart
              </v-icon>
            </v-badge>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <template #extension>
      <v-container fluid>
        <v-row>
          <v-col cols="6" class="mx-auto">
            <v-row no-gutters>
              <v-col v-for="(menuItem, index) in menuItems" :key="index" cols="4">
                <v-menu
                  open-on-hover
                  close-on-click
                  offset-y
                  rounded="0"
                  content-class="elevation-3"
                >
                  <template #activator="{ on, attrs }">
                    <v-btn
                      text
                      tile
                      block
                      color="independence"
                      v-bind="attrs"
                      v-on="on"
                      @click="$router.push({ path: `/${menuItem.category.path}` })"
                    >
                      <span class="independence--text mx-auto">
                        {{ menuItem.category.menu_title }}
                      </span>
                      <v-icon color="secondary">
                        $expand
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-list class="py-0" dense>
                    <v-hover v-for="(menuItemSub, i) in menuItem.subcategories" :key="i" v-slot="{ hover }">
                      <v-list-item class="independence--text sub-category" link :to="{ path: `/${menuItem.category.path}/${menuItemSub.subcategory.path}` }">
                        <v-list-item-title class="d-flex justify-space-between px-4">
                          <span class="independence--text">
                            {{ menuItemSub.subcategory.menu_title }}
                          </span>
                          <v-icon v-if="menuItemSub.sub_subcategories.length > 0" color="secondary">
                            mdi-chevron-right
                          </v-icon>
                        </v-list-item-title>
                        <v-fade-transition>
                          <v-list v-if="hover && menuItemSub.sub_subcategories.length > 0" elevation="3" class="py-0 sub-sub-category" style="z-index: 9; min-width: 100%;" dense>
                            <v-list-item v-for="(title, x) in menuItemSub.sub_subcategories" :key="x" class="independence--text" link :to="{ path: `/${menuItem.category.path}/${menuItemSub.subcategory.path}/${title.path}` }">
                              <v-list-item-title class="px-4">
                                <span class="independence--text">
                                  {{ title.menu_title }}
                                </span>
                              </v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-fade-transition>
                      </v-list-item>
                    </v-hover>
                  </v-list>
                </v-menu>
              </v-col>
              <v-col cols="4">
                <v-btn text tile block color="independence" @click="$router.push({ path: '/contacto' })">
                  <span class="independence--text">
                    CONTACTO
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-speed-dial
        v-model="fab"
        open-on-hover
        bottom
        right
        absolute
        direction="bottom"
        transition="slide-y-transition"
        class="pa-0"
      >
        <template #activator>
          <v-fade-transition>
            <v-btn
              v-if="user"
              color="secondary"
              fab
              rounded
              overflow-hidden
              elevation="3"
              width="auto"
              class="d-flex justify-end px-4"
              style="position: relative; z-index: 3"
            >
              <v-expand-x-transition>
                <span v-show="fab" class="me-6">
                  ¡Saludos {{ user }}!
                </span>
              </v-expand-x-transition>
              <v-icon v-if="!fab">
                $expand
              </v-icon>
              <v-icon v-else class="rotated">
                $expand
              </v-icon>
            </v-btn>
          </v-fade-transition>
        </template>
        <v-list elevation="3" class="py-0 rounded-b-lg">
          <v-list-item link class="px-6">
            <v-list-item-title class="subtitle-2 independence--text">
              Mis compras
            </v-list-item-title>
          </v-list-item>
          <v-list-item link class="px-6">
            <v-list-item-title class="subtitle-2 independence--text">
              Editar perfil
            </v-list-item-title>
          </v-list-item>
          <v-list-item link class="px-6">
            <v-list-item-title class="subtitle-2 independence--text">
              Cambiar contraseña
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-speed-dial>
    </template>
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'AppBar',
  data () {
    return {
      counter: 12,
      closeOnContentClick: true,
      fab: false
    }
  },
  computed: {
    logged () {
      return this.$store.state.logged
    },
    user () {
      return this.$store.state.user.user_name
    },
    menuItems () {
      return this.$store.state.categories
    }
  },
  methods: {
    ...mapMutations({ toggleDrawer: 'toggleDrawer' })
  }
}
</script>

<style scoped>
  .container {
    padding: 12px 12px 0 12px;
  }
  .v-toolbar__extension {
    padding: 4px 16px 0 16px;
  }
  #input-fill {
    height: 40px;
    width: 60px;
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
  }
  #cart-counter {
    height: 20px;
    width: 20px;
    border-radius: 9999px;
    color: white;
    font-size: 15px;
    position: relative;
    top: -10px;
    left: -20px;
  }
  .v-list-item {
    padding: 0;
  }
  .nuxt-link {
    text-decoration: none;
  }
  .nuxt-link-active {
    color: independence--lighten-1;
    text-decoration: none;
  }
  .v-speed-dial--bottom {
    bottom: -72px;
  }
  .rotated {
    transform: rotate(180deg);
  }
  .theme--light.v-btn:focus::before {
    opacity: 0;
  }
  .sub-category {
    position: relative;
  }
  .sub-sub-category {
    position: absolute;
    top: 0;
    left: 100%;
  }
  .v-menu__content {
    overflow-x: visible;
    overflow-y: visible;
    contain: none;
  }
</style>
