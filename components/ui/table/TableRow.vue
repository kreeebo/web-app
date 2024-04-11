<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
	<tr
		:class="
			cn(
				'first:rounded-2xl last:rounded-2xl transition-colors dark:hover:bg-eerie-black rounded-l-xl',
				props.class
			)
		"
	>
		<slot />
	</tr>
</template>
