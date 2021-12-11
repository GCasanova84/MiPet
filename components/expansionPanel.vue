<template>
  <v-expansion-panels v-model="panelModel" accordion flat focusable>
    <v-expansion-panel v-for="(item, i) in items" :key="i">
      <v-expansion-panel-header class="d-flex" style="pointer-events: none;">
        <Nuxt-link :to="{ path: `/${item.category.path}`}" class="flex-grow-1 flex-shrink-0 independence--text body-2 font-weight-regular" style="pointer-events: auto; text-decoration: none;">
          {{ item.category.menu_title }}
        </Nuxt-link>
        <v-container class="d-flex justify-end flex-grow-0 flex-shrink-1 pa-0">
          <v-avatar color="secondary" size="24">
            <span class="white--text caption font-weight-medium">{{ item.category.num }}</span>
          </v-avatar>
        </v-container>
        <template #actions>
          <v-btn icon class="me-n2" style="pointer-events: auto;">
            <v-icon color="secondary">
              $expand
            </v-icon>
          </v-btn>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-expansion-panels v-model="subpanelModel" accordion flat>
          <v-expansion-panel v-for="(subItem, x) in item.subcategories" :key="x" :readonly="subItem.sub_subcategories.length === 0">
            <v-expansion-panel-header class="d-flex ps-10" style="pointer-events: none;">
              <Nuxt-link :to="{ path: `/${item.category.path}/${subItem.subcategory.path}`}" class="flex-grow-1 flex-shrink-0 independence--text body-2 font-weight-regular" style="pointer-events: auto; text-decoration: none;">
                {{ subItem.subcategory.menu_title }}
              </Nuxt-link>
              <v-container class="d-flex justify-end flex-grow-0 flex-shrink-1 pa-0">
                <v-avatar color="secondary" size="24">
                  <span class="white--text caption font-weight-medium">{{ subItem.subcategory.num }}</span>
                </v-avatar>
              </v-container>
              <template #actions>
                <v-btn icon class="me-n2" :style="subItem.sub_subcategories.length > 0 ? 'pointer-events: auto;' : '' ">
                  <v-icon color="secondary">
                    {{ subItem.sub_subcategories.length > 0 ? '$expand': '' }}
                  </v-icon>
                </v-btn>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-expansion-panels v-model="subsubpanelModel" readonly accordion flat>
                <v-expansion-panel v-for="(title, index) in subItem.sub_subcategories" :key="index">
                  <v-expansion-panel-header class="d-flex independence--text body-2 font-weight-regular ps-16">
                    <Nuxt-link :to="{ path: `/${item.category.path}/${subItem.subcategory.path}/${title.path}`}" class="flex-grow-1 flex-shrink-0 independence--text body-2 font-weight-regular" style="text-decoration: none;">
                      {{ title.menu_title }}
                    </Nuxt-link>
                    <v-container class="d-flex justify-end flex-grow-0 flex-shrink-1 pa-0" style="min-width: 24px;">
                      <v-avatar color="secondary" size="24">
                        <span class="white--text caption font-weight-medium">{{ title.num }}</span>
                      </v-avatar>
                    </v-container>
                    <template #actions>
                      <v-icon />
                    </template>
                  </v-expansion-panel-header>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'ExpansionPanel',
  props: {
    panel: {
      type: [Number, Array],
      required: false,
      default: () => []
    },
    subpanel: {
      type: [Number, Array],
      required: false,
      default: () => []
    },
    subsubpanel: {
      type: [Number, Array],
      required: false,
      default: () => []
    }
  },
  computed: {
    items () {
      return this.$store.state.categories
    },
    panelModel () {
      return this.panel
    },
    subpanelModel () {
      return this.subpanel
    },
    subsubpanelModel () {
      return this.subsubpanel
    }
  }
}
</script>

<style>
.v-expansion-panel-content__wrap {
  padding: 0 !important;
}
.v-btn::before {
  display: none;
}
.v-expansion-panel-header::before {
  background-color: rgba(119, 181, 76, 1) !important;
}
.v-expansion-panel-header--active::before {
  opacity: 0.12 !important;
}
</style>
