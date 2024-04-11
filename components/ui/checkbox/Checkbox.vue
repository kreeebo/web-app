<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import type { CheckboxRootEmits, CheckboxRootProps } from "radix-vue";
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from "radix-vue";
import { Check } from "lucide-vue-next";
import { cn } from "@/lib/utils";

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes["class"] }>();
const emits = defineEmits<CheckboxRootEmits>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
	<CheckboxRoot
		v-bind="forwarded"
		:class="
			cn(
				'peer h-6 w-6 shrink-0 border-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white dark:data-[state=checked]:bg-chartreuse dark:data-[state=checked]:border-chartreuse dark:data-[state=checked]:text-white rounded-md px-[4px]',
				props.class
			)
		"
	>
		<CheckboxIndicator class="flex h-full w-full items-center justify-center text-current">
			<slot>
				<img class="h-5" src="/images/common/checkbox-check.svg" />
			</slot>
		</CheckboxIndicator>
	</CheckboxRoot>
</template>
