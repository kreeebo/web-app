<script setup lang="ts">
import type { SelectRootEmits, SelectRootProps } from "radix-vue";
import { SelectRoot, useForwardPropsEmits } from "radix-vue";
import type { SelectVariants } from ".";

const props = defineProps<
	SelectRootProps & {
		label: string;
		variant: SelectVariants["variant"];
		radius: SelectVariants["radius"];
	}
>();
const emits = defineEmits<SelectRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);

provide("variant", props.variant);
</script>

<template>
	<SelectRoot v-bind="forwarded">
		<slot />
	</SelectRoot>
</template>
