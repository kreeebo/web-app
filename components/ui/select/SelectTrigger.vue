<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from "radix-vue";
import { cn } from "@/lib/utils";
import { selectVariants, type SelectVariants } from ".";

const props = defineProps<
	SelectTriggerProps & {
		class?: HTMLAttributes["class"];
		radius?: SelectVariants["radius"];
		size?: SelectVariants["size"];
	}
>();

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props;

	return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);

inject('variant')
</script>

<template>
	<SelectTrigger v-bind="forwardedProps"
		:class="cn(selectVariants({ variant, radius, size }), props.class)">
		<slot />
		<SelectIcon as-child>
			<img src="/images/common/8bit-chevron.svg" class="w-6 h-6" />
		</SelectIcon>
	</SelectTrigger>
</template>
