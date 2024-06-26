<template>
  <div class="flex flex-col text-center gap-5 max-w-96 w-full">
    <h1 class="text-5xl">Please verify your email</h1>
    <h6 class="text-base">
      Please enter the OTP sent to your email in the field below
    </h6>

    <form @submit="onSubmit" class="flex flex-col gap-5">
      <FormField v-slot="{ componentField }" name="otpCode">
        <FormItem class="relative text-left">
          <FormControl>
            <Input
              type="text"
              v-bind="componentField"
              label="OTP"
              placeholder="Enter One-time Pin"
              class="invalid:outline invalid:border border-y-imperial-red"
            />
          </FormControl>
        </FormItem>
      </FormField>
      <Button
        type="submit"
        class="mx-auto"
        :loading="submitting.value"
        :disabled="submitting.value"
        >Continue</Button
      >
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth", middleware: "redirect-if-authenticated" });
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const accessToken = useCookie<string>("at");
const refreshToken = useCookie<string>("rt");
const { verifyOtp } = authStore();
const email = useRoute().params.email as string;

const formSchema = toTypedSchema(
  z.object({
    otpCode: z.string().min(6),
  })
);

const { handleSubmit, isSubmitting, setErrors } = useForm({
  validationSchema: formSchema,
  validateOnMount: false,
});

const onSubmit = handleSubmit(async (values) => {
  if (!email) return;

  var result = await verifyOtp({ ...values, email });
  result.match<any>({
    ok: ({ data }) => {
      accessToken.value = data.token;
      refreshToken.value = data.refreshToken;

      navigateTo("/");
    },
    err: (value) => {
      setErrors({ otpCode: value });
    },
  });
});

const submitting = computed(() => isSubmitting);
</script>
