<script setup lang="ts">
import { SelectItemText, type SelectItemTextProps } from 'radix-vue';

const props = defineProps<SelectItemTextProps>();
</script>

<template>
  <SelectItemText v-bind="props" class="text-base data-[disabled]:text-opacity-50">
    <slot />
  </SelectItemText>
</template>
