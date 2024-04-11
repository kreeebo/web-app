// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	app: {
		pageTransition: { name: "page", mode: "out-in", duration: { enter: 200, leave: 200 } },
	},
	runtimeConfig: {
		public: {
			apiBaseUrl: process.env.NUXT_API_BASE_URL,
		},
	},
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
		"dayjs-nuxt",
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
