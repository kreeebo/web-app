import { FetchError } from "ofetch";
import { Err, Ok, type Result } from "@thames/monads";

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
): Promise<Result<Response<T>, string>> {
	const config = useRuntimeConfig();
	const { accessToken } = authStore();

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
	});

	return instance(uri)
		.then((response) => {
			return Ok(response);
		})
		.catch((error: FetchError<Response<null>>) => {
			return Err(error.message);
		});
}
