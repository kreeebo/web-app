<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { SelectSeparator, type SelectSeparatorProps } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps<SelectSeparatorProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <SelectSeparator v-bind="delegatedProps" :class="cn('-tw-mx-1 tw-my-1 tw-h-px tw-bg-slate-100 tw-dark:bg-slate-800', props.class)" />
</template>
