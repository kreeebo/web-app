<script setup lang="ts">
import type { HTMLAttributes, HtmlHTMLAttributes, InputHTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";

const props = defineProps<{
	defaultValue?: string | number;
	modelValue?: string | number;
	class?: HTMLAttributes["class"];
	label: string;
	placeholder?: InputHTMLAttributes["placeholder"];
	type?: InputHTMLAttributes["type"];
}>();

const emits = defineEmits<{
	(e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
	passive: true,
	defaultValue: props.defaultValue,
});
</script>

<template>
	<div class="relative dark:bg-jet-black rounded-lg">
		<input
			:placeholder="placeholder"
			:type="type"
			v-model="modelValue"
			:class="
				cn(
					`block h-16 font-normal px-3 pb-2.5 pt-6 w-full text-gray-900 bg-transparent appearance-none dark:text-white focus:outline-none focus:ring-0 peer`,
					props.class
				)
			"
		/>
		<label
			class="absolute font-bold text-gray-500 dark:text-white duration-300 origin-[0] px-4 top-2 scale-75"
			>{{ label }}
		</label>
	</div>
</template>
