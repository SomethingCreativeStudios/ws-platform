<template>
  <hello-world></hello-world>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { HelloWorld } from '~/components';

export default defineComponent({
  name: 'home',
  components: { HelloWorld },
  setup() {},
});
</script>
