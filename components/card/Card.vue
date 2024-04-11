<template>
	<div class="flex flex-col dark:bg-jet-black p-8 rounded-3xl gap-5">
		<h3 class="text-3xl dark:text-white">{{ title }}</h3>
		<div>
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	title: string;
}
defineProps<Props>();
</script>
