<template>
  <div>
    <button class ='BaseBtn' :class="this.$style.btn">Base Button</button>
    <button @click="getDynComp">Get the dynamic component</button>
    <component v-if="isComponent" :is="isComponent"></component>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isComponent: null
    }
  },
  methods: {
    async getDynComp () {
      const form = await import(/* webpackChunkName: "myForm" */ './BaseForm.vue')

      //  the component itself is the "default" property of imported module

      this.isComponent = form.default
    }
  }
}

</script>

<style lang="scss" module>
  .btn {
    color: green;
  }
</style>
