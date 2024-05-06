import type { NitroFetchOptions, NitroFetchRequest } from "nitropack";
interface ResponseMeta {
	success: boolean;
	code: number;
	message: string;
	errorCode: number;
}

interface Response<T> {
	meta: ResponseMeta;
	data: T;
}

export default async function useApi<T>(
	uri: string,
	options: Parameters<typeof $fetch<T>>[1],
	secured?: boolean
) {
	const config = useRuntimeConfig();
	const { accessToken } = authStore();

	try {
		const instance = $fetch.create<Response<T>>({
			...options,
			baseURL: config.public.apiBaseUrl,
			onRequest: (ctx) => {
				if (secured) {
					ctx.options.headers = {
						Authoritzation: `Bearer ${accessToken}`,
					};
				}
			},
			onResponse: (ctx) => {},
			onResponseError: (ctx) => {},
			onRequestError(ctx) {},
		});
		const { data } = await instance(uri);
		return data;
	} catch (e) {
		console.error(e);
	}
}
