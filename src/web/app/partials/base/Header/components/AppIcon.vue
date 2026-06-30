<script setup lang="ts">

interface Props {
  name: string;
}

defineProps<Props>();
</script>

<template>
  <img :src="`/icons/${name}.svg`" :alt="name">
</template>
