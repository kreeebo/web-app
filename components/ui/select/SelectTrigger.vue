<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from 'radix-vue';
import { cn } from '@/lib/utils';
import { SelectTriggerVariants, selectTriggerVariants } from '.';
import { ChevronDown } from 'lucide-vue-next';

const props = defineProps<
  SelectTriggerProps & {
    class?: HTMLAttributes['class'];
    variant?: SelectTriggerVariants['variant'];
    size?: SelectTriggerVariants['size'];
    prefix?: string;
  }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectTrigger v-bind="forwardedProps" :class="cn(selectTriggerVariants({ variant, size }), props.class)">
    <span class="pr-1" v-if="prefix">{{ prefix }}</span
    ><slot />
    <SelectIcon as-child>
      <!-- <v-img class="w-6 h-6 opacity-50 mx-2" src="/images/icons/chevron.svg" /> -->
      <ChevronDown class="w-6 h-6 mx-2 opacity-50" />
    </SelectIcon>
  </SelectTrigger>
</template>
