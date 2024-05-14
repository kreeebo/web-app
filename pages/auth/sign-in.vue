<template>
  <div class="flex flex-col text-center gap-5 max-w-96 w-full">
    <h1 class="text-5xl">{{ $t("auth.signIn.title") }}</h1>
    <h6 class="text-base">{{ $t("auth.signIn.subtitle") }}</h6>

    <form @submit="onSubmit" class="flex flex-col gap-5">
      <FormField v-slot="{ componentField }" name="email">
        <FormItem class="relative text-left">
          <FormControl>
            <Input
              type="text"
              v-bind="componentField"
              :placeholder="$t('auth.signIn.form.input.email.placeholder')"
              :label="$t('auth.signIn.form.input.email.label')"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button
        type="submit"
        class="mx-auto"
        :loading="submitting.value"
        :disabled="submitting.value"
      >
        {{ $t("auth.signIn.form.submit") }}
      </Button>
    </form>

    <NuxtLink to="/auth/sign-up">{{ $t("auth.signIn.link.signup") }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: "sign-in",
  layout: "auth",
  pageTransition: { name: "page" },
  middleware: "redirect-if-authenticated",
});

import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const { login } = authStore();

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
  }),
);

const { handleSubmit, isSubmitting, setErrors } = useForm({
  validationSchema: formSchema,
  validateOnMount: false,
});

const submitting = computed(() => isSubmitting);

const onSubmit = handleSubmit(async (values) => {
  const result = await login(values);

  result.match<any>({
    ok: () => {
      navigateTo(`/auth/${values.email}/verify`);
    },
    err: (value) => {
      setErrors({ email: value });
    },
  });
});
</script>
