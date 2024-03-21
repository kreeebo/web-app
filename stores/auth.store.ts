type AuthStore = {
	accessToken?: string | null;
	refreshToken?: string | null;
};

const ACCESS_TOKEN_KEY = "at";
const REFRESH_TOKEN_KEY = "rt";

interface LoginRequest {
	email: string;
	whitelabelId?: string;
}

interface VerifyOtpRequest {
	email: string;
	otpCode: string;
}

interface VerifyOtpResponse {
	userAccountId: string;
	userProfileId: string;
	token: string;
	expiresAt: Date;
	refreshToken: string;
	firstName: string;
	lastName: string;
}

export default defineStore("auth", {
	state: (): AuthStore => ({
		accessToken: undefined,
		refreshToken: undefined,
	}),
	actions: {
		async login(body: LoginRequest) {
			const response = await useApi("/v1/authentication/otp/login", {
				method: "post",
				body,
			});

			return response;
		},

		async logout() {},

		async verifyOtp(body: VerifyOtpRequest) {
			const response = await useApi<VerifyOtpResponse>("/v1/authentication/otp/validate", {
				method: "post",
				body,
			});

			// set tokens to application state
			this.accessToken = response.value?.data.token;
			this.refreshToken = response.value?.data.refreshToken;

			// Init cookies for tokens
			// and set values from response
			const at = useCookie(ACCESS_TOKEN_KEY);
			const rt = useCookie(REFRESH_TOKEN_KEY);

			at.value = this.accessToken;
			rt.value = this.refreshToken;

			return response;
		},
	},

	hydrate(state) {
		const at = useCookie(ACCESS_TOKEN_KEY);
		const rt = useCookie(REFRESH_TOKEN_KEY);
		state.accessToken = at.value;
		state.refreshToken = rt.value;
	},
});
