<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { SelectLabel, type SelectLabelProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<SelectLabelProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
	<SelectLabel
		:class="
			cn(
				'absolute py-1.5 pl-8 pr-2 font-bold dark:text-white duration-300 transform -translate-y-0.5 top-2 origin-[0] dark:bg- bg-none px-3  start-1',
				props.class
			)
		"
	>
		<slot />
	</SelectLabel>
</template>
