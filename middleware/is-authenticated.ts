export default defineNuxtRouteMiddleware((to, from) => {
  const auth = authStore();
  const hasCredentials = auth.isLoggedIn();

  if (!hasCredentials) return navigateTo({ name: "sign-in" });
});
