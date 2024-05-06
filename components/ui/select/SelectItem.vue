<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { SelectItem, SelectItemIndicator, type SelectItemProps, SelectItemText, useForwardProps } from 'radix-vue';
import { cn } from '@/lib/utils';
import { SelectItemVariants, selectItemVariants } from '.';

const props = defineProps<
  SelectItemProps & {
    class?: HTMLAttributes['class'];
    variant?: SelectItemVariants['variant'];
  }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectItem v-bind="forwardedProps" :class="cn(selectItemVariants({ variant }), props.class)">
    <span class="tw-absolute tw-left-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center">
      <SelectItemIndicator>
        <!-- <Check class="tw-h-4 tw-w-4" /> -->
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
