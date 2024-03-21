// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	runtimeConfig: {
		public: {
			apiBaseUrl: process.env.NUXT_API_BASE_URL,
		},
	},
	$production: {},
	$development: {},
	$test: {},
	vite: {
		vue: {
			customElement: true,
		},
		vueJsx: { mergeProps: true },
	},
	modules: [
		"@nuxtjs/tailwindcss",
		"shadcn-nuxt",
		"@nuxtjs/color-mode",
		"@nuxtjs/google-fonts",
		"@pinia/nuxt",
	],
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: "",
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: "./components/ui",
	},
	colorMode: {
		classSuffix: "",
	},
	tailwindcss: {
		cssPath: "~/assets/css/main.css",
	},
	googleFonts: { families: { Onest: { wght: "100..900" } } },
});
