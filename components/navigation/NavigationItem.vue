<template>
	<NuxtLink
		class="group flex flex-col h-[95px] w-[95px] items-center justify-center gap-2 transition-colors duration-100 hover:bg-jet-black rounded-2xl"
		:class="{
			'bg-jet-black': isActive,
		}"
		:aria-active="isActive"
		:to="navigationItem.link"
	>
		<img
			class="max-w-6"
			:src="isActive ? navigationItem.icons.active : navigationItem.icons.inactive"
			:alt="`icon for ${navigationItem.label}`"
		/>
		<h6 class="text-sm dark:text-[#8F8F9A] dark:group-aria-[active=true]:text-white">
			{{ navigationItem.label }}
		</h6>
	</NuxtLink>
</template>

<script setup lang="ts">
interface NavigationIcons {
	active: string;
	inactive: string;
}

interface NavigationItem {
	label: string;
	icons: NavigationIcons;
	link: string;
}

interface Props {
	isActive: boolean;
	navigationItem: NavigationItem;
}

const props = defineProps<Props>();

const isActive = computed<boolean>(() => props.isActive);
</script>
