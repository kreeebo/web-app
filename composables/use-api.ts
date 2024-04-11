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

export default async function useApi<T>(
	request: Parameters<typeof $fetch<T>>[0],
	options: Parameters<typeof $fetch<Response<T>>>[1]
) {
	const config = useRuntimeConfig();
	return $fetch<Response<T>>(request, { ...options, baseURL: config.public.apiBaseUrl }).then(
		(response) => response.data
	);
}
