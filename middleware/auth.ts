export default defineNuxtRouteMiddleware(async (to, from) => {
	const auth = authStore();

	if (!auth.accessToken) {
		return navigateTo("auth/sign-in");
	}
});
