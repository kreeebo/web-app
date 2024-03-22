<template>
	<div
		class="flex flex-col w-[120px] h-full border-r dark:border-r-jet-black items-center p-3 gap-4"
	>
		<div class="flex h-[150px] items-center">
			<img :src="image" class="max-w-[60px]" />
		</div>

		<slot />
	</div>
</template>

<script setup lang="ts">
interface Props {
	image: string;
}

defineProps<Props>();
</script>
