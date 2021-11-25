<template>
  <v-app-bar app class="white">
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
          <v-btn text rounded color="independence" @click="logged = !logged">
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
            <div class="d-flex">
              <div v-for="(menuItem, index) in menuItems" :key="index" class="grow">
                <v-menu
                  open-on-hover
                  :close-on-content-click="closeOnContentClick"
                  offset-y
                >
                  <template #activator="{ on, attrs }">
                    <v-btn text block color="independence" v-bind="attrs" v-on="on">
                      {{ menuItem.main }}
                      <v-icon right color="primary">
                        mdi-chevron-down
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-menu
                      open-on-hover
                      :close-on-content-click="closeOnContentClick"
                      offset-x
                    >
                      <template #activator="{ on, attrs }">
                        <v-list-item v-for="(menuItemSub, x) in menuItem.subs" :key="x" link v-bind="attrs" v-on="on">
                          <v-list-item-title>
                            {{ menuItemSub.sub }}
                          </v-list-item-title>
                          <v-icon size="20" color="primary">
                            mdi-chevron-down
                          </v-icon>
                        </v-list-item>
                      </template>
                    </v-menu>
                  </v-list>
                </v-menu>
              </div>
              <div class="grow">
                <v-btn text block color="independence">
                  CONTACTO
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data () {
    return {
      menuItems: [{ main: 'PERROS', subs: [{ sub: 'Alimento', titles: ['Alimento húmedo', 'Alimento seco'] }, { sub: 'Juguetes', titles: [] }, { sub: 'Accesorios', titles: [] }] }, { main: 'GATOS', subs: [{ sub: 'Alimento', titles: ['Alimento húmedo', 'Alimento seco'] }, { sub: 'Rascadores', titles: [] }] }, { main: 'FARMACIA', subs: [{ sub: 'Perros', titles: [] }, { sub: 'Gatos', titles: [] }] }],
      counter: 12,
      logged: false,
      closeOnContentClick: true
    }
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
</style>