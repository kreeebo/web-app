<template>
	<div class="flex flex-col text-center gap-5 max-w-96 w-full">
		<h1 class="text-5xl">Create an account</h1>

		<form @submit="onSubmit" class="flex flex-col gap-5">
			<FormField v-slot="{ componentField }" name="username">
				<FormItem class="relative text-left">
					<FormControl>
						<Input
							type="text"
							v-bind="componentField"
							placeholder="Enter email address"
							label="Email"
						/>
					</FormControl>
				</FormItem>
			</FormField>
			<FormField v-slot="{ componentField }" name="name">
				<FormItem class="relative text-left">
					<FormControl>
						<Input
							type="text"
							v-bind="componentField"
							placeholder="Enter first name"
							label="Name"
						/>
					</FormControl>
				</FormItem>
			</FormField>
			<FormField v-slot="{ componentField }" name="lastName">
				<FormItem class="relative text-left">
					<FormControl>
						<Input
							type="text"
							v-bind="componentField"
							placeholder="Enter surname"
							label="Surname"
						/>
					</FormControl>
				</FormItem>
			</FormField>
			<FormField v-slot="{ componentField }" name="country">
				<FormItem class="relative text-left">
					<FormControl>
						<Input
							type="text"
							v-bind="componentField"
							placeholder="Enter surname"
							label="Country"
						/>
					</FormControl>
				</FormItem>
			</FormField>
			<Button type="submit" class="mx-auto">Submit</Button>
		</form>

		<NuxtLink href="/auth/sign-up">Don’t have an account? Sign up</NuxtLink>
	</div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth" });

import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const formSchema = toTypedSchema(
	z.object({
		email: z.string().email(),
		name: z.string().min(2),
		lastName: z.string().min(2),
		country: z.string(),
	})
);

const form = useForm({
	validationSchema: formSchema,
	validateOnMount: false,
});

const onSubmit = form.handleSubmit((values) => {});
</script>
