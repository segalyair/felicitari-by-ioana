import { getProducts } from '$lib/produse/allProducts';
import { getProductDataById } from '$lib/produse/byProductId';

export const load = async ({ params }) => {
	const data = await getProducts();
	return { products: data };
};
