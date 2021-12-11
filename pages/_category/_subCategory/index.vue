<template>
  <v-container>
    <v-row>
      <v-col cols="3" />
      <v-col cols="9">
        <page-title :title="items.subcategory.page_title" />
      </v-col>
    </v-row>
    <v-row class="mt-0">
      <v-col cols="3" class="pt-0">
        <outlined-card class="mb-6" card-title="Categorías">
          <expansion-panel :panel="categoryIndex" :subpanel="subcategoryIndex" />
        </outlined-card>
        <outlined-card card-title="Filtrar por precio">
          <v-list>
            <v-list-item>
              <v-list-title>
                hola
              </v-list-title>
            </v-list-item>
            <v-list-item>
              <v-list-title>
                chao
              </v-list-title>
            </v-list-item>
          </v-list>
        </outlined-card>
      </v-col>
      <v-col cols="9" class="pt-0">
        <outlined-shop-grid>
          <template #header>
            <v-container class="py-0 px-4 d-flex align-center" style="height: 22px;">
              <v-row>
                <v-col cols="6" class="pa-0">
                  <Nuxt-link :to="{ path: `/${category.category.path}` }" class="secondary--text" style="text-decoration: none;">
                    {{ category.category.menu_title }}
                  </Nuxt-link>
                  <v-icon color="secondary" size="16" class="px-2">
                    mdi-chevron-right
                  </v-icon>
                  <span class="text--disabled">
                    {{ items.subcategory.menu_title }}
                  </span>
                </v-col>
                <v-col cols="6" class="pa-0 d-flex align-center">
                  <pagination :total="items.subcategory.num" />
                </v-col>
              </v-row>
            </v-container>
          </template>
          <template #content>
            <v-container class="d-flex flex-wrap">
              <v-card width="25%">
                <v-img src="~/assets/img/comida.jpg" contain height="280" />
                subcategoría
              </v-card>
              <v-card width="25%">
                <v-img src="~/assets/img/comida.jpg" contain height="280" />Z
                hola
              </v-card>
            </v-container>
          </template>
        </outlined-shop-grid>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import outlinedCard from '~/components/outlinedCard.vue'
import pageTitle from '~/components/pageTitle.vue'
import pagination from '~/components/pagination.vue'
import expansionPanel from '~/components/expansionPanel.vue'
export default {
  components: { outlinedCard, pageTitle, pagination, expansionPanel },
  data () {
    return {
      order: ''
    }
  },
  computed: {
    category () {
      return this.$store.state.categories.find(item => item.category.path === this.$route.params.category)
    },
    items () {
      return this.category.subcategories.find(item => item.subcategory.path === this.$route.params.subCategory)
    },
    categoryIndex () {
      return this.$store.state.categories.findIndex(item => item.category.path === this.$route.params.category)
    },
    subcategoryIndex () {
      return this.category.subcategories.findIndex(item => item.subcategory.path === this.$route.params.subCategory)
    }
  }
}
</script>

<style></style>
