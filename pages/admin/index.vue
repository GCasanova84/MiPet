<template>
  <v-container class="my-5 ">
    <h1 class="mb-5 text-center">
      Listado de Productos
    </h1>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
        />
        <v-spacer />
        <v-btn
          color="primary"
          dark
          class="mb-2 text-capitalize"
          @click="goTo('admin/addproduct')"
        >
          agregar producto
        </v-btn>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="productos"
        :search="search"
      >
        <template #[`item.stock_actual`]="{ item }">
          {{ item.stock_actual | formatNumber }}
        </template>
        <template #[`item.precio_original`]="{ item }">
          {{ item.precio_original | formatMoney }}
        </template>
        <template #[`item.precio_oferta`]="{ item }">
          {{ item.precio_oferta | formatMoney }}
        </template>
        <template #[`item.actions`]="{ item }">
          <v-icon
            small
            color="blue darken-2"
            @click="showItemDetails(item.sku)"
          >
            mdi-loupe
          </v-icon>
          <v-icon
            class="ms-1"
            small
            color="green darken-2"
            @click="editItem(item.sku)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            class="ms-1"
            small
            color="red darken-2"
            @click="deleteItem(item.sku)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { formatMoney, formatNumber } from '../../module_custom/filters'
export default {
  filters: {
    formatMoney,
    formatNumber
  },
  layout: 'admin',
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Sku',
          align: 'start',
          sortable: true,
          value: 'sku'
        },
        {
          text: 'Marca',
          align: 'start',
          sortable: true,
          value: 'marca'
        },
        {
          text: 'Nombre',
          align: 'start',
          sortable: true,
          value: 'nombre'
        },
        {
          text: 'Reseña',
          align: 'start',
          sortable: false,
          value: 'resena'
        },
        {
          text: 'Stock Actual',
          align: 'start',
          sortable: true,
          value: 'stock_actual'
        },
        {
          text: 'Precio Original',
          align: 'start',
          sortable: true,
          value: 'precio_original'
        },
        {
          text: '¿En Oferta?',
          align: 'start',
          sortable: true,
          value: 'en_oferta'
        },
        {
          text: 'Precio Oferta',
          align: 'start',
          sortable: true,
          value: 'precio_oferta'
        },
        {
          text: 'Activo',
          align: 'start',
          sortable: true,
          value: 'activo'
        },
        {
          text: 'Acciones',
          align: 'start',
          sortable: true,
          value: 'actions'
        }
      ],
      productos: [
        {
          sku: '100001514541',
          marca: 'Whiskas',
          nombre: 'Comida miau miau',
          resena: 'Lorem ipsum dolor sit amet',
          stock_actual: 10550,
          precio_original: 10000,
          en_oferta: true,
          precio_oferta: 9990,
          activo: true
        },
        {
          sku: '100001514542',
          marca: 'Whiskas',
          nombre: 'Comida miau miau',
          resena: 'Lorem ipsum dolor sit amet',
          stock_actual: 1050,
          precio_original: 10000,
          en_oferta: true,
          precio_oferta: 9990,
          activo: true
        },
        {
          sku: '100001514543',
          marca: 'Whiskas',
          nombre: 'Comida miau miau',
          resena: 'Lorem ipsum dolor sit amet',
          stock_actual: 100,
          precio_original: 10000,
          en_oferta: true,
          precio_oferta: 9990,
          activo: true
        },
        {
          sku: '100001514544',
          marca: 'Whiskas',
          nombre: 'Comida miau miau',
          resena: 'Lorem ipsum dolor sit amet',
          stock_actual: 100,
          precio_original: 10000,
          en_oferta: true,
          precio_oferta: 990,
          activo: true
        },
        {
          sku: '100001514545',
          marca: 'Whiskas',
          nombre: 'Comida miau miau',
          resena: 'Lorem ipsum dolor sit amet',
          stock_actual: 100,
          precio_original: 10000,
          en_oferta: true,
          precio_oferta: 9990,
          activo: true
        },
        {
          sku: '100001514546',
          marca: 'Master Cat',
          nombre: 'Comida miau miau',
          resena: 'Lorem ipsum dolor sit amet',
          stock_actual: 1100,
          precio_original: 10000,
          en_oferta: false,
          precio_oferta: 9990,
          activo: false
        }
      ]
    }
  },
  methods: {
    goTo (route) {
      this.$router.push(route)
    },
    showItemDetails (sku) {
      this.$swal.fire({
        text: 'Se realizara un modal o dialog con el detalle del producto, se implementará una vez definida todas las caracteristicas del producto.'
      })
    },
    editItem (sku) {
      this.$router.push(`/admin/editproduct/${sku}`)
    },
    deleteItem (sku) {
      this.$swal(
        {
          text: `¿Esta seguro de desactivar el producto sku: ${sku}?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si, desactivarlo!',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
        if (result.isConfirmed) {
          // ejecutar axios con update para setear como eliminado
          const msg = 'Producto desactivado'
          this.$swal.fire(msg, '', 'success')
        }
      })
    }
  }
}
</script>
