<template>
  <v-btn
    rounded
    color="secondary"
    block
    depressed
    :disabled="disabled"
    height="40"
    @click="$emit('clicked')"
  >
    {{ buttonText }}
  </v-btn>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    buttonText: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style>

</style>
