<template>
	<div class="flex dark:bg-eerie-black h-dvh w-full dark:text-white">
		<NavigationContainer image="/images/common/icon-dark-logo.svg">
			<NavigationItem
				v-for="item in navigationMenu"
				:key="item.label"
				:is-active="item.link === $route.path"
				:navigation-item="item"
			/>
		</NavigationContainer>

		<LazyNuxtLoadingIndicator color="#d9ff44" />
		<main class="w-full p-8">
			<slot />
		</main>
	</div>
</template>

<script setup lang="ts">
const navigationMenu = [
	{
		label: "Dashboard",
		icons: {
			active: "/images/navigation/home-icon.active.svg",
			inactive: "/images/navigation/home-icon.inactive.svg",
		},
		link: "/",
	},
	{
		label: "Insights",
		icons: {
			active: "/images/navigation/insights-icon.active.svg",
			inactive: "/images/navigation/insights-icon.inactive.svg",
		},
		link: "/insights",
	},
	{
		label: "Leaderboard",
		icons: {
			active: "/images/navigation/leaderboard-icon.active.svg",
			inactive: "/images/navigation/leaderboard-icon.inactive.svg",
		},
		link: "/leaderboard",
	},
	{
		label: "Manage",
		icons: {
			active: "/images/navigation/settings-icon.active.svg",
			inactive: "/images/navigation/settings-icon.inactive.svg",
		},
		link: "/manage",
	},
];
</script>
