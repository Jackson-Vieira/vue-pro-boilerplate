<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="d-flex">
    <div class="bg-gradient-to-r from-cyan-500 to-blue-500">
      <HelloWorld />
    </div>
    <div class="">
      {{ dateFnsFormatter(state.date, 'yyyy-MM-dd HH:mm:ss') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';
import { reactive } from 'vue';
import { dateFnsFormatter } from '@/utils/date-formatter';

const state = reactive({
  count: 0,
  date: new Date(),
});


</script>

<style lang="scss" scoped>
</style>