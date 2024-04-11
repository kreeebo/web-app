<script setup lang="ts">
import type { HTMLAttributes, HtmlHTMLAttributes, InputHTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";
import { inputVariants, type InputVariants } from ".";

const props = defineProps<{
	defaultValue?: string | number;
	modelValue?: string | number;
	class?: HTMLAttributes["class"];
	label?: string;
	placeholder?: InputHTMLAttributes["placeholder"];
	type?: InputHTMLAttributes["type"];
	variant?: InputVariants["variant"];
	size?: InputVariants["size"];
	rounded?: InputVariants["rounded"];
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
	<div class="relative">
		<input :placeholder="placeholder" :type="type" v-model="modelValue"
			:class="cn(inputVariants({ variant, size, rounded }), props.class)" />
		<label v-if="label"
			class="absolute font-bold text-gray-500 dark:text-white duration-300 origin-[0] px-4 top-2 scale-75">{{
			label }}
		</label>
	</div>
</template>
