export default defineNuxtRouteMiddleware((to, from) => {
	const auth = authStore();

	if (!auth.isLoggedIn()) {
		return navigateTo(to.path || "/");
	}
});
