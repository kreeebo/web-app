<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<
	SelectTriggerProps & {
		class?: HTMLAttributes["class"];
	}
>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
	<SelectTrigger v-bind="forwardedProps" :class="cn('w-full')">
		<div
			:class="
				cn(
					'flex h-16 w-full items-center justify-between rounded-lg px-3 pt-3 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:bg-jet-black  placeholder:text-[#9ca3af]',
					props.class
				)
			"
		>
			<slot />
			<SelectIcon as-child>
				<img src="/images/common/8bit-chevron.svg" class="w-6 h-6" />
			</SelectIcon>
		</div>
	</SelectTrigger>
</template>
