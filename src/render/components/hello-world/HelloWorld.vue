<template>
  <div>HELLO I AM A TEST?</div>
  {{ data }}ss
  <ws-card></ws-card>
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
