// place files you want to import through the `$lib` alias in this folder.
export async function getProductData(id: string | undefined) {
	switch (id) {
		// replace with folder name
		case 'fata-pe-leagan':
			return {
				content: (
					await import(
						// replace with folder path
						'$lib/produse/fata-pe-leagan/data.json'
					)
				).default,
				images: import.meta.glob<string>(
					// replace with folder path
					'$lib/produse/fata-pe-leagan/poze/*.jpg',
					{
						query: '?w=500&format=webp',
						eager: true,
						import: 'default'
					}
				)
			};
		default:
			return null;
	}
}
