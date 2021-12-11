<template>
  <v-form>
    <v-col>
      <v-row>
        <v-col>
          <span
            class="caption ps-3 independence--text required"
          >
            Nombre de usuario
          </span>
          <v-text-field
            v-model="user.user_name"
            :counter="50"
            required
            rules="nameRules"
            dense
            outlined
            class="rounded-pill"
            color="secondary"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span
            class="caption ps-3 independence--text required"
          >
            Correo electrónico
          </span>
          <v-text-field
            v-model="user.user_name"
            :counter="50"
            required
            rules="emailRules"
            dense
            outlined
            class="rounded-pill"
            color="secondary"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-form>
</template>

<script>
export default {}
</script>

<style></style>
