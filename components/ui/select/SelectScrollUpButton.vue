<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { SelectScrollUpButton, type SelectScrollUpButtonProps, useForwardProps } from 'radix-vue';
import { ChevronUp } from 'lucide-vue-next';
import { cn } from '@/lib/utils';

const props = defineProps<SelectScrollUpButtonProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectScrollUpButton v-bind="forwardedProps" :class="cn('tw-flex tw-cursor-default tw-items-center tw-justify-center tw-py-1', props.class)">
    <slot>
      <ChevronUp class="tw-h-4 tw-w-4" />
    </slot>
  </SelectScrollUpButton>
</template>
