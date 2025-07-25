import { getProductData } from '$lib';

export const load = async ({ params }) => {
	const data = await getProductData(params.id);
	return data;
};
