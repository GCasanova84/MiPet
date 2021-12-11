<template>
  <v-container>
    <v-row>
      <v-col cols="3" />
      <v-col cols="9">
        <page-title :title="items.category.page_title" />
      </v-col>
    </v-row>
    <v-row class="mt-0">
      <v-col cols="3" class="pt-0">
        <outlined-card class="mb-6" card-title="Categorías">
          <expansion-panel :panel="categoryIndex" />
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
        <v-select
          v-model="order"
          :items="$store.state.order_options"
          item-text="option"
          dense
          outlined
          hide-details
          class="rounded-pill"
          style="font-size: 14px;"
          color="secondary"
        >
          <template #append>
            <v-icon color="secondary">
              $expand
            </v-icon>
          </template>
        </v-select>
      </v-col>
      <v-col cols="9" class="pt-0">
        <outlined-shop-grid>
          <template #header>
            <v-container class="py-0 px-4 d-flex align-center" style="height: 22px;">
              <v-row>
                <v-col cols="6" class="pa-0">
                  <span class="text--disabled">
                    {{ items.category.menu_title }}
                  </span>
                </v-col>
                <v-col cols="6" class="pa-0 d-flex justify-end">
                  <pagination :total="items.category.num" />
                </v-col>
              </v-row>
            </v-container>
          </template>
          <template #content>
            <v-container class="d-flex flex-wrap">
              <v-card width="25%">
                <v-img src="~/assets/img/comida.jpg" contain height="280" />
                categoría
              </v-card>
              <v-card width="25%">
                <v-img src="~/assets/img/comida.jpg" contain height="280" />
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
    items () {
      return this.$store.state.categories.find(item => item.category.path === this.$route.params.category)
    },
    categoryIndex () {
      return this.$store.state.categories.findIndex(item => item.category.path === this.$route.params.category)
    }
  }
}
</script>

<style></style>
