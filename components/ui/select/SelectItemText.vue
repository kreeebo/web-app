<script setup lang="ts">
import { SelectItemText, type SelectItemTextProps } from 'radix-vue';

const props = defineProps<SelectItemTextProps>();
</script>

<template>
  <SelectItemText v-bind="props" class="tw-text-base data-[disabled]:tw-text-opacity-50">
    <slot />
  </SelectItemText>
</template>
