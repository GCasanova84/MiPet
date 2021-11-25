<template>
  <v-container class="my-5">
    <h1 class="mb-5 text-center">
      Agregar Producto
    </h1>
    <v-form
      ref="form"
      v-model="form.valid"
      lazy-validation
    >
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="producto.sku"
              :counter="50"
              label="SKU"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-select
              v-model="producto.marca"
              :items="data.marcas"
              item-text="nombre"
              item-value="id"
              label="Seleccionar marca"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="producto.nombre"
              :counter="50"
              label="Nombre"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="producto.resena"
              :counter="50"
              label="Reseña"
              required
            />
          </v-col>
          <v-col
            cols="12"
          >
            <v-text-field
              v-model="producto.descripcion"
              :counter="100"
              label="Descripcion"
              required
            />
          </v-col>
          <v-col
            cols="12"
          >
            <div>
              <v-row>
                <v-col
                  cols="12"
                  md="3"
                >
                  <v-select
                    v-model="form.selectedCategory"
                    :items="data.categorias"
                    item-text="nombre"
                    item-value="id"
                    label="Seleccionar Categoria"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                >
                  <v-card
                    class="mx-auto overflow-y-auto"
                    max-width="500"
                    height="205"
                  >
                    <v-list shaped>
                      <v-list-item v-for="(subCategory,i) in data.sub_categorias[form.selectedCategory]" :key="'lisc_'+form.selectedCategory+'_'+i">
                        <v-list-item-content>
                          {{ subCategory.nombre }}
                        </v-list-item-content>
                        <v-list-item-icon>
                          <v-tooltip bottom>
                            <template #activator="{ on, attrs }">
                              <v-icon
                                :id="'icsa_'+form.selectedCategory+'_'+subCategory.id"
                                small
                                color="blue darken-2"
                                v-bind="attrs"
                                v-on="on"
                                @click="addSubCategory('icsa_'+form.selectedCategory+'_'+subCategory.id,form.selectedCategory,subCategory.nombre)"
                              >
                                mdi-plus-circle
                              </v-icon>
                            </template>
                            <span>agregar subcategoria</span>
                          </v-tooltip>
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-data-table
                    :headers="table.headers"
                    :items="table.items"
                    :items-per-page="5"
                    class="elevation-1"
                  />
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              v-model="producto.stock_actual"
              label="Stock actual"
              type="number"
              min="0"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              v-model="producto.precio_original"
              label="Precio original"
              type="number"
              min="0"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
            <v-switch v-model="producto.en_oferta" :label="producto.en_oferta ? 'Publicar Precio oferta' : 'Publicar Precio original'" color="indigo" hide-details />
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              v-model="producto.precio_oferta"
              label="Precio oferta"
              type="number"
              min="0"
              required
            />
          </v-col>
          <v-col
            cols="12"
          >
            <v-checkbox
              v-model="form.confirmCommit"
              label="¿Esta seguro de ingresar el producto?"
              required
            />
          </v-col>
          <v-col
            cols="12"
          >
            <div class="d-flex flex-column flex-sm-row justify-center align-center">
              <v-btn color="success" :disabled="!form.valid" class="mt-5" @click="validateForm()">
                Agregar
              </v-btn>
              <v-btn color="error" class="mt-5 mx-5" @click="resetForm()">
                Limpiar Formulario
              </v-btn>
              <v-btn color="warning" class="mt-5" @click="resetValidationForm()">
                Limpiar Validación
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
      form: {
        valid: true,
        confirmCommit: false,
        selectedCategory: null
      },
      table: {
        headers: [
          {
            text: 'Categoria',
            align: 'start',
            sortable: true,
            value: 'category'
          },
          {
            text: 'Subcategoria',
            align: 'start',
            sortable: true,
            value: 'subcategory'
          }
        ],
        items: []
      },
      producto: {
        sku: null,
        marca: null,
        nombre: null,
        resena: null,
        descripcion: null,
        sub_categorias: [],
        stock_actual: null,
        precio_original: null,
        en_oferta: false,
        precio_oferta: null
      },
      data: {
        skus: ['1111', '2222', '3333'],
        marcas: [
          {
            id: 1,
            nombre: 'Purina'
          },
          {
            id: 2,
            nombre: 'Whiskas'
          },
          {
            id: 3,
            nombre: 'Catdog'
          },
          {
            id: 4,
            nombre: 'Arenax'
          }
        ],
        categorias: [
          {
            id: 1,
            nombre: 'animal'
          },
          {
            id: 2,
            nombre: 'alimento'
          },
          {
            id: 3,
            nombre: 'farmacia'
          }
        ],
        sub_categorias: {
          1: [
            {
              id: 1,
              nombre: 'gato'
            },
            {
              id: 2,
              nombre: 'perro'
            }
          ],
          2: [
            {
              id: 3,
              nombre: 'humedo'
            },
            {
              id: 4,
              nombre: 'seco'
            }
          ],
          3: [
            {
              id: 5,
              nombre: 'tranquilizantes'
            },
            {
              id: 6,
              nombre: 'vitaminas'
            },
            {
              id: 7,
              nombre: 'otro 07'
            },
            {
              id: 8,
              nombre: 'otro 08'
            },
            {
              id: 9,
              nombre: 'otro 09'
            },
            {
              id: 10,
              nombre: 'otro 10'
            }
          ]
        }
      }
    }
  },
  methods: {
    addSubCategory (idHtml, category, subcategory) {
      this.table.items.push({ category, subcategory })
      const element = document.getElementById(idHtml)
      element.style.display = 'none'
    },
    removeSubCategory  (id, name) {
    },
    validateForm () {
      this.$swal.fire('validate form')
    },
    resetForm () {
      this.$swal.fire('reset form')
    },
    resetValidationForm () {
      this.$swal.fire('reset validation form')
    }
  }
}
</script>
