<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-col>
      <v-row v-for="(field, i) in createProfileFormFields" :key="i">
        <v-col class="py-0">
          <span
            class="caption ps-3 independence--text"
            :class="{ requiredField: field.required }"
          >
            {{ field.label }}
          </span>
          <v-text-field
            ref="inputText"
            :append-icon="
              field.type === 'password' ? (show ? 'mdi-eye' : 'mdi-eye-off') : null
            "
            :v-model="user[field.model]"
            :counter="field.size"
            :type="field.type === 'password' ? (show ? 'text' : 'password') : 'text'"
            required
            :rules="field.rules"
            dense
            outlined
            class="rounded-pill"
            color="secondary"
            @click:append="show = !show"
          />
        </v-col>
      </v-row>
      <primary-button :disabled="!valid" button-text="Crear perfil" class="mt-8" @clicked="goToUserForm" />
    </v-col>
  </v-form>
</template>

<script>
export default {
  name: 'CreateProfileForm',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      show: false,
      valid: true,
      createProfileFormFields: [{ label: 'Nombre de usuario', model: 'user_name', required: true, type: 'text', size: 50, rules: [v => !!v || 'Este campo es requerido', v => (v && v.length <= 50) || 'Name must be less than 10 characters'] }, { label: 'Correo electrónico', model: 'email', required: true, type: 'text', size: 50, rules: [v => !!v || 'Name is caca', v => (v && v.length <= 10) || 'Name must be less than 10 characters'] }, { label: 'Contraseña', model: 'password', required: true, type: 'password', size: 20, rules: [v => !!v || 'Name is required', v => (v && v.length <= 10) || 'Name must be less than 10 characters'] }, { label: 'Confirma contraseña', model: 'confirm_password', required: true, type: 'password', size: 20, rules: [v => !!v || 'Name is required', v => (v && v.length <= 10) || 'Name must be less than 10 characters'] }]
    }
  },
  methods: {
    async goToUserForm () {
      await this.$refs.form.validate()
      if (this.valid) {
        alert(this.valid)
      }
    }
  }
}
</script>

<style></style>
