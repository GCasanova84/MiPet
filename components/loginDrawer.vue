<template>
  <v-container fluid>
    <v-row>
      <v-col cols="11" class="mx-auto px-0">
        <v-row>
          <v-btn icon class="ms-auto" @click="toggleDrawer">
            <v-icon>mdi-window-close</v-icon>
          </v-btn>
        </v-row>
        <h4 class="text-center mb-6 independence--text text-h4">
          INICIAR SESIÓN
        </h4>
        <outlined-card>
          <card-content-wrapper>
            <v-form ref="loginForm" v-model="loginValid" lazy-validation>
              <input-text
                v-for="(field, i) in formFieldLogin"
                :key="i"
                v-model="user[field.model]"
                :label="field.label"
                :model="field.model"
                :is-required="field.required"
                :type="field.type"
                :size="field.size"
                :rules="field.rules"
              />
              <primary-button :disabled="!loginValid" button-text="Iniciar sesión" class="mt-8" @clicked="login" />
              <v-row class="d-flex justify-space-between align-center mt-8 px-6">
                <v-checkbox
                  v-model="checkbox"
                  dense
                  hide-details
                  color="secondary"
                  label="Recordarme"
                  class="pt-0 mt-0"
                />
                <NuxtLink :to="{ path: '/registro' }" class="independence--text" style="text-decoration: none;">
                  Restaurar contraseña
                </NuxtLink>
              </v-row>
            </v-form>
          </card-content-wrapper>
        </outlined-card>
        <outlined-card class="mt-6">
          <card-content-wrapper>
            <v-row class="justify-center overline independence--text mb-3">
              ¿Aún no te registras?
            </v-row>
            <primary-button button-text="Registrarme" class="mt-8" @clicked="register" />
          </card-content-wrapper>
        </outlined-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import outlinedCard from './outlinedCard.vue'
export default {
  name: 'LoginDrawer',
  components: { outlinedCard },
  data () {
    return {
      checkbox: false,
      loginValid: true,
      formFieldLogin: [{ label: 'Correo electrónico', model: 'email', required: true, type: 'text', size: 50, rules: [v => /.+@.+\..+/.test(v) || 'Ingrese un correo electrónico válido'] }, { label: 'Contraseña', model: 'password', required: true, type: 'password', size: 20, rules: [] }],
      user: {
        password: '',
        email: ''
      }
    }
  },
  created () {
    this.loginValid = true
  },
  methods: {
    ...mapMutations({ toggleDrawer: 'toggleDrawer' }),
    async login () {
      await this.$refs.loginForm.validate()
      if (this.loginValid) {
        this.$store.dispatch('toggleDrawer')
        this.$store.dispatch('login', this.user)
      }
    },
    register () {
      this.$router.push({ path: '/registro' })
      this.$store.dispatch('toggleDrawer')
    }
  }
}
</script>

<style scoped>
.v-input--checkbox::v-deep .v-label {
  color: #464655;
  font-size: 14px;
}
.v-input--checkbox::v-deep .v-icon {
  color: #464655;
}
</style>
