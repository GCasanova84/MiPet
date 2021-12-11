<template>
  <v-container fluid>
    <page-title title="REGISTRO" />
    <v-row>
      <v-col cols="4" class="mx-auto">
        <outlined-card ref="formCard" card-title="Formulario de registro">
          <v-expansion-panels v-model="panel" accordion flat focusable>
            <v-expansion-panel ref="profileCreate">
              <v-expansion-panel-header class="independence--text">
                <template #default="{ open }">
                  <v-row>
                    <v-col cols="7">
                      Creación de perfil
                    </v-col>
                    <v-col cols="5" class="d-flex justify-end pe-5">
                      <v-fade-transition>
                        <span v-if="open" class="secondary--text body-2">
                          Primer paso
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
                <template #actions>
                  <v-icon color="secondary">
                    $expand
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pt-8">
                <v-form ref="profileForm" v-model="profileValid" lazy-validation>
                  <input-text
                    v-for="(field, i) in formFieldProfile"
                    :key="i"
                    v-model="user[field.model]"
                    :label="field.label"
                    :model="field.model"
                    :is-required="field.required"
                    :type="field.type"
                    :size="field.size"
                    :rules="field.rules"
                  />
                  <primary-button :disabled="!profileValid" button-text="Crear perfil" class="mt-8" @clicked="goToUserForm" />
                </v-form>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel ref="userForm">
              <v-expansion-panel-header class="independence--text">
                <template #default="{ open }">
                  <v-row>
                    <v-col cols="7">
                      Datos del usuario
                    </v-col>
                    <v-col cols="5" class="d-flex justify-end pe-5">
                      <v-fade-transition>
                        <span v-if="open" class="secondary--text body-2">
                          Segundo paso
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
                <template #actions>
                  <v-icon color="secondary">
                    $expand
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pt-8">
                <v-form ref="userForm" v-model="userValid" lazy-validation>
                  <input-text
                    v-for="(field, i) in formFieldUser"
                    :key="i"
                    v-model="user[field.model]"
                    :label="field.label"
                    :model="field.model"
                    :is-required="field.required"
                    :type="field.type"
                    :size="field.size"
                    :rules="field.rules"
                    :prefix="field.prefix"
                  />
                  <primary-button :disabled="!userValid" button-text="Guardar datos" class="mt-8" @clicked="goToAddressForm" />
                </v-form>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel ref="addressForm">
              <v-expansion-panel-header class="independence--text">
                <template #default="{ open }">
                  <v-row>
                    <v-col cols="7">
                      Dirección de facturación
                    </v-col>
                    <v-col cols="5" class="d-flex justify-end pe-5">
                      <v-fade-transition>
                        <span v-if="open" class="secondary--text body-2">
                          Tercer paso
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
                <template #actions>
                  <v-icon color="secondary">
                    $expand
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pt-8">
                <v-form ref="addressForm" v-model="addressValid" lazy-validation>
                  <input-address-select v-model="user.address" />
                  <input-text
                    v-for="(field, i) in formFieldAddress"
                    :key="i"
                    v-model="user.address[field.model]"
                    :label="field.label"
                    :model="field.model"
                    :is-required="field.required"
                    :type="field.type"
                    :size="field.size"
                    :rules="field.rules"
                  />
                  <primary-button :disabled="!addressValid" button-text="Guardar dirección" class="mt-8" @clicked="goToShippingAddressForm" />
                  <v-checkbox
                    v-model="checkbox"
                    dense
                    color="secondary"
                    class="mt-8 ms-3"
                    label="Utilizar la misma dirección para envíos"
                  />
                </v-form>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel ref="shippingAddressForm">
              <v-expansion-panel-header class="independence--text">
                <template #default="{ open }">
                  <v-row>
                    <v-col cols="7">
                      Dirección de envío
                    </v-col>
                    <v-col cols="5" class="d-flex justify-end pe-5">
                      <v-fade-transition>
                        <span v-if="open" class="secondary--text body-2">
                          Último paso
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
                <template #actions>
                  <v-icon color="secondary">
                    $expand
                  </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="pt-8">
                <v-form ref="shippingAddressForm" v-model="shippingAddressValid" :disabled="checkbox" lazy-validation>
                  <input-address-select v-model="user.shipping_address" />
                  <input-text
                    v-for="(field, i) in formFieldAddress"
                    :key="i"
                    v-model="user.shipping_address[field.model]"
                    :label="field.label"
                    :model="field.model"
                    :is-required="field.required"
                    :type="field.type"
                    :size="field.size"
                    :rules="field.rules"
                  />
                  <primary-button :disabled="!shippingAddressValid" button-text="Finalizar" class="mt-8" @clicked="goToHomePage" />
                </v-form>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </outlined-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageTitle from '../components/pageTitle.vue'
import OutlinedCard from '../components/outlinedCard.vue'
import InputText from '../components/inputText.vue'
import InputAddressSelect from '../components/inputAddressSelect.vue'
import PrimaryButton from '../components/primaryButton.vue'

export default {
  components: {
    PageTitle,
    OutlinedCard,
    InputText,
    InputAddressSelect,
    PrimaryButton
  },
  data () {
    return {
      panel: 0,
      checkbox: false,
      userValid: true,
      profileValid: true,
      addressValid: true,
      shippingAddressValid: true,
      formFieldProfile: [{ label: 'Nombre de usuario', model: 'user_name', required: true, type: 'text', size: 50, rules: [] }, { label: 'Correo electrónico', model: 'email', required: true, type: 'text', size: 50, rules: [v => /.+@.+\..+/.test(v) || 'Ingrese un correo electrónico válido'] }, { label: 'Contraseña', model: 'password', required: true, type: 'password', size: 20, rules: [] }, { label: 'Confirma contraseña', model: 'confirm_password', required: true, type: 'password', size: 20, rules: [v => v === this.user.password || 'La contraseña no coincide'] }],
      formFieldUser: [{ label: 'Nombre', model: 'name', required: true, type: 'text', size: 50, rules: [v => /[a-zA-Z]+/.test(v) || 'Ingrese un nombre válido'] }, { label: 'Apellido', model: 'surname', required: true, type: 'text', size: 50, rules: [v => /[a-zA-Z]+/.test(v) || 'Ingrese un apellido válido'] }, { label: 'Rut', model: 'rut', required: true, type: 'text', size: 15, rules: [v => (/^([0-9]{7}|[0-9]{8})+[-|‐]{1}[0-9kK]{1}$/.test(v) && this.rutVerDigit) || 'Ingrese un rut válido'] }, { label: 'Correo electrónico', model: 'email', required: true, type: 'text', size: 50, rules: [v => /.+@.+\..+/.test(v) || 'Ingrese un correo electrónico válido'] }, { label: 'Teléfono móvil', model: 'cell_phone', required: true, type: 'text', size: 20, rules: [v => /[0-9]{9}/.test(v) || 'Ingrese un número válido'], prefix: '+56' }, { label: 'Teléfono fijo', model: 'phone', required: false, type: 'text', size: 20, rules: [v => /[0-9]{9}|[0-9]{0}/.test(v) || 'Ingrese un número válido'], prefix: '+56' }],
      formFieldAddress: [{ label: 'Calle', model: 'street', required: true, type: 'text', size: 50, rules: [] }, { label: 'Número', model: 'number', required: true, type: 'text', size: 50, rules: [] }, { label: 'Block', model: 'block', required: false, type: 'text', size: 50, rules: [] }, { label: 'Dpto', model: 'apt', required: false, type: 'text', size: 50, rules: [] }, { label: 'Referencia', model: 'ref', required: false, type: 'text', size: 100, rules: [] }],
      user: {
        user_name: '',
        password: '',
        name: '',
        surname: '',
        rut: '',
        email: '',
        cell_phone: '',
        phone: '',
        address: {
          region: '',
          commune: '',
          street: '',
          number: '',
          block: '',
          apt: '',
          ref: ''
        },
        shipping_address: {
          region: '',
          commune: '',
          street: '',
          number: '',
          block: '',
          apt: '',
          ref: ''
        }
      }
    }
  },
  computed: {
    rutVerDigit () {
      const seq = [2, 3, 4, 5, 6, 7, 2, 3, 4]
      const rut = this.user.rut.split('-')
      const digits = rut[0].split('').reverse()
      const lastDigit = rut[1]
      const sum = digits.map(
        (d, i) => {
          return parseInt(d) * seq[i]
        }
      ).reduce((a, b) => a + b)
      let result = 11 - (sum - (Math.floor(sum / 11)) * 11)
      if (result === 11) {
        result = '0'
      } else if (result === 10) {
        result = 'k'
      } else {
        result = result.toString()
      }
      return lastDigit === result
    }
  },
  methods: {
    async goToUserForm () {
      await this.$refs.profileForm.validate()
      if (this.profileValid) {
        this.$store.dispatch('register', this.user)
          .then(() => {
            this.$vuetify.goTo(this.$refs.profileCreate)
            this.panel = 1
          })
      }
    },
    async goToAddressForm () {
      const store = this.$store
      await this.$refs.userForm.validate()
      if (this.userValid) {
        store.commit('toggleDrawer')
        alert('commit')
        this.$store.dispatch('createUser', this.user)
          .then(() => {
            this.$vuetify.goTo(this.$refs.userForm)
            this.panel = 2
          })
      }
    },
    async goToShippingAddressForm () {
      await this.$refs.addressForm.validate()
      if (this.addressValid) {
        if (this.checkbox) {
          this.copyAddress()
        }
        this.$vuetify.goTo(this.$refs.addressForm)
        this.panel = 3
      }
    },
    async goToHomePage () {
      await this.$refs.shippingAddressForm.validate()
      if (this.shippingAddressValid) {
        this.$router.push({ name: 'Home' })
      }
    },
    copyAddress () {
      this.user.shipping_address = { ...this.user.address }
    }
  }
}
</script>

<style scoped>
.v-input--checkbox::v-deep .v-label {
  color: #464655;
}
.v-input--checkbox::v-deep .v-icon {
  color: #464655;
}
</style>
