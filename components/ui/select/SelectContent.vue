<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue';
import { SelectContent, type SelectContentEmits, type SelectContentProps, SelectPortal, SelectViewport, useForwardPropsEmits } from 'radix-vue';
import { SelectContentVariants, SelectScrollDownButton, SelectScrollUpButton } from '.';
import { cn } from '@/lib/utils';
import { selectContentVariants } from '.';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<
    SelectContentProps & {
      class?: HTMLAttributes['class'];
      variant?: SelectContentVariants['variant'];
    }
  >(),
  {
    position: 'popper',
  }
);
const emits = defineEmits<SelectContentEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <SelectPortal>
    <SelectContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          selectContentVariants({ variant }),
          position === 'popper' &&
            `data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1`,
          props.class
        )
      "
    >
      <SelectScrollUpButton />
      <SelectViewport
        :class="cn('p-1', position === 'popper' && 'h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]')"
      >
        <slot />
      </SelectViewport>
      <SelectScrollDownButton />
    </SelectContent>
  </SelectPortal>
</template>
