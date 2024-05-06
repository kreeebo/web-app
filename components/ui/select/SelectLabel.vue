<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { SelectLabel, type SelectLabelProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<SelectLabelProps & { class?: HTMLAttributes['class'] }>()
</script>

<template>
  <SelectLabel :class="cn('tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-font-semibold', props.class)">
    <slot />
  </SelectLabel>
</template>
