<template>
  <ws-deck-builder></ws-deck-builder>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    return { data: ref(0) };
  },
});
</script>

<style lang="scss" scoped>
h1 {
  color: #00c13c;
}
</style>
