<template>
	<div class="flex flex-col text-center gap-5 max-w-96 w-full">
		<h1 class="text-5xl">Admin portal</h1>
		<h6 class="text-base">Sign into your admin account</h6>

		<form @submit="onSubmit" class="flex flex-col gap-5">
			<FormField v-slot="{ componentField }" name="email">
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
			<Button
				type="submit"
				class="mx-auto"
				:loading="submitting.value"
				:disabled="submitting.value"
			>
				Submit
			</Button>
		</form>

		<NuxtLink to="/auth/sign-up">Don’t have an account? Sign up</NuxtLink>
	</div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth", pageTransition: { name: "page" } });

import { Form, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const { login } = authStore();

const formSchema = toTypedSchema(
	z.object({
		email: z.string().email(),
	})
);

const { handleSubmit, isSubmitting } = useForm({
	validationSchema: formSchema,
	validateOnMount: false,
});

const submitting = computed(() => isSubmitting);

const onSubmit = handleSubmit(async (values) => {
	await login(values);
	// navigateTo(`/auth/${values.email}/verify`);
});
</script>