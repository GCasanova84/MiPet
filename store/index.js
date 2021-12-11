export const state = () => ({
  logged: false,
  drawer: false,
  user: {},
  order_options: [{ option: 'Ordenar por precio: menor a mayor', value: 'price_min' }, { option: 'Ordenar por precio: mayor a menor', value: 'price_max' }],
  categories: [
    {
      category: { menu_title: 'Perros', page_title: 'Perros', path: 'perros', num: 58 },
      subcategories: [
        {
          subcategory: { menu_title: 'Alimento', page_title: 'Alimento para perros', path: 'alimento', num: 22 },
          sub_subcategories: [
            { menu_title: 'Alimento seco', page_title: 'Alimento seco para perros', path: 'alimento_seco', num: 13 },
            { menu_title: 'Alimento húmedo', page_title: 'Alimento húmedo para perros', path: 'alimento_humedo', num: 6 },
            { menu_title: 'Alimento medicado', page_title: 'Alimento medicado para perros', path: 'alimento_medicado', num: 3 }
          ]
        },
        {
          subcategory: { menu_title: 'Snacks', page_title: 'Snacks para perros', path: 'snacks', num: 16 },
          sub_subcategories: []
        },
        {
          subcategory: { menu_title: 'Accesorios', page_title: 'Accesorios para perros', path: 'accesorios', num: 10 },
          sub_subcategories: [
            { menu_title: 'Transporte', page_title: 'Accesorios para perros: Transporte', path: 'transporte', num: 1 },
            { menu_title: 'Estética', page_title: 'Accesorios para perros: Estética', path: 'estetica', num: 1 },
            { menu_title: 'Vestuario', page_title: 'Accesorios para perros: Vestuario', path: 'vestuario', num: 2 },
            { menu_title: 'Paseo', page_title: 'Accesorios para perros: Paseo', path: 'paseo', num: 1 },
            { menu_title: 'Entretención', page_title: 'Accesorios para perros: Entretención', path: 'entretencion', num: 1 },
            { menu_title: 'Descanso', page_title: 'Accesorios para perros: Descanso', path: 'descanso', num: 1 },
            { menu_title: 'Alimentación', page_title: 'Accesorios para perros: Alimentación', path: 'alimentacion', num: 1 },
            { menu_title: 'Higiene', page_title: 'Accesorios para perros: Higiene', path: 'higiene', num: 2 }

          ]
        },
        {
          subcategory: { menu_title: 'Farmacia', page_title: 'Farmacia: Perros', path: 'farmacia', num: 10 },
          sub_subcategories: [
            { menu_title: 'Antipulgas', page_title: 'Antipulgas para perros', path: 'antipulgas', num: 10 }

          ]
        }
      ]
    },
    {
      category: { menu_title: 'Gatos', page_title: 'Gatos', path: 'gatos', num: 62 },
      subcategories: [
        {
          subcategory: { menu_title: 'Alimento', page_title: 'Alimento para gatos', path: 'alimento', num: 23 },
          sub_subcategories: [
            { menu_title: 'Alimento seco', page_title: 'Alimento seco para gatos', path: 'alimento_seco', num: 10 },
            { menu_title: 'Alimento húmedo', page_title: 'Alimento húmedo para gatos', path: 'alimento_humedo', num: 8 },
            { menu_title: 'Alimento medicado', page_title: 'Alimento medicado para gatos', path: 'alimento_medicado', num: 5 }
          ]
        },
        {
          subcategory: { menu_title: 'Snacks', page_title: 'Snacks para gatos', path: 'snacks', num: 16 },
          sub_subcategories: []
        },
        {
          subcategory: { menu_title: 'Accesorios', page_title: 'Accesorios para gatos', path: 'accesorios', num: 11 },
          sub_subcategories: [
            { menu_title: 'Transporte', page_title: 'Accesorios para gatos: Transporte', path: 'transporte', num: 1 },
            { menu_title: 'Estética', page_title: 'Accesorios para gatos: Estética', path: 'estetica', num: 2 },
            { menu_title: 'Vestuario', page_title: 'Accesorios para gatos: Vestuario', path: 'vestuario', num: 1 },
            { menu_title: 'Paseo', page_title: 'Accesorios para gatos: Paseo', path: 'paseo', num: 2 },
            { menu_title: 'Entretención', page_title: 'Accesorios para gatos: Entretención', path: 'entretencion', num: 1 },
            { menu_title: 'Descanso', page_title: 'Accesorios para gatos: Descanso', path: 'descanso', num: 2 },
            { menu_title: 'Alimentación', page_title: 'Accesorios para gatos: Alimentación', path: 'alimentacion', num: 1 },
            { menu_title: 'Higiene', page_title: 'Accesorios para gatos: Higiene', path: 'higiene', num: 1 }

          ]
        },
        {
          subcategory: { menu_title: 'Farmacia', page_title: 'Farmacia: Gatos', path: 'farmacia', num: 6 },
          sub_subcategories: [
            { menu_title: 'Antipulgas', page_title: 'Antipulgas para gatos', path: 'antipulgas', num: 6 }

          ]
        },
        {
          subcategory: { menu_title: 'Arenas sanitarias', page_title: 'Arenas sanitarias', path: 'arenas_sanitarias', num: 6 },
          sub_subcategories: []
        }
      ]
    }
  ],
  products: [
    {
      img: 'https://jumbo.vtexassets.com/arquivos/ids/414834/Alimento-para-perro-raza-mediana-y-grande-15-kg.jpg?v=637474496009670000',
      brand: 'Purina',
      name: 'Dog Chow',
      sku: '111111111',
      price: 35990,
      weight: 18,
      height: 70,
      width: 40,
      depth: 25,
      description: 'blablablablabla',
      categories: [
        'Perros',
        'Alimento',
        'Alimento seco'
      ]
    }
  ]
})
export const mutations = {
  toggleDrawer (state) {
    state.drawer = !state.drawer
  },
  setDrawer (state, drawer) {
    state.drawer = drawer
  },
  createUser (state, user) {
    state.user = { ...user }
  }
}
export const actions = {
  login ({ commit }, user) {
    commit('createUser', { user_name: 'Manolo', ...user })
  },
  register ({ commit }, user) {
    commit('createUser', { ...user })
  },
  toggleDrawer ({ commit }) {
    commit('toggleDrawer')
  }
}
