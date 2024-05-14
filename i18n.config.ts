export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      auth: {
        signIn: {
          title: "Admin portal",
          subtitle: "Sign into your admin account",
          form: {
            input: {
              email: {
                label: "Email",
                placeholder: "Enter email address",
              },
            },
            submit: "Submit",
          },
          link: {
            signup: "Don’t have an account? Sign up",
          },
        },
        verify: {
          title: "",
          submitButton: "",
        },
      },
    },
  },
}));
