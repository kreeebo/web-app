<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
	<thead :class="cn('[&_tr]:border-none dark:text-white rounded-tl-2xl', props.class)">
		<slot />
	</thead>
</template>
