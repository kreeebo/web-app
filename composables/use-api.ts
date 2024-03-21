import type { UseFetchOptions } from "nuxt/app";

interface ResponseMeta {
	success: boolean;
	code: number;
	message: string;
	errorCode: number;
}

type Response<T> = {
	meta: ResponseMeta;
	data: T;
};

export default async function useApi<T>(uri: string, options: UseFetchOptions<Response<T>>) {
	const config = useRuntimeConfig();

	return useFetch(uri, {
		...options,
		baseURL: config.public.apiBaseUrl,
	}).then((res) => res.data);
}
