<template>
	<div class="flex flex-col text-center gap-5 max-w-96 w-full">
		<h1 class="text-5xl">Create a password</h1>

		<form @submit="onSubmit" class="flex flex-col gap-5">
			<FormField v-slot="{ componentField }" name="password">
				<FormItem class="relative text-left">
					<FormControl>
						<Input
							type="password"
							v-bind="componentField"
							label="Password"
							placeholder="Enter password"
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			</FormField>
			<FormField v-slot="{ componentField }" name="confirmPassword">
				<FormItem class="relative text-left">
					<FormControl>
						<Input
							type="password"
							v-bind="componentField"
							label="Confirm password"
							placeholder="Re-type password"
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			</FormField>
			<Button type="submit" class="mx-auto">Continue</Button>
		</form>
	</div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth" });

import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const formSchema = toTypedSchema(
	z
		.object({
			password: z.string().min(8).max(32),
			confirmPassword: z.string(),
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: "Password does not match",
			path: ["confirmPassword"],
		})
);

const form = useForm({
	validationSchema: formSchema,
	validateOnMount: false,
});

const onSubmit = form.handleSubmit((values) => {});
</script>
