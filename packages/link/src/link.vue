<template>
  <div>
    <a :href="to">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'AnxxLink',
  props: {
    to: {
      type: String
    }
  }
}
</script>

<style>
</style>
