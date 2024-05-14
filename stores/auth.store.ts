import { creat } from "@vueuse/core";

interface AuthStore {
	accessToken?: string | null;
	refreshToken?: string | null;
}

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
	hasOrganisation: boolean;
	hasSubscription: boolean;
}

export default defineStore("auth", {
	state: (): AuthStore => ({
		accessToken: undefined,
		refreshToken: undefined,
	}),
	actions: {
		async login(body: LoginRequest) {
			return await useApi<null>("/v3/onboarding/auth/signin", {
				method: "post",
				body,
			});
		},

		async logout() {},

		async verifyOtp(body: VerifyOtpRequest) {
			const response = await useApi<VerifyOtpResponse>("/v1/authentication/otp/validate", {
				method: "post",
				body,
			});

			response.match<VerifyOtpResponse | string>({
				ok: ({ data }) => {
					this.accessToken = data.token;
					this.refreshToken = data.refreshToken;
					return data;
				},
				err: (error) => error,
			});

			return response;
		},

		isLoggedIn() {
			const at = useCookie(ACCESS_TOKEN_KEY).value;
			if (!at) {
				return false;
			}

			return true;
		},
	},

	hydrate(state) {
		const at = useCookie(ACCESS_TOKEN_KEY);
		const rt = useCookie(REFRESH_TOKEN_KEY);
		state.accessToken = at.value;
		state.refreshToken = rt.value;
	},
});
