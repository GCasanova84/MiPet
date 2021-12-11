<template>
  <v-row>
    <v-col class="py-0">
      <span class="caption ps-3 independence--text" :class="{ requiredField : isRequired }">{{ label }}</span>
      <v-text-field
        v-model="data"
        :append-icon="type === 'password'? show ? 'mdi-eye' : 'mdi-eye-off' : null"
        :counter="size"
        :type="type === 'password'? show ? 'text' : 'password' : 'text'"
        :required="isRequired"
        :rules="[...basicRules, ...rules]"
        :prefix="prefix"
        dense
        outlined
        class="rounded-pill"
        color="secondary"
        @click:append="show = !show"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      default: '',
      required: true
    },
    model: {
      type: String,
      required: true
    },
    isRequired: {
      type: Boolean,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    rules: {
      type: Array,
      default: () => [],
      required: false
    },
    prefix: {
      type: String,
      default: null,
      required: false
    }
  },
  data () {
    return {
      show: false,
      data: this.value,
      basicRules: [v => (!this.isRequired || !!v) || 'Este campo es requerido', v => ((!this.isRequired || v) && v.length <= this.size) || `Este campo debe contener menos de ${this.size} caracteres`]
    }
  },
  watch: {
    data () {
      this.$emit('input', this.data)
    }
  }
}
</script>

<style scoped>
  .requiredField::after {
    content: '*';
    color: rgba(119, 181, 76, 1);
  }
</style>
