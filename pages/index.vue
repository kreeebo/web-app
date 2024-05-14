<template>
	<h1>Dashboard</h1>
</template>

<script lang="ts" setup>
definePageMeta({
	name: "home",
	middleware: "is-authenticated",
});
</script>
