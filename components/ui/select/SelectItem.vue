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
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectItemIndicator>
        <!-- <Check class="h-4 w-4" /> -->
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
