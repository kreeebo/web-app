<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Primitive, type PrimitiveProps } from "radix-vue";
import { type ButtonVariants, buttonVariants } from ".";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-vue-next";

interface Props extends PrimitiveProps {
	variant?: ButtonVariants["variant"];
	size?: ButtonVariants["size"];
	as?: string;
	class?: HTMLAttributes["class"];
	disabled?: HTMLButtonElement["disabled"];
	loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	as: "button",
	loading: false,
});
</script>

<template>
	<Primitive
		:as="as"
		:as-child="asChild"
		:class="cn(buttonVariants({ variant, size }), props.class)"
    :disabled="disabled"
    :loading="loading"
	>
		<slot v-if="!loading" />
		<Loader2 v-else class="animate-spin" />
	</Primitive>
</template>
