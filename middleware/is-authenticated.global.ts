export default defineNuxtRouteMiddleware((to, from) => {
	const auth = authStore();

	if (auth.isLoggedIn() || to.meta.layout === "auth") {
		return true;
	}

	return { name: "auth-sign-in" };
});
